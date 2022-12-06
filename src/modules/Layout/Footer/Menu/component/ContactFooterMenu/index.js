import style from './style.module.css';
import {FiPhoneCall} from 'react-icons/fi'
import { FaComment } from 'react-icons/fa';
import React from 'react';

const ContactFooter = React.forwardRef((props, ref) => {
    const phoneNumber = '382631367';

    const {className} = props;

    return (
        <div ref={ref} className={[className, style.container, 'd-flex'].join(' ')}> 
            <button><FaComment/> Chat</button>
            <a href={`tel:+84${phoneNumber}`}><FiPhoneCall />  Hotline</a>
        </div>
    )
})

export default ContactFooter