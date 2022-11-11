import React from 'react'
import './article.css'

const Article = ({ imgUrl, date, title }) => {
  return (
    <div className='container-article'>
      <div className='article-image'>
        <img src={imgUrl} alt='blog' />
      </div>
      <div className='article-content'>
        <p>{date}</p>
        <h3>{title}</h3>
        <p>Read Full Article</p>
      </div>
      
    </div>
  )
}

export default Article