import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Sidebar.css';

class SidebarTemplate extends React.Component {
    state = { visible: true, first:true };

    toggleSidebar = () => {
        this.setState({visible: !this.state.visible, first: false})
    };

    

    renderIfVisible = () => {

        if (this.state.visible === true) {
            return (
                <div>
                <div className="ui computer only grid">
                    <div className={`visible-sidebar ui visible wide sidebar ${this.state.first ? "" : "slide-in"}`} style={{ backgroundColor: "#000000", overflowX: "hidden"}}>
                        {this.props.renderMenu("horizontal")} 
                    </div>
                </div>
                <div className="ui mobile only grid">
                    <div className={`visible-sidebar ui visible wide sidebar ${this.state.first ? "" : "slide-in"}`} style={{ backgroundColor: "#000000", overflowX: "hidden"}}>
                        {this.props.renderMenu("vertical")} 
                    </div>
                </div>
                </div>
            );
        }
        return (
            <div>
                <div className="ui computer only grid">
                <div className="ui visible slide-out wide sidebar" style={{ backgroundColor: "#000000", overflowX: "hidden"}}>
                    {this.props.renderMenu("horizontal")} 
                </div> 
                </div>
                <div className="ui mobile only grid">
                <div className="ui visible slide-out wide sidebar" style={{ backgroundColor: "#000000", overflowX: "hidden"}}>
                    {this.props.renderMenu("vertical")} 
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

class Sidebar extends React.Component {

    renderSignedOutMenu = aligned => {
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

    renderSignedInMenu = aligned => {
        return (
            <div className={`ui inverted secondary vertical menu`}>
                <h3 className="item">{this.props.user.name}</h3>
                <Link to="/" className={`${this.props.dashboard} item`}>
                    Dashboard
                </Link>
                <Link to="/map" className={`${this.props.map} item`}>
                    Map
                </Link>
                <Link to="/performers" className={`${this.props.performers} item`}>
                    Performers
                </Link>
                <Link to="/performances" className={`${this.props.performances} item`}>
                    Performances
                </Link>
                 <Link to="/offers" className={`${this.props.offers} item`}>
                    Offers
                </Link>
                <Link to="/logout" className="item">
                    Log out
                </Link>

                <button className="close-button ui right floated icon button" onClick={this.toggleSidebar}>
                    <i className="close icon" ></i>
                </button>
            </div>
        );
    }


    render () {
        if (this.props.user.signedIn) {
            return <SidebarTemplate renderMenu={this.renderSignedInMenu} />
        }
        
        return <SidebarTemplate renderMenu={this.renderSignedOutMenu} />
    }
}

const mapStateToProps = state => {
    return { user: state.user };
}

export default connect(mapStateToProps, {})(Sidebar);
