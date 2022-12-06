import React from "react";
import style from "./footer.module.css"
import { useRouter } from "next/router";
import NavFooterMenu from './component/NavFooterMenu';
import ContactFooter from "./component/ContactFooterMenu";
import useHeightOffset from "@/hook/useHeight";

const FooterLayout = (prop) => {
    const {className} = prop

    const [height, refHeightElement] = useHeightOffset()
    const router = useRouter()

    return (
        <div className={`${style.container} ${className}`}>
            <div style={{ 'height': height }} /> {/* offset */}
            {
                // if path is landinging page then show contact footer
                router.asPath === '/' ?
                    <ContactFooter ref={refHeightElement} className={style.menu} /> :
                    <NavFooterMenu ref={refHeightElement} className={style.menu}/>
            }
        </div>
    )
}


export default FooterLayout;