import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@/types/User"; // ✅ User 타입을 올바른 경로에서 가져오기

export const entranceApi = createApi({
    reducerPath: "entranceApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/entrance/" }),
    tagTypes: ["Users"], // ✅ tagTypes와 providesTags 일치
    endpoints: (builder) => ({
        getAllUsers: builder.query<User[], void>({
            query: () => ({ url: "allUser" }), // ✅ query의 반환값을 객체로 유지
            providesTags: (result) =>
                result ? [{ type: "Users", id: "LIST" }] : [{ type: "Users" }], // ✅ providesTags의 올바른 타입 설정
        }),
        addUser: builder.mutation<User, Partial<User>>({
            query: (user) => ({
                url: "addUser",
                method: "POST",
                body: user,
            }),
            invalidatesTags: [{ type: "Users", id: "LIST" }], // ✅ 캐시 무효화 설정
        }),
    }),
});

export const { useGetAllUsersQuery, useAddUserMutation } = entranceApi;
