## 함수 매개변수와 리턴값의 타입

> `strict: true`

1. 함수를 읽고, 역할을 유추하여 타입을 명시해주세요

### 예시1

```ts
// 문제
function sayHello(name) {
  console.log(`Hello ${name}!`);
}
// 풀이
function sayHello(name: string): void {
  console.log(`Hello ${name}!`);
}
```

### 예시2

```ts
// 문제
function add(a, b) {
  return a + b;
}
// 풀이
function add(a: number, b: number): number {
  return a + b;
}
```

### 예시3

```ts
// 문제
function sumOf(nums) {
  return nums.reduce((a, c) => a + c, 0);
}
// 풀이
function sumOf(nums: number[]): number {
  return nums.reduce((a, c) => a + c, 0); // a,c는 number 로 추론이 되기 때문에 명시하지 않음
}
```

### 예시4

```ts
// 문제
function isPalindrome(input) {
  input = input.toUpperCase();
  let l = 0;
  let r = input.length - 1;

  while (l < r) {
    if (input[l] !== input[r]) {
      console.log(input[l], input[r]);
      return false;
    }
    l++;
    r--;
  }
  return true;
}
// 풀이
function isPalindrome(input: string): boolean {
  input = input.toUpperCase();
  let l = 0;
  let r = input.length - 1;

  while (l < r) {
    if (input[l] !== input[r]) {
      console.log(input[l], input[r]);
      return false;
    }
    l++;
    r--;
  }
  return true;
}
```

### 예시5

```ts
// 문제
function isLeftLarger(a, b) {
  return a > b ? "Yes" : "No";
}
// 풀이
function isLeftLarger(a: number, b: number): string {
  return a > b ? "Yes" : "No";
}
```

### 예시6

```ts
// 문제
function lowerCase(input) {
  let ans = "";
  for (x of input) {
    ans += `${x.toLowerCase()}\n`;
  }
  console.log(ans);
}
// 풀이
function lowerCase(input: string): void {
  let ans = "";
  for (x of input) {
    ans += `${x.toLowerCase()}\n`;
  }
  console.log(ans);
}
```
