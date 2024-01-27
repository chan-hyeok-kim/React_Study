import React from "react";
import { styled } from "styled-components";

const Home = (props) => {
  console.log(props);

  const args = props.boards;

  //구조분할 할당
  const { boards, setBoards, id, number, setNumber, users } = props;

  let StyledDeleteButton = styled.button`
    color: ${() => (users.username === "ssar" ? "blue" : "red")};
  `;

  return (
    <div>
      <h1>홈</h1>
      <StyledDeleteButton onClick={() => setBoards([])}>
        전체삭제
      </StyledDeleteButton>
      <button onClick={() => setBoards([])}>전체삭제</button>
      {boards.map((n) => (
        <h3>
          제목:{n.title} 내용:{n.content}
        </h3>
      ))}
      ;
    </div>
  );
};

export default Home;
