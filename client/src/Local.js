import React, { Component } from 'react';


class Local extends Component {
        person = { user: '',
        rememberMe: false
      };
      state = {...this.person};

      handleChange = (event) => {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;
     
        this.setState({ ...this.person , [input.name]: value });
      };
     
      handleFormSubmit = () => {const { user, rememberMe } = this.state;
      localStorage.setItem('rememberMe', rememberMe);
      localStorage.setItem('user', rememberMe ? user : '');
    };
     //get from local stoage
    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const user = rememberMe ? localStorage.getItem('user') : '';
        this.setState({ user, rememberMe });
      }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    User: <input name="user" value={this.state.user} onChange={this.handleChange} />
                </label>
                <label>
                    <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" /> Remember me
      </label>
                <button type="submit">Sign In</button>
                <h1 name = 'user'> Hello  {this.state.user} ! </h1>
            </form>

        );
    }
}



export default Local;
