import React from 'react';
import styles from './AppNavbar.module.css';


class AppNavbar extends React.Component {
  //NOTES: Unmounting lifecycle sample
  constructor(props){
    super(props);
    this.state = {
      hidden: false
    }
  }

  deleteChild = () => {
    this.setState({hidden: true});
  }
  //sample of confirmation before component unmount
  shouldComponentUpdate() {
    // if (window.confirm('Do you want to delete the component?')){
    //   return true;
    // }else{
    //   return false;
    // }
  }

  render(){
    let childComponent;
    if (!this.state.hidden) {
      childComponent = <ChildComponent></ChildComponent>
    }
    return (
      <div className={styles.AppNavbar} data-testid="AppNavbar">
        AppNavbar Component
        {childComponent}
        <button type='button' className='btn btn-secondary' onClick={this.deleteChild}>Delete Child Component</button>
      </div>
    )
  }
}

class ChildComponent extends React.Component {
  //must be placed on the component to be unmounted/removed from DOM
  componentWillUnmount() {
    console.log('This component is about to be unmounted');
  }

  render(){
    return (
      <h1>Child Element</h1>
    )
  }
}

export default AppNavbar;

