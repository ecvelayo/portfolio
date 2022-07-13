import React, { Component } from 'react';
import styles from './LayoutComponent.module.css';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import AppNavbar from '../AppNavbar/AppNavbar';

class LayoutComponent extends Component {
    arrangedChildren = [];
    firstElementIndex = 0;
    constructor(props) {
        super(props);
    }

    filterChildren() {
      this.props.children.map((child) => {
        const elementFirst = child.props.class.split(' ').indexOf('first');
        if (elementFirst !== -1){
          if (this.arrangedChildren.indexOf(child) === -1){
            this.arrangedChildren.push(child);
            this.firstElementIndex = elementFirst;
          }
        };
      });
    }

    render() {
        this.filterChildren();
        if (this.arrangedChildren.indexOf(this.props.children[0]) === -1){
          this.arrangedChildren.push(this.props.children[0]);
        };
        return (       
          <div>
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