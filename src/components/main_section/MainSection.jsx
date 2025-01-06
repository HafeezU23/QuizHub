import { Link } from "react-router-dom"
const MainSection = () => {

  
  return (
   <>
   <main className='bg-[#cfdefc] h-[150rem] lg:h-screen w-full'>
       <h2 className='text-lg pl-10 pt-10  lg:text-left  lg:text-3xl lg:pt-56 lg:pl-32 font-extrabold ' >QuizHub Quiz Categories</h2>
       <div className=' bg-red-500 h-2 w-20 ml-10 mb-9 mt-4 lg:ml-36 lg:mt-5 lg:mb-8'></div>
       <div className='grid grid-rows-1 place-content-center gap-4 lg:grid-cols-5 lg:gap-8 w-full lg:overflow-x-auto lg:p-5 no-scrollbar '>
           <div className='h-96 w-72 rounded-lg drop-shadow-lg bg-white text-black'><img className='rounded-t-lg w-full h-[50%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaHcIvLySnWpH4reW_bVbhXWWwbLidnXUVHw&s" alt="category-img" /><p className='p-5 text-2xl font-bold cursor-pointer hover:text-red-500'><Link to="/Redirect" >Computer Science</Link></p><p className='p-5 text-lg font-semibold'>Dive and test your computer science knowledge!</p></div>
           <div className='h-96 w-72 rounded-lg drop-shadow-lg bg-white text-black'><img className='rounded-t-lg w-full h-[50%]' src="https://media.cnn.com/api/v1/images/stellar/prod/231012091138-04-india-vs-pakistan-cricket.jpg?c=original" alt="category-img" /><p className='p-5 text-2xl font-bold cursor-pointer hover:text-red-500'><Link to="/Redirect" >Sports</Link></p><p className='p-5 text-lg font-semibold'>Dive and test your Sports knowledge!</p></div>
           <div className='h-96 w-72 rounded-lg drop-shadow-lg bg-white text-black'><img className='rounded-t-lg w-full h-[50%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-crw0gMQo_4KCXAtx9fxfrNr7eFEBmI1X4g&s" alt="category-img" /><p className='p-5 text-2xl font-bold cursor-pointer hover:text-red-500'><Link to="/Redirect" >Books</Link></p><p className='p-5 text-lg font-semibold'>Dive and test your Books and Novels knowledge!</p></div>
           <div className='h-96 w-72 rounded-lg drop-shadow-lg bg-white text-black'><img className='rounded-t-lg w-full h-[50%]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWpruMRDaGTQMWFWztvZ_sDJhKSTxcIOnceA&s" alt="category-img" /><p className='p-5 text-2xl font-bold cursor-pointer hover:text-red-500'><Link to="/Redirect" >History</Link></p><p className='p-5 text-lg font-semibold'>Dive and test your History knowledge!</p></div>
           <div className='h-96 w-72 rounded-lg drop-shadow-lg bg-white text-black'><img className='rounded-t-lg w-full h-[50%]' src="https://img.freepik.com/premium-vector/back-school-icon-set-design_24911-30729.jpg?semt=ais_hybrid" alt="category-img" /><p className='p-5 text-2xl font-bold cursor-pointer hover:text-red-500'><Link to="/Redirect" >General Knowlegde</Link></p><p className='p-5 text-lg font-semibold'>Dive and test your General knowledge!</p></div>
 </div>
   </main>
   </>
  )
}

export default MainSection