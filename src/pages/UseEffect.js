import React, { useEffect, useMemo, useState } from "react";

const Home = () => {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    //다운로드 받고(통신)
    let downloadData = 5;
    setData(downloadData);
  };

  useEffect(() => {
    console.log("useEffect실행");
    download();
  }, [search]);

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
    </div>
  );
};

export default Home;
