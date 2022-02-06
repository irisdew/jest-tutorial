const fn = {
  add: (num1, num2) => num1 + num2,
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
