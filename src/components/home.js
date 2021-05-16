import { connect } from "react-redux";

import { addBook } from "../actions/bookAction";

const home = (props) => {
  return (
    <div className="mt-3 d-flex row">
      {props.books.map((book) => (
        <div key={book.id} className="card col-md-4">
          <img
            className="card-img-top m-3"
            alt="photo"
            src={book.url}
            style={{ width: "9rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{book.name}</h5>
            <p className="card-text">{book.author}</p>
            <p className="card-text">{book.price} tl</p>
            <button
              onClick={() => props.addBookToCart(book)}
              className="btn btn-success"
            >
              Sepete Ekle
            </button>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.book.cart);
  const { books } = state.book;
  return {
    books: books
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBookToCart: (book) => {
      dispatch(addBook(book));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(home);
