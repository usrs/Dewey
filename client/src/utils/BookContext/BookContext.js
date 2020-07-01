import React, { createContext } from 'react'
import axios from 'axios';

export const BookContext = createContext({});

class BookContextProvider extends React.Component {
  state = {
    books: [],
  }

  handleSearchBook = event => {
    event.preventDefault();
  
    var book = event.target.search.value;
  
    fetch('/api/books/' + book)
      .then(response => {
        return response.json()
      })
      .then(books => {
        this.setState({ books })
      })
      .catch((error) => {
        console.log(error)
      })

      
    axios.get(`/api/books/${book}`)
      .then((data) => {
        console.log(data)
        this.setState({ books: data })
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <BookContext.Provider value={{
        ...this.state,
        handleSearchBook: this.handleSearchBook,
      }}
      >
        {this.props.children}
      </BookContext.Provider>
    )
  }  
}

  
export default BookContextProvider;

