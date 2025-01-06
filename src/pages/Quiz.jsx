import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Quiz = () => {


const [isCategorySelected, setIsCategorySelected] = useState(false);
const [category, setCategory] = useState({value: '', text: ''});
const [questions, setQuestions] = useState([])
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
const [selectedChoice, setSelectedChoice] = useState("")
const [score, setScore] = useState(0)
const [IsQuizCompleted, setIsQuizCompleted] = useState(false)
const [shuffleArray, setShuffleArray] = useState([])
const CurrentQuestion = questions[currentQuestionIndex];



useEffect(() => {
  if (CurrentQuestion) {
    const allAnsweres = [
      CurrentQuestion.correct_answer,
      ...CurrentQuestion.incorrect_answers,
    ];
    setShuffleArray(allAnsweres.sort(() => Math.random() - 0.5)); // Shuffle answers
  }
}, [CurrentQuestion]);



  const handleCategorySelection = (value, text) => {
    setCategory({value, text})
    setIsCategorySelected(true); 
  };
  

  const handleAnswereSelection = ( choice ) =>{
      if(!selectedChoice){
         setSelectedChoice(choice)
      }
         
         
  };

  const handleNextQuestion = () =>{
     if(selectedChoice === CurrentQuestion.correct_answer){
      setScore((prev)=>prev + 1)
     }
     setSelectedChoice("")

     if(currentQuestionIndex +1 <questions.length){
      setCurrentQuestionIndex((prev)=>
        prev+1
      )
     }
     else {
      setIsQuizCompleted(true)
     }
  };


  const decodeHTML = (html) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };


    
    useEffect(() => {
      if (category.value) {
        const URL = `https://opentdb.com/api.php?amount=10&category=${category.value}&difficulty=easy&type=multiple`;
    
        axios
          .get(URL)
          .then((response) => {
            const decodedQuestions = response.data.results.map((q) => ({
              ...q,
              question: decodeHTML(q.question),
              correct_answer: decodeHTML(q.correct_answer),
              incorrect_answers: q.incorrect_answers.map(decodeHTML),
            }));
            setQuestions(decodedQuestions);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }
    }, [category.value]);
  
  
   
  

  return (
    <>
      {/* Category Selection Section */}
      <div className={`h-screen w-full bg-gray-100 flex-col items-center justify-center ${
          isCategorySelected == true ? 'hidden' : 'flex' // Hide if category is not selected
        }`}>
        <h1 className="text-3xl font-bold mb-4">Choose a Quiz Category</h1>
        <button
          onClick={()=>handleCategorySelection(18, "Computer Science")} // Simulate selecting a category
          className="h-10 w-72 bg-blue-500 text-white mb-3 rounded-lg hover:bg-blue-600"
        >
           Select Computer Science
        </button>
        <button
          onClick={()=>handleCategorySelection(21, "Sports")}  // Simulate selecting a category
          className="h-10 w-72 bg-blue-500 text-white mb-3 rounded-lg hover:bg-blue-600"
        >
           Select Sports
        </button>
        <button
          
          onClick={()=>handleCategorySelection(10, "Books & Novels")} 
           // Simulate selecting a category
          className="h-10 w-72 bg-blue-500 text-white mb-3 rounded-lg hover:bg-blue-600"
        >
           Select Books & Novels
        </button>
        <button
          onClick={()=>handleCategorySelection(23, "History")}  // Simulate selecting a category
          className="h-10 w-72 bg-blue-500 text-white mb-3 rounded-lg hover:bg-blue-600"
        >
          Select History
        </button>
        <button
          onClick={()=>handleCategorySelection(9, "General Knowlegde")}  // Simulate selecting a category
          className="h-10 w-72 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Select General Knowlegde
        </button>
      </div>

      {/* Quiz Section - Hidden by default */}
      <div
        id="quiz_card"
        className={`h-screen w-full bg-gradient-to-r from-sky-500 to-indigo-500 items-center justify-center ${
          isCategorySelected && !IsQuizCompleted == true ? 'flex' : 'hidden' // Hide if category is not selected
          
        }`}
      >
        <div className="h-[40rem] w-[40rem] bg-white rounded-lg p-5">
          {CurrentQuestion ? (
         <>
          <h1 className="text-2xl font-semibold">Quiz: {category.text}</h1>
          <hr className="mt-6 border-t-2 border-black" />
          <p className="h-24 w-auto mt-4 text-xl text-slate-500 font-medium">
           {CurrentQuestion.question}
          </p>
    
          <ul className="mt-4">
          {shuffleArray.map((item, index) => (
                  <li
                    key={index}
                    className={`text-[#000e3b] border-[1px] border-[#000e3b] p-4 rounded-lg font-semibold mb-4 cursor-pointer hover:shadow-lg ${
                      selectedChoice === item ? "bg-[#5671f0] text-white" : ""
                    }`}
                    onClick={() => handleAnswereSelection(item)}
                    style={{ pointerEvents: selectedChoice ? "none" : "auto" }} // Disable clicking if already selected
                  >
                    {item}
                  </li>
                ))}
            
           
            <div className="flex justify-center mb-2">
            <button
           className={`px-6 py-4 ${
            selectedChoice
            ? "bg-[#000e3b] text-white"
            : "bg-gray-400 text-gray-800 cursor-not-allowed"
           } rounded-lg font-semibold`}
           disabled={!selectedChoice}
         onClick={handleNextQuestion}
>
  Submit
</button>

            </div>
            
          </ul>
          <div className="text-slate-400">{currentQuestionIndex+1} / 10 questions</div>

          </>
          ): ( 
            <p className="text-red-500">Loading questions...</p>
           )
          }
        </div>
      </div>

      <div
        className={`h-screen w-full bg-gray-100 flex-col items-center justify-center ${
         IsQuizCompleted ? "flex" : "hidden"
        }`}
      >
        <h1 className="text-3xl font-bold mb-4">Quiz Completed ☑️</h1>
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

