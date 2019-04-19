import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo1 from "../../src/assets/logos/CT_LOGO.png";


class DesignComponent extends Component 
{

    constructor(props) {
        super(props);

        const logoBaseURL = "../../src/assets/logos/";        
        this.state = {
            logo: this.props.info.logo,
            cardFront: this.props.info.businessCardFront,
            cardBack: this.props.info.businessCardBack
        }
    }

    render() {
        const logoBaseURL = "../../src/assets/logos/";
        const logo = require(`../assets/logos/${this.state.logo}`);
        //const cardBack = require(`../assets/cards/${this.state.cardBack}`);
        //const cardFront = require(`../assets/cards/${this.state.cardFront}`);
        //const logo = this.props.info.logo;
        //const logo = require(this.state.logo);
        console.log(this.state.cardBack);
        return (
            <div className="DesignComponent">
                <h4 id="design-title">{this.props.info.title}</h4>
                <img id="design-logo" src={logo} alt="Logo missing"/>
                <div id="">

                </div>
            </div>
        );
    }

}

DesignComponent.propTypes = {
    info: PropTypes.object.isRequired
}

export default DesignComponent;