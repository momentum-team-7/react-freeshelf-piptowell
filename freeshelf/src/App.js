import React, { useState } from 'react'
import bookdata from './bookdata'



function App() {
  const [newbookdata] = useState(bookdata)
  return (
    <div>
      <h1>Some Frontend Books</ h1>
      {newbookdata.map((book, idx) => {
        return <Book title={book.title} 
        author={book.author}
        minimized={book.minimized}
        shortDescription={book.shortDescription} 
        coverImageUrl={book.coverImageUrl} 
        publisher={book.publisher} 
        publicationDate={book.publicationDate} 
        detailedDescription={book.detailedDescription} 
        key={idx}/>
      })}
    </div>
  )
}

const Book = (props) => {
  const {title, author, minimized, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription } = props
  return (
  <div className={minimized ? 'book book--minimized' : 'book'}>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <p>{shortDescription}</p>
    <img src={coverImageUrl}></img>
    <p>{publisher}</p>
    <p>{publicationDate}</p>
    <p>{detailedDescription}</p>
  </div>
  )
}


export default App;
