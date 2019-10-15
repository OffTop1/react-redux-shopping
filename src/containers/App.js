import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as booksActions from "../actions/books";
import orderBy from "lodash/orderBy";
import App from "../components/App";

const sortBy = (books, filterBy) =>{
  switch (filterBy) {
    case "price_high":
      return orderBy(books, "price", "desc");
    case "price_low":
      return orderBy(books, "price", "asc");
    case "author":
      return orderBy(books, "author", "asc");     
    default:
      return books;
  }
}

const filterBooks = (books, searchQuery) =>{
 return books.filter(book =>(
    book.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0 ||
    book.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0
  ))
}

const searchBooks = (books, filterBy, searchQuery) =>{
  return sortBy(filterBooks(books, searchQuery), filterBy);
}

const mapStateToProps = ({books, filter}) => {
    return {
     books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery) ,
     isReady: books.isReady
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(booksActions, dispatch)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);