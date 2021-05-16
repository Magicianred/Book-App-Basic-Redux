import { connect } from "react-redux";

import { removeBook } from "../actions/bookAction";

const cart = (props) => {
  return (
    <div className="mt-3 d-flex row">
      {props.cart.map((book) => (
        <div key={book.id} className="card col-md-4">
          <img
            className="card-img-top"
            alt="photo"
            src={book.url}
            style={{ width: "10rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{book.name}</h5>
            <p className="card-text">{book.author}</p>
            <p className="card-text">{book.price} tl</p>
            <button
              onClick={() => props.removeToCart(book)}
              className="btn btn-danger"
            >
              Sepetten Çıkar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { cart } = state.book;
  return {
    cart: cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeToCart: (book) => dispatch(removeBook(book))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cart);
