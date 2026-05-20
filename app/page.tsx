'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, Shield, Sparkles, Globe, Wifi, WifiOff, FileText, 
  X, ExternalLink, Database, BookOpen, Terminal, Settings, 
  AlertCircle, CheckCircle2 
} from "lucide-react";
import { FALLBACK_POSTS, WPPost, WordPressConnectionStatus, getCategoryBadgeStyles } from "../lib/wordpress";

const PUBLIC_VIEWONLY_PROJECT_ID = "e03418fd-0ef2-4080-90c6-f18009bb12d1";

export default function Home() {
  const [posts, setPosts] = useState<WPPost[]>(FALLBACK_POSTS);
  const [status, setStatus] = useState<WordPressConnectionStatus>({
    connected: false,
    apiUrl: "Unconfigured (Using Static Schema)",
    source: "fallback_static",
    postCount: FALLBACK_POSTS.length
  });
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<WPPost | null>(null);
  const [showWpHub, setShowWpHub] = useState(false);

  // Fetch WordPress posts on mount from our secure server route
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
        console.error("Failed to connect to headless WordPress API:", err);
      } finally {
        setLoading(false);
      }
    }
    getWordPressData();
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } }
  };

  // Identify Hero and Grid blogs based on dynamic layout index configuration
  const layout = status.layoutConfig || { heroIndex: 0, gridStart: 1, gridCount: 2 };
  const heroPost = posts[layout.heroIndex] || posts[0] || FALLBACK_POSTS[0];
  const blogPosts = posts.slice(layout.gridStart, layout.gridStart + layout.gridCount);

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
            <Link href="/pricing" className="hover:text-orange-500 transition-colors">Pricing</Link>
            <Link href="/dashboard/demo" className="hover:text-orange-500 transition-colors">Services</Link>
            <Link href="/pitch" className="hover:text-orange-500 transition-colors">Support</Link>
            <Link href="/login" className="px-6 py-2.5 bg-orange-500 text-white rounded hover:bg-orange-600 transition-all">Free Demo</Link>
          </nav>
        </div>
      </header>

      {/* Floating WordPress Diagnostic Hub Capsule */}
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
      <section className="relative overflow-hidden pt-20 pb-0 bg-gradient-to-b from-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="pb-20"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>CPOS Platform</span>
            </span>
            <h1 className="text-6xl md:text-7xl font-black tracking-tight text-slate-900 leading-[0.95] mb-8">
              Managing Projects with Precision & Clarity
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-lg mb-10 leading-relaxed">
              The ultimate Project Operating System built for AEC professionals. Run your project schedules, budgets, and remote teams on one unified platform.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/login"
                className="px-8 py-4 bg-orange-500 text-white font-black uppercase tracking-wider text-sm rounded shadow-xl shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer inline-block text-center"
              >
                Free Trial Setup
              </Link>
              <Link href={`/dashboard/${PUBLIC_VIEWONLY_PROJECT_ID}`} className="px-8 py-4 bg-slate-900 text-white font-black uppercase tracking-wider text-sm rounded hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2">
                <span>View Reports</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] lg:h-[700px] w-full"
          >
            <div 
              className="absolute inset-x-0 bottom-0 top-10 bg-slate-100 rounded-t-[40px] overflow-hidden shadow-inner cursor-pointer group"
              onClick={() => setSelectedPost(posts[layout.heroIndex] || posts[0] || FALLBACK_POSTS[0])}
            >
               <Image 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1080" 
                alt="Construction Engineering Site"
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                 <span className="text-white text-xs font-black uppercase tracking-widest bg-orange-500 px-4 py-2 rounded shadow-lg shadow-orange-500/10">
                   view latest cpos insight
                 </span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section / Partner Grid */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
           <div 
             className="relative aspect-[4/3] rounded-2xl overflow-hidden border-8 border-orange-500 shadow-2xl cursor-pointer group"
             onClick={() => setSelectedPost(posts[4] || posts[0] || FALLBACK_POSTS[0])}
           >
              <Image 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1080" 
                alt="Commercial Construction Work"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-white text-xs font-black uppercase tracking-widest bg-orange-500 px-3 py-1.5 rounded shadow">
                  read blog narrative
                </span>
              </div>
           </div>

           <div className="text-white">
              <span className="text-orange-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">About Us</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Your Trusted <span className="text-orange-500">Project</span> Partner
              </h2>
              <p className="text-slate-400 font-medium mb-10 leading-relaxed text-lg">
                CPOS bridges the gap between site reality and office management. We provide the tools to automate SOW, Cost Control, and Reporting, so you can focus on building.
              </p>
              
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <h4 className="text-orange-500 text-3xl font-black mb-1">150+</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Projects Managed</p>
                </div>
                <div>
                  <h4 className="text-orange-500 text-3xl font-black mb-1">98%</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Client Satisfaction</p>
                </div>
                <div>
                  <h4 className="text-orange-500 text-3xl font-black mb-1">10+</h4>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Years Industry Experience</p>
                </div>
              </div>

              <Link href="/pitch" className="inline-block mt-12 px-6 py-2 border-2 border-orange-500 text-orange-500 font-black uppercase tracking-widest text-xs hover:bg-orange-500 hover:text-white transition-all">
                Read More
              </Link>
           </div>
        </div>
      </section>

      {/* Feature Grid: From Ideas to Concrete Reality */}
      <section className="py-32 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
            <div>
              <span className="text-orange-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Our Services</span>
              <h2 className="text-5xl font-black text-slate-900 tracking-tight">From Ideas to Concrete Reality</h2>
            </div>
            <Link href="/dashboard/demo" className="mt-8 md:mt-0 px-6 py-2 bg-orange-500 text-white font-black uppercase tracking-widest text-xs shadow-lg shadow-orange-500/20">
              View More
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Construction",
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
                desc: "Full schedule and budget tracking for residential developments.",
                post: posts[3] || FALLBACK_POSTS[1] || FALLBACK_POSTS[0]
              },
              {
                title: "Commercial Projects",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
                desc: "High-performance data management for high-rise and office projects.",
                post: posts[4] || FALLBACK_POSTS[2] || FALLBACK_POSTS[0]
              },
              {
                title: "Infrastructure & Civil",
                img: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=800",
                desc: "Specialized tools for site logistics, BOQs, and QS automation.",
                post: posts[5] || posts[0] || FALLBACK_POSTS[0]
              }
            ].map((service, idx) => {
              const post = service.post;
              const displayImg = status.connected && post?.image ? post.image : service.img;
              const displayTitle = status.connected && post?.title ? post.title : service.title;
              const displayDesc = status.connected && post?.excerpt ? post.excerpt : service.desc;

              return (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  onClick={() => setSelectedPost(post)}
                  className="group cursor-pointer bg-white border border-slate-200 p-2.5 rounded-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-8 shadow-md">
                      <Image 
                        src={displayImg} 
                        alt={displayTitle} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-all duration-700" 
                        referrerPolicy="no-referrer" 
                      />
                    </div>
                    <div className="px-4 pb-4">
                      {status.connected && post && (
                        <span className={`inline-block text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full mb-3 ${getCategoryBadgeStyles(post.category)}`}>
                          {post.category}
                        </span>
                      )}
                      <h3 className="text-xl font-black text-slate-900 group-hover:text-orange-500 transition-colors mb-4 lowercase tracking-tight leading-snug">
                        {displayTitle}
                      </h3>
                      <p className="text-slate-500 font-medium leading-relaxed text-sm line-clamp-3">
                        {displayDesc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="px-4 pb-4 pt-4 border-t border-slate-100 text-xs font-black uppercase tracking-wider text-orange-500 group-hover:translate-x-1.5 transition-transform flex items-center justify-between">
                    <span>Read WP Insight</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Block: Insights (WordPress Dynamic Blogs Grid) */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 whitespace-normal">
            <div>
              <span className="text-orange-500 text-xs font-black uppercase tracking-[0.3em] mb-4 block">Platform Insights</span>
              <h2 className="text-4xl font-black text-slate-900 lowercase tracking-tight text-center md:text-left">
                management <span className="uppercase">Essentials</span>
              </h2>
            </div>
            <div className="flex items-center gap-4 mt-8 md:mt-0">
              {status.connected && (
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black uppercase rounded-full">
                  <Globe className="w-3 h-3 text-emerald-500" />
                  WordPress Live Feed Sync
                </span>
              )}
              <button 
                onClick={() => setShowWpHub(true)}
                className="px-5 py-2 border border-slate-300 hover:border-orange-500 text-slate-600 hover:text-orange-500 font-black uppercase tracking-widest text-[10px] transition-all"
              >
                WP API Settings
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:grid-cols-3">
             {/* If loading and there were no fallback posts set */}
             {loading && posts.length === 0 ? (
               Array.from({ length: 2 }).map((_, i) => (
                 <div key={i} className="bg-white p-6 border border-slate-100 rounded animate-pulse h-[400px]" />
               ))
             ) : (
               blogPosts.map((post) => (
                 <motion.div 
                    key={post.id}
                    whileHover={{ y: -5 }}
                    onClick={() => setSelectedPost(post)}
                    className="bg-white p-2 border border-slate-200 cursor-pointer flex flex-col justify-between group h-full shadow-sm hover:shadow-md transition-all duration-300"
                 >
                    <div>
                      <div className="relative aspect-square mb-6 overflow-hidden bg-slate-100">
                        {post.image && (
                          <Image 
                            src={post.image} 
                            alt={post.title} 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-500" 
                            referrerPolicy="no-referrer" 
                          />
                        )}
                      </div>
                      <div className="p-6 pt-0">
                        <span className={`inline-block text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 ${getCategoryBadgeStyles(post.category)}`}>
                          {post.category}
                        </span>
                        <h4 className="text-xl font-black text-slate-900 mb-4 lowercase tracking-tight leading-tight group-hover:text-orange-500 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                    
                    <div className="p-6 pt-0 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-500 group-hover:translate-x-1.5 transition-transform">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                 </motion.div>
               ))
             )}

             <div className="lg:col-span-1 md:col-span-2 bg-slate-900 p-10 flex flex-col justify-center relative overflow-hidden group">
                <blockquote className="text-2xl font-black text-white italic mb-8 leading-tight relative z-10">
                  "CPOS changed how we manage remote site teams—transparency is finally real."
                </blockquote>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white font-black text-sm">
                    JM
                  </div>
                  <div>
                    <p className="text-sm font-black text-white uppercase tracking-widest">James Mwangi</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Director, BuildTech</p>
                  </div>
                </div>
                
                {/* Visual geometric detail */}
                <div className="absolute top-1/2 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-all" />
             </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-orange-500 text-slate-700 hover:text-orange-500 font-black text-xs uppercase tracking-widest transition-all shadow-sm rounded cursor-pointer"
            >
              <span>View all insights</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* Start Project Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-orange-500 rounded-lg p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6 lowercase text-center md:text-left">Start Your <span className="uppercase">Project</span> With Us</h2>
                <p className="text-orange-900 text-lg font-bold opacity-80 max-w-lg leading-relaxed text-center md:text-left">
                  Join the network of professional project managers and start or scale your projects today.
                </p>
             </div>
             <Link href="/login" className="relative z-10 px-10 py-5 bg-slate-900 text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-2xl">
               Get Started Now
             </Link>
             
             {/* Decorative pattern */}
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

      {/* MODAL / DRAWER: Blog Detailed Reader View */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            {/* Slide-over panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 220 }}
              className="relative w-full max-w-3xl h-full bg-white shadow-2xl flex flex-col justify-between overflow-hidden z-10"
            >
              <div className="flex-1 overflow-y-auto">
                {/* Hero Feature Image */}
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

                {/* Content Details */}
                <div className="p-8 md:p-12">
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                    Published {new Date(selectedPost.date).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })} • By {selectedPost.author}
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

              {/* Action feet */}
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

      {/* MODAL / DRAWER: Headless WordPress Architectural Hub */}
      <AnimatePresence>
        {showWpHub && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowWpHub(false)}
              className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
            />

            {/* Hub Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-slate-950 border border-slate-800 rounded-2xl w-full max-w-3xl overflow-hidden relative z-10 text-slate-100 shadow-2xl"
            >
              {/* Header */}
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

              {/* Body */}
              <div className="p-6 md:p-8 space-y-8 max-h-[70vh] overflow-y-auto font-mono text-xs">
                
                {/* 1. Status overview */}
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

                {/* 2. Conceptual Diagram */}
                <div>
                  <h4 className="text-white font-bold uppercase text-xs mb-3 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-indigo-400" />
                    Data Operations Flow Pipeline
                  </h4>
                  <div className="bg-black/40 p-5 rounded-lg border border-slate-800 leading-relaxed space-y-2 text-slate-400 overflow-x-auto whitespace-pre">
                    {"[WordPress Core] ───(JSON Fetch REST /wp-json/wp/v2)───> [Next.js Gateway Proxy]"} <br/>
                    {"                                                    └─ Reads WORDPRESS_API_URL"}<br/>
                    {"                                                    └─ Normalizes Media & Terms"}<br/>
                    {"                                                    └─ Applies Fallback Schema"}<br/>
                    {"[Page App Grid] ◄───(Client Request /api/wordpress)───┘ [Hydrometer State Control]"}
                  </div>
                </div>

                {/* 3. Setup guide */}
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

                {/* 4. Active Payload schema */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Active JSON Payload (First Post Sample)</span>
                    <span className="text-[9px] text-slate-500">Typescript: WPPost Interface</span>
                  </div>
                  <pre className="bg-black/30 p-4 rounded-lg overflow-x-auto text-[10px] text-indigo-300 max-h-40 overflow-y-auto border border-slate-900">
                    {JSON.stringify(heroPost, null, 2)}
                  </pre>
                </div>

              </div>

              {/* Footer */}
              <div className="bg-slate-900 border-t border-slate-800 p-6 flex justify-between items-center">
                <p className="text-[10px] text-slate-500 font-medium">CPOS Architecture v1.1.0 • Standalone Headless Engine</p>
                <button
                  onClick={() => setShowWpHub(false)}
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-black text-[10px] uppercase tracking-wider rounded transition-colors"
                >
                  Done, Let's Debate!
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
