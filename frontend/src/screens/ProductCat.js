
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import Slider from '../components/Slider';
import Catergorie from '../components/Catergorie';

export default function ProductCat({match}) {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    const cat = match.params.cat
    useEffect(() => {
      dispatch(listProducts({}));
    }, [dispatch]);
    console.log(products)
    return (
      <div>
        <Slider></Slider>
      
      <Catergorie></Catergorie>
          <h2 class="title text-center"> {cat}</h2>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="row center">

            {products.map((product)=> {
              return product.category === cat ?  <Product key={product._id} product={product}></Product> : ''
            }  
            )}
          </div>
        )}
             
               
             
      </div>
    );
  }