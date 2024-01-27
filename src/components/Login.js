import React from "react";
import styled from "styled-components";

const StyledLoginBox = styled.div`
  padding: 30px 0 30px 30px;
`;

const Login = () => {
  return (
    <StyledLoginBox>
      <h1>로그인 페이지입니다</h1>
    </StyledLoginBox>
  );
};

export default Login;
