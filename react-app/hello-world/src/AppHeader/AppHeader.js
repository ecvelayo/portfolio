import './AppHeader.css';
import React, { Component } from 'react';
import AppFooter from '../AppFooter/AppFooter';

class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mastiffOperatorBrimstone: true,
        }
    }
    render() {
        return (        
            <div>
                <button onClick={() => {
                    this.setState({mastiffOperatorBrimstone: !this.state.mastiffOperatorBrimstone});
                }}>
                    Click to change text
                </button>
                {
                    this.state.mastiffOperatorBrimstone ? 
                        (<h1>Welcome to {this.props.name}'s site</h1>)
                        : (<h1>This is the changed text</h1>)
                }
                {
                    this.props.name1 ? (<h2>I have a name1 property</h2>) : (<div></div>)
                }
            </div>
        )
    }
}

export default AppHeader