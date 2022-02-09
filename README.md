# Jest Tutorial

코딩앙마 Jest 강좌 (https://youtu.be/g4MdUjxA-S4)

Jest 공식문서 (https://jestjs.io/)

---

## Jest

facebook에서 만든 테스팅 도구

zero config 철학을 가지고 있어서 별개의 설정 없이 빠르게 테스트를 작성, 실행 가능

### .test.js

`npm test`로 jest 를 실행하면

.test.js 파일이나 \_ _ test _ \_ 폴더 안에 있는 파일은 모두 test 해준다

특정 파일이나 경로명을 붙여 `npm test`를 해도 된다

## 테스트 작성해보기

```jsx
test("3 더하기 3은 5가 아니다", () => {
  expect(fn.add(3, 3)).not.toBe(5);
});
```

toBe 부분이 Matcher 다

여러가지 Matcher가 있다

### toEqual toBe

```jsx
test("2 더하기 3은 5다", () => {
  expect(fn.add(2, 3)).toBe(5);
});

test("2 더하기 3은 5야", () => {
  expect(fn.add(2, 3)).toEqual(5);
});
```

둘 다 통과

```jsx
test("이름, 나이를 입력하면 객체를 반환해줘", () => {
  expect(fn.makeUser("Mike", 30)).toBe({ name: "Mike", age: 30 });
});
```

통과 못함

왜냐! 객체나 배열은 재귀적으로 돌면서 값을 확인해야하기 떄문에 toEqual을 써줘야 한다

## 비동기 테스트

```jsx
test("3초 후에 받아온 이름은 Mike", () => {
  function callback(name) {
    expect(name).toBe("Tom");
  }
  fn.getName(callback);
});
```

1ms 만에 통과해버린다? 왜지?

```jsx
test("3초 후에 받아온 이름은 Mike", (done) => {
  function callback(name) {
    expect(name).toBe("Tom");
  }
  fn.getName(callback);
});
```

done을 넘겨줘야 함

근데 또 실패함.

done을 호출하지 않았기 때문

```jsx
test("3초 후에 받아온 이름은 Mike", (done) => {
  function callback(name) {
    expect(name).toBe("Mike");
    done();
  }
  fn.getName(callback);
});
```

통과!

### 테스트 전후 작업

테스트 전후에 쓸 수 있는 헬퍼

- beforeEach, beforeAll, afterEach, afterAll

- only, skip

## Mock Functions

: 테스트 하기 위해 흉내만 내는 함수

```jsx
// mock function

const mockFn = jest.fn();

mockFn();
mockFn(1);

test("dd", () => {
  console.log(mockFn.mock.calls); // [ [], [ 1 ] ]
  expect("dd").toBe("dd");
});
```

.mock 프로퍼티에는 호출되었던 값이 다 저장되어있음

## React & Snapshot test

스냅샷 테스트 실패 failed 됐을 때

1. 새로운 스냅샷으로 업데이트 한다

   Watch Usage - u를 눌러서 업데이트

   → 바로 다시 test 실행하면 다 통과

   _! 그래서 주의해야 함
   (버그가 있어서 테스트한건데 무심코 update 눌러버리면 버그가 해결되지 않은 상태에서 테스트가 통과됨)_
   <br/>

2. mock function 사용

   실시간으로 바뀌는 데이터가 있는 경우 (ex. 초, 분, 시간)

   mock 함수를 사용해 변하는 값을 고정시키기! = 하나의 스냅샷
