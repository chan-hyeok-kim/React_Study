import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [str, setStr] = useState("합계");

  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log("sum함수 실행됨", sum);
    return sum;
  };
  const [list, setList] = useState([1, 2, 3, 4]);

  const addResult = useMemo(() => getAddResult(), [list]);
  return (
    <div>
      <div>
        {list.map((i) => (
          <h1>{i}</h1>
        ))}
      </div>
      <div>
        {str} :{addResult}
      </div>

      <div>
        <button
          onClick={() => {
            setList([...list, 10]);
          }}
        >
          리스트 값 추가
        </button>
        <button
          onClick={() => {
            setStr("안녕");
          }}
        >
          문자변경
        </button>
      </div>
    </div>
  );
};

export default UseMemo;
