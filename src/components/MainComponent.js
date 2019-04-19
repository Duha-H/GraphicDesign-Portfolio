import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DesignComponent from './DesignComponent';
import { Scrollbars } from 'react-custom-scrollbars';

class MainComponent extends Component 
{

    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }    
    

    render() {
        return (
            <div className="MainComponent">
                {this.props.data.map((component) => {
                    return <DesignComponent info={component} key={component.id}/>
                })}
            </div>
        );
    }

}

MainComponent.propTypes = {
    data: PropTypes.array.isRequired
}

export default MainComponent;