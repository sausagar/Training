
import React, {Component} from "react";
import PropTypes from "prop-types";

export default class ProductEdit extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        let id = this.props.match.params["id"];
        console.log("id is ", id);
        console.log(this.props.match.url, this.props.match.path);

        if(id) {
            this.props.actions.getProduct(id);
            this.props.actions.getBrands();
        } else {
            this.props.actions.getBrands();
        }


    }

    addToCart(product) {
         this.props.cartActions.addItemToCart(product);
    }

    //go to a URL
     gotoURL() {
         this.props.history.push("/products/list");
     }

    saveProduct(e) {
        // we need to prevent form submit button.
        e.preventDefault();
        this.props.actions.saveProduct(this.props.product);
    }

    onValueChange(e) {
        let {name, value} = e.target;
        console.log(name, value);
        this.props.actions.updateProduct(Object.assign({}, 
        this.props.actions.product, {[name]: value}));
        console.log("oiooipoipoioipipoipoipoipoi", this.props.actions.product);
    }
    
    
    render() {

         
    let options = this.props.brands.map ( brand => (
        <option value={brand.id} key={brand.id}>
            {brand.name}
        </option>
    ));

    
        return (
            <div> 

             <button onClick={(e) => this.gotoURL()}>Go Back to products list</button>

            <h2>Product Edit - {this.props.product.name}</h2>
           
            <form onSubmit={ (e)=> this.saveProduct(e)}  >
                <input name="name" 
                        value={this.props.product.name} 
                        onChange={(e)=>this.onValueChange(e)}/>
            
                <input name="year" 
                        value={this.props.product.year} 
                        onChange={(e)=>this.onValueChange(e)}/>
            
                <select name="brandId"
                        onChange={(e)=>this.onValueChange(e)}
                        value={this.props.product.brandId}
                    >
                    {options}
                </select>

            <button type="submit" onClick={() => this.addToCart(product)}>Save</button>
            
         </form>
           
           
           
            </div>
        )
    }
} 


ProductEdit.defaultProps = {
    
}

ProductEdit.propTypes = {
    
}