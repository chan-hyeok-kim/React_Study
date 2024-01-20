import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Sub from "./Sub";

let a = 10;
const b = 20;

const myStyle = {
  color: "red",
};

function StudyReact() {
  let c;
  console.log(1, c);

  let list = [1, 2, 3];

  //let number = 1;
  const [number, setNumber] = useState(1);

  const add = () => {
    setNumber(number + 1);
    console.log("add", number);
  };

  return (
    <div>
      <div style={myStyle}>
        안녕 {a === 10 ? "10입니다." : "10이 아닙니다."}
      </div>
      <h1 className="box-style">해딩태그 {b === 20 && "20입니다."}</h1>
      <hr />

      <div>
        <div>
          {list.map((n) => (
            <h1>{n}</h1>
          ))}
        </div>
      </div>

      <hr />
      <div>
        <h1>숫자 : {number}</h1>
        <button onClick={add}>더하기</button>
      </div>

      <hr />
      <Sub />
    </div>
  );
}

export default StudyReact;
