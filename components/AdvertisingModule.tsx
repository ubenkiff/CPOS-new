'use client';

import { useState, useEffect } from 'react';
import { ExternalLink, Newspaper, TrendingUp, Sparkles, Building2, Eye, Award, Hammer, MessageSquareCode } from 'lucide-react';
import { supabase } from '../app/supabase';
import { Advertisement, IndustryNews } from '../types/advertising';

interface AdvertisingModuleProps {
  isDark?: boolean;
}

export default function AdvertisingModule({ isDark = false }: AdvertisingModuleProps) {
  const [ads, setAds] = useState<Advertisement[]>([]);
  const [news, setNews] = useState<IndustryNews[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAdvertisingAndNews() {
      try {
        setLoading(true);
        
        // Fetch active ads
        const { data: adsData, error: adsError } = await supabase
          .from('advertisements')
          .select('*')
          .eq('is_active', true);

        if (!adsError && adsData) {
          // Sort client-side by order if available
          const sortedAds = [...adsData].sort((a, b) => (a.display_order || 0) - (b.display_order || 0));
          setAds(sortedAds);

          // Track impressions on client side
          for (const ad of sortedAds) {
            const updatedImpression = (ad.impression_count || 0) + 1;
            await supabase
              .from('advertisements')
              .update({ impression_count: updatedImpression })
              .eq('id', ad.id);
          }
        }

        // Fetch active news
        const { data: newsData, error: newsError } = await supabase
          .from('industry_news')
          .select('*')
          .eq('is_active', true);

        if (!newsError && newsData) {
          const sortedNews = [...newsData].sort((a, b) => 
            new Date(b.published_date).getTime() - new Date(a.published_date).getTime()
          );
          setNews(sortedNews);
        }

      } catch (err) {
        console.error('Failed to load advertising & partnership data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchAdvertisingAndNews();
  }, []);

  const handleCircleAdClick = async (ad: Advertisement) => {
    try {
      const updatedClicks = (ad.click_count || 0) + 1;
      await supabase
        .from('advertisements')
        .update({ click_count: updatedClicks })
        .eq('id', ad.id);

      // Refresh state clicks counters locally
      setAds(prev => prev.map(item => item.id === ad.id ? { ...item, click_count: updatedClicks } : item));
    } catch (e) {
      console.error(e);
    }
    window.open(ad.link_url, '_blank', 'noopener,noreferrer');
  };

  const getSponsorBadge = (category: string) => {
    switch (category) {
      case 'sponsored':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      case 'partner':
        return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'affiliate':
        return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20';
    }
  };

  // Modern loaders
  if (loading) {
    return (
      <div className="w-full space-y-6 py-6 font-sans">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
          <div className="space-y-2 flex-1">
            <div className="h-4 w-48 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
            <div className="h-3 w-32 bg-slate-200 dark:bg-slate-800 rounded animate-pulse" />
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-44 p-6 border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-900/40 animate-pulse space-y-4">
              <div className="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded" />
              <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded" />
              <div className="h-3 w-2/3 bg-slate-200 dark:bg-slate-800 rounded" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div id="cpos-advertising-module" className="w-full font-sans space-y-12">
      {/* Brand Sponsors Grid */}
      <div className="space-y-6">
        <div className="text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
              <h3 className={`text-base font-black uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
                PARTNER PLATFORMS & ECOSYSTEM
              </h3>
            </div>
            <p className="text-xs text-slate-400 font-bold tracking-widest uppercase mt-1">
              Top-Tier AEC Tools & Sponsor Spotlights
            </p>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#9ca3af] px-3 py-1.5 rounded-full border border-slate-700/25 bg-slate-50/10">
            CPOS ADVERTISING PROGRAM
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ads.map((ad) => (
            <div
              key={ad.id}
              onClick={() => handleCircleAdClick(ad)}
              className={`group flex flex-col justify-between p-6 rounded-[24px] border transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                isDark 
                  ? 'bg-[#161b22]/50 hover:bg-[#161b22] border-[#21262d] hover:border-orange-500/40' 
                  : 'bg-white hover:bg-slate-50 border-slate-100 hover:border-orange-500/30 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="space-y-4">
                {/* Header item */}
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase border tracking-wider ${getSponsorBadge(ad.category)}`}>
                    {ad.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 font-bold">
                    <Eye className="w-3 h-3 text-slate-500" />
                    <span>{ad.impression_count || 0}</span>
                  </div>
                </div>

                {/* Main description */}
                <div>
                  <h4 className={`text-sm font-black tracking-tight flex items-center gap-1.5 ${isDark ? 'text-white' : 'text-slate-900 group-hover:text-orange-600 transition-colors'}`}>
                    {ad.title} <ExternalLink className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="text-[11px] text-slate-400 font-bold mt-0.5 uppercase">
                    Provided by {ad.sponsor_name}
                  </p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2 line-clamp-3">
                    {ad.description}
                  </p>
                </div>
              </div>

              {/* Promo Link Footer */}
              <div className="pt-4 mt-4 border-t border-dashed border-slate-700/20 flex items-center justify-between text-xs">
                <span className="text-orange-500 font-black tracking-wider uppercase text-[10px] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Learn more & unlock deal
                </span>
                <span className="text-[9px] text-slate-400 font-mono">
                  Clicks: {ad.click_count || 0}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Structured Construction News feed */}
      {news.length > 0 && (
        <div className={`p-6 rounded-[28px] border overflow-hidden ${
          isDark 
            ? 'bg-[#0d1117] border-[#21262d]' 
            : 'bg-slate-50/50 border-slate-200/60'
        }`}>
          <div className="flex items-center justify-between pb-4 border-b border-dashed border-slate-700/25 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center">
                <Newspaper className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <h4 className={`text-xs font-black tracking-wider uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  HEADLINE CONSTRUCTION INDUSTRY NEWS
                </h4>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-0.5">
                  Curated intelligence for AEC teams
                </p>
              </div>
            </div>
            <Award className="w-5 h-5 text-orange-400" />
          </div>

          <div className="space-y-4">
            {news.map((item) => {
              const isOpen = selectedNewsId === item.id;
              return (
                <div 
                  key={item.id}
                  className={`p-4 rounded-2xl border transition-all ${
                    isOpen 
                      ? 'border-orange-500/40 bg-orange-500/[0.02]' 
                      : (isDark ? 'border-transparent bg-[#161b22]/30 hover:bg-[#161b22]/50' : 'border-slate-100 bg-white hover:bg-slate-50/60')
                  }`}
                >
                  <div 
                    onClick={() => setSelectedNewsId(isOpen ? null : item.id)}
                    className="flex justify-between items-start gap-4 cursor-pointer"
                  >
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black tracking-wider uppercase text-orange-500">
                          {item.source}
                        </span>
                        <span className="text-[9px] text-slate-400 font-bold">
                          {new Date(item.published_date).toLocaleDateString(undefined, {
                            month: 'short', day: 'numeric', year: 'numeric'
                          })}
                        </span>
                      </div>
                      <h5 className={`text-sm font-black leading-snug ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {item.title}
                      </h5>
                    </div>
                    <button className="text-orange-500 font-bold uppercase text-[10px] pt-1">
                      {isOpen ? 'Less' : 'Brief'}
                    </button>
                  </div>

                  {isOpen && (
                    <div className="pt-3 mt-3 border-t border-slate-700/10 space-y-3 animate-fade-in text-xs leading-relaxed text-slate-500">
                      <p className="font-medium text-slate-400">
                        {item.summary}
                      </p>
                      {item.source_url && (
                        <a 
                          href={item.source_url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-600 font-bold uppercase text-[10px] tracking-wider"
                        >
                          Read full article at {item.source} <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
