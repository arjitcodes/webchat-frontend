import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth',
                method: 'POST',
                body: { ...credentials }
            })

        }),
        signIn: builder.mutation({
            query: (credentials) => ({
                url: '/user',
                method: 'POST',
                body: { ...credentials }
            })

        }),
        verify: builder.mutation({
            query: () => ({
                url: '/auth',
                method: "GET",
            })
        })


    })
})

export const { useLoginMutation, useSignInMutation ,useVerifyMutation} = authApiSlice