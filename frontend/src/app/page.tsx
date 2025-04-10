import AccordionItems from '@/components/AccordionItems';
import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineTranslate } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { Switch } from '@/components/ui/switch';
 




const Home = () => {

  return (
    <div className='grid gap-10 grid-cols-12 w-screen p-[40px] justify-center items-start'>
      {/* sidebar  */}
      <section className=' col-span-1 rounded-[24px] bg-white py-[31px] flex flex-col justify-between items-center h-[927px]'>
        {/* logo  */}
        <img className=' object-cover' src="./unnamed.png" alt="" />

        {/* links */}
        <div className='flex flex-col gap-[27px]'>
          <div className='bg-[#E8F0F5] rounded-full w-[38px] h-[38px] flex items-center justify-center'>
            <img src="./home.png" alt="" />
          </div>
          <div className='bg-[#E8F0F5] rounded-full w-[38px] h-[38px] flex items-center justify-center'>
            <img src="./54-menu-2.png" alt="" />
          </div>
          <div className='bg-[#E8F0F5] rounded-full w-[38px] h-[38px] flex items-center justify-center'>
            <img src="./memorize.png" alt="" />
          </div>
          <div className='bg-[#E8F0F5] rounded-full w-[38px] h-[38px] flex items-center justify-center'>
            <img src="./3-keep-minus.png" alt="" />
          </div>
          <div className='bg-[#E8F0F5] rounded-full w-[38px] h-[38px] flex items-center justify-center'>
            <img src="./group.png" alt="" />
          </div>
          <div className='bg-[#E8F0F5] rounded-full w-[38px] h-[38px] flex items-center justify-center'>
            <img src="./vector.png" alt="" />
          </div>
          <div className='bg-[#E8F0F5] rounded-full w-[38px] h-[38px] flex items-center justify-center'>
            <img src="./group1.png" alt="" />
          </div>
        </div>

        {/* bottom logo  */}
        <div className='w-[57px] h-[56] bg-[#1FA45B] rounded-[10px] flex items-center justify-center'>
          <img src="./icon.png" alt="" />
        </div>
      </section>
      {/* category section  */}
      <section className='col-span-3'>
        <h1 className='text-[24px] font-semibold mb-[35px]'>Dua Page</h1>
        <div className='bg-white rounded-[10px] overflow-hidden'>
          <button className='bg-[#1FA45B] w-full h-[57px] text-[17px] font-semibold text-white'>Categories</button>
          <div className='p-[15px]'>
            {/* search field  */}
            <div className="relative w-full h-[50px]">
              <img src="./search.png" alt="search" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5" />
              <input
                type="text"
                placeholder="Search By Categories"
                className="h-full w-full pl-12 pr-4 rounded-[7px] border border-gray-300 outline-none"
              />
            </div>
            {/* Categories */}
            <div className='mt-[15px] space-y-[15px]'>
              <AccordionItems />
              <AccordionItems />
            </div>

          </div>

        </div>
      </section>
      {/* dua section  */}
      <section className=' col-span-5 '>
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
          <div className='py-[15px] px-[30px] bg-white rounded-[10px] border border-[#E2E2E2] space-y-[28px]'>
            <div className='flex items-center gap-[10px]'>
              <img src="./allah.png" alt="" />
              <p className='text-[#1FA45B] font-semibold text-[16px]'>1. The servant is dependent on his Lord #1</p>
            </div>
            <p className='text-[16px]'>All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.</p>
            <p className='text-right font-medium'>لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اَللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ</p>
            <div className='space-y-[10px]'>
              <p className='text-[16px] font-semibold'>Transliteration: <span className='font-normal'>Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu</span> </p>
              <p className='text-[16px] font-semibold'>Transliteration: <span className='font-normal'>Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir. Allaahumma laa maani'a limaa a'taita wa laa mu'tia limaa mana'ta wa laa yanfa'u dhal-jaddi minka al-jaddu</span> </p>
            </div>

            <div>
              <p className='text-[#1FA45B] font-semibold text-[16px]'>Reference:</p>
              <p className='text-[16px] font-medium'>Surah Al-Fatir 35:15</p>
            </div>
            {/* actions */}
            <div className='w-full flex justify-between items-center'>
              <div className='w-[44px] h-[44px] rounded-full bg-[#1FA45B] flex items-center justify-center'>
                <img src="./Polygon1.png" alt="" />
              </div>
              <div className=' flex gap-[39px] items-center'>
                <img src="./copy.png" alt="" />
                <img src="./3-keep-minus.png" alt="" />
                <img src="./memorize.png" alt="" />
                <img src="./share.png" alt="" />
                <img src="./report.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* settings section  */}
      <section className=' col-span-3 '>
        <div className='flex justify-between items-center  mb-[27px]'>
          <div></div>
          <div className='flex items-center gap-2'>
            <img src="./user.png" alt="" />
            <IoMdArrowDropdown className='text-xl' />
          </div>
        </div>
        <div className='rounded-[32px] bg-white py-[35px] px-[20px] h-[834px]'>
          <h1 className='text-[20px] font-bold text-center mb-[25px]'>Settings</h1>
          <div className='space-y-[15px]'>
            <div className='bg-[#F7F8FA] rounded-[5px] flex gap-[13px] items-center py-[9px] px-[14px]'>
              <div className='w-[38px] h-[38px] bg-[#E8F0F5] flex items-center justify-center rounded-full'>
                <MdOutlineTranslate />
              </div>
              <p className='text-[16px] text-[#868686]'>Language Settings</p>
            </div>
            <div className='bg-[#F7F8FA] rounded-[5px] flex gap-[13px] items-center py-[9px] px-[14px]'>
              <div className='w-[38px] h-[38px] bg-[#E8F0F5] flex items-center justify-center rounded-full'>
              <img src="./frame.png" alt="" />
              </div>
              <p className='text-[16px] text-[#868686]'>General Settings</p>
            </div>
            <div className='bg-[#F7F8FA] rounded-[5px] flex gap-[13px] items-center py-[9px] px-[14px]'>
              <div className='w-[38px] h-[38px] bg-[#E8F0F5] flex items-center justify-center rounded-full'>
              <CiGrid41 />
              </div>
              <p className='text-[16px] text-[#868686]'>Font Settings</p>
            </div>
            <div>
            <div className='bg-[#F7F8FA] rounded-[5px] flex gap-[13px] items-center py-[9px] px-[14px] relative overflow-hidden'>
              <div className='w-[38px] h-[38px] bg-[#E8F0F5] flex items-center justify-center rounded-full'>
              <CiGrid41 className='text-[#1FA45B] font-bold'/>
              </div>
              <p className='text-[16px] font-medium text-[#1FA45B]'>Appearance Settings</p>
              <div className='bg-[#1FA45B] h-[55px] w-1 absolute left-0'></div>
            </div>
              <div className='flex justify-between items-center px-[14px] py-[32px] border-x border-b rounded-[5px]'>
                <p>Night Mode</p>
                <Switch id="airplane-mode" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home