import React from 'react'
import BookShelf from '../../components/BookShelf'
import './app.css'
import { Container } from '@material-ui/core'

const UserDash = () => {

  return (
    <>
    <Container>
        <h1>UNSERNAME Bookshelf</h1>
        <BookShelf />
    </Container>
    <Container>
      <h1>loaned bookshelf</h1>
        {/* <loanshelf /> */}
    </Container>
    </>
  )
}

export default UserDash