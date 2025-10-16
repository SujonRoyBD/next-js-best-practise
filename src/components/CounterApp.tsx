"use client";

import { useStore } from "@/zustand/counter-app";


const CounterApp = () => {
  const {count, setCount} = useStore();

  const handleIncrement = ()=>{
    setCount(count + 1)
  }
  return <div className="h-screen w-full flex items-center justify-center">
    <div className="w-[400px] h-auto bg-gray-100 border border-black/20 rounded-[10px] p-10 ">
    <h2 className="text-3xl font-bold text-black text-center pb-4">Count : {count}</h2>
    <div className="flex items-center gap-3">
        <button onClick={handleIncrement} className="bg-green-500 text-white py-2 px-4 rounded-[10px] ">Increment</button>
        <button onClick={()=>setCount(count - 1)} className="bg-red-500 text-white py-2 px-4 rounded-[10px] ">Decrement</button>
        <button onClick={()=>setCount(0)} className="bg-blue-500 text-white py-2 px-4 rounded-[10px] ">Zero</button>
    </div>
  </div>
  </div>
};

export default CounterApp;
