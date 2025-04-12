// store/duaStore.ts
import { create } from 'zustand'



export const useDuaStore = create<any>((set) => ({
  subCatId: null,
  subCatName: "",
  subCategories: null,
  setSubCatId: (value:number) => set({ subCatId: value }),
  setSubCatName: (value:string) => set({ subCatName: value }),
  setSubCategories: (value:any) => set({ subCategories: value }),
}))
