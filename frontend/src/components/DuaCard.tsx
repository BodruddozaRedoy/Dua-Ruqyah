import React from 'react'

const DuaCard = ({dua}:any) => {
  const {id, cat_id, subcat_id, dua_id, dua_name_en, top_en, dua_arabic, dua_indopak, transliteration_en, translation_en, bottom_en, refference_en, audio} = dua
  return (
    <div className='py-[15px] px-[30px] bg-white rounded-[10px] border border-[#E2E2E2] space-y-[28px]'>
      <div className='flex items-center gap-[10px]'>
        <img src="./allah.png" alt="" />
        <p className='text-[#1FA45B] font-semibold text-[16px]'>{dua_id || ""}. {dua_name_en || ""}</p>
      </div>
      <p className='text-[16px]'>{top_en || ""}</p>
      <p className='text-right font-medium'>{dua_indopak || ""}</p>
      <div className='space-y-[10px]'>
        { transliteration_en && <p className='text-[16px] font-semibold'>Transliteration: <span className='font-normal'>{transliteration_en}</span> </p>}
        { translation_en && <p className='text-[16px] font-semibold'>Translation: <span className='font-normal'>{translation_en}</span> </p>}
      </div>

      <div>
        <p className='text-[#1FA45B] font-semibold text-[16px]'>Reference:</p>
        <p className='text-[16px] font-medium'>{refference_en || ""}</p>
      </div>
      {/* actions */}
      <div className='w-full flex justify-between items-center'>
        {audio ? <div className='w-[44px] h-[44px] rounded-full bg-[#1FA45B] flex items-center justify-center'>
          <img src="./Polygon1.png" alt="" />
          {/* <audio controls src={audio}></audio> */}
        </div> : <div></div>}
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