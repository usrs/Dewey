import React from "react";
import BooksContextProvider, { BookContext } from "./BookContext";
import BookCard from "./BookCard";
function SearchedCard() {
  return (
    <BooksContextProvider>
      <BookContext.Consumer>
        {({ isLoading, books }) => {
          if (isLoading) {
            return <div />;
          }
          return books.map((book) => <BookCard book={book} />);
        }}
      </BookContext.Consumer>
    </BooksContextProvider>
  );
}
export default SearchedCard;
