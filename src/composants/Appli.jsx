import './Appli.scss';
import Entete from './Entete';
import ListeDossiers from './ListeDossiers';
import FrmDossier from './FrmDossier';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {useEffect, useState } from 'react';

export default function Appli() {
  const[frmDossierOuvert, setFrmDossierOuvert] = useState(false);

  function ajouterDossier(id,titre,couverture,couleur, dateModif){
    console.log('dossier recu = '  + id + ', ' + titre + ', ' + couverture + ', ' + couleur  + ', ' + dateModif);
    
    setDossiers([...dossiers,
      {
        id: id,
        titre: titre,
        couverture: couverture,
        couleur: couleur,
        dateModif: dateModif
      }
    ])
  }

  //Dossiers du user

  /*  
    Structure de la variable dossiers :`
    [
      {id : '9821371982371283.3182973', titre : 'Politique et economie', couverture: 'https://www.alink.yep/this-is-a-link', couleur: '#998', dateModif: '' }
      {id : '9821377457371283.3182973', titre : '', couverture: '', couleur: '', dateModif: '' }
      {id : '982137454571283.3182973', titre : '', couverture: '', couleur: '', dateModif: '' }
      {id : '9821371232383.3182973', titre : '', couverture: '', couleur: '', dateModif: '' }
    ]
  
  */ 

  const[dossiers, setDossiers] = useState(()=>JSON.parse(localStorage.getItem('4pa-dossiers')) || [])

  useEffect(
    () => localStorage.setItem('4pa-dossiers', JSON.stringify(dossiers)),
    [dossiers]
  );

  return (
    <div className="Appli">
        <Entete />
        <section className="contenu-principal">
          <ListeDossiers dossiers={dossiers} setDossiers={setDossiers}/>
          <FrmDossier ouvert={frmDossierOuvert} setOuvert={setFrmDossierOuvert} actionDossier={ajouterDossier}/>
          <Fab onClick={() => setFrmDossierOuvert(true)} size="large" className="ajoutDossier" color="secondary" aria-label="Ajouter dossier">
            <AddIcon />
          </Fab>
        </section>
    </div>
  );
}
