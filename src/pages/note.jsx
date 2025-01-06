import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = () => {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [category, setCategory] = useState({ value: "", text: "" });
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(""); // Track selected choice
  const [score, setScore] = useState(0); // Track user score
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // Function to handle category selection
  const handleCategorySelection = (value, text) => {
    setCategory({ value, text });
    setIsCategorySelected(true); // Show the quiz section
  };

  // Fetch questions when category is selected
  useEffect(() => {
    if (isCategorySelected && category.value) {
      const URL = `https://opentdb.com/api.php?amount=10&category=${category.value}&difficulty=easy&type=multiple`;
      axios
        .get(URL)
        .then((response) => {
          setQuestions(response.data.results); // Store the questions in state
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [isCategorySelected, category.value]);

  // Get the current question and answers
  const currentQuestion = questions[currentQuestionIndex];
  const allAnswers = currentQuestion
    ? [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers].sort(() => Math.random() - 0.5) // Shuffle answers
    : [];

  // Handle answer selection
  const handleAnswerSelection = (choice) => {
    setSelectedChoice(choice);
  };

  // Handle moving to the next question
  const handleNextQuestion = () => {
    if (selectedChoice === currentQuestion.correct_answer) {
      setScore((prevScore) => prevScore + 1); // Increment score for correct answer
    }
    setSelectedChoice(""); // Reset the selected choice

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsQuizCompleted(true); // Mark quiz as completed
    }
  };

  return (
    <>
      {/* Category Selection Section */}
      <div
        className={`h-screen w-full bg-gray-100 flex-col items-center justify-center ${
          isCategorySelected ? "hidden" : "flex"
        }`}
      >
        <h1 className="text-3xl font-bold mb-4">Choose a Quiz Category</h1>
        <button
          onClick={() => handleCategorySelection(18, "Computer Science")}
          className="h-10 w-72 bg-blue-500 text-white mb-3 rounded-lg hover:bg-blue-600"
        >
          Select Computer Science
        </button>
        <button
          onClick={() => handleCategorySelection(21, "Sports")}
          className="h-10 w-72 bg-blue-500 text-white mb-3 rounded-lg hover:bg-blue-600"
        >
          Select Sports
        </button>
        <button
          onClick={() => handleCategorySelection(10, "Books & Novels")}
          className="h-10 w-72 bg-blue-500 text-white mb-3 rounded-lg hover:bg-blue-600"
        >
          Select Books & Novels
        </button>
        <button
          onClick={() => handleCategorySelection(23, "History")}
          className="h-10 w-72 bg-blue-500 text-white mb-3 rounded-lg hover:bg-blue-600"
        >
          Select History
        </button>
        <button
          onClick={() => handleCategorySelection(9, "General Knowledge")}
          className="h-10 w-72 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Select General Knowledge
        </button>
      </div>

      {/* Quiz Section */}
      <div
        id="quiz_card"
        className={`h-screen w-full bg-gradient-to-r from-sky-500 to-indigo-500 items-center justify-center ${
          isCategorySelected && !isQuizCompleted ? "flex" : "hidden"
        }`}
      >
        <div className="h-[40rem] w-[40rem] bg-white rounded-lg p-5">
          {currentQuestion ? (
            <>
              <h1 className="text-2xl font-semibold">Quiz: {category.text}</h1>
              <hr className="mt-6 border-t-2 border-black" />
              <p className="h-24 w-auto mt-4 text-xl text-slate-500 font-medium">
                {currentQuestion.question}
              </p>

              <ul className="mt-4">
                {allAnswers.map((answer, index) => (
                  <li
                    key={index}
                    className={`text-[#000e3b] border-[1px] border-[#000e3b] p-4 rounded-lg font-semibold mb-4 cursor-pointer hover:shadow-lg ${
                      selectedChoice === answer ? "bg-green-200" : ""
                    }`}
                    onClick={() => handleAnswerSelection(answer)}
                  >
                    {answer}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mb-2">
                <button
                  onClick={handleNextQuestion}
                  disabled={!selectedChoice} // Disable button until a choice is selected
                  className={`px-6 py-4 ${
                    selectedChoice
                      ? "bg-[#000e3b] text-white"
                      : "bg-gray-400 text-gray-200 cursor-not-allowed"
                  } text-center rounded-lg font-semibold`}
                >
                  {currentQuestionIndex + 1 < questions.length
                    ? "Next Question"
                    : "Finish Quiz"}
                </button>
              </div>
              <div className="text-slate-400">
                {currentQuestionIndex + 1} of {questions.length} questions
              </div>
            </>
          ) : (
            <p className="text-white">Loading questions...</p>
          )}
        </div>
      </div>

      {/* Score Section */}
      <div
        className={`h-screen w-full bg-gray-100 flex-col items-center justify-center ${
          isQuizCompleted ? "flex" : "hidden"
        }`}
      >
        <h1 className="text-3xl font-bold mb-4">Quiz Completed!</h1>
        <p className="text-2xl mb-4">Your Score: {score} / {questions.length}</p>
        <button
          onClick={() => window.location.reload()} // Reload the page to start over
          className="h-10 w-72 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Restart Quiz
        </button>
      </div>
    </>
  );
};

export default Quiz;