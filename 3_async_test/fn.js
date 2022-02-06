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
};

module.exports = fn;
