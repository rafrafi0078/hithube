
import React, { useEffect } from 'react';

import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Slider from '../components/Slider';
import Catergorie from '../components/Catergorie';
import Footer from '../components/Footer';
import Recomended from '../components/Recomended';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function HomeScreen({match}) {
  const {
    pageNumber = 1,
  } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products , page, pages} = productList;

  useEffect(() => {
 
    dispatch(listProducts({pageNumber}));
  }, [dispatch,pageNumber]);
  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
  
    return `/search/pageNumber/${filterPage}`;
  };

  return (
    <div>
      <Slider></Slider>
      
      <Catergorie></Catergorie>
      <h2 class="title text-center"> Features Items</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        
        <div className="row center">
         
          {products.map((product)=> {
            return  <Product key={product._id} product={product}></Product>  
          }  
          )}
          <div>
          <div className="row center pagination">
                {[...Array(pages).keys()].map((x) => (
                  <Link
                    className={x + 1 === page ? 'active' : ''}
                    key={x + 1}
                    to={getFilterUrl({ page: x + 1 })}
                  >
                    {x + 1}
                  </Link>
                ))}
             
           <Recomended></Recomended>
           </div>
          
            </div>
        </div>
        
      )}
     
      <Footer></Footer>
    </div>
  );
}
