# 커스텀 Hook 만들어보기

1. `useCustomMutation` 훅과 `useCustomQuery` 훅을 만들어 주세요
2. `useCustomQuery` 는 "GET" 메서드인 fetcher 함수를 매개변수로 갖습니다.
3. `useCustomQuery` 는 "POST" | "PUT" | "DELETE" 메서드인 fetcher 함수를 매개변수로 갖습니다.

- 3개의 fetcher 함수가 있습니다

```ts
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
```

> 실제 사용 예시

```tsx
const { data, isLoading, refetch } = useCustomQuery(getTodos);
const {
  data: addData,
  isLoading: addLoading,
  mutate: addTodo,
} = useCustomMutation(postTodos);
const { mutate: deleteTodoBy } = useMutation(deleteTodos);
```

## useCustomMutation 훅

1. `useCustomMutation(mutationFn)` 는 `{data, isLoading, mutate}` 객체를 리턴합니다.
   - `data` 는 `mutationFn` 이 리턴하는 값이 담깁니다.
   - `isLoading` 은 `mutationFn` 이 패칭하는 동안만 `true` 입니다.
   - `mutate` 는 `mutate(input?)` 으로 `mutationFn(input?)` 을 호출합니다.

```ts
mutationFn: (input: string) => Promise<any>;
mutate: (input?: any) => Promise<any>;
```

## useCustomQuery 훅

1. `useCustomMutation(fetcherFn)` 는 `{data, isLoading, refetch}` 객체를 리턴합니다.
   - `data` 는 `fetcherFn` 이 리턴하는 값이 담깁니다.
   - `isLoading` 은 `fetcherFn` 이 패칭하는 동안만 `true` 입니다.
   - `refetch` 는 `mutate(input?)` 으로 `mutationFn(input?)` 을 호출합니다.

```ts
  fetcherFn: () => Promise<ITodo[]>
  refetch: () => void;
```

## 구현 기능

1. 투두리스트를 랜더링해야 합니다.
2. 투두리스트에 새로운 todo 를 **추가**할 수 있어야 합니다.
3. 투두리스트의 todo를 **삭제**할 수 있어야 합니다.
4. 추가 또는 삭제를 할 때마다 `refetch`를 하여 **수정사항이 자동으로 반영**되어야 합니다.
