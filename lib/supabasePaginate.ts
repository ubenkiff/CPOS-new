/**
 * Fetches all rows from a Supabase table query, paginating past the default
 * 1000-row limit. Use this wherever a project might have large datasets.
 *
 * @param queryFn - A function that accepts (from: number, to: number) and
 *   returns a Supabase query with .range() applied. The query should already
 *   have all .eq(), .order() etc. applied before range.
 * @param pageSize - Rows per page (default 1000, max Supabase allows per call)
 */
export async function fetchAllRows<T>(
  queryFn: (from: number, to: number) => PromiseLike<{ data: T[] | null; error: any }>,
  pageSize = 1000
): Promise<{ data: T[]; error: any }> {
  let allData: T[] = []
  let from = 0
  let lastError: any = null

  while (true) {
    const to = from + pageSize - 1
    const { data, error } = await queryFn(from, to)

    if (error) {
      lastError = error
      break
    }

    if (!data || data.length === 0) break

    allData = allData.concat(data)

    // If we got fewer rows than the page size, we've reached the end
    if (data.length < pageSize) break

    from += pageSize
  }

  return { data: allData, error: lastError }
}
