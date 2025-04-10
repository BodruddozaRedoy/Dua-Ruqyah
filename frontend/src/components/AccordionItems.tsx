"use client"
import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go'

const AccordionItems = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div onClick={() => setOpen(!open)} className={`${open ? 'bg-[#E8F0F5]' : 'bg-none'} p-[10px] flex justify-between items-center rounded-[10px] transition-all cursor-pointer select-none`}>
                <div className='flex items-center'>
                    <div className='bg-[#CFE0E5] rounded-[10px] w-[60px] h-[60px] flex items-center justify-center'>
                        <img src="./005-fever.png" alt="" />
                    </div>
                    <div className='ml-[16px]'>
                        <h2 className='font-semibold text-[16px] text-[#1FA45B]'>Introduction</h2>
                        <p className='text-[14px] text-[#7E7E7E]'>subcategory</p>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='font-semibold text-[16px]'>15</p>
                    <p className='text-[14px] text-[#7E7E7E]'>Duas</p>
                </div>
            </div>
            {/* subcategory */}
            <div className={`${open ? 'block' : 'hidden'}`}>
                <div className='border-dashed border-l border-[#1FA45B] ml-5'>
                    <div className='flex items-center relative py-4'>
                        <GoDotFill className='absolute -left-2 text-[#1FA45B]' />
                        <p className='pl-5 text-[16px] font-semibold'>What is dua?</p>
                    </div>
                </div>
                <div className='border-dashed border-l border-[#1FA45B] ml-5'>
                    <div className='flex items-center relative py-4'>
                        <GoDotFill className='absolute -left-2 text-[#1FA45B]' />
                        <p className='pl-5 text-[16px] font-semibold'>What is dua?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordionItems