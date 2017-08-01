
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import ProductEdit from "../components/ProductEdit";
import * as actions from "../Actions";

import * as cartActions from "../../cart/Actions"

const mapStateToProps = (state) => {
    return {
         product: state.productState.product,
         brands: state.productState.brands,
         loading: state.productState.loading

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch)
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (ProductEdit)