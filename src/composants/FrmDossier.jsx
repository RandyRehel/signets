import './FrmDossier.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {TwitterPicker} from 'react-color';
import { useState } from 'react';
import Dossier from './Dossier';
import ListeDossiers from './ListeDossiers';
import { color } from '@mui/system';

export default function FrmDossier({ouvert, setOuvert, actionDossier, id_p = null, titre_p = '', couverture_p = '', couleur_p = '#000'}) {
 const [titre, setTitre] = useState(titre_p);
 const [couverture, setCouverture] = useState(couverture_p);
 const [couleur, setCouleur] = useState(couleur_p);
 
 function gererFermer(){
    setOuvert(false);
    setTitre(titre_p);
    setCouverture(couverture_p);
    setCouleur(couleur_p);
 };

 function gererActionDossier(){

  let timestamp = new Date().getTime();
  let id = (!id_p) ? 'ds_' + timestamp + Math.random() : id_p;
  actionDossier(id, titre, couverture, couleur, timestamp);

 }
    
    // fonction declare de maniere expressive
    //   const gererFermer = () => {
    //     setOuvert(false);
    //   };

  return (
    <div className='FrmDossier'>
      <Dialog open={ouvert} onClose={gererFermer}>
        <DialogTitle>Ajouter/Modifier Dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Titre du dossier"
            type="text"
            fullWidth
            variant="standard"
            onChange={e => setTitre(e.target.value)}
            value={titre}
          />
          <TextField
            margin="dense"
            id="couverture"
            label="Image couverture du dossier"
            type="url"
            fullWidth
            variant="standard"
            onChange={e => setCouverture(e.target.value)}
            value={couverture}
          />

          <TwitterPicker className='ColorPicker'
            color= {couleur}
            colors={['#0f0', '#00f', '#036', '#960']}
            onChangeComplete= {color => setCouleur(color.hex)}
            width= 'auto'
            triangle='hide'
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={gererFermer}>Fermer</Button>
          <Button onClick={gererActionDossier}>Soummettre</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}