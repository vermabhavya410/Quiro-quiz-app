import "./home.css";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import quizData from "../Store/questions";



function Home() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (categoryKey) => {
    let selectedQuestions = [];

    if (categoryKey === "all") {
      selectedQuestions = [
        ...quizData.generalKnowledge,
        ...quizData.programmingLanguages,
        ...quizData.reactFramework,
        ...quizData.generalEnglish,
      ];
    } else {
      selectedQuestions = quizData[categoryKey];
    }
    localStorage.setItem(
      "selectedQuestions",
      JSON.stringify(selectedQuestions)
    )
    setOpen(false);

  }

  return (
    <>

      <div className="main">

        <div className="logodiv">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="title">Quiro: Learn with Play</h1>
          <h3>
            Quiro is an <span>interactive quiz application</span> built with React that allows users
            to test their knowledge through <span>timed, score-based quizzes</span> with instant feedback.
          </h3>
        </div>

        <div className="buttondiv">
          <Link to="/quiz">
            <button className="playbtn">Play Now</button>
          </Link>

          <button className="categorybtn"
            onClick={() => setOpen(true)}>
            Choose Category
          </button>
        </div>

      </div>

      {open && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Choose Category</h2>
            <button onClick={() => handleCategoryClick("all")}>
              All Categories
            </button>

            <button onClick={() => handleCategoryClick("generalKnowledge")}>
              General Knowledge
            </button>

            <button onClick={() => handleCategoryClick("programmingLanguages")}>
              Programming Languages
            </button>

            <button onClick={() => handleCategoryClick("reactFramework")}>
              React Framework
            </button>

            <button onClick={() => handleCategoryClick("generalEnglish")}>
              General English
            </button>

          </div>
        </div>
      )}
    </>
  )
}

export default Home;