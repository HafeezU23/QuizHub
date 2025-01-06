import React from "react";

const Guidelines = () => {
  // Categories with details and rules
  const categories = [
    {
      id: 18,
      name: "Computer Science",
      description:
        "This category tests your knowledge of computer programming, algorithms, and technology trends.",
      
    },
    {
      id: 21,
      name: "Sports",
      description:
        "Questions will cover various sports, athletes, and historic sports events.",
      
    },
    {
      id: 10,
      name: "Books & Novels",
      description:
        "Test your knowledge of famous authors, novels, and literary works.",
      
    },
    {
      id: 23,
      name: "History",
      description:
        "Explore questions on global historical events, wars, and civilizations.",
      
    },
    {
      id: 9,
      name: "General Knowledge",
      description:
        "A mix of questions from science, pop culture, geography, and more.",
     
    },
  ];

  return (
    <div className="h-[80rem] lg:h-screen w-full bg-gray-100 flex items-center justify-center ">
      <div className="w-3/4 bg-white rounded-lg shadow-lg p-3 lg:p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Quiz Guidelines</h1>
        <p className="text-gray-600 text-center mb-4">
          Please review the rules and details of each quiz category before
          starting. Click a category to proceed to the quiz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="border border-gray-300 rounded-lg p-4 hover:shadow-md cursor-pointer"
             
            >
              <h2 className="text-xl font-semibold text-blue-600">
                {category.name}
              </h2>
              <p className="text-gray-500 text-sm mt-2">{category.description}</p>
             
            </div>

          ))}
        </div>
        <h3 className="font-bold text-gray-700 mt-4">Rules:</h3>
              <ul className="list-disc list-inside text-gray-600">
               <li>Only one category can be chosen at a time.</li>
               <li>Each category has 10 set of questions.</li>
               <li>Each question has 4 options.</li>
               <li>After choosing a option , you can't change it.</li>
               <li>Each question has a score of 1 point.</li>

              </ul>
      </div>
    </div>
  );
};

export default Guidelines;