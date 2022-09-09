import React from "react";

const BookList = ({ fhrst, book, changeBook, changeFhrst }) => (
  <div className="BookListWrapper">
    <pre>{`https://book-shadow.com/files/fhrst${fhrst}/${book}.pdf`}</pre>
    <label for="fhrst">fhrst</label>
    <br />
    <input
      name="fhrst"
      type="text"
      value={fhrst}
      className="fhrst"
      placeholder="fhrst"
      onChange={changeFhrst}
    ></input>{" "}
    <label for="book">book</label>
    <br />
    <input
      name="book"
      type="text"
      value={book}
      className="Book"
      placeholder="Book"
      onChange={changeBook}
    ></input>
    <iframe
      width="100%"
      height="400px"
      src={`https://book-shadow.com/files/fhrst${fhrst}/${book}.pdf`}
    ></iframe>
  </div>
);

BookList.propTypes = {
  // bla: PropTypes.string,
};

BookList.defaultProps = {
  // bla: 'test',
};

export default BookList;
