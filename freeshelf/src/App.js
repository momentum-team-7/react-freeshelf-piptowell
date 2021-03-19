import React, { useState } from 'react'




function App() {
  const books = ["Moby Dick", "1984", "Farenheit 451"]
  // const [books, setBooks] = useState()
  return (
    <div>
      <h1>Book</ h1>
      {books.map((book) => {
        console.log({book})
        return <Book title={book} />
      })}
    </div>
  );
}

const Book = (props) => {
  const {title, author, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription } = props
  return (
  <div className='book'>
  <h2>{title}</h2>
  <p>testing :P</p>
  <h3>{author}</h3>
  </div>
  )
}


export default App;
