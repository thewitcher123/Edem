import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';

import AlertContainer from '../../containers/AlertContainer/AlertContainer';

import './LoginPage.scss';

export class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            submitted: false
        };
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        const {actions} = this.props;
        if (email && password) {
            actions.login({
                User: email,
                Password: password
            });
        }
    };

    render() {
        const {email, password} = this.state;
        const {disableLogin, gettingAuth} = this.props;
        return (
            <div className="login-page">
                <div className="login-page_inner">
                    <h1 className="login-page_title">Авторизация</h1>
                    <AlertContainer/>
                    <Form className="login-page_form" onSubmit={this.handleSubmit} loading={gettingAuth}>
                        <Form.Input
                            className={"login-input"}
                            required={true}
                            placeholder="Логин"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            size='big'
                            icon='user'
                            iconPosition='left'
                        />
                        <Form.Input
                            className={"password-input"}
                            required={true}
                            placeholder="Пароль"
                            name="password"
                            type="password"
                            value={password}
                            onChange={this.handleChange}
                            size='big'
                            icon='lock'
                            iconPosition='left'
                        />
                        <Button
                            onClick={this.handleSubmit}
                            color="red"
                            size='huge'
                            fluid
                            disabled={disableLogin}
                        >Войти</Button>
                    </Form>
                </div>
            </div>
        )
    }
}