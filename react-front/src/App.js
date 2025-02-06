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
import Login from "./pages/Login";
import Board from "./components/Board";
import DetailView from "./components/DetailView";
import MyPageInfo from "./components/myPageRightComponents/MyPageInfo";
import MyPageGrade from "./components/myPageRightComponents/MyPageGrade";
import MyPageSubmitQuiz from "./components/myPageRightComponents/MyPageSubmitQuiz";
import MyPageStudyConcept from "./components/myPageRightComponents/MyPageStudyConcept";
import MyPageBookmarkConcept from "./components/myPageRightComponents/MyPageBookmarkConcept";
import ConceptCreate from "./pages/ConceptCreate";
import QuizCreate from "./pages/QuizCreate";
import ConceptUpdate from "./pages/ConceptUpdate";
import QuizAnswer from "./pages/QuizAnswer";
import QuizIndex from "./pages/QuizIndex";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    console.log("여기 되는거야?");
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
            <Route
              path="/login"
              element={<Login onClickLogin={onClickLogin} />}
            ></Route>
            <Route path="/learning" element={<Learning />}>
              <Route path=":id" element={<Board />}></Route>
              <Route path=":id/detail/:id" element={<DetailView />} />
            </Route>
            <Route path="/quiz" element={<Quiz />}>
              <Route path="" element={<QuizIndex />}></Route>
              <Route path="today" element={<QuizAnswer />}></Route>
            </Route>

            <Route path="/mypage" element={<MyPage />}>
              <Route path="info" element={<MyPageInfo />}></Route>
              <Route path="grade" element={<MyPageGrade />}></Route>
              <Route path="submit-quiz" element={<MyPageSubmitQuiz />}></Route>
              <Route
                path="study-concept"
                element={<MyPageStudyConcept />}
              ></Route>
              <Route
                path="bookmark-concept"
                element={<MyPageBookmarkConcept />}
              ></Route>
            </Route>
            <Route path="/concept-create" element={<ConceptCreate />}></Route>
            <Route path="/concept-update" element={<ConceptUpdate />}></Route>
            <Route path="/quiz-create" element={<QuizCreate />}></Route>
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
