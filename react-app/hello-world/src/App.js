import logo from './logo.svg';
import './App.css';
import CommentCard from './CommentCard/CommentCard';
import React from 'react';

class App extends React.Component {
  message = 'My name is Ean and I like cars.';
  constructor(props){
    super(props);
  }

  showMessage() {
    console.log('Message called');
  }
}


export default App;
