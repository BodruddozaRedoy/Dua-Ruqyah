// store/duaStore.ts
import { create } from 'zustand'



export const useDuaStore = create<any>((set) => ({
  subCatId: null,
  subCatName: "",
  setSubCatId: (value:number) => set({ subCatId: value }),
  setSubCatName: (value:string) => set({ subCatName: value }),
}))
