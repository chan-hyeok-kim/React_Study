import logo from "./logo.svg";
import "./App.css";

import { Container } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import UseMemo from "./pages/UseMemo";
import UseEffect from "./pages/UseEffect";
import UseRef from "./pages/UseRef";
import ComponentsStyled from "./pages/ComponentsStyled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/useMemo" exact={true} element={<UseMemo />} />
          <Route path="/useEffect" exact={true} element={<UseEffect />} />
          <Route path="/useRef" exact={true} element={<UseRef />} />

          <Route
            path="/componentsStyled"
            exact={true}
            element={<ComponentsStyled />}
          />
          <Route path="/" exact={true} element={<LoginPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
