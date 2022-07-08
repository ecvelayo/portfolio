import React, { Component } from 'react';
import styles from './AppHeader.module.css';

class AppHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (        
            <div className={styles.AppHeader}>
                <h1>Header</h1>
                <p>Sample Header</p>
            </div>
        )
    }
}

export default AppHeader