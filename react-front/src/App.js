import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import AppHeader from "./components/Header";
import AppFooter from "./components/Footer";
import Home from "./pages/Home";
import Learning from "./pages/Learning";
import MyPage from "./pages/MyPage";
import Quiz from "./pages/Quiz";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };
  const onClickLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      <header className="mb-auto" id="header">
        <AppHeader
          isLoggedIn={isLoggedIn}
          onClickLogin={onClickLogin}
          onClickLogout={onClickLogout}
        />
      </header>
      <main id="main">
        <section className="body-block">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/learning" element={<Learning />}></Route>
            <Route path="/quiz" element={<Quiz />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
          </Routes>
        </section>
      </main>
      <footer id="footer">
        <AppFooter />
      </footer>
    </div>
  );
}

export default App;
