import React from 'react'
import {Link} from 'react-router-dom'
import img1 from'../images/home/product1.jpg'
import img2 from'../images/home/product2.jpg'
import img3 from'../images/home/product3.jpg'
import img4 from'../images/home/product4.jpg'
import img5 from'../images/home/product5.jpg'
import img6 from'../images/home/product6.jpg'

export default function Recomended() {
    return (
        <div >
             <div className="recommended_items">
        <h2 className="title text-center">recommended items</h2>
        <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">	
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src={img1} alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src={img2}  alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src={img3}  alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">	
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src={img4}  alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src={img5}  alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="product-image-wrapper">
                  <div className="single-products">
                    <div className="productinfo text-center">
                      <img src={img6}  alt="" />
                      <h2>$56</h2>
                      <p>Easy Polo Black Edition</p>
                      <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
            <i className="fa fa-angle-left" />
          </a>
          <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
            <i className="fa fa-angle-right" />
          </a>			
        </div>
      </div>
        </div>
    )
}
