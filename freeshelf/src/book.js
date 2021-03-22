import React from 'react'



const Book = (props) => {
    const {title, author, minimized, shortDescription, coverImageUrl, url, publisher, publicationDate, detailedDescription, handleInformation } = props
    return (
    <div className='book'>
        <div className='book-main'>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{shortDescription}</p>
            <button
                classname='info-btn'
                onClick={() => handleInformation(title, !minimized)}>
                {minimized ? 'More Information' : 'Less Information'}
            </button>
            {!minimized && (
            <>
            <p><b>URL: </b></p> <a href={url}>{url}</a>
                <p><b>Publisher:</b> {publisher || 'N/A'}</p>
                <p><b>Publication Date:</b> {publicationDate || 'N/A'}</p>
                <p><b>Full Description:</b> {detailedDescription || 'N/A'}</p>
            </>
            )}
        </div>
        <div className='book-img'>   
            <img src={coverImageUrl} />
        </div> 
    </div>
    )
}


export default Book