import style from './style/index-page.module.css'
import QuickContentSelection from './component/index/QuickContentSelection'
import Link from 'next/link';
import ExportedImage from 'next-image-export-optimizer';
import HeroBannerSVG from './asset/index/img.svg'
import KnowledgeSVG from './asset/index/knowledge.svg'
import DiscussSVG from './asset/index/discuss.svg'
import TalkSVG from './asset/index/talk.svg'
import { Card } from '@/modules/UI_Component/LinkCard';

const RouteAction = (props) => {
    const { text, href, imgSrc } = props;

    return (
        <Link href={href} className={style.route_item}>
            {imgSrc && <ExportedImage src={imgSrc} />}
            <span className={style.route_item_Content} >{text} </span>
        </Link>
    )
}

const RouteNav = () => {
    const routeLinks = [
        { text: "Kiến Thức Tâm Lý", href: "/neewfeed", imgSrc: KnowledgeSVG },
        { text: "Trao đổi với Chuyên Gia", href: "/neewfeed", imgSrc: TalkSVG },
        { text: "Cộng Đồng", href: "/neewfeed", imgSrc: DiscussSVG }
    ]

    return (
        <div className={style.nav}>
            {routeLinks.map((props, idx) => <RouteAction {...props} key={idx} />)}
        </div>
    )
}


const HeroSection = () => {

    return (
        <section className={style.section}>
            <ExportedImage src={HeroBannerSVG} className='w-100' />
            <div className={style.section_Right}>
                <h1>Tìm kiếm công việc phù hợp với bạn</h1>
                <QuickContentSelection />
                <RouteNav />
            </div>
        </section>
    )
}


const KnowledgeSection = () => {
    return (
        <section className={style.fullsize}>
            <div className={style.title}>
                <h2>Tìm kiếm công việc</h2>
            </div>
            <div>
                {}
            </div>
        </section>
    )
}

export default function IndexPage() {
    return (
        <div className={['page_content', style.container, style.scroll].join(' ')}>
            <HeroSection />
            <KnowledgeSection />
        </div>
    )
}