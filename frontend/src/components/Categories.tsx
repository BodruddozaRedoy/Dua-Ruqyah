"use client"
import React from 'react'
import AccordionItems from './AccordionItems'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useCategory } from '@/hooks/useCategory'
import { useSubCategory } from '@/hooks/useSubCategory'

const Categories = () => {
    const {categories} = useCategory()
    //   const { subcategories, isLoading, isError } = useSubCategory(categories[0]?.cat_id)
    
    return (
        <div className='mt-[15px] space-y-[15px]'>
            {
                categories?.map((category:object, index:number) => (
                    <AccordionItems key={index} category={category}/>
                ))
            }
        </div>
    )
}

export default Categories