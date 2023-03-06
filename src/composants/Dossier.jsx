import './Dossier.scss'; 
import IconButton from '@mui/material/IconButton';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import defaultImage from '../images/couverture-default.png'
import FrmDossier from './FrmDossier';
import { useState } from 'react';

export default function Dossier({id, titre, couverture ,couleur, dateModif, supprimerDossier, modifierDossier}) {
  //etat ouverture du form
  const [frmDossierOuvert, setFrmDossierOuvert] = useState(false);
  const validationPng = new RegExp('https://.*[A-Za-z0-9]+\.[A-Za-z]+/.*[A-Za-z0-9]+\.png');
  const validationJpg = new RegExp('https://.*[A-Za-z0-9]+\.[A-Za-z]+/.*[A-Za-z0-9]+\.jpg');
  const validationJfif = new RegExp('https://.*[A-Za-z0-9]+\.[A-Za-z]+/.*[A-Za-z0-9]+\.jfif')
  return (
    // Remarquez l'objet JS donné à la valeur de l'attribut style en JSX, voir : 
    // https://reactjs.org/docs/dom-elements.html#style
    <article className="Dossier" style={{backgroundColor: couleur}}>
      <div className="couverture">
        <IconButton className="tourner" aria-label="Tourner" disableRipple={true} size="small">
          <ThreeSixtyIcon />
        </IconButton>
        <img src={validationPng.test(couverture) ?  couverture : validationJpg.test(couverture) ? couverture : validationJfif.test(couverture) ? couverture : defaultImage} alt={titre}/>
        <IconButton className="supprimer" aria-label="supprimer" size="small" onClick={() => supprimerDossier(id)}>
          <ClearIcon />
        </IconButton>
      </div>
      <div className="info">
        <h2>{titre}</h2>
        <p>Modifié : {new Date(dateModif).toLocaleDateString('fr-CA', {dateStyle: 'long'})}</p>
        <IconButton onClick={() => setFrmDossierOuvert(true)}  className="modifier" aria-label="modifier" size="small" >
          <EditIcon />
        </IconButton>
        <FrmDossier ouvert={frmDossierOuvert} setOuvert={setFrmDossierOuvert} actionDossier={modifierDossier} id_p = {id} titre_p = {titre} couverture_p = {couverture} couleur_p = {couleur}/>
      </div>
    </article>
  );
}