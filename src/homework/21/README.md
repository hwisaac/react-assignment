# react-query 를 사용해서 네트워크 자원 아끼기

- `react-query` 는 fetch 해온 데이터를 캐시에 저장하고 관리할 수 있습니다. 이를 이용하면 불필요한 네트워크 요청을 줄일 수 있습니다.

## 기능구현

1. `react-query` 를 사용해서 youtube 검색 기능 구현하기
2. **이미 검색했던 `keyword` 에 대해서는, 캐시 데이터를 활용해서 랜더링 하기 (네트워크 요청 아끼기)**
3. 만약 네트워크 요청 **할당량을 초과**해서 에러가 나는 경우 목업데이터를 랜더링하기 (예외상황 대비하기)
4. 빈 문자열 `""` 로 검색하면, 목업데이터를 랜더링 하기

## 참고 키워드

- useQuery
- queryKey
- queryFn
- staleTime, cacheTime


https://user-images.githubusercontent.com/54179672/217478913-93f35a23-96f5-46f5-a798-1f75d7c08132.mp4
- (api 로 네트워크 요청할 때마다 console.log 를 찍는 세팅입니다.)
- frozen 과 avengers 가 처음 검색시에만, fetching 이 일어나고, 재검색할 때는 캐싱 데이터를 활용하여 fetching 이 일어나지 않는 모습입니다.
- 캐싱데이터를 활용하면 loading 조차 일어나지 않고 즉각 랜더링되어서 사용성이 향상되었습니다.
