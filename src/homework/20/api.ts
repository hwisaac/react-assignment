import { TFetcher } from "./useCustomQuery";

const BASE_URL =
  "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos";

const HEADERS = {
  "content-type": "application/json",
  apikey: "FcKdtJs202209",
  username: "KDT3_HwangIsaac",
};

// 삭제 요청하는 api
export const deleteTodos = (todoId: string) => {
  return fetch(`${BASE_URL}/${todoId}`, {
    method: "DELETE",
    headers: HEADERS,
  }).then((res) => res.json());
};

// todo 리스트 목록을 가져오는 api
export const getTodos: TFetcher = () => {
  return fetch(BASE_URL, {
    method: "GET",
    headers: HEADERS,
  }).then((res) => res.json());
};
// todo 리스트 추가하는 api
export const postTodos = (todoTitle: string) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify({
      title: todoTitle,
    }),
  }).then((res) => res.json());
};
