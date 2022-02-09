import React from "react";

const Timer = () => {
  const now = Date.now();
  const sec = new Date(now).getSeconds();

  return <p>현재 {sec}초!</p>;
};

export default Timer;

// 실시간으로 변하는 컴포넌트
// 진입시점의 초를 보여줌
// 새로고침 할떄마다 바뀜
