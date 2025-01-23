import React from 'react'
import style from './blog.module.css'
import { getAllPostsData } from '@/app/lib/posts'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default async function Blog() {
  const allPosts = await getAllPostsData()

  return (
    <div>
      {allPosts.map(({ slug, metadata }) => {
        const date = new Date(metadata.date).toLocaleDateString()
        return (
          <div className={`${style.post} flex`} key={slug}>
            <div className={`${style.postSignatureContainer} py-1`}>
              <div className={style.postSignatureLeftWing}>
                <small>{date}</small>
                <h3>{metadata.title}</h3>
              </div>
              <span className={style.postLink}>
                <Link href={`/${slug}`}><FaArrowUpRightFromSquare /></Link>
              </span>
            </div>
            <div className={`${style.postBodyContainer} px-1`} >
              {metadata.description && <p>{metadata.description}</p>}
            </div>
          </div>
        )
      })}
    </div>
  )
}
