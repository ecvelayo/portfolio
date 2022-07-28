import React, { Component } from 'react';
import styles from './AppFooter.module.css';

class AppFooter extends Component {
  //NOTES: UPDATING LIFECYCLE PHASE
  message = '';
  constructor(props){
    super(props);
    document.cookie = 'message=Cookie Message';
    this.state = {
      footer: 'Footer Message'
    }
    this.getCookies('message');
  }
  //WILL GET CALLED EVERYTIME THERE IS AN UPDATE TOGETHER WITH RENDER
  // static getDerivedStateFromProps(props, state) {
  //   return {footer: 'Changed footer from getDerivedStateFromProps'}
  // }

  // works like a checkpoint if you really want to update the component, by default is true
  // shouldComponentUpdate() {
  //   return false;
  // }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({footer: 'Mounted footer value'});
    // }, 2000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevState, ' was the previous state value before the change.');
  }

  componentDidUpdate(){
    console.log(this.state, ' is the actual value right now.');
  }

  getCookies(name) {
    document.cookie.split('; ').forEach((entry) => {
        console.log(entry);
        if (entry.split('=')[0] === name){
            this.message = entry.split('=')[1]
        }
    })
}

  render(){
    this.setState({footer: this.message});
    return (
      <div className={styles.AppFooter}>
        <h1>{this.state.footer}</h1>
        <button className='btn btn-primary' type='button'>Change Message</button>
      </div>
    )
  }
}

export default AppFooter;
