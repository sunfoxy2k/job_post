
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const API_NEWFEED_ENDPOINT = "`/newfeed`";
const API_USER_PRIVATE_ENDPOINT = "`/user/private`"
const API_USER_PUBLIC_ENDPOINT = "`/user/public`"

const reducerPath  = 'api'

export const api = createApi({
    reducerPath,
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_API_ENDPOINT }),
    prepareHeaders : (headers, {getState}) => {
        const jwt = getState().jwt

        if (jwt) {
          headers.set('authorization', jwt)
        }
    
        return headers
    },
    endpoints: (builder) => ({
        getNeedfeed: builder.query({
            query: () => eval(API_NEWFEED_ENDPOINT),
        }),
        getPersonalInfo : builder.query({
            query: () => eval(API_USER_PRIVATE_ENDPOINT)
        })
    })
})

export const { 
    useGetNeedfeedQuery,
    useGetPersonalInfoQuery, 
 } = api