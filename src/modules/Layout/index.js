import React, {useEffect} from "react";
import MainLayout from "./Main";
import HeaderLayout from "./Header";
import FooterNote from "./Footer/Note";
import FooterMenu  from "./Footer/Menu";
import LayoutStyle from "./layout.module.css"

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })


const Layout = ({children}) => {

    return (
        <div className={`${LayoutStyle.container} ${inter.className}`}>
          <HeaderLayout className={LayoutStyle.header}/>
          <MainLayout className={LayoutStyle.main}>
            {children}
          </MainLayout>
          <FooterNote className={LayoutStyle.footer__note}/>
          <FooterMenu className={LayoutStyle.footer__menu} />
        </div>
    )
}

export default Layout