import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function NavBar(){
 return( 
<nav className="w-full border-2 border-gray-400 flex items-center justify-between px-[50px] mb-4">
    <h3 className="text-black font-gray-600
                  sm:text-2xl
                  lg:text-3xl
                  ">Nantasit</h3>
    <img className="w-10 h-10
                    sm:hidden" 
                    src="./src/assets/Frame.png" alt="Logo" />
    <div className='hidden w-[30%] h-[70%] sm:block sm:max-w-[276px]  '> 
    <button className="w-[50%] h-[100%] border-2  bg-[#FFFFFF] text-[16px] font-semibold rounded-[50px]">Log in</button>
    <button className="w-[50%] h-[100%] border-2  bg-[#26231E] text-[#FFFFFF] text-[16px] font-semibold rounded-[50px]">sign in</button>
    </div>

</nav>
 )
}
function HeroSection () {
  return(
    <>
      <section className='h-[1098px] flex flex-col items-center justify-evenly px-6 mt-[20px]
                          sm:h-[400px] sm:flex-row sm:justify-between sm:px-0 sm:mt-0;  sm:w-[90%]  
                          lg:h-[529px] lg:max-w-[1200px]'>
        <div className='sm:w-[28%] sm:flex sm:flex-col
                        lg:gap-[24px]' >
          <h1 className='text-[40px] leading-[48px] text-center font-bold 
                          sm:text-[23px] sm:text-end sm:leading-[30px]
                          lg:text-[49px]  lg:leading-[55px]'
                        >Stay Informed,<br/> Stay Inspired</h1>
          <p className='text-[16px] text-center text-[#75716B] p-5
                        sm:text-end 
                        '>Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.</p>
        </div>
        <img className='h-auto sm:w-[30%]' src="./src/picture/img/People_cat.png" alt="People and cat" />
        <div className='sm:w-[35%] sm:h-[284px] bg-blue-100
                        lg:w-[28%]'>
            <h10 className='text-[12px] text-[#75716B]'>-Author</h10>
            <h5 className='text-[24px] pb-[12px] font-bold
                          sm:-text[]'>Thompson P.</h5>
            <p className='text-[14px] text-[#75716B]
                          sm:text-[13px]
                          lg:text-[16px]'>I am a pet enthusiast and freelance writer who specializes in animal behavior and care.
              With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.<br/><br/>
              When i’m not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes
            </p>
          </div>
      </section>
    </>
  )
}


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <NavBar/>
    <div className='flex flex-col items-center '>
    <HeroSection/>
    </div>
    </>
  )
}

export default App
