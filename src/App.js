import logo from "./logo.svg";
import "./App.css";

import { Container } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import UseMemo from "./pages/UseMemo";
import UseEffect from "./pages/UseEffect";
import UseRef from "./pages/UseRef";

function App() {
  return (
    <div>
      <div className="header">
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
        </ol>
      </div>
      <Container>
        <Routes>
          <Route path="/useMemo" exact={true} element={<UseMemo />} />
          <Route path="/useEffect" exact={true} element={<UseEffect />} />
          <Route path="/useRef" exact={true} element={<UseRef />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
