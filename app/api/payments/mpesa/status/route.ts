import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const checkoutRequestId = url.searchParams.get('checkoutRequestId')

    if (!checkoutRequestId) {
      return NextResponse.json({
        ok: true,
        message: 'M-Pesa status endpoint ready. Provide checkoutRequestId to query payment status.',
      })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceKey) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Missing SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL for server status check.',
        },
        { status: 500 }
      )
    }

    const supabase = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    })

    const { data, error } = await supabase
      .from('mpesa_checkout_requests')
      .select('status, result_code, result_desc')
      .eq('checkout_request_id', checkoutRequestId)
      .maybeSingle()

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 })
    }

    if (!data) {
      return NextResponse.json({ ok: true, status: 'unknown' })
    }

    return NextResponse.json({
      ok: true,
      status: data.status,
      result_code: data.result_code,
      result_desc: data.result_desc,
    })
  } catch (error) {
    console.error('[API Error]', error)
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : 'Unknown status error' },
      { status: 500 }
    )
  }
}
