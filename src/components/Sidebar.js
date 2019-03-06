import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { openSidebar, closeSidebar, initSidebar } from '../actions';
import PerformerSearchForm from './forms/PerformerSearchForm';
import LogOutButton from './LogOutButton';

import './Sidebar.css';

class Sidebar extends React.Component {

    componentDidMount() {
        this.props.initSidebar();
    }

    toggleSidebar = () => {
        if (this.props.sidebar.visible) {
            this.props.closeSidebar();
        }
        else {
            this.props.openSidebar();
        }
    };

    renderSignedOutMenu = aligned => {
        return (
            <div>
                <div className={`ui inverted secondary ${aligned} menu`}>
                    <Link to="/" className="item">
                        <h3>Minstrel</h3>
                    </Link>
                    <Link to="/map" className={`${this.props.map} item`}>
                        MAP
                </Link>
                    <Link to="/performers" className={`${this.props.performers} item`}>
                        PERFORMERS
                </Link>
                    <Link to="/login" className="item">
                        LOG IN
                </Link>
                    <Link to="/register" className="item">
                        SIGN UP
                </Link>

                    <button className="close-button ui right floated icon button" onClick={this.toggleSidebar}>
                        <i className="close icon" ></i>
                    </button>
                </div>
                <div className="performer-search-form">
                    <PerformerSearchForm />
                </div>
            </div>
        );
    }

    renderSignedInMenu = aligned => {
        return (
            <div className={`ui inverted secondary vertical menu`}>
                <h3 className="item">{this.props.user.name}</h3>
                <Link to="/" className={`${this.props.dashboard} item`}>
                    DASHBOARD
                </Link>
                <Link to="/map" className={`${this.props.map} item`}>
                    MAP
                </Link>
                <Link to="/performers" className={`${this.props.performers} item`}>
                    PERFORMERS
                </Link>
                <Link to="/performances" className={`${this.props.performances} item`}>
                    PERFORMANCES
                </Link>
                <Link to="/offers" className={`${this.props.offers} item`}>
                    OFFERS
                </Link>
                <div className="item">
                    <LogOutButton />
                </div>

                <button className="close-button ui right floated icon button" onClick={this.toggleSidebar}>
                    <i className="close icon" ></i>
                </button>
            </div>
        );
    }

    renderIfVisible = (renderMenu) => {

        if (this.props.sidebar.visible === true) {
            return (
                <div>
                    <div className="ui computer only grid">
                        <div className={`sidebar-main visible-sidebar ui visible wide sidebar ${this.props.sidebar.first ? "" : "slide-in"}`}>
                            {renderMenu("horizontal")}
                        </div>
                    </div>
                    <div className="ui mobile only grid">
                        <div className={`sidebar-main visible-sidebar ui visible wide sidebar ${this.props.sidebar.first ? "" : "slide-in"}`}>
                            {renderMenu("vertical")}
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div>
                <div className="ui computer only grid">
                    <div className="sidebar-main ui visible slide-out wide sidebar">
                        {renderMenu("horizontal")}
                    </div>
                </div>
                <div className="ui mobile only grid">
                    <div className="sidebar-main ui visible slide-out wide sidebar">
                        {renderMenu("vertical")}
                    </div>
                </div>
                <button className="open-button ui icon basic button" onClick={this.toggleSidebar}>
                    <i className="angle right icon" ></i>
                </button>
            </div>
        );
    };

    render() {
        if (this.props.user.signedIn) {
            return this.renderIfVisible(this.renderSignedInMenu)
        }

        return this.renderIfVisible(this.renderSignedOutMenu)
    }
}

const mapStateToProps = state => {
    return { user: state.user, sidebar: state.sidebar };
}

export default connect(mapStateToProps, { openSidebar, closeSidebar, initSidebar })(Sidebar);
