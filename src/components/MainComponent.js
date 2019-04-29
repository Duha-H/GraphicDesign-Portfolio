import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DesignComponent from './DesignComponent';

class MainComponent extends Component 
{ 
    render() {
        return (
            <div class="main-component" id={this.props.layout}>
                {this.props.data.map((component) => {
                    return <DesignComponent id={this.props.layout} info={component} key={component.id} expandable={true}/>
                })}
            </div>
        );
    }

}

MainComponent.propTypes = {
    data: PropTypes.array.isRequired
}

export default MainComponent;