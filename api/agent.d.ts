type DataFetchingProcedure = (...args: any) => Promise<JSON>

interface Agent extends Record<string, DataFetchingProcedure> {
    fetch,
    get,
    post,
}
