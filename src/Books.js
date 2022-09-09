import { Button, Container } from "./components/layout/index";

import BookList from "./components/books/BookList/index";
import { useState } from "react";

function Books() {
  const [fhrst, setFhrst] = useState(8);
  const [book, setBook] = useState(1);

  const nextBook = () => {
    setBook(book + 1);
  };
  const prevBook = () => {
    setBook(book - 1);
  };
  const nextFhrst = () => {
    setFhrst(fhrst + 1);
  };
  const prevFhrst = () => {
    setFhrst(fhrst - 1);
  };
  const changeBook = (e) => {
    setBook(+e.target.value);
  };
  const changeFhrst = (e) => {
    setFhrst(+e.target.value);
  };

  return (
    <>
      <Container>
        <BookList
          book={book}
          fhrst={fhrst}
          changeBook={changeBook}
          changeFhrst={changeFhrst}
        />
        {/* <button onClick={toggleHandler} >Insert User</button> */}
        <Button onClick={nextBook}>Next Book</Button>
        <Button onClick={prevBook}>Prev Book</Button> <br />
        <Button onClick={nextFhrst}>Next fhrst</Button>
        <Button onClick={prevFhrst}>Prev fhrst</Button>
        <br />
        <br />
        <br />
        <br />
      </Container>
    </>
  );
}

export default Books;
