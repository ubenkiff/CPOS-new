'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, Shield, Sparkles, Globe, Wifi, WifiOff, FileText, 
  X, Database, BookOpen, Terminal, Search, Calendar, User, 
  SlidersHorizontal, ChevronRight, LayoutGrid 
} from "lucide-react";
import { FALLBACK_POSTS, WPPost, WordPressConnectionStatus, getCategoryBadgeStyles } from "../../lib/wordpress";

export default function BlogPage() {
  const [posts, setPosts] = useState<WPPost[]>(FALLBACK_POSTS);
  const [status, setStatus] = useState<WordPressConnectionStatus>({
    connected: false,
    apiUrl: "Unconfigured (Using Static Schema)",
    source: "fallback_static",
    postCount: FALLBACK_POSTS.length
  });
  const [loading, setLoading] = useState(true);
  
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest"); // newest | oldest | title
  
  // Article detail state
  const [selectedPost, setSelectedPost] = useState<WPPost | null>(null);
  const [showWpHub, setShowWpHub] = useState(false);

  // Fetch WordPress posts on mount
  useEffect(() => {
    async function getWordPressData() {
      try {
        const res = await fetch('/api/wordpress');
        if (res.ok) {
          const data = await res.json();
          if (data.posts) setPosts(data.posts);
          if (data.status) setStatus(data.status);
        }
      } catch (err) {
        console.error("Failed to fetch blog page articles:", err);
      } finally {
        setLoading(false);
      }
    }
    getWordPressData();
  }, []);

  // Collect dynamic categories from fetched posts
  const categoriesList = ["All", ...Array.from(new Set(posts.map(p => p.category)))];

  // Filter and sort posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = 
      selectedCategory === "All" || 
      post.category === selectedCategory;
      
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    if (sortBy === "oldest") {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans relative">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center shrink-0">
              <Shield className="text-white w-5 h-5" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">CPOS</span>
              <div className="hidden sm:flex flex-col border-l border-slate-200 pl-3.5 text-left select-none">
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 leading-none mb-0.5">
                  Construction Project Operating System
                </span>
                <span className="text-[9px] font-bold text-slate-400 lowercase tracking-wide leading-none">
                  by Uddi Benkiff
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10 text-[13px] font-black uppercase tracking-widest text-slate-500">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <Link href="/pricing" className="hover:text-orange-500 transition-colors">Pricing</Link>
            <Link href="/dashboard/demo" className="hover:text-orange-500 transition-colors">Services</Link>
            <Link href="/pitch" className="hover:text-orange-500 transition-colors">Support</Link>
            <Link href="/login" className="px-6 py-2.5 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all">Free Demo</Link>
          </nav>
        </div>
      </header>

      {/* Floating Wordpress diagnostic hub */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setShowWpHub(true)}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-white shadow-2xl hover:scale-105 active:scale-95 transition-all ${
            status.connected 
              ? "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20" 
              : "bg-indigo-900 hover:bg-indigo-800 shadow-indigo-550/20"
          }`}
        >
          {status.connected ? (
            <>
              <Wifi className="w-4 h-4 animate-pulse text-emerald-300" />
              <span>Headless WP: Live</span>
            </>
          ) : (
            <>
              <WifiOff className="w-4 h-4 text-indigo-300" />
              <span>Headless WP: Fallback Mode</span>
            </>
          )}
        </button>
      </div>

      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 mb-4">
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Official CPOS Publication</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight lowercase mb-6">
            latest <span className="uppercase">Insights</span>
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl leading-relaxed">
            Stay up to date with modern trends in AEC project operating systems, real-time QS workflows, automatic BOQ templates, cost control analytics, and expert supervisor report curation.
          </p>
        </div>
      </section>

      {/* Filters & Grid section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Controls Bar */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 mb-12 shadow-sm space-y-6">
            <div className="grid md:grid-cols-12 gap-6 items-center">
              {/* Search input */}
              <div className="md:col-span-6 relative">
                <span className="absolute inset-y-0 left-4 flex items-center text-slate-400 pointer-events-none">
                  <Search className="w-4.5 h-4.5" />
                </span>
                <input
                  type="text"
                  placeholder="Search articles & guides..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-medium"
                />
              </div>

              {/* Sort selector */}
              <div className="md:col-span-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-xs font-black uppercase tracking-wider text-slate-600 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all cursor-pointer"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="title">Alphabetical</option>
                </select>
              </div>

              {/* Settings button shortcut */}
              <div className="md:col-span-3 flex justify-end">
                <button
                  onClick={() => setShowWpHub(true)}
                  className="w-full md:w-auto px-5 py-3 border border-slate-200 hover:border-orange-500 rounded-lg text-slate-600 hover:text-orange-500 font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>WP API Diagnostics</span>
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="border-t border-slate-100 pt-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3.5">Categories</span>
              <div className="flex flex-wrap gap-2">
                {categoriesList.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-102"
                        : "bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
            <span className="text-xs font-black uppercase tracking-widest text-slate-400">
              Showing {filteredPosts.length} post{filteredPosts.length !== 1 && 's'}
            </span>
            {(searchQuery || selectedCategory !== "All") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="text-xs font-black uppercase tracking-widest text-orange-500 hover:text-orange-600 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Dynamic Grid */}
          {filteredPosts.length === 0 ? (
            <div className="bg-slate-50 rounded-xl p-16 text-center border-2 border-dashed border-slate-200">
              <span className="text-slate-350 block mb-4">
                <FileText className="w-12 h-12 mx-auto" />
              </span>
              <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-2">No Matching Articles</h3>
              <p className="text-slate-500 max-w-md mx-auto font-medium text-sm">
                We couldn't find any articles matching "{searchQuery}" under category "{selectedCategory}". Try refining your keywords.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedPost(post)}
                  className="bg-white p-2.5 border border-slate-200 cursor-pointer flex flex-col justify-between group rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div>
                    {/* Media Aspect */}
                    <div className="relative aspect-video w-full rounded-md overflow-hidden bg-slate-100 mb-6 group-hover:shadow-inner">
                      {post.image ? (
                        <Image 
                          src={post.image} 
                          alt={post.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500" 
                          referrerPolicy="no-referrer" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400 font-mono">
                          fallback image
                        </div>
                      )}
                    </div>

                    <div className="px-4 pb-0">
                      {/* Sub block metadata */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`inline-block text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${getCategoryBadgeStyles(post.category)}`}>
                          {post.category}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold">• {new Date(post.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</span>
                      </div>

                      <h3 className="text-xl font-black text-slate-900 group-hover:text-orange-500 leading-snug transition-colors lowercase tracking-tight mb-3">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Actions feet */}
                  <div className="px-4 pb-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-black uppercase tracking-widest text-slate-500 group-hover:text-orange-500 transition-colors">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1.5 group-hover:translate-x-1.5 transition-transform">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Start Project CTA */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-orange-500 rounded-lg p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-xl">
             <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 lowercase text-center md:text-left">Start Your <span className="uppercase">Project</span> With Us</h2>
                <p className="text-orange-950 text-lg font-bold opacity-80 max-w-lg leading-relaxed text-center md:text-left">
                  Join the network of professional project managers and start or scale your projects today.
                </p>
             </div>
             <Link href="/login" className="relative z-10 px-10 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl">
               Get Started Now
             </Link>
             <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/5 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20 whitespace-normal text-center md:text-left">
          <div className="col-span-2">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
              <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center">
                <Shield className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">CPOS</span>
            </div>
            <p className="text-slate-500 max-w-md mx-auto md:mx-0 font-medium leading-relaxed">
              Construction Project Operating System—Providing full-spectrum data visibility for the modern AEC professional.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-black uppercase text-xs tracking-widest mb-8">Companies</h5>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><Link href="/pitch" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-orange-500 transition-colors">Pricing</Link></li>
              <li><Link href="/hire-pm" className="hover:text-orange-500 transition-colors">Network</Link></li>
              <li><Link href="/pitch" className="hover:text-orange-500 transition-colors">Investment</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-black uppercase text-xs tracking-widest mb-8">Our Services</h5>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><Link href="/dashboard/demo" className="hover:text-orange-500 transition-colors">Residential</Link></li>
              <li><Link href="/dashboard/demo" className="hover:text-orange-500 transition-colors">Commercial</Link></li>
              <li><Link href="/dashboard/demo" className="hover:text-orange-500 transition-colors">Infrastructure</Link></li>
              <li><Link href="/dashboard/demo" className="hover:text-orange-500 transition-colors">Reports</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">© {new Date().getFullYear()} CPOS Development</p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
             <Link href="/" className="hover:text-white">Privacy Policy</Link>
             <Link href="/" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </footer>

      {/* DETAIL DRAWER / READ PANEL */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="relative w-full max-w-3xl h-full bg-white shadow-2xl flex flex-col justify-between overflow-hidden z-10"
            >
              <div className="flex-1 overflow-y-auto">
                <div className="relative w-full h-[320px] bg-slate-100">
                  <Image 
                    src={selectedPost.image} 
                    alt={selectedPost.title} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
                  
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 active:scale-95 transition-all border border-white/10"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className={`inline-block text-[10px] font-black uppercase tracking-[0.15em] px-3.5 py-1.5 rounded ${getCategoryBadgeStyles(selectedPost.category)} bg-white shadow`}>
                      {selectedPost.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-300" />
                    <span>Published {new Date(selectedPost.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span>•</span>
                    <User className="w-4 h-4 text-slate-300" />
                    <span>By {selectedPost.author}</span>
                  </p>
                  
                  <h2 className="text-4xl font-black text-slate-900 leading-tight tracking-tight lowercase mb-8">
                    {selectedPost.title}
                  </h2>

                  <div className="h-0.5 bg-slate-100 mb-10 w-24" />

                  <div 
                    className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed text-lg space-y-6"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />
                </div>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">Headless API Source Id Hub: {selectedPost.id}</span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-widest"
                >
                  Close Reader
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ARCHITECTURAL INFORMATION DIALOGUE/MODAL */}
      <AnimatePresence>
        {showWpHub && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowWpHub(false)}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-3xl overflow-hidden relative z-10 text-slate-100 shadow-2xl"
            >
              <div className="bg-slate-900 border-b border-slate-800 p-6 flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                    <Database className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h3 className="font-black uppercase tracking-wider text-sm text-white">Headless WordPress Architecture</h3>
                    <p className="text-[10px] text-slate-400">Active Node proxy layer & type decoupler</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowWpHub(false)} 
                  className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 md:p-8 space-y-8 max-h-[70vh] overflow-y-auto font-mono text-xs">
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block mb-2">WordPress Endpoint</span>
                    <div className="text-white font-bold break-all flex items-center gap-2">
                      <Globe className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{status.apiUrl || "Not Set"}</span>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block mb-2">Active Feed Source</span>
                    <div className="flex items-center gap-2">
                      {status.connected ? (
                        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 font-bold uppercase text-[10px]">
                          <Wifi className="w-3.5 h-3.5" />
                          Live REST API
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-950 border border-amber-800 text-amber-400 font-bold uppercase text-[10px]">
                          <Shield className="w-3.5 h-3.5" />
                          Fallback Static Client
                        </span>
                      )}
                      <span className="text-slate-400">• {posts.length} schema posts</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-bold uppercase text-xs mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-indigo-400" />
                    Data Operations Flow Pipeline
                  </h4>
                  <div className="bg-black/40 p-5 rounded-lg border border-slate-800 leading-relaxed space-y-2 text-slate-400 overflow-x-auto whitespace-pre font-mono">
                    {"[WordPress Core] ───(JSON Fetch REST /wp-json/wp/v2)───> [Next.js Gateway Proxy]"} <br/>
                    {"                                                    └─ Reads WORDPRESS_API_URL"}<br/>
                    {"                                                    └─ Normalizes Media & Terms"}<br/>
                    {"                                                    └─ Applies Fallback Schema"}<br/>
                    {"[Page App Grid] ◄───(Client Request /api/wordpress)───┘ [Hydrometer State Control]"}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-bold uppercase text-xs flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-400" />
                    Setup Instructions for Live Connection
                  </h4>
                  <ul className="space-y-4 text-slate-400 text-xs">
                    <li className="flex gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-200 flex items-center justify-center shrink-0">1</span>
                      <div>
                        <strong className="text-slate-200">Set Environment Secret:</strong> Add <code className="bg-slate-900 text-orange-400 px-1.5 py-0.5 rounded">WORDPRESS_API_URL</code> to your development variables (e.g., your Wordpress hosting URL: <code className="bg-slate-900 text-slate-300 px-1 py-0.5 rounded">https://public-api.wordpress.com/wp/v2/sites/YOURSITE.wordpress.com</code>).
                      </div>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-200 flex items-center justify-center shrink-0">2</span>
                      <div>
                        <strong className="text-slate-200">Publish Content:</strong> Create regular WP Posts. Ensure you set a <strong className="text-slate-200">Featured Image</strong> on each post. The first post will act as the home page Hero spotlight, and the next two posts will run the bottom features!
                      </div>
                    </li>
                    <li className="flex gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-200 flex items-center justify-center shrink-0">3</span>
                      <div>
                        <strong className="text-slate-200">Server Decoupling is automatic:</strong> Next.js queries standard WP embed queries to fetch clean assets. It prevents API tokens/origins from exposing to client browser, maintaining full security.
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Active API Config Override</span>
                    <span className="text-[9px] text-slate-500">Source: Environment Context</span>
                  </div>
                  <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto text-[10px] text-indigo-300 border border-slate-900">
                    {JSON.stringify(status.layoutConfig || { heroIndex: 0, gridStart: 1, gridCount: 2 }, null, 2)}
                  </pre>
                </div>

              </div>

              <div className="bg-slate-900 border-t border-slate-800 p-6 flex justify-between items-center">
                <p className="text-[10px] text-slate-500 font-medium">CPOS Architecture v1.1.0 • Standalone Headless Engine</p>
                <button
                  onClick={() => setShowWpHub(false)}
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-[10px] uppercase tracking-wider rounded transition-colors"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
