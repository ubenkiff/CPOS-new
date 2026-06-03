import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../supabase'
import { exportSowToXER, exportSowToMSPDI } from '../../../../lib/schedulerParser'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ projectid: string }> }
) {
  try {
    const { projectid } = await params
    const { searchParams } = new URL(request.url)
    const format = searchParams.get('format') || 'mspdi'

    // Fetch project data
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .select('*')
      .eq('projectid', projectid)
      .single()

    if (projectError || !project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 })
    }

    // Fetch SOW items
    const { data: sowItems, error: sowError } = await supabase
      .from('sow_items')
      .select('*')
      .eq('projectid', projectid)
      .order('sow_number')

    if (sowError) {
      return NextResponse.json({ error: 'Failed to fetch SOW items' }, { status: 500 })
    }

    let content: string
    let filename: string
    let contentType: string

    // Export based on format
    if (format === 'xer') {
      content = exportSowToXER(project, sowItems || [])
      filename = `${project.project_name.replace(/\s+/g, '_')}.xer`
      contentType = 'text/plain'
    } else if (format === 'mspdi') {
      content = exportSowToMSPDI(project, sowItems || [])
      filename = `${project.project_name.replace(/\s+/g, '_')}.xml`
      contentType = 'application/xml'
    } else {
      return NextResponse.json({ error: 'Invalid format. Use "mspdi" or "xer"' }, { status: 400 })
    }

    // Return file as download
    return new NextResponse(content, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    })
  } catch (error) {
    console.error('Export error:', error)
    return NextResponse.json({ error: 'Export failed' }, { status: 500 })
  }
}
