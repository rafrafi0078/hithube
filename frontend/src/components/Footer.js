import React from 'react'


export default function Footer() {
    return (
      <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6 className="brand"  >About</h6>
            <p className="text-justify">NOVA Electronics is the leading provider of global sales and services of  electronic equipment. Founded in 2015 in Mahdia, Tunis and ever since NOVA Electronics, as a commercial and technical company, has gained internationally acclaimed recognition.</p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li>ELECTRO</li>
              <li>SÉCURITÉ</li>
              <li>INFORMATIQUE</li>
              <li>INDUSTRIE</li>
 
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Contact Us</h6>
            <ul className="footer-links">
              <li><i class="fa fa-envelope"></i> nova.electrotec@gmail.com</li>
        
              <li><i class="fa fa-phone"></i> (+216) 73 562 149</li>
              <li><i class="fa fa-phone"></i> (+216) 53 763 641</li>
              <li><i class="fa fa-phone"></i> (+216) 97 082 909</li>
             
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright © 2021 All Rights Reserved by 
              <a href="https://www.facebook.com/rafrafi.dali.92/"> RAFRAFI MOUHAMED ALI</a>.
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.facebook.com/nova.tec.94"><i className="fa fa-facebook" /></a></li>

              <li><a className="dribbble" href="https://www.google.tn/maps/place/Ste+Nova+Electrotec/@35.517933,11.0310864,15z/data=!4m5!3m4!1s0x0:0x32b51f2d4724d618!8m2!3d35.517933!4d11.0310864"><i className="fa fa-dribbble" /></a></li>
     
            </ul>
          </div>
        </div>
      </div>
    </footer>

    )
}
