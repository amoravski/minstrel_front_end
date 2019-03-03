import React from 'react';
import { connect } from 'react-redux';

import { changeLanguage } from '../actions';

class LanguageButton extends React.Component {
    handleClick = () => {
        this.props.changeLanguage();
    }

    render () {
        var languageText = "bg";
        if (this.props.language === "bg") {
            languageText = "gb uk";
        }
        return (
            <button className="language-button ui icon basic button" onClick={this.handleClick}>
               <i className={`${languageText} flag`}></i>
            </button>
        )
    }
}

const mapStateToProps = state => {
    return { language: state.language.current };
};

export default connect(mapStateToProps, { changeLanguage })(LanguageButton);
