import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo1 from "../../src/assets/logos/CT_LOGO.png";


class DesignComponent extends Component 
{

    constructor(props) {
        super(props);

        this.logo = "";
        this.cardBack = "";
        this.cardFront = "";
        this.expandable = this.props.expandable;

        this.expandContent = this.expandContent.bind(this);

        this.state = {
            logo: "",
            card: "",
            expanded: false,
            text: ""
        }
    }

    componentDidMount() {
        if(this.props.expandable) {
            console.log("Expandable" + this.props.info.id);
            this.logo = require(`../assets/logos/${this.props.info.logo}`);
            this.cardBack = require(`../assets/cards/${this.props.info.businessCardBack}`);
            this.cardFront = require(`../assets/cards/${this.props.info.businessCardFront}`);
            this.setState({
                logo: require(`../assets/logos/${this.props.info.logo}`),
                card: require(`../assets/cards/${this.props.info.businessCardBack}`)
            });
        } else {
            this.setState({text: this.props.info.caption});
        }
    }

    expandContent() {
        console.log("EXPANDING!");
        this.setState((state) => (
            {expanded: !state.expanded}
        ));
    }
    

    render() {
        
        return (
            <div className={
                this.state.expanded ? "DesignExpanded" : "DesignComponent"
            }>
                <div className="DesignStatic">
                    <h4 id="design-title">{this.props.info.title}</h4>
                    <img id="design-logo" src={this.state.logo} alt="" onClick={this.expandContent}/>
                    <p id="design-text">{this.state.text}</p>
                </div>          
                <div>
                    {this.state.expanded && <div className="DesignExpanded">
                        <p>{this.props.info.caption}</p>
                        <img id="design-card" src={this.state.card} alt="card missing"/>
                    </div>}
                </div>
            </div>
        );
    }

}

DesignComponent.propTypes = {
    info: PropTypes.object.isRequired,
    expandable: PropTypes.bool.isRequired
}

export default DesignComponent;