import React, { useState } from 'react'
import bookdata from './bookdata'
import Book from './book'
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
    <div className='wrapper'>
      <h1>Some Programming Books</ h1>
      {newbookdata.map((book, idx) => {
        return <Book title={book.title} 
        author={book.author}
        minimized={book.minimized}
        shortDescription={book.shortDescription} 
        coverImageUrl={book.coverImageUrl}
        url={book.url}
        publisher={book.publisher} 
        publicationDate={book.publicationDate} 
        detailedDescription={book.detailedDescription}
        handleInformation={handleInformation}
        key={idx}/>
      })}
    </div>
  )
}

export default App;
