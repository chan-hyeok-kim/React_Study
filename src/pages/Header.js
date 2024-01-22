import React from "react";
import styled from "styled-components";

//하나의 컴포넌트 생성(재사용)

const HeaderList = styled.div`
  border: 1px solid black;
  height: 300px;
`;

const Header = () => {
  return (
    <div>
      <HeaderList>
        <ul>
          <li>오시는길: 서울 강남구......</li>
          <li>전화번호:020222</li>
        </ul>
      </HeaderList>
    </div>
  );
};

export default Header;
