import React from 'react';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <h3 className="active item">Minstrel</h3>
            <div className="right menu">
                <p className="item">MAP</p>
                <p className="item">PERFORMERS</p>
                <p className="item">LOG IN</p>
                <button className="button primary">SIGN UP</button>
            </div>
        </div>
        );
}

export default Header;
