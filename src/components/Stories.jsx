import React from 'react'
import { useGlobalContext } from '../Context'

const Stories = () => {

const {hits, nbPages,isLoading}= useGlobalContext()

if(isLoading){
  return <h1>Loading...</h1>
}
  return (
    <>
      <h1>Welcome to Tech News Post</h1>
      {hits.map((item)=>{
       return <h2>{item.title}</h2>
      })}
    </>
  )
}

export default Stories
