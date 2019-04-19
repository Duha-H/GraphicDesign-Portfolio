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
                    if(component.id === '0')
                        return <DesignComponent info={component} key={component.id} expandable={false}/>
                    else
                        return <DesignComponent info={component} key={component.id} expandable={true}/>
                })}
            </div>
        );
    }

}

MainComponent.propTypes = {
    data: PropTypes.array.isRequired
}

export default MainComponent;