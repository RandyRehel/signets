import './ListeDossiers.scss';
import Dossier from './Dossier';
import { red } from '@mui/material/colors';
import { display, flexbox } from '@mui/system';

export default function ListeDossiers({dossiers,setDossiers}) {
  /**
   * 
   * Supprime un dossier de la collection
   * 
   * @param String id : identifiant du dossier 
   *  @returns void
   */
  
  
  function supprimerDossier(idd){
    setDossiers(dossiers.filter(dossier => dossier.id !== idd));
  }
  
  function modifierDossier(idd, titre, couverture, couleur, timestamp){
    setDossiers(dossiers.map(
      dossier => {
        if(dossier.id === idd){
          return ({
            id: dossier.id,
            titre: titre,
            couverture: couverture,
            couleur: couleur,
            dateModif: timestamp
          });
        }
        return dossier;
      }
    ));
  }

  return (
     dossiers.length > 0 ?
     <ul className="ListeDossiers">
        {
          dossiers.map( 
            // Remarquez l'utilisation du "spread operator" pour "étaler" les 
            // propriétés de l'objet 'dossier' reçu en paramètre de la fonction
            // fléchée dans les props du composant 'Dossier' !!
            // On en parle en classe ;-)
            dossier =>  <li key={dossier.id}><Dossier   {...dossier} supprimerDossier={supprimerDossier} modifierDossier={modifierDossier}/></li>
          ) 

        }
      </ul> 
      :
      <div>
        <h1 style={{textAlign: 'center'}}>RIEN A SIGNALER!</h1>
      </div>
  );
}