import React, {Component} from 'react';
import {formated} from '../../actions/formated';

class Header extends Component {
    render(){
        return (
            <div className='Header'>
            <div className="logo">
                LOGO
            </div>
            <div className="user_select">
                {formated('10,10,2017', 'time')}
            </div>
        </div>
        );
    }
}

export default Header;

