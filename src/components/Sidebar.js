import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

class Sidebar extends React.Component {
    state = { visible: true };

    toggleSidebar = () => {
        this.setState({visible: !this.state.visible})
    };

    renderMenu = () => {
        return (
            <div className="ui inverted secondary menu">
                <Link to="/" className="item">
                    <h3>Minstrel</h3>
                </Link>
                <Link to="/map" className="item">
                    Map
                </Link>
                <Link to="/performers" className="item">
                    Performers
                </Link>
                <Link to="/register" className="item">
                    Register
                </Link>
                <Link to="/signin" className="item">
                    SignIn
                </Link>
                <button className="close-button ui right floated icon button" onClick={this.toggleSidebar}>
                    <i className="close icon" ></i>
                </button>
            </div>
        );
    }

    renderIfVisible = () => {

        if (this.state.visible === true) {
            return (
                <div className="side-sidebar ui visible slide-in wide sidebar" style={{ backgroundColor: "#000000", overflowX: "hidden"}}>
                    {this.renderMenu()} 
                </div>
            );
        }
        return (
            <div>
                <div className="ui visible slide-out wide sidebar" style={{ backgroundColor: "#000000", overflowX: "hidden"}}>
                    {this.renderMenu()} 
                </div>
                <button className="open-button ui icon basic button" onClick={this.toggleSidebar}>
                    <i className="angle right icon" ></i>
                </button>
            </div>
        );
    };

    render () {
        return (
            <div>
                {this.renderIfVisible()}
            </div>
        );
    }
}

export default Sidebar;
