import React from 'react';

export default function HomeHeader(props) {

    return (
        <div className='Header'>
            <div className="logo">
                LOGO
            </div>
            <div className="user_select">
                <select>
                    <option value="1">USER@MAIL.COM</option>
                </select>
            </div>
        </div>
    )
}