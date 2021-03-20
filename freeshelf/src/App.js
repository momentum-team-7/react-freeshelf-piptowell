import React from 'react'
import bookdata from './bookdata'



function App() {
 // const [books, setBooks] = useState()
  return (
    <div>
      <h1>Book</ h1>
      {bookdata.map((book, idx) => {
        return <Book title={book.title} 
        author={book.author} 
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
  const {title, author, shortDescription, coverImageUrl, publisher, publicationDate, detailedDescription } = props
  return (
  <div className='book'>
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
