import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";

const HomePage = () => {
  //list 뿌려줄거임
  //HTTP요청(fetch,axios(다운)) - ajax는 못씀

  const [boards, setBoards] = useState([]);

  const [users, setUsers] = useState([{ id: 1, username: "ssar" }]);

  //의존성 빈 배열이니 한번만 실행
  useEffect(() => {
    //다운로드 가정
    let datas = [
      { id: 1, title: "제목1", content: "내용1" },
      { id: 2, title: "제목2", content: "내용2" },
      { id: 3, title: "제목3", content: "내용3" },
    ];
    setBoards([...datas]);
  }, []);

  return (
    <div>
      <Header />
      <Home boards={boards} id={1} setBoards={setBoards} users={users} />
      <Footer />
    </div>
  );
};

export default HomePage;
