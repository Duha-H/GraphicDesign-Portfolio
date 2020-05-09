import React, { Component } from "react";

class ExpandedDesignComponent extends Component {

    constructor(props) {
        super(props);
        
        this.flipCardFront = this.flipCardFront.bind(this);
        this.flipCardBack = this.flipCardBack.bind(this);

        this.state = {...this.props.data};
        
    }
    
    flipCardFront() {
        this.setState({
            card: this.state.cardFront
        });
    }

    flipCardBack() {
        this.setState({
            card: this.state.cardBack
        });
    }
    
    render() {
        return (
            <div className="expanded-content">
                <div className="close-button">
                    <button onClick={this.props.expandHandler}><img src={require(`../assets/icons/close_icon_w.svg`)} alt="close button"/></button>
                </div>
                <img id="expanded-logo" src={this.state.logo} alt="" onClick={this.expandContent}/>
                <img id="design-card" src={this.state.card} alt="card missing" 
                    onMouseOver={this.flipCardFront} onMouseOut={this.flipCardBack}
                    onTouchStart={this.flipCardFront} onTouchEnd={this.flipCardBack}
                />
                <p id="design-caption">{this.state.text}</p>
            </div>
        );
    }
}

export default ExpandedDesignComponent;