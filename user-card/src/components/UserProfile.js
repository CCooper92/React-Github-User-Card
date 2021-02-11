import axios from 'axios';
import React, { Component } from 'react';

export default class UserProfile extends Component {
    state = {
        user: null
    };

    componentDidMount() {
        axios
        .get(`https://api.github.com/users/${this.props.username}`)
        .then(res => {
        this.setState({ user: res.data })
        })
        .catch(err => {
            console.log(err);
    })
}
    componentDidUpdate(prevProps) {
        if (prevProps.username !== this.props.username) {
            axios
            .get(`https://api.github.com/users/${this.props.username}`)
            .then(res => {
            this.setState({ user: res.data })
            })
            .catch(err => {
                console.log(err);
        })
      }
}

    render() {
        if (!this.state.user) return <h3>Loading user data...</h3>
        return(
            <div style={{padding: '64px', display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection:'column'}}>
                <img 
                src={this.state.user.avatar_url} 
                alt={this.state.user.name} 
                style={{borderRadius: '50%', maxWidth: '200px'}} 
                />

                <h1>{this.state.user.name}</h1>
                <p>username: {this.state.user.login}</p>
                <p>followers: {this.state.user.followers}</p>
                <p>following: {this.state.user.following}</p>
                <p>repos: {this.state.public_repos}</p>
                <p>gists: {this.state.user.public_gists}</p>
            </div>
        )
    }
}