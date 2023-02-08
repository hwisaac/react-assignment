# 커스텀 Hook 만들어보기

1. `useCustomMutation` 훅과 `useCustomQuery` 훅을 만들어 주세요
2. `useCustomQuery` 는 "GET" 메서드인 fetcher 함수를 매개변수로 갖습니다.
<<<<<<< HEAD
3. `useMutationQuery` 는 "POST" | "PUT" | "DELETE" 메서드인 fetcher 함수를 매개변수로 갖습니다.
=======
3. `useCustomMutation` 는 "POST" | "PUT" | "DELETE" 메서드인 fetcher 함수를 매개변수로 갖습니다.
>>>>>>> eca759ab57adba91ff7db68078995275c345b02b

## 구현 기능

1. 투두리스트를 랜더링해야 합니다.
2. 투두리스트에 새로운 todo 를 **추가**할 수 있어야 합니다.
3. 투두리스트의 todo를 **삭제**할 수 있어야 합니다.
4. 추가 또는 삭제를 할 때마다 `refetch`를 하여 **수정사항이 자동으로 반영**되어야 합니다.


https://user-images.githubusercontent.com/54179672/217150393-3f03e10a-3973-422a-9906-58bf34b35d13.mp4



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

## API 사용법

요청 주소(Endpoint)

```curl
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
```

모든 API 요청(Request) `headers`에 아래 정보가 꼭 포함돼야 합니다!  
`username`은 `KDT3_ParkYoungWoong`와 같이 본명을 포함해야 합니다!  
확인할 수 없는 사용자의 DB 정보는 임의로 삭제될 수 있습니다!

```json
{
  "content-type": "application/json",
  "apikey": "FcKdtJs202209",
  "username": "<YOUR_NAME>"
}
```

API 사용 예시:

```js
async function createTodo() {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apikey: "FcKdtJs202209",
        username: "KDT3_ParkYoungWoong",
      },
      body: JSON.stringify({
        title: "아침 먹기!",
      }),
    }
  );
  const json = await res.json();
  console.log(json);

  return json;
}
```

### 목록 조회

전체 할 일 목록을 조회합니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
  \ -X 'GET'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
type ResponseValue = Todo[]; // 할 일 목록

interface Todo {
  id: string; // 할 일 ID
  order: number; // 할 일 순서
  title: string; // 할 일 제목
  done: boolean; // 할 일 완료 여부
  createdAt: string; // 할 일 생성일
  updatedAt: string; // 할 일 수정일
}
```

```json
[
  {
    "id": "mnIwaAPIAE1ayQmqekiR",
    "order": 0,
    "title": "JS 공부하기",
    "done": false,
    "createdAt": "2021-10-28T05:18:51.868Z",
    "updatedAt": "2021-10-28T05:18:51.868Z"
  },
  {
    "id": "tMzPImGoWtRdJ6yyVv2y",
    "order": 1,
    "title": "과제 PullRequest(PR) 생성",
    "done": true,
    "createdAt": "2021-10-28T04:16:53.980Z",
    "updatedAt": "2021-10-28T09:40:17.955Z"
  },
  {
    "id": "Rq8BebKihCgteHHhMIRS",
    "order": 2,
    "title": "API 스터디",
    "done": false,
    "createdAt": "2021-10-28T04:17:02.510Z",
    "updatedAt": "2021-10-28T04:17:02.510Z"
  }
]
```

### 항목 추가

할 일 항목을 새롭게 추가합니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
  \ -X 'POST'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  title: string; // 할 일 제목 (필수!)
  order?: number; // 할 일 순서
}
```

```json
{
  "title": "KDT 과정 설계 미팅",
  "order": 2
}
```

응답 데이터 타입 및 예시:

```ts
interface ResponseValue {
  id: string;
  order: number;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}
```

```json
{
  "id": "7P8dOM4voAv8a8cfoeKZ",
  "order": 0,
  "title": "KDT 과정 설계 미팅",
  "done": false,
  "createdAt": "2021-10-29T07:20:02.749Z",
  "updatedAt": "2021-10-29T07:20:02.749Z"
}
```

### 항목 삭제

특정 할 일 항목을 삭제합니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId
  \ -X 'DELETE'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
type ResponseValue = true;
```
