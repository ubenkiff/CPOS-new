export interface Advertisement {
  id: string;
  title: string;
  description?: string;
  image_url?: string;
  link_url: string;
  sponsor_name: string;
  sponsor_logo?: string;
  category: 'sponsored' | 'partner' | 'affiliate';
  placement: string;
  display_order: number;
  start_date: string;
  end_date?: string;
  is_active: boolean;
  click_count: number;
  impression_count: number;
  created_at?: string;
  updated_at?: string;
}

export interface IndustryNews {
  id: string;
  title: string;
  summary?: string;
  source: string;
  source_url?: string;
  image_url?: string;
  published_date: string;
  is_featured: boolean;
  is_active: boolean;
  created_at?: string;
}

export interface AdvertisingModuleProps {
  advertisements: Advertisement[];
  news: IndustryNews[];
}
