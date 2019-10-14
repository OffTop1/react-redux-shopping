import {connect} from "react-redux";
import * as booksActions from "../actions/books";
import * as filterActions  from "../actions/filter";
import {bindActionCreators} from "redux";
import App from "../components/App";

const mapStateToProps = ({books}, ownProps) => {
    return {
     books: books.items,
     isReady: books.isReady
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(booksActions, dispatch),
    ...bindActionCreators(filterActions, dispatch)
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);