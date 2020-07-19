import axios from "axios";
import { apiUrl } from "@/env";
import {
  IUserProfile,
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
};
