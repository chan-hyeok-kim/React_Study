import logo from "./logo.svg";
import "./App.css";
import { useEffect, useMemo, useState } from "react";
import { Container } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import UseMemo from "./pages/UseMemo";

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);
  const [str, setStr] = useState("합계");
  const download = () => {
    //다운로드 받고(통신)
    let downloadData = 5;
    setData(downloadData);
  };

  useEffect(() => {
    console.log("useEffect실행");
    download();
  }, [search]);

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
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색하기
      </button>
      <h1>데이터:{data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>

      <Link to="/useMemo">useMemo</Link>

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
      <Container>
        <Routes>
          <Route path="/useMemo" exact={true} element={<UseMemo />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
