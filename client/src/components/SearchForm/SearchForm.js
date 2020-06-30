import React from 'react'
import BookContext from '../../utils/BookContext'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SearchFrom = () => {
  return (
    <BookContext.Consumer>
      <form onSubmit={handleSearchBook}>
        <TextField
          label="Search Book"
          name="search"
          value={bookState.search}
          onChange={handleInputChange} />
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSearchBook}>
          Search
        </Button>
      </form>
    </BookContext.Consumer>
  )
}

export default SearchFrom