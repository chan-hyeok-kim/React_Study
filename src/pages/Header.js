import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
          <ol>
            <li>
              <Link to="/useEffect">useEffect로 가기</Link>
            </li>
            <li>
              <Link to="/useMemo">useMemo로 가기</Link>
            </li>
            <li>
              <Link to="/useRef">useRef로 가기</Link>
            </li>
            <li>
              <Link to="/ComponentsStyled">ComponentsStyled로 가기</Link>
            </li>
          </ol>
        </ul>
      </HeaderList>
    </div>
  );
};

export default Header;
