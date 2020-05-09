import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DesignComponent from './DesignComponent';
import { Scrollbars } from 'react-custom-scrollbars';

class MainComponent extends Component 
{ 
    render() {
        return (
            <Scrollbars 
                style={{ height: 690, marginTop: 40 }}
                renderScrollbarHorizontal={(props, style) => <div style={{...style, backgroundColor: 'blue'}} {...props} className="scrollbar-vertical" />}
                autoHide
            >
                <div className="main-component" id={this.props.layout}>
                    {this.props.data.map((component) => {
                        return <DesignComponent id={this.props.layout} info={component} key={component.id} expandable={true}/>
                    })}
                </div>
            </Scrollbars>
            
        );
    }

}

MainComponent.propTypes = {
    data: PropTypes.array.isRequired
}

export default MainComponent;