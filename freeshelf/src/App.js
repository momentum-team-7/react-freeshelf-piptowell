import React, { useState } from 'react'
import bookdata from './bookdata'
import './styles/App.css'



function App() {
  const [newbookdata, setNewbookdata] = useState(bookdata)

  const handleInformation = (title, minimized) => {
    const secondBookdata = newbookdata.map((book) => {
      if (book.title === title) {
        return { ...book, minimized }
      }
      return book
    })
    setNewbookdata(secondBookdata)
  }
  
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
        handleInformation={handleInformation}
        key={idx}/>
      })}
    </div>
  )
}



const Book = (props) => {
  const {title, author, minimized, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription, handleInformation } = props
  return (
  <div className={minimized ? 'book book--minimized' : 'book'}>
    <h2>{title}</h2>
    <h3>{author}</h3>
    <p>{shortDescription}</p>
    <img src={coverImageUrl}></img>
    <button onClick={() => handleInformation(title, !minimized)}>
      {minimized ? 'More Information' : 'Less Information'}</button>
    <dd>
      <p>{publisher}</p>
      <p>{publicationDate}</p>
      <p>{detailedDescription}</p>
    </dd>
  </div>
  )
}


export default App;
