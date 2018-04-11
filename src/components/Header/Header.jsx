import React, {Component} from 'react';
import {formated} from '../../actions/formated';

class Header extends Component {
    state={
        url: '111.png'
    }
    render(){
        let {items:{items}} = this.props;
        let {url} = this.state;
        return (
            <div className='Header'>
                <div className="logo">
                    <span>LOGO</span>
                </div>
                <div className="user_select">
                    {formated('10,10,2017', 'time')}
                </div>
                <div className="img_box">
                    <img src={url} alt=""/>
                </div>
                <ul>
                    {items.map((e,i)=>(
                        <li key={i}>{e}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Header;

