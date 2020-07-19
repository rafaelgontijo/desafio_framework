import axios from "axios";
import { apiUrl } from "@/env";
import {
  IUserProfile,
  IUserProfileUpdate,
  IUserProfileCreate,
  ITodo,
  IPost,
  IAlbum,
} from "./interfaces";

function authHeaders(token: string) {
  return {
    headers: {
      Authorization: `JWT ${token}`,
    },
  };
}

export const api = {
  async logInGetToken(username: string, password: string) {
    const params = new URLSearchParams();
    params.append("email", username);
    params.append("password", password);

    return axios.post(`${apiUrl}/api-token-auth/`, params);
  },
  async getTodos(token: string) {
    return axios.get<ITodo[]>(
      `${apiUrl}/api/v1/todos/`,
      authHeaders(token)
    );
  },
  async getPosts(token: string) {
    return axios.get<IPost[]>(
      `${apiUrl}/api/v1/posts/`,
      authHeaders(token)
    );
  },
  async getAlbums(token: string) {
    return axios.get<IAlbum[]>(
      `${apiUrl}/api/v1/albums/`,
      authHeaders(token)
    );
  },
  async getMe(token: string) {
    return axios.get<IUserProfile>(
      `${apiUrl}/api/v1/users/me`,
      authHeaders(token)
    );
  },
  async updateMe(token: string, data: IUserProfileUpdate) {
    return axios.put<IUserProfile>(
      `${apiUrl}/api/v1/users/me`,
      data,
      authHeaders(token)
    );
  },
  async getUsers(token: string) {
    return axios.get<IUserProfile[]>(
      `${apiUrl}/api/v1/users/`,
      authHeaders(token)
    );
  },
  async updateUser(token: string, userId: number, data: IUserProfileUpdate) {
    return axios.put(
      `${apiUrl}/api/v1/users/${userId}`,
      data,
      authHeaders(token)
    );
  },
  async createUser(token: string, data: IUserProfileCreate) {
    return axios.post(`${apiUrl}/api/v1/users/`, data, authHeaders(token));
  },
  async passwordRecovery(email: string) {
    return axios.post(`${apiUrl}/api/v1/password-recovery/${email}`);
  },
  async resetPassword(password: string, token: string) {
    return axios.post(`${apiUrl}/api/v1/reset-password/`, {
      new_password: password,
      token,
    });
  },
};
