import React, { useState } from 'react'
import BookContextProvider, { BookContext } from '../../utils/BookContext/BookContext'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SearchForm = () => {
  const [searchValue, changeSearchValue] = useState('');

  return (
    <BookContextProvider>
      <BookContext.Consumer>
        {({ books, handleSearchBook }) => (
          <form onSubmit={handleSearchBook}>
            <TextField
              label="Search Book"
              name="search"
              value={searchValue}
              onChange={event => changeSearchValue(event.target.value)}
            />
            <Button
              variant="outlined"
              color="primary"
              type="submit"
            >
              Search
            </Button>
          </form>
        )}
      </BookContext.Consumer>
    </BookContextProvider>
  )
}

export default SearchForm;
