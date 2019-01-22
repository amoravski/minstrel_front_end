import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

class Sidebar extends React.Component {
    state = { visible: true, first:true };

    toggleSidebar = () => {
        this.setState({visible: !this.state.visible, first: false})
    };

    renderMenu = aligned => {
        return (
            <div className={`ui inverted secondary ${aligned} menu`}>
                <Link to="/" className="item">
                    <h3>Minstrel</h3>
                </Link>
                <Link to="/map" className={`${this.props.map} item`}>
                    Map
                </Link>
                <Link to="/performers" className={`${this.props.performers} item`}>
                    Performers
                </Link>
                <Link to="/login" className="item">
                    Log in
                </Link>
                <Link to="/register" className="item">
                    Register
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
                <div>
                <div className="ui computer only grid">
                    <div className={`visible-sidebar ui visible wide sidebar ${this.state.first ? "" : "slide-in"}`} style={{ backgroundColor: "#000000", overflowX: "hidden"}}>
                        {this.renderMenu("horizontal")} 
                    </div>
                </div>
                <div className="ui mobile only grid">
                    <div className={`visible-sidebar ui visible wide sidebar ${this.state.first ? "" : "slide-in"}`} style={{ backgroundColor: "#000000", overflowX: "hidden"}}>
                        {this.renderMenu("vertical")} 
                    </div>
                </div>
                </div>
            );
        }
        return (
            <div>
                <div className="ui computer only grid">
                <div className="ui visible slide-out wide sidebar" style={{ backgroundColor: "#000000", overflowX: "hidden"}}>
                    {this.renderMenu("horizontal")} 
                </div> 
                </div>
                <div className="ui mobile only grid">
                <div className="ui visible slide-out wide sidebar" style={{ backgroundColor: "#000000", overflowX: "hidden"}}>
                    {this.renderMenu("vertical")} 
                </div> 
                </div>
                <button className="open-button ui icon basic button" onClick={this.toggleSidebar}>
                    <i className="angle right icon" ></i>
                </button>
            </div>
        );
    };

    render () {
        return (
                this.renderIfVisible()
        );
    }
}

export default Sidebar;
