import { LogoLink } from '@/modules/UI_Component/Logo'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { FaComments } from 'react-icons/fa'
import style from './style.module.css';
import React from 'react';

const FooterMenu = React.forwardRef((props, ref) => {
    const { className } = props

    return (
        <div ref={ref} className={className + ' ' + style.perfect_center}>
            <LogoLink />
            <PostUploadBtn />
            <Menu />
        </div>
    )
})

// const Footer
const Menu = () => {
    return (
        <div  >
            <BsFillGrid1X2Fill size={30} />
        </div>
    )
}

const PostUploadBtn = () => {
    return (
        <button className={style.btn__write_post}>
            <div className={style.btn_Img_wrapper}>
                <FaComments size={40} />
            </div>
            <span>Write Post</span>
        </button>
    )
}

export default FooterMenu