import Link from "next/link";
import React from "react";
import { useState } from "react";
import AvatarStyle from './avatar.module.css';

export const AvatarLink = ({ src, className, href = '/profile' }) => {

    return (
        <Link href={href} >
            <Avatar  src={src} className={className}/>
        </Link>
    )
}

const fallBackImg = '/images/common/avatar.jpg'

const Avatar = ({ src, className }) => {
    const [imgSrc, setImg] = useState(src) 

    function imgFallback ()  {
        setImg(fallBackImg)
    }

    return (
        <img src={imgSrc} alt="user_profile" className={`${className} ${AvatarStyle.img}`} onError={imgFallback} />
    )
}

export default Avatar;
