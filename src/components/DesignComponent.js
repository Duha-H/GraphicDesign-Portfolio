import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpandedDesignComponent from './ExpandedDesignComponent';


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
            cardBack: "",
            cardFront: "",
            expanded: false,
            text: ""
        }
    }

    componentDidMount() {
        if(this.props.expandable) {
            this.logo = require(`../assets/logos/${this.props.info.logo}`);
            this.cardBack = require(`../assets/cards/${this.props.info.businessCardBack}`);
            this.cardFront = require(`../assets/cards/${this.props.info.businessCardFront}`);
            this.setState({
                logo: this.logo,
                card: this.cardBack,
                cardBack: this.cardBack,
                cardFront: this.cardFront,
                text: this.props.info.caption
            });
        } else {
            this.setState({text: this.props.info.caption});
        }
    }

    expandContent() {
        this.setState((state) => (
            {expanded: !state.expanded}
        ));
    }

    

    render() {
        
        return (
            <div className="design-component" id={this.props.id}>
                <div className="design--static" id={this.props.id}>
                    <h4 id="design-title">{this.props.info.title}</h4>
                    <img id="design-logo" src={this.state.logo} alt="" onClick={this.expandContent}/>
                </div>          
                <div>
                    {this.state.expanded && <ExpandedDesignComponent data={this.state} info={this.props.info} expandHandler={this.expandContent} />}
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