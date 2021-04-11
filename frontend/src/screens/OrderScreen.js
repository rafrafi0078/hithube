import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deliverOrder, detailsOrder  } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {
  ORDER_DELIVER_RESET,
} from '../constants/orderConstants';
import { cartReducer } from '../reducers/cartReducers';

export default function OrderScreen(props) {
  const orderId = props.match.params.id;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const {
    loading: loadingDeliver,
    error: errorDeliver,
    success: successDeliver,
  } = orderDeliver;

  const deliverHandler = () => {
    dispatch(deliverOrder(order._id));
  };

  const dispatch = useDispatch();
  
  useEffect(() => {

    if (!order || order._id !==orderId || successDeliver) {
      dispatch({type : ORDER_DELIVER_RESET})
      dispatch(detailsOrder(orderId))
    }
    
  }, [dispatch, order, orderId,successDeliver,]);






  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <h1>Order {order._id}</h1>
      <div className="row top">
        <div className="col-2">
          <ul>
            <li>
              <div className="card card-body">
              <h2>Shippring</h2>
             
                  <strong>Name/Prenom</strong> {order.shippingAddress.fullName} {order.shippingAddress.prenom} <br />
                  <br />                
                  <strong>Address: </strong> {order.shippingAddress.address},
                  {order.shippingAddress.city},{' '}
                  {order.shippingAddress.postalCode},
                  {order.shippingAddress.country}
                  <br/>
                  <br/>
                <strong>Phone Number:</strong> {order.shippingAddress.phone} <br />
            
                {order.isDelivered ? (
                  <MessageBox variant="success">
                    Delivered at {order.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Delivered</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Payment</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod}
                </p>
                {order.isPaid ? (
                  <MessageBox variant="success">
                    Paid at {order.paidAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Paid</MessageBox>
                )}
              </div>
            </li>
            <li>
              <div className="card card-body">
                <h2>Order Items</h2>
                <ul>
                  {order.orderItems.map((item) => (
                    <li key={item.product}>
                      <div className="row">
                        <div>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="small"
                          ></img>
                        </div>
                        <div className="min-30">
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>

                        <div>
                          {item.qty} x {item.price} TND = {item.qty * item.price} TND
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <h2>Order Summary</h2>
              </li>
              <li>
                <div className="row">
                  <div>Items</div>
                  <div>{order.itemsPrice.toFixed(2)} TND</div>
                </div>
              </li>
              <li>
              <div className="row">
                  <div>Tax</div>
                  <div>{(order.taxPrice=0).toFixed(2)} TND</div>
                </div>
              </li>
              <li>
              <div className="row">
                  <div>Shipping</div>
                  <div>{(order.shippingPrice=7).toFixed(2)} TND</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>
                    <strong> Order Total</strong>
                  </div>
                  <div>
                    <strong>{(order.itemsPrice+7).toFixed(2)} TND</strong>
                  </div>
                </div>
              </li>
              {userInfo.isAdmin && !order.isDelivered && (
                <button onClick={deliverHandler}> DELIVRED </button>
              )}
               
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}