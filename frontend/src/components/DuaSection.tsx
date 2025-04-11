"use client"
import React from 'react'
import DuaCard from './DuaCard'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useDuas } from '@/hooks/useDuas'

const DuaSection = () => {
    const {duas, isLoading} = useDuas()
  return (
    <div>
        {/* search field  */}
                <div className='w-full flex items-center justify-between'>
                  <div></div>
                  <div className='relative w-[371px]  mb-[27px]'>
                    <input className='h-[52px] bg-white rounded-[10px] p-[16px] w-full' type="text" name="" id="" placeholder='Search by Dua Name' />
                    <div className='absolute right-1 top-1/2 -translate-y-1/2 w-[54px] h-[44px] flex items-center justify-center rounded-[6px] bg-[#F3F4F6] p-[15px] cursor-pointer select-none'>
                      <img src="./search.png" alt="search" className="" />
                    </div>
                  </div>
                </div>
        
                <div className='space-y-[10px]'>
                  {/* section title  */}
                  <div className='h-[52px] w-full py-[15px] px-[30px] bg-white rounded-[10px] border border-[#E2E2E2]'>
                    <p className='text-[#1FA45B] font-semibold text-[16px]'>Section: <span className='text-black text-[16px] font-medium'>The servant is dependent on his lord</span></p>
                  </div>
                  {/* dua card  */}
                  <DuaCard />
                </div>
    </div>
  )
}

export default DuaSection