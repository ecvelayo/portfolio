import React, { Component } from 'react';
import { useParams, useLocation } from 'react-router';
import styles from './AppHeader.module.css';


function withParams(Component) {
    return props => <Component {...props} params={useParams()} query={useLocation()}/>;
}

class AppHeader extends Component {
    //NOTES: SAMPLE FOR MOUNTING LIFECYCLE HOOKS
    params = {};
    message = '';
    constructor(props) {
        super(props);
        console.log(document.cookie);
        this.getCookies('message');
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

    getCookies(name) {
        document.cookie.split('; ').forEach((entry) => {
            console.log(entry);
            if (entry.split('=')[0] === name){
                this.message = entry.split('=')[1]
            }
        })
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({header: 'Now the state is changed.'})
        }, 5000);
    }

    render() {
        const queryParams = new URLSearchParams(this.props.query.search);
        this.setState({header: this.message});
        return (        
            <div className={styles.AppHeader}>
                <h1>{this.state.header}</h1>
                <h1>Hello {this.props.params.username}</h1>
                <h3>My favorite food is {queryParams.get('favoriteFood')}</h3>
                <h3>My favorite drink is {queryParams.get('favoriteDrink')}</h3>
                <p>Sample Header</p>
            </div>
        )
    }
}

export default withParams(AppHeader);