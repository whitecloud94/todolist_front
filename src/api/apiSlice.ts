import {createApi, EndpointBuilder, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


/**
 * Base Api Configuration For Using RTK Query.
 * */
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080/api'}),
    endpoints: () => ({})
})

export default apiSlice;