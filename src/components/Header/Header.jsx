import React from 'react';
import './Header.scss';

export default class Header extends React.Component {
    render() {

        return (
            <div id="header">
                <div className="titre">Signets (Beta)</div>
                <div className="avatar">
                    Yannick Langlois
                    <img className="avatar_image" src="https://www.gravatar.com/avatar/244624d2fc4a5f950ef1c54c064f2195?s=30" alt="Avatar"/>
                </div>
            </div>
        );
    }
}
