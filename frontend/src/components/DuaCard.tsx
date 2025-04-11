import React from 'react'

const DuaCard = () => {
  return (
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
  )
}

export default DuaCard