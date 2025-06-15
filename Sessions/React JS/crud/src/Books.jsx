import React, { useState } from 'react';

export const BookComponent = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'React Basics', author: 'Jane Smith' },
    { id: 2, title: 'Learn JavaScript', author: 'John Doe' }
  ])

  const handleAddBook = () => {
    const newBook = {
      id: new Date(),
      title: 'Java',
      author: 'Ermira Kajtazi'
    }

    setBooks([...books, newBook])
  }

  const handleEditBook = (id, updatedBook) => {
    setBooks(
      books.map(book => book.id === id ? { ...book, ...updatedBook } : book)
    )
  }

  const handleDeleteBook = (id) => {
    setBooks(
      books.filter(book => book.id !== id)
    )
  }


  return (
    <div>
      <h1>Add New Book</h1>
      <button onClick={handleAddBook}>Add book</button>
      {books.map((book) => (
        <>
          <div key={book.id}>{book.book}</div>
          <div>{book.title}</div>

          <div>{book.author}</div>
          <button onClick={() => handleEditBook(book.id, { title: 'Intro to CSS', author: 'Author CSS' })}>Edit book</button>
          <button onClick={() => handleDeleteBook(book.id)}>Delete book</button>
        </>
      ))}
    </div>
  )
}