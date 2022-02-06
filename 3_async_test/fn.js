const fn = {
  getName: (callback) => {
    const name = "Mike";
    setTimeout(() => {
      callback(name);
    }, 3000);
  },
  throwErr: (callback) => {
    setTimeout(() => {
      throw new Error("서버 에러...");
    }, 3000);
  },
  getAge: () => {
    const age = 20;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(age);
      }, 3000);
    });
  },
  throwErrPromise: () => {
    const age = 20;
    return new Promise((res, rej) => {
      setTimeout(() => {
        rej("error");
      }, 3000);
    });
  },
};

module.exports = fn;
