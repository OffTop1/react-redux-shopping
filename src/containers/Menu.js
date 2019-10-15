import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as cartActions  from "../actions/cart";
import Menu from "../components/Navbar";
import uniqBy from "lodash/uniqBy";

const mapStateToProps = ({cart}) => {
    return {
     totalPrice: cart.items.reduce((total, item) => total + item.price, 0),
     count: cart.items.length,
     items: uniqBy(cart.items, item =>item.id)
    }
  }
  
  
  const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(cartActions, dispatch)
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Menu);