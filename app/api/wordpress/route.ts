import { NextResponse } from 'next/server';
import { fetchWordPressPosts } from '../../../lib/wordpress';

export async function GET() {
  try {
    const wordpressData = await fetchWordPressPosts();
    return NextResponse.json(wordpressData, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { 
        error: true, 
        message: error.message || 'Unknown server error fetching headless WordPress' 
      }, 
      { status: 500 }
    );
  }
}
