import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post } from "../domain/post";

interface RegisterRequest {
    name: string;
    password: string;
    email: string;
}
interface LoginrRequest {
    password: string;
    email: string;
}

interface RegisterResponse {
    message: string;
}
interface LoginResponse {
    message: string;
}


export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (builder) =>({
        getPosts: builder.query<Post[], void>(
            {
                query: () => '/posts'
            }
        ),
        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: (body) => ({
                url: '/users/register',
                method: 'POST',
                body
            })
        }),
        login: builder.mutation<LoginResponse, LoginrRequest>({
            query: (body) => ({
                url: '/users/login',
                method: 'POST',
                body
            })
        })
    })
})

export const {useGetPostsQuery, useRegisterMutation, useLoginMutation} = baseApi