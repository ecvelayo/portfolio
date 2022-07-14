import React, { Component } from 'react';
import styles from './LayoutComponent.module.css';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import AppNavbar from '../AppNavbar/AppNavbar';
import App from '../App';

class LayoutComponent extends App {
    arrangedChildren = [];
    firstElementIndex = 0;
    constructor(props) {
        super(props);
    }

    goToHeader = () => {
      window.location = "/header";
    }

    render() {
      this.showMessage();
        return (       
          <div>
            <p>{this.message}</p>
            <button className='btn btn-primary' onClick={this.goToHeader}>Go to Header</button>
            <AppHeader>
            </AppHeader>
            <AppNavbar></AppNavbar>
            {/* <div className={styles.test}>
                {this.arrangedChildren}
            </div> */}
            <AppFooter>

            </AppFooter>
          </div>  
        )
    }
}

export default LayoutComponent