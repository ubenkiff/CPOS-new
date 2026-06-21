import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const isPlaceholder = !supabaseUrl || 
                      supabaseUrl.includes('your-project-ref') || 
                      !supabaseAnonKey || 
                      supabaseAnonKey.includes('your_supabase_anon_publishable_key');

class MockSupabaseClient {
  auth = {
    getUser: async () => {
      const user = {
        id: 'dev-user-id',
        email: 'sandbox-developer@example.com',
        user_metadata: { plan: 'admin', role: 'admin' }
      }
      return { data: { user }, error: null }
    },
    signInWithPassword: async ({ email, password }) => {
      const user = {
        id: 'dev-user-id',
        email: email || 'sandbox-developer@example.com',
        user_metadata: { plan: 'admin', role: 'admin' }
      }
      if (typeof document !== 'undefined') {
        document.cookie = "cpos-dev-bypass=true; path=/;"
      }
      return { data: { user }, error: null }
    },
    signOut: async () => {
      if (typeof document !== 'undefined') {
        document.cookie = "cpos-dev-bypass=; Max-Age=-99999999; path=/;"
      }
      return { error: null }
    },
    updateUser: async (payload) => {
      return { data: {}, error: null }
    },
    onAuthStateChange: (callback) => {
      if (typeof callback === 'function') {
        callback('SIGNED_IN', { id: 'dev-user-id', email: 'sandbox-developer@example.com' })
      }
      return { data: { subscription: { unsubscribe: () => {} } } }
    }
  }

  async rpc(fn, args) {
    if (fn === 'list_project_teasers') {
      return this.from('projects').select('*')
    }
    return { data: [], error: null }
  }

  from(tableName) {
    let list = []
    if (typeof window !== 'undefined') {
      const storageKey = `cpos_mock_${tableName}`
      const raw = localStorage.getItem(storageKey)
      if (raw) {
        try {
          list = JSON.parse(raw)
        } catch (e) {
          list = []
        }
      } else {
        if (tableName === 'projects') {
          list = [
            {
              projectid: 'sandbox-project-1',
              project_name: 'Solar Grid Installation (Sandbox Test)',
              project_code: 'SOL-SANDBOX',
              client_name: 'Antigravity Partners',
              location: 'Nairobi HQ',
              status: 'Active',
              budget: 850000,
              currency: 'KES',
              completion_percentage: 65,
              user_id: 'dev-user-id',
              created_at: new Date().toISOString()
            },
            {
              projectid: 'e03418fd-0ef2-4080-90c6-f18009bb12d1',
              project_name: 'Nairobi Airport Terminal 2 Renovation (Demo)',
              project_code: 'NBO-T2-DEMO',
              client_name: 'Kenya Airports Authority',
              location: 'Embakasi, Nairobi',
              status: 'Planning',
              budget: 42000000,
              currency: 'KES',
              completion_percentage: 20,
              user_id: 'dev-user-id',
              created_at: new Date(Date.now() - 86400000).toISOString()
            }
          ]
          localStorage.setItem(storageKey, JSON.stringify(list))
        } else if (tableName === 'users') {
          list = [
            {
              userid: 'dev-user-id',
              email: 'sandbox-developer@example.com',
              role: 'admin',
              plan: 'admin'
            }
          ]
          localStorage.setItem(storageKey, JSON.stringify(list))
        } else if (tableName === 'sow_items') {
          list = [
            {
              sow_id: 'sow-1',
              projectid: 'sandbox-project-1',
              sow_number: '1.0',
              scope_l1: 'Civil Engineering & Excavation',
              hierarchy_level: 1,
              budget: 250000,
              currency: 'KES'
            },
            {
              sow_id: 'sow-2',
              projectid: 'sandbox-project-1',
              sow_number: '1.1',
              item_l2: 'Site Clearing & Grading',
              hierarchy_level: 2,
              budget: 150000,
              currency: 'KES'
            },
            {
              sow_id: 'sow-3',
              projectid: 'sandbox-project-1',
              sow_number: '1.1.1',
              description: 'Grade secondary solar layout panels field',
              hierarchy_level: 3,
              planned_start: '2026-06-15',
              planned_end: '2026-06-25',
              planned_days: 10,
              baseline_start: '2026-06-12',
              baseline_end: '2026-06-22',
              baseline_days: 10,
              actual_start: '2026-06-16',
              actual_end: '2026-06-26',
              actual_days: 10,
              budget: 100000,
              currency: 'KES',
              unit: 'Sqm',
              planned_qty: 1200,
              net_qty: 1200,
              unit_rate: 100,
              estimated_cost: 120000,
              actual_cost: 110000,
              percent_complete: 80,
              drawing_ids: ['DRW-CIV-001']
            },
            {
              sow_id: 'sow-4',
              projectid: 'sandbox-project-1',
              sow_number: '1.1.2',
              description: 'Excavate main cable trenching',
              hierarchy_level: 3,
              planned_start: '2026-06-20',
              planned_end: '2026-06-28',
              planned_days: 8,
              baseline_start: '2026-06-20',
              baseline_end: '2026-06-28',
              baseline_days: 8,
              budget: 50000,
              currency: 'KES',
              unit: 'm',
              planned_qty: 450,
              net_qty: 450,
              unit_rate: 111.1,
              estimated_cost: 50000,
              actual_cost: 0,
              percent_complete: 0,
              drawing_ids: ['DRW-CIV-002']
            }
          ]
          localStorage.setItem(storageKey, JSON.stringify(list))
        } else if (tableName === 'advertisements') {
          list = [
            {
              id: 'ad-1',
              title: 'Procore Construction OS',
              description: 'The #1 construction management platform driving high-efficiency onsite delivery. Connect your teams, workflows, and data.',
              image_url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600',
              link_url: 'https://www.procore.com',
              sponsor_name: 'Procore Technologies',
              sponsor_logo: '',
              category: 'sponsored',
              placement: 'homepage_bottom',
              display_order: 1,
              start_date: '2026-01-01',
              is_active: true,
              click_count: 34,
              impression_count: 512
            },
            {
              id: 'ad-2',
              title: 'Autodesk Build & BIM 360',
              description: 'Unified construction workflows for design, coordination, estimation, and document control. Keep models current.',
              image_url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600',
              link_url: 'https://www.autodesk.com',
              sponsor_name: 'Autodesk',
              sponsor_logo: '',
              category: 'partner',
              placement: 'homepage_bottom',
              display_order: 2,
              start_date: '2026-01-01',
              is_active: true,
              click_count: 18,
              impression_count: 420
            },
            {
              id: 'ad-3',
              title: 'Bluebeam Revu Elite',
              description: 'Accurate markup, measurement, and collaborative PDF editing solutions, trusted worldwide by structural coordinators.',
              image_url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600',
              link_url: 'https://www.bluebeam.com',
              sponsor_name: 'Bluebeam Revu',
              sponsor_logo: '',
              category: 'affiliate',
              placement: 'homepage_bottom',
              display_order: 3,
              start_date: '2026-01-01',
              is_active: true,
              click_count: 22,
              impression_count: 388
            }
          ]
          localStorage.setItem(storageKey, JSON.stringify(list))
        } else if (tableName === 'industry_news') {
          list = [
            {
              id: 'news-1',
              title: 'UAE announces $10B infrastructure investment for 2027',
              summary: 'New government projects include massive roads, bridges, solar parks, and highly sustainable smart urban development hubs.',
              source: 'UAE Government Circular',
              source_url: 'https://u.ae',
              image_url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600',
              published_date: '2026-06-12',
              is_featured: true,
              is_active: true
            },
            {
              id: 'news-2',
              title: 'Carbon-negative eco-concrete technology launched',
              summary: 'Next-generation carbon capture concrete promises 45% reduction in lifecycle emissions while retaining full cured load limit.',
              source: 'Construction Week',
              source_url: 'https://www.constructionweekonline.com',
              image_url: 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=600',
              published_date: '2026-06-10',
              is_featured: false,
              is_active: true
            },
            {
              id: 'news-3',
              title: 'Digital integration grows 45% in sub-Saharan projects',
              summary: 'Accelerating industry demand for real-time mobile schedule trackers, cost telemetry systems, and remote drone inspection.',
              source: 'MEED Intelligence Brief',
              source_url: 'https://www.meed.com',
              image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
              published_date: '2026-06-08',
              is_featured: false,
              is_active: true
            }
          ]
          localStorage.setItem(storageKey, JSON.stringify(list))
        }
      }
    }

    const saveList = (newList) => {
      list = newList
      if (typeof window !== 'undefined') {
        localStorage.setItem(`cpos_mock_${tableName}`, JSON.stringify(newList))
      }
    }

    let filtered = [...list]
    let orderCol = null
    let orderAsc = true
    let updatePayload = null
    let insertPayload = null
    let upsertPayload = null
    let isDelete = false

    const queryBuilder = {
      select: (cols) => queryBuilder,
      eq: (col, val) => {
        if (col === 'projectid') {
          filtered = filtered.filter(i => i.projectid === val || i.project_id === val)
        } else if (col === 'userid') {
          filtered = filtered.filter(i => i.userid === val || i.user_id === val)
        } else if (col === 'sow_id') {
          filtered = filtered.filter(i => i.sow_id === val)
        } else {
          filtered = filtered.filter(i => i[col] === val || i[col] == val)
        }
        return queryBuilder
      },
      executeAction: () => {
        if (updatePayload) {
          const up = updatePayload
          updatePayload = null
          const updatedList = list.map(item => {
            const matches = filtered.some(f => 
              (f.sow_id && f.sow_id === item.sow_id) || 
              (f.id && f.id === item.id) || 
              (f.projectid && item.projectid && f.projectid === item.projectid)
            )
            if (matches) {
              return { ...item, ...up }
            }
            return item
          })
          saveList(updatedList)
          const affected = updatedList.filter(item => 
            filtered.some(f => 
              (f.sow_id && f.sow_id === item.sow_id) || 
              (f.id && f.id === item.id) || 
              (f.projectid && item.projectid && f.projectid === item.projectid)
            )
          )
          return { data: affected, error: null }
        }

        if (insertPayload) {
          const ip = insertPayload
          insertPayload = null
          const records = Array.isArray(ip) ? ip : [ip]
          const seededRecords = records.map(r => {
            const res = { ...r }
            if (tableName === 'sow_items') {
              res.sow_id = res.sow_id || `sow-${Math.random().toString(36).substr(2, 9)}`
            } else {
              res.id = res.id || `id-${Math.random().toString(36).substr(2, 9)}`
            }
            if (!res.projectid && !res.project_id) {
              res.projectid = 'sandbox-project-1'
            }
            return res
          })
          const newList = [...list, ...seededRecords]
          saveList(newList)
          return { data: seededRecords, error: null }
        }

        if (upsertPayload) {
          const up = upsertPayload
          upsertPayload = null
          const records = Array.isArray(up) ? up : [up]
          let newList = [...list]
          for (const record of records) {
            const index = newList.findIndex(item => 
              (record.userid && item.userid === record.userid) || 
              (record.projectid && item.projectid === record.projectid) ||
              (record.sow_id && item.sow_id === record.sow_id) ||
              (record.id && item.id === record.id)
            )
            if (index !== -1) {
              newList[index] = { ...newList[index], ...record }
            } else {
              const newItem = { ...record }
              if (tableName === 'sow_items') {
                newItem.sow_id = newItem.sow_id || `sow-${Math.random().toString(36).substr(2, 9)}`
              } else {
                newItem.id = newItem.id || `id-${Math.random().toString(36).substr(2, 9)}`
              }
              newList.push(newItem)
            }
          }
          saveList(newList)
          return { data: records, error: null }
        }

        if (isDelete) {
          isDelete = false
          const idsToDelete = new Set(filtered.map(f => f.sow_id || f.id || f.projectid))
          const newList = list.filter(item => !idsToDelete.has(item.sow_id) && !idsToDelete.has(item.id) && !idsToDelete.has(item.projectid))
          saveList(newList)
          return { data: null, error: null }
        }

        return { data: filtered, error: null }
      },
      maybeSingle: () => {
        const result = queryBuilder.executeAction()
        if (Array.isArray(result.data)) {
          return Promise.resolve({ data: result.data[0] || null, error: result.error })
        }
        return Promise.resolve(result)
      },
      single: () => {
        const result = queryBuilder.executeAction()
        if (Array.isArray(result.data)) {
          return Promise.resolve({ data: result.data[0] || null, error: result.error })
        }
        return Promise.resolve(result)
      },
      order: (col, options) => {
        orderCol = col
        orderAsc = options?.ascending !== false
        filtered.sort((a, b) => {
          const valA = a[col]
          const valB = b[col]
          if (valA < valB) return orderAsc ? -1 : 1
          if (valA > valB) return orderAsc ? 1 : -1
          return 0
        })
        return queryBuilder
      },
      update: (payload) => {
        updatePayload = payload
        return queryBuilder
      },
      insert: (payload) => {
        insertPayload = payload
        return queryBuilder
      },
      upsert: (payload) => {
        upsertPayload = payload
        return queryBuilder
      },
      delete: () => {
        isDelete = true
        return queryBuilder
      },
      then: (onfulfilled, onrejected) => {
        const result = queryBuilder.executeAction()
        return Promise.resolve(result).then(onfulfilled, onrejected)
      }
    }

    return queryBuilder
  }
}

let realClient = null
const mockClient = new MockSupabaseClient()

function getActiveClient() {
  const isBypassActive = isPlaceholder || (
    typeof window !== 'undefined' && (
      localStorage.getItem('cpos-dev-bypass') === 'true' ||
      document.cookie.includes('cpos-dev-bypass=true')
    )
  )
  
  if (isBypassActive) {
    return mockClient
  }
  
  if (!realClient) {
    realClient = createBrowserClient(supabaseUrl, supabaseAnonKey)
  }
  return realClient
}

/** @type {any} */
export const supabase = new Proxy({}, {
  get(target, prop) {
    const active = getActiveClient()
    if (prop === 'auth') {
      return active.auth
    }
    const value = active[prop]
    if (typeof value === 'function') {
      return value.bind(active)
    }
    return value
  }
})
