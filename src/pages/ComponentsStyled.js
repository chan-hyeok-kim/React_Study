import React, { useEffect, useRef } from "react";
import { Title } from "./MyCss";

const ComponentsStyled = () => {
  const tRef = useRef(null);

  useEffect(() => {
    const t = document.createElement("h1");
    t.style.color = "red";
    t.innerText = "테스트";
    tRef.current.appendChild(t);
  }, []);

  return (
    <div>
      <div ref={tRef}></div>

      <Title>스타일드</Title>
    </div>
  );
};

export default ComponentsStyled;
