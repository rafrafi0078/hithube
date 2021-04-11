import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createReview, detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

import Rating from '../components/Rating';
import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';
export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
  
    const productReviewCreate = useSelector((state) => state.productReviewCreate);
    const {
      loading: loadingReviewCreate,
      error: errorReviewCreate,
      success: successReviewCreate,
    } = productReviewCreate;
  
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
  
    useEffect(() => {
      if (successReviewCreate) {
        window.alert('Review Submitted Successfully');
        setRating('');
        setComment('');
        dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
      }
      dispatch(detailsProduct(productId));
    }, [dispatch, productId, successReviewCreate]);
    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
      };
      const submitHandler = (e) => {
        e.preventDefault();
        if (comment && rating) {
          dispatch(
            createReview(productId, { rating, comment, name: userInfo.name })
          );
        } else {
          alert('Please enter comment and rating');
        }
      };
    return (
     <>
        {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (

        <>
        <div className="product-details">
        <div className="col-sm-5">
          <div className="view-product">
          <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="product-information">
            <h2>{product.name}</h2>
                <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
            <span>
              <span>Pirce : {product.price} TND</span>
              <div className="select-Qty">
              <label>Quantity:</label>
                      <select className='selectQty'  value={qty} onChange={e => setQty(e.target.value)}>
                             {
                                    [...Array(product.countInStock).keys()].map(x=>(
                                                <option key={x+1} value={x+1}>{x+1}</option>
                                      ))
                               }
                         </select>
               </div>
              <button type="button" className="btn-rev"  onClick={addToCartHandler}>
                <i className="fa fa-shopping-cart "   /> Add to Cart
              </button>
            </span>
            <p><b>Availability: </b>   {product.countInStock> 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}</p>

            <p><b>Brand:</b> {product.brand}</p>
            
          </div>
        </div>
      </div>



      <div>
      <h2 class="title text-center"> Reviews </h2>
            {product.reviews.length === 0 && (
              <MessageBox>There is no review</MessageBox>
            )}
            <ul>
              {product.reviews.map((review) => (
                <li key={review._id}>
                  <strong>{review.name}</strong>
                  <Rating rating={review.rating} caption=" "></Rating>
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
              
              <li>
                {userInfo ? (
               
                  <form className="form-Review" onSubmit={submitHandler}>
                    <div>
                    <h2 class="title text-center"> Write a customer review </h2>

                    </div>
                    <div>
                      <label htmlFor="rating">Rating</label>
                      <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="1">1- Poor</option>
                        <option value="2">2- Fair</option>
                        <option value="3">3- Good</option>
                        <option value="4">4- Very good</option>
                        <option value="5">5- Excelent</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="comment">Comment</label>
                      <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                    </div>
                    <div>
                      <label />
                      <button className="btn-rev" type="submit">
                        Submit
                      </button>
                    </div>
                    <div>
                      {loadingReviewCreate && <LoadingBox></LoadingBox>}
                      {errorReviewCreate && (
                        <MessageBox variant="danger">
                          {errorReviewCreate}
                        </MessageBox>
                      )}
                    </div>
                  </form>
                ) : (
                  <MessageBox>
                    Please <Link to="/signin">Sign In</Link> to write a review
                  </MessageBox>
                )}
              </li>
            </ul>
          </div>
      </>
      


      )}









      
     </>
        );
      }