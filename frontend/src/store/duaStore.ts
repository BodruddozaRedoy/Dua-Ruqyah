// store/duaStore.ts
import { create } from 'zustand'



export const useDuaStore = create<any>((set) => ({
  subCatId: null,
  subCatName: "",
  setSubCatId: (value:any) => set({ subCatId: value }),
  setSubCatName: (value:any) => set({ subCatName: value }),
}))
