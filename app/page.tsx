'use client'
import { useState } from 'react';
import Chart from '../app/components/Chart'
import Modal from '../app/components/Modal'



export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return (
    <>
    <div className={`${isModalOpen ? 'blur-sm opacity-50' : ''}`}>
      <section id="sidebar" className="fixed top-0 left-0 w-72 h-full bg-white" style={{border:"1px solid black"}}>
        <a  href="#" className="h-14 flex items-center text-black sticky top-0 left-0 z-50 pb-5" style={{border:"1px rounded black",boxSizing:"content-box",fontWeight:"700",fontSize:"24px"}}>
          <i className='flex min-w-[60px] justify-center  mt-1'></i>
          <span className="text">DashBoard</span>
        </a>
         
        <hr className="ml-5 mr-5 mt-2 border-t-black " />
        <ul className="w-100% mt-12 flex flex-col justify-center items-center">
          <li className="relative">
            <a className="w-full h-full overflow-x-hidden" style={{borderRadius:"48px",fontSize:"16px"}} href="#">
              <i className='flex min-w-[60px]' ></i>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='mt-8 flex min-w-[60px] items-center' ></i>
              <span className="text">My Store</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='mt-3 flex min-w-[60px] ' ></i>
              <span className="text">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='mt-3 flex min-w-[60px] ' ></i>
              <span className="text">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='mt-3 flex min-w-[60px] ' ></i>
              <span className="text">Team</span>
            </a>
          </li>
        </ul>
        <ul className="w-full flex items-center justify-center mt-12">
          <li>
            <a href="#">
              <i className='mt-3 min-w-[60px] ' ></i>
              <span className="text">
              <button className="h-10 w-36 flex flex-row justify-center items-center font-bold text-lg text-[#14fca9] bg-black rounded-md transition-all ease-in hover:bg-[#9b9b9b] hover:text-black hover:border-2 hover:border-[#fefae0] my-3   sm:h-12 sm:w-40 sm:flex sm:flex-row sm:justify-center sm:items-center sm:font-bold sm:text-lg sm:text-[#14fca9] sm:bg-black sm:rounded-lg sm:transition-all sm:ease-in sm:hover:bg-white sm:hover:text-black sm:hover:border-2 sm:hover:border-[#fefae0] sm:my-3   md:h-12 md:w-40 md:flex md:flex-row md:justify-center md:items-center md:font-bold md:text-lg md:text-[#14fca9] md:bg-black md:rounded-lg md:transition-all md:ease-in md:hover:bg-white md:hover:text-black md:hover:border-2 md:hover:border-[#fefae0] md:my-4   lg:h-12 lg:w-40 lg:flex lg:flex-row lg:justify-center lg:items-center lg:font-bold lg:text-lg lg:text-[#14fca9] lg:bg-black lg:rounded-lg lg:transition-all lg:ease-in lg:hover:bg-white lg:hover:text-black lg:hover:border-2 lg:hover:border-[#fefae0] lg:my-4   xl:h-12 xl:w-40 xl:my-4 xl:flex xl:flex-row xl:justify-center xl:items-center xl:font-bold xl:text-lg xl:text-[#14fca9] xl:bg-black xl:rounded-lg xl:transition-all xl:ease-in xl:hover:bg-white xl:hover:text-black xl:hover:border-2 xl:hover:border-[#fefae0] 2xl:h-12 2xl:w-40 2xl:my-4 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center 2xl:font-bold 2xl:text-lg 2xl:text-[#14fca9] 2xl:bg-black 2xl:rounded-lg 2xl:transition-all 2xl:ease-in 2xl:hover:bg-[#a5a5a5] 2xl:hover:text-black 2xl:hover:border-2 2xl:hover:border-[#fefae0]">
                <p className="mx-2">Logout</p>
                
              </button>
              </span>
            </a>
          </li>
        
        </ul>
      </section>
      </div>



      <div className={`${isModalOpen ? 'blur-sm opacity-50' : ''}`}>
      <section id="content" className='relative' style={{left:"280px",width:'calc(100% - 280px)'}}>

      

<nav className="bg-white border-gray-200 dark:bg-gray-900 ml-1">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
    
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Your School</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
        <button onClick={toggleModal} className="h-10 w-36 flex flex-row justify-center items-center font-bold text-lg text-[#14fca9] bg-black rounded-md transition-all ease-in hover:bg-[#9b9b9b] hover:text-black hover:border-2 hover:border-[#fefae0] my-3   sm:h-12 sm:w-40 sm:flex sm:flex-row sm:justify-center sm:items-center sm:font-bold sm:text-lg sm:text-[#14fca9] sm:bg-black sm:rounded-lg sm:transition-all sm:ease-in sm:hover:bg-white sm:hover:text-black sm:hover:border-2 sm:hover:border-[#fefae0] sm:my-3   md:h-12 md:w-40 md:flex md:flex-row md:justify-center md:items-center md:font-bold md:text-lg md:text-[#14fca9] md:bg-black md:rounded-lg md:transition-all md:ease-in md:hover:bg-white md:hover:text-black md:hover:border-2 md:hover:border-[#fefae0] md:my-4   lg:h-12 lg:w-40 lg:flex lg:flex-row lg:justify-center lg:items-center lg:font-bold lg:text-lg lg:text-[#14fca9] lg:bg-black lg:rounded-lg lg:transition-all lg:ease-in lg:hover:bg-white lg:hover:text-black lg:hover:border-2 lg:hover:border-[#fefae0] lg:my-4   xl:h-12 xl:w-40 xl:my-4 xl:flex xl:flex-row xl:justify-center xl:items-center xl:font-bold xl:text-lg xl:text-[#14fca9] xl:bg-black xl:rounded-lg xl:transition-all xl:ease-in xl:hover:bg-white xl:hover:text-black xl:hover:border-2 xl:hover:border-[#fefae0] 2xl:h-12 2xl:w-40 2xl:my-4 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center 2xl:font-bold 2xl:text-lg 2xl:text-[#14fca9] 2xl:bg-black 2xl:rounded-lg 2xl:transition-all 2xl:ease-in 2xl:hover:bg-[#a5a5a5] 2xl:hover:text-black 2xl:hover:border-2 2xl:hover:border-[#fefae0]">
                <p className="mx-2" >Invite</p>
              </button>
              </li>
      </ul>
    </div>
  </div>
</nav>

        
     




        <main>
          <div className="ml-3 flex items-center justify-between bg-white">
            <div className="left mb-10px" style={{fontWeight: '600',fontSize:'20px'}}>
              <h1>Users</h1>
              <ul className="breadcrumb flex items-center justify-center">
                <li>
                  <a href="#">New signups</a>
                </li>
                <li><i className='flex min-w-[60px] ' ></i></li>
                <li>
                  <a className="active" href="#">Logins</a>
                </li>
              </ul>
            </div>
            <a href="#" className="">
              <i className='flex min-w-[60px] ' ></i>
            
            </a>
          </div>
         <div className=" ml-3 mr-3">
          <ul className="box-info">
            <li className=" bg-[#dadada]">
              <i className='flex min-w-[60px]' ></i>
              <span className="text">
                <h3>1020</h3>
                <p>All Users</p>
              </span>
            </li>
            <li className=" bg-[#dadada]">
              <i className='flex min-w-[60px] ' ></i>
              <span className="text">
                <h3>0%</h3>
                <p>Conversions</p>
              </span>
            </li>
            <li className=" bg-[#dadada]">
              <i className='flex min-w-[60px] ' ></i>
              <span className="text">
                <h3>0</h3>
                <p>Courses</p>
              </span>
            </li>
          </ul>


          <ul className="box-info">
            <li className=" bg-[#dadada]">
              <i className='flex min-w-[60px]' ></i>
              <span className="text">
                <h3>1</h3>
                <p>Avg time</p>
              </span>
            </li>
            <li className=" bg-[#dadada]">
              <i className='flex min-w-[60px] ' ></i>
              <span className="text">
                <h3>3</h3>
                <p>Course catalog</p>
              </span>
            </li>
            <li className=" bg-[#dadada]">
              <i className='flex min-w-[60px] ' ></i>
              <span className="text">
                <h3>5</h3>
                <p>
                  Sales
                </p>
              </span>
            </li>
          </ul>
          </div>
         
        </main>

        <Chart/>

      </section>
     </div>
      {isModalOpen && <Modal toggleModal={toggleModal} />} 
      
    </>

    
  );
}
