import React from 'react'
import {FiThumbsUp} from 'react-icons/fi'
import {FiThumbsDown} from 'react-icons/fi'
import {AiOutlineComment} from 'react-icons/ai'
import { liStyle } from '.'
import { cls } from '../17'



const Comment = ({comment}) => {
  const {nickname, time, content, like} = comment
  // console.log(comment)
  return (
    <div className='flex flex-col gap-3 py-2'>
      <ul className='flex gap-3 items-center'>
        <li className='w-10 h-10 rounded-full bg-slate-400'/>
        <li>{nickname}</li>
        <li className='text-slate-300'>{time}</li>
      </ul>
      <div>{content}</div>
      <div className='flex gap-7 text-slate-400'>
        <ul className='flex gap-2'>
          <li className={cls(...liStyle)}><FiThumbsUp/> {like}</li>
          <li className={cls(...liStyle)}><FiThumbsDown/></li>
        </ul>
        <div className={cls(...liStyle)}><AiOutlineComment/> Reply</div>
      </div>
    </div>
  )
}

export default Comment
