import React, {Component} from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

import Hubcore from '../HubcorePage/Hubcore';

class Layout extends Component {

    render() {
        const {handleLogout} = this.props;
        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item
                        name='home'
                        activeClassName='active'
                    >
                        <NavLink to='/home' activeClassName='active'>
                            Главная
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item
                        name='home'
                        activeClassName='active'
                    >
                        <NavLink to='/user' activeClassName='active'>
                            Личный кабинет
                        </NavLink>
                    </Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='logout'
                            activeClassName='active'
                            onClick={handleLogout}
                        >
                            <NavLink to='/' activeClassName='active'>
                                Выход
                            </NavLink>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

                <Segment>
                    <Hubcore />
                </Segment>
            </div>
        )
    }
}

export default Layout;