import React, { Component } from 'react';
import styles from './AppHeader.module.css';

class AppHeader extends Component {
    //NOTES: SAMPLE FOR MOUNTING LIFECYCLE HOOKS
    constructor(props) {
        super(props);
        this.state = {
            header: 'Header Message'
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.header) {
            return {header: props.header};
        }else{
            return state;
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({header: 'Now the state is changed.'})
        }, 5000);
    }

    render() {
        return (        
            <div className={styles.AppHeader}>
                <h1>{this.state.header}</h1>
                <p>Sample Header</p>
            </div>
        )
    }
}

export default AppHeader