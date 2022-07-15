import React, { Component } from 'react';
import { useParams, useLocation } from 'react-router';
import styles from './AppHeader.module.css';


function withParams(Component) {
    return props => <Component {...props} params={useParams()} query={useLocation()}/>;
}

class AppHeader extends Component {
    //NOTES: SAMPLE FOR MOUNTING LIFECYCLE HOOKS
    params = {};
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
        const queryParams = new URLSearchParams(this.props.query.search);
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