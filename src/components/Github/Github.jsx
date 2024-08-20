import React, { useEffect, useState } from "react";
import { useLoaderData} from "react-router-dom";

export const Github = () => {
const data = useLoaderData()



  return (
      <div className=" text-center m-4 bg-gray-600 text-white p-4 text-3xl ">
      Github Followers:{data?.followers}
      <img width={200} className="text-center" src={data?.avatar_url} alt="Git Picture" />
    </div>

  );
}


export const githubInfoLoader =async()=>{
    const response = await fetch("https://api.github.com/users/Sidharth465")    
    const data = await response.json()
    return data
}