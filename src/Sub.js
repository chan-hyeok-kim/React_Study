import React, { useState } from "react";

const Sub = () => {
  let sample = [
    { id: 1, name: "홍길동" },
    { id: 2, name: "임꺽정" },
    { id: 3, name: "장보고" },
    { id: 4, name: "이순신" },
  ];
  //다운로드 받음
  const [num, setNum] = useState(5);
  const [users, setUsers] = useState(sample);
  const s = sample.concat({ id: 5, name: "김치즈" });

  const download = () => {
    console.log(sample);
    setUsers([...sample, { id: num, name: "조자룡" }]);
    setNum(num + 1);
  };
  return (
    <div>
      <button onClick={download}>다운로드</button>
      <div>
        {users.map((u) => (
          <h1>
            {u.id},{u.name}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default Sub;
