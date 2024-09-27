'use client'
import 'chart.js/auto';

import { useState } from 'react';


import {Chart} from 'react-google-charts';





export default function Modal({ toggleModal }) {
  const [numInvites, setNumInvites] = useState(0);
  const [duration, setDuration] = useState(0);
  const pricePerInvite = 20; 
  const pricePerHour = 50; 
  const [totalPrice, setTotalPrice] = useState(0);

  const calculatePrice = () => {
    const total = numInvites * pricePerInvite + duration * pricePerHour;
    setTotalPrice(total);
  };

  const data = [
    ["Invites", "Pricing"],
    ["NumInvites", 2],
    ["Price", 7],
  ];

  return (
    <div className="z-50 fixed flex top-0 left-0 justify-center items-center" style={{width:"100vw" , height:"100vh"}}>
      <div className="bg-white p-5 w-96" style={{ borderRadius:'10px'}}>
        <h2 className='' style={{fontSize:"2rem"}}>Invite People to Your Event</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            calculatePrice();
          }}
        >
          <label>
            Number of Invites:
            <input
              type="number"
              value={numInvites}
              onChange={(e) => setNumInvites(e.target.value)}
              required
            />
          </label>

          <label>
            Event Duration (hours):
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </label>

          <button  type='submit' className="h-10 w-36 flex flex-row justify-center items-center font-bold text-lg text-[#14fca9] bg-black rounded-md transition-all ease-in hover:bg-[#9b9b9b] hover:text-black hover:border-2 hover:border-[#fefae0] my-3   sm:h-12 sm:w-40 sm:flex sm:flex-row sm:justify-center sm:items-center sm:font-bold sm:text-lg sm:text-[#14fca9] sm:bg-black sm:rounded-lg sm:transition-all sm:ease-in sm:hover:bg-white sm:hover:text-black sm:hover:border-2 sm:hover:border-[#fefae0] sm:my-3   md:h-12 md:w-40 md:flex md:flex-row md:justify-center md:items-center md:font-bold md:text-lg md:text-[#14fca9] md:bg-black md:rounded-lg md:transition-all md:ease-in md:hover:bg-white md:hover:text-black md:hover:border-2 md:hover:border-[#fefae0] md:my-4   lg:h-12 lg:w-40 lg:flex lg:flex-row lg:justify-center lg:items-center lg:font-bold lg:text-lg lg:text-[#14fca9] lg:bg-black lg:rounded-lg lg:transition-all lg:ease-in lg:hover:bg-white lg:hover:text-black lg:hover:border-2 lg:hover:border-[#fefae0] lg:my-4   xl:h-12 xl:w-40 xl:my-4 xl:flex xl:flex-row xl:justify-center xl:items-center xl:font-bold xl:text-lg xl:text-[#14fca9] xl:bg-black xl:rounded-lg xl:transition-all xl:ease-in xl:hover:bg-white xl:hover:text-black xl:hover:border-2 xl:hover:border-[#fefae0] 2xl:h-12 2xl:w-40 2xl:my-4 2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center 2xl:font-bold 2xl:text-lg 2xl:text-[#14fca9] 2xl:bg-black 2xl:rounded-lg 2xl:transition-all 2xl:ease-in 2xl:hover:bg-[#a5a5a5] 2xl:hover:text-black 2xl:hover:border-2 2xl:hover:border-[#fefae0]">
                <p className="mx-2" >Calculate Price</p>
              </button>
        </form>

        <div className="mt-5">
          <h3>Total Price: ${totalPrice}</h3>
          <Chart
      chartType="PieChart"
      data={data}
    
      width={"100%"}
      height={"400px"}
    
    />
        </div>

        <button onClick={toggleModal} className=" bg-[#ff4d4f] text-white p-3 cursor-pointer" style={{border:'none' ,borderRadius:"5px"}}>
          Close
        </button>
      </div>

    </div>
  );
}