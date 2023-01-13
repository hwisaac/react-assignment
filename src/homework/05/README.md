# class 만들기

> new Product( {...data}) 로 인스턴스를 생성해야 합니다. <br> > `tsconfig.json` 에서 strict모드를 켭니다. (`strict : true`)

![Snipaste_2023-01-13_22-57-06](https://user-images.githubusercontent.com/54179672/212336788-590cfafb-41d7-47f8-a799-ce709250e5c1.png)

1. `과일`의 데이터가 담긴 배열이 주어집니다. `과일` 객체의 인터페이스 `IFruit` 을 정의하세요
2. `oldFruits` ( `newFruits` )의 타입을 정의하세요

```jsx
const oldFruits: IFruit[] = [
  { name: "apple", price: 1000 },
  { name: "orange", price: 2000 },
  { name: "banana", price: 3000 },
  { name: "melon", price: 4000 },
];
const newFruits: IFruit[] = [
  { name: "mango", price: 5000 },
  { name: "kiwi", price: 6000 },
  { name: "grape", price: 7000 },
  { name: "water melon", price: 8000 },
];
```

2. `Fruits` **클래스**를 정의하세요.

   - `new Fruits(oldFruits)` 로 `Fruits` 인스턴스가 생성됩니다.
   - `get()` 메소드를 정의하세요. 생성할때 넣은 oldFruits 배열을 반환해야 합니다.
   - `set()` 메소드를 정의하세요. 매개변수로 newFruits 과일 배열을 입력받아 과일데이터들을 교체합니다.
   - 정의한 메소드들의 인자와 리턴에 대한 타입을 정의해주세요

3. 다음 컴포넌트 코드로 만들어진 `oldOne` 과 `newOne` 을 출력하세요. (위의 문제들을 해결했다면 자동완성 기능이 작동하여 코딩 실수를 줄여줍니다.)

```jsx
const Homework = () => {
  const myFruits = new Fruits(oldFruits);
  const oldOne = myFruits.get();
  myFruits.set(newFruits);
  const newOne = myFruits.get();

  return <>{/* 작성하세요 */}</>;
};

export default Homework;
```
> 출력된 모습
<img width="334" alt="Snipaste_2023-01-13_22-33-16" src="https://user-images.githubusercontent.com/54179672/212336275-591da57b-293f-4b60-a236-8545c9ede60a.png">
