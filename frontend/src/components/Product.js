import React from 'react';
import {Link} from'react-router-dom';
export default function Product(props){
const {product}=props;
    
    return(
    	
	 <div key={product._id} className="col-sm-4">
		<Link to={`/product/${product._id}`}></Link>
		<div class="product-image-wrapper">
			<div class="single-products">
				<div class="productinfo text-center">
		<Link to={`/product/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name} />
        </Link>
			<h2>{product.price} TND</h2>
			<p>{product.name}</p>
  		<Link to={`/product/${product._id}`}  className="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
	</div>						
	</div>
	</div>
	</div>
           
    );
}
