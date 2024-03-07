
'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

  let[week,setWeek]=useState<any>([])
  let func=async ()=>{
  try {
    let res = await axios.get('https://islomapi.uz/api/present/week?region=Toshkent')
    let data=await res.data
    setWeek(data)
  } catch (error) {
    console.log(error);
    
  }
  }

  useEffect(()=>{
    func()
  },[])


  return (
    <div className=" roott w-full h-dvh">
      <nav className="mb-[50px] w-full">
        <div className="container">
          <div className="navbar w-full flex justify-end">
            <div className="w-[50%] flex h-[80px] justify-between border-b items-end">
                  <div className="flex items-center gap-x-10">
                      <button className=" hover:bg-green-600 hover:text-white p-1 rounded-lg">Year</button>
                      <button className=" hover:bg-green-600 hover:text-white p-1 rounded-lg">Month</button>
                      <button className=" hover:bg-green-600 hover:text-white p-1 rounded-lg">Week</button>
                      <button className=" hover:bg-green-600 hover:text-white p-1 rounded-lg">Today</button>
                  </div>
                  <img className="h-full w-[100px] rounded-md" src="https://namozvaqti.uz/img/logo_new.png" alt="alt" />
            </div>
          </div>
        </div>
      </nav>
      <div className="container flex justify-end">
        <div className="w-[65%] flex flex-col">
          <div className="w-full flex justify-between">
          <p className="border-b font-black text-green-500 w-[150px]">Monday</p>
          <p className="border-b font-black text-green-500 w-[150px]">Tuesday</p>
          <p className="border-b font-black text-green-500 w-[150px]">Wednesday</p>
          <p className="border-b font-black text-green-500 w-[150px]">Thursday</p>
          <p className="border-b font-black text-green-500 w-[150px]">Friday</p>
          <p className="border-b font-black text-green-500 w-[150px]">Saturday</p>
          <p className="border-b font-black text-green-500 w-[150px]">Sunday</p>
          </div>
            <div className="w-full flex p-1 justify-between">
                {
                  week.map((e:any,i:any)=>(
                    <ul className="w-[150]" key={i}>
                  <li className="text-[14px]">Bomdod: <span className=" underline">{e.times.tong_saharlik}</span></li>
                  <li className="text-[14px]">Quyosh: <span className=" underline">{e.times.quyosh}</span></li>
                  <li className="text-[14px]">Peshin: <span className=" underline">{e.times.peshin}</span></li>
                  <li className="text-[14px]">Asr: <span className=" underline">{e.times.asr}</span></li>
                  <li className="text-[14px]">Shom: <span className=" underline">{e.times.shom_iftor}</span></li>
                  <li className="text-[14px]">Xufton: <span className=" underline">{e.times.hufton}</span></li>
                </ul>
                  ))
                }
            </div>
        </div>
      </div>

    </div>
  );
}
