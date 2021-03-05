import './Appli.scss';
import Signet from './components/Signet/Signet';
import Header from './components/Header/Header';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import signets_data from './signets.json';

export default function Appli() {
    const signets = signets_data.map((signet) =>
        <Signet key={signet.id} couleur={signet.couleur} titre={signet.titre} modification={signet.modification} image={signet.image} />
    );

    return (
        <div className="Appli">
            <Header/>
            <div id="grille">
                {signets}
            </div>
            <Fab id="fab" color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    );
}