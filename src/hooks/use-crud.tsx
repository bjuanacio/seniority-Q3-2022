import axios from "axios";
import { AUTHOR_ID, BASE_URL } from "../constants/app";

export const useCrud = (path = "player") => {
  const headers = {
    author: AUTHOR_ID,
  };
  const post = async (data: any) => {
    const player = {
      ...data,
      idAuthor: AUTHOR_ID,
    };

    try {
      const response = await axios.post(`${BASE_URL}${path}`, player, {
        headers,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const get = async () => {
    try {
      const response = await axios.get<any[]>(`${BASE_URL}${path}`, {
        headers,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const put = async (data: any, id: string) => {
    try {
      const response = await axios.patch(`${BASE_URL}${path}/${id}`, data, {
        headers,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const remove = async (id: string) => {
    try {
      const response = await axios.delete(`${BASE_URL}${path}/${id}`);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  return { get, post, put, remove };
};
