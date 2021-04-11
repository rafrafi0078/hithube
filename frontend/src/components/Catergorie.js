import React from 'react'
import {Link} from'react-router-dom';

export default function Catergorie(props) {
    return (
      <div className="col-sm-4">
      <div className="left-sidebar">
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                  <span className="badge pull-right"><i className="fa fa-plus" /></span>
                  
                  Electro
                </a>
              </h4>
            </div>
            <div id="sportswear" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                <li><Link to='/produts/Electro/Cartes'> Cartes / Module </Link></li>
                  <li><Link to='/produts/Electro/INSTRUMENT-DE-MESURES'>Instrument de mesures </Link></li>
                  <li><Link to='/produts/Electro/accessoire-electronique '>accessoire electronique </Link></li>
                  <li><Link to='/produts/Electro/Maquette-educatif'>Maquette educatif</Link></li>
                  <li><Link to='/produts/Electro/Robotique'>Robotique </Link></li>
                  <li><Link to='/produts/Electro/Composant-électronique'>Composant électronique </Link></li>
                  <li><Link to='/produts/Electro/soudure'>soudure / pcb </Link></li>
                  <li><Link to='/produts/Electro/piles'>piles / batteries </Link></li>
                  <li><Link to='/produts/Electro/transfo-convertisseur'>transfo convertisseur </Link></li>
                  <li><Link to='/produts/Electro/fusibles'>fusibles </Link></li>
                  <li><Link to='/produts/Electro/cables'>cables </Link></li>
                  <li><Link to='/produts/Electro/tirroir-et-arrangement'>tirroir et arrangement</Link></li>
                  <li><Link to='/produts/Electro/domotique'>domotique </Link></li>
                  <li><Link to='/produts/Electro/cellule solaire'>cellule solaire </Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                  <span className="badge pull-right"><i className="fa fa-plus" /></span>
                  Sécurité
                </a>
              </h4>
            </div>
            <div id="mens" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li><Link to='/produts/Sécurité/camera'>Camera</Link></li>
                  <li><Link to='/produts/Sécurité/systeme-alarme'>systeme d'alarme</Link></li>
                  <li><Link to='/produts/Sécurité/coffret'>coffret / alimentation</Link></li>
                  <li><Link to='/produts/Sécurité/dvr'>dvr</Link></li>
                  <li><Link to='/produts/Sécurité/cables'>cables et accessoires</Link></li>
                  <li><Link to='/produts/Sécurité/controle daccés'>controle daccés</Link></li>
                  <li><Link to='/produts/Sécurité/disque-dur'>disque dur</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                  <span className="badge pull-right"><i className="fa fa-plus" /></span>
                  INformatique
                </a>
              </h4>
            </div>
            <div id="womens" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li><Link to='/produts/INformatique/carte-memoire'>carte memoire</Link></li>
                  <li><Link to='/produts/INformatique/chargeur-pc'>chargeur pc</Link></li>
                  <li><Link to='/produts/INformatique/sonorisation'>sonorisation</Link></li>
                  <li><Link to='/produts/INformatique/telephone'>telephone / accessoires</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                  <span className="badge pull-right"><i className="fa fa-plus" /></span>
                  Industrie
                </a>
              </h4>
            </div>
            <div id="womens" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li><Link to='/produts/Industrie/'>variateur de vitesse</Link></li>
                  <li><Link to='/produts/Industrie/auromate-programmable'>auromate programmable</Link></li>
                  <li><Link to='/produts/Industrie/capteurs'>capteurs</Link></li>
                  <li><Link to='/produts/Industrie/electrique'>electrique</Link></li>
                  <li><Link to='/produts/Industrie/ventilateur'>ventilateur</Link></li>
                  <li><Link to='/produts/Industrie/robot-hans'>robot han's</Link></li>
                  <li><Link to='/produts/Industrie/servo moteur'>servo moteur</Link></li>
                  <li><Link to='/produts/Industrie/alimentation-decoupages'>alimentation decoupages</Link></li>
                  <li><Link to='/produts/Industrie/pupitre '>pupitre / hmi</Link></li>
                  <li><Link to='/produts/Industrie/energie-solaire'>energie solaire</Link></li>
                  <li><Link to='/produts/Industrie/outillages'>outillages</Link></li>
                  <li><Link to='/produts/Industrie/regulateur-de-tension'>regulateur de tension</Link></li>
                  <li><Link to='/produts/Industrie/projecteurled'>projecteurled</Link></li>
                  <li><Link to='/produts/Industrie/cnc'>cnc / imprimente 3d</Link></li>
                  <li><Link to='/produts/Industrie/regulateur-de-temperature'>regulateur de temperature</Link></li>
                  <li><Link to='/produts/Industrie/electro-mecanique'>electro-mecanique</Link></li>
                  <li><Link to='/produts/Industrie/encodeur'>encodeur</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>{/*/category-products*/}
      </div></div>
      
    )
}
