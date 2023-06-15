import React from 'react'
import { useEffect } from 'react'

const Stories = () => {

  let API = 'https://hn.algolia.com/api/v1/search?query=html'

  const fetchDataApi = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchDataApi(API)
  }, []);

  return (
    <>
      <h1>Welcome to Tech News Post</h1>
    </>
  )
}

export default Stories
