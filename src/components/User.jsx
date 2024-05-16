import React from "react";
import { Link, Outlet } from "react-router-dom";

function User() {

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 p-10 mt-5">
      <div className="flex flex-col  gap-5" >
        <Link to="/user/suraj" className="text-3xl font-semibold rounded bg-zinc-300 text-black px-3 py-2">
          Suraj
        </Link>
        <Link to="/user/nancy" className="text-3xl font-semibold rounded bg-zinc-300 text-black px-3 py-2">
          Nancy
        </Link>
        <Link to="/user/shubham" className="text-3xl font-semibold rounded bg-zinc-300 text-black px-3 py-2">
          Shubham
        </Link>
      </div>
      <button className="bg-zinc-600 rounded-md px-2 py-1 text-white font-semibold">
       More....
      </button>

      <hr className="border-[0.5px] border-black/20 mt-2 w-full"/>
      <Outlet/>
      
    </div>
  );
}

export default User;

{
  /* <p className=' w-96'>Lorem ipsum dolor sit a maxt h bawa apn toh tm btao bhaisaab ky haal met consectetur adipisicing elit. Ab veniam eveniet velit nostrum quae suscipit officiis ipsum qui. Autem architecto doloribus error minus temporibus quo.</p> */
}
