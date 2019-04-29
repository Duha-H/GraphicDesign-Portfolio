import React, { Component } from 'react';
import PropTypes from 'prop-types';


class DesignComponent extends Component 
{

    constructor(props) {
        super(props);

        this.logo = "";
        this.cardBack = "";
        this.cardFront = "";
        this.expandable = this.props.expandable;

        this.expandContent = this.expandContent.bind(this);
        this.flipCardFront = this.flipCardFront.bind(this);
        this.flipCardBack = this.flipCardBack.bind(this);

        this.state = {
            logo: "",
            card: "",
            expanded: false,
            text: []
        }
    }

    componentDidMount() {
        if(this.props.expandable) {
            this.logo = require(`../assets/logos/${this.props.info.logo}`);
            this.cardBack = require(`../assets/cards/${this.props.info.businessCardBack}`);
            this.cardFront = require(`../assets/cards/${this.props.info.businessCardFront}`);
            this.setState({
                logo: this.logo,
                card: this.cardBack
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

    flipCardFront() {
        this.setState({
            card: this.cardFront
        });
    }

    flipCardBack() {
        this.setState({
            card: this.cardBack
        });
    }
    

    render() {
        
        return (
            <div class="design-component" id={this.props.id}>
                <div class="design--static" id={this.props.id}>
                    <h4 id="design-title">{this.props.info.title}</h4>
                    <img id="design-logo" src={this.state.logo} alt="" onClick={this.expandContent}/>
                </div>          
                <div>
                    {this.state.expanded && <div class="design--expanded" id={this.props.id}>
                        <img id="design-card" src={this.state.card} alt="card missing" 
                            onMouseOver={this.flipCardFront} onMouseOut={this.flipCardBack}
                            onTouchStart={this.flipCardFront} onTouchEnd={this.flipCardBack}
                        />
                        <p id="design-caption">{this.props.info.caption}</p>
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