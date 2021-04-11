import React, { useEffect } from 'react';
import { BrowserRouter as Rout, Link, Route } from 'react-router-dom'; 
import UserEditScreen from './screens/UserEditScreen';
import ProductScreen from './screens/ProductScreen';
import UserListScreen from './screens/UserListScreen';
import HomeScreen from './screens/HomeScreen';
import AdminRoute from './components/AdminRoute';
import CartScreen from './screens/CartScreen';
import PrivateRoute from './components/PrivateRoute';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import ProductListScreen from './screens/ProductListScreen';
import ProfileScreen from './screens/ProfileScreen';
import { useDispatch, useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import OrderScreen from './screens/OrderScreen';

import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import SellerScreen from './screens/SellerScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';

import ProductCat from './screens/ProductCat';




function App() {
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };



  return (
    
    <Rout>
      <div>
       
    <div className="grid-container">
    
     <header className="row">
       <div>
        
  
         <Link className="brand"  to="/">Nova-Electro</Link >
          </div>
          <div>
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
            <div>
            <Link to="/cart">
              Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
                  
             {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
             </div>  
     </header>
     
     <main>

     <Route
         
            path="/search/name/:name/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>
       
        <Route path="/signin" component={SigninScreen}></Route>       
        <Route path="/register" component={RegisterScreen}></Route>   
        <Route path="/shipping" component={ShippingAddressScreen}></Route>
        <Route path="/payment" component={PaymentMethodScreen}></Route>
        <Route path="/seller/:id" component={SellerScreen}></Route>
        <Route path="/order/:id" component={OrderScreen}></Route>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}exact></Route>
        <Route path="/produts/:type/:cat" component={ProductCat} exact></Route>
        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
        <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
        <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>

        <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
           <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
                 <AdminRoute
            path="/productlist/pageNumber/:pageNumber"
            component={ProductListScreen}
            exact
          ></AdminRoute>
                  <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute>
         
         
        <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
        <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
             <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
           <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
        <Route path="/search/pageNumber/:pageNumber" component={HomeScreen} exact></Route>
        <Route path="/" component={HomeScreen} exact></Route>
       
       
       
     </main>
   
   </div>
   </div>
   
   </Rout>
   
  );
}

export default App;
