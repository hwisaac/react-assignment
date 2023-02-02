import React from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {FaRegCommentDots} from 'react-icons/fa'
import { Iphone } from '.'

const Item = ({title, color, price}:Iphone) => {
  return (
    <div  className='w-full flex items-center space relative border-b-2 py-4'>
      <div className='bg-slate-400 w-24 h-24 rounded-md mr-4 '/>
      <div className='flex flex-col'>
        <h1 className='font-semibold'>{title}</h1>
        <span className='text-slate-400 text-sm'>{color}</span>
        <p className='font-bold'>{price}</p>
      </div>
      <div className='flex absolute bottom-0 right-0 p-1 gap-1 items-center'>
        <p><AiOutlineHeart/></p>
        <p>1</p>
        <p><FaRegCommentDots/></p>
        <p>1</p>
      </div>
    </div>
  )
}

export default Item
