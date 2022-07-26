import React, { Component } from 'react';
import styles from './LayoutComponent.module.css';
import AppHeader from '../AppHeader/AppHeader';
import AppFooter from '../AppFooter/AppFooter';
import AppNavbar from '../AppNavbar/AppNavbar';
import App from '../App';

class LayoutComponent extends App {
    post = {};
    firstElementIndex = 0;
    loadingMessage = '';
    constructor(props) {
        super(props);
        this.state = {data: ''};
        this.getData();
        this.loadingMessage = 'Wait while data is being loaded.'
    }

    goToHeader = () => {
      window.location = "/header";
    }

    getData = () => {
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(result => 
          result.json()
        )
        .then((response) => {
          this.setState({data: response.title});
        })
      }, 5000);
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
            {this.state.data ? <p>{this.state.data}</p> : <p>{this.loadingMessage}</p>}
            <AppFooter>

            </AppFooter>
          </div>  
        )
    }
}

export default LayoutComponent