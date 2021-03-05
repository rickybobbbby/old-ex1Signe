import React from 'react';
import './Signet.scss';
import {IconButton} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortIcon from '@material-ui/icons/Sort';

export default class Signet extends React.Component {
    render() {
        const tempsHumain = (temps) => Intl.DateTimeFormat('fr-CA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(temps * 1000));

        const couleurEstFonce = (couleur) => {
            if (couleur === "#FFFFFF") {
                return false;
            }
            return true;
        };

        return (
            <div className={['signet', couleurEstFonce(this.props.couleur) ? 'fonce' : 'pale'].join(' ')} style={{background: this.props.couleur}}>
                <div className="signet_images">
                <img src={`images/${this.props.image}`} alt={this.props.titre}/>
                </div>
                <div className="signet_details">
                    <p className="titre">{this.props.titre}</p>
                    <p className="modification">Modifié: {tempsHumain(this.props.modification)}</p>
                </div>

                <IconButton className="vert_icon" aria-label="share">
                    <MoreVertIcon />
                </IconButton>

                <div className="sort_icon_wrapper">
                    <SortIcon style={{ fontSize: 40 }}/>
                </div>
            </div>
        );
    }
}