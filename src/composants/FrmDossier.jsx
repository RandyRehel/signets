import './FrmDossier.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {TwitterPicker} from 'react-color';
import { useState } from 'react';

export default function FrmDossier({ouvert, setOuvert}) {
 const [titre, setTitre] = useState('');
 const [couverture, setCouverture] = useState('');
 const [couleur, setCouleur] = useState('');
 
 function gererFermer(){
    setOuvert(false);
 };
    
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
          />
          <TextField
            margin="dense"
            id="couverture"
            label="Image couverture du dossier"
            type="url"
            fullWidth
            variant="standard"
            onChange={e => setCouverture(e.target.value)}
          />

          <TwitterPicker className='ColorPicker'
            color={'#ffffff'}
            colors={['#0f0', '#00f', '#036', '#960']}
            onChangeComplete= {e => setCouleur(e.target.color)}
            width= 'auto'
            triangle='hide'
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={gererFermer}>Fermer</Button>
          <Button onClick>Soummettre</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}