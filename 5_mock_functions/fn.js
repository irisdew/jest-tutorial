const fn = {
  add: (num1, num2) => num1 + num2,
  createUser: (name) => {
    // 유저를 추가하는 함수가 필요한데, 테스트 할때마다 진짜로 유저가 추가된다면 곤란
    // 그렇다고 테스트 끝날때마다 rollback 해주기는 귀찮
    // => mocking module 사용!
    console.log("실제로 사용자가 생성되었습니다");
    return { name };
  },
  connectUserDB: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          name: "Mike",
          age: 30,
          gender: "male",
        });
      }, 500);
    });
  },
  connectCarDB: () => {
    return new Promise((res) => {
      setTimeout(() => {
        res({
          brand: "bmw",
          name: "z4",
          color: "red",
        });
      }, 500);
    });
  },
  disconnectDB: () => {
    return new Promise((res) => {
      setTimeout(() => {
        setTimeout(() => {
          res();
        });
      }, 500);
    });
  },
};

module.exports = fn;
