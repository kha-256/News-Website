import React from 'react'
import { useGlobalContext } from '../Context'
import './Stories.css'

const Stories = () => {

  const { hits, nbPages, isLoading, removePost } = useGlobalContext()

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  return (
    <>
      {hits.map((item) => {
        const { title, author, objectID, url, num_comments } = item;
        return (
          <div className='Card' key={objectID}>
            <h3>{title}</h3>
            <p>By <span>{author}</span> | <span> {num_comments} </span>comments</p>

            <div className='card-button'>
              <a href={url} target='_blank' className='read-more'>Read More</a>
              <a href='#' className='remove' onClick={()=> removePost(objectID)}>Remove</a>

            </div>
          </div>

        )


      })}
    </>
  )
}

export default Stories
