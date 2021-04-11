import React from 'react'
import img1 from'../images/home/girl1.png'
import img2 from'../images/home/girl2.jpg'
import img3 from'../images/home/girl3.jpg'


export default function Slider() {
    return (
        <section id="slider">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#slider-carousel" data-slide-to={0} className="active" />
                  <li data-target="#slider-carousel" data-slide-to={1} />
                  <li data-target="#slider-carousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="item active">
                    <div className="col-sm-6">
                      <h1><span>Conventionner Avec Attijari Bank Tunisie</span></h1>
                      <h2>Description:</h2>
                      <p>La caméra série est un module de caméra JPEG couleur facile à utiliser pour MCU. Il a intégré le traitement de l'image DSP pour générer une image JPEG 320*240 ou 640*480 sans informations miniatures.
                      </p>
                      <button type="button" className="btn btn-default get">Get it now</button>
                    </div>
                    <div className="col-sm-6">
                      <img src={img1} className="girl img-responsive" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-sm-6">
                      <h1><span>Geeetech™ A30 Imprimante 3D</span></h1>
                      <h2>Description:</h2>
                      <p>DescriptionDétails Du ProduitGeeetech A30 is a new addition to Geeetech / rsquos extensive range of desktop 3D printers. Embellished with blue strips, it looks solemn and vigorous. </p>
                      <button type="button" className="btn btn-default get">Get it now</button>
                    </div>
                    <div className="col-sm-6">
                      <img src={img2}className="girl img-responsive" alt="" />
                    </div>
                  </div>
                  <div className="item">
                    <div className="col-sm-6">
                      <h1><span>Carte Arduino UNO</span></h1>
                      <h2>Description:</h2>
                      <p>La carte Arduino Uno est basée sur un ATMega328 cadencé à 16 MHz. Des connecteurs situés sur les bords extérieurs du circuit imprimé permettent d'enficher une série de modules complémentaires. </p>
                      <button type="button" className="btn btn-default get">Get it now</button>
                    </div>
                    <div className="col-sm-6">
                      <img src={img3} className="girl img-responsive" alt="" />
                    </div>
                  </div>
                </div>
                <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                  <i className="fa fa-angle-left" />
                </a>
                <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
