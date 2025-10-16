import { create } from "zustand";

type Store = {
    count : number;
    setCount: (value:number)=>void;
}

export const useStore = create<Store>((set)=>({
    count : 0,
    setCount : (value)=>set({count:value})
}))