import { useState } from "react";
import style from './style/post_body.module.css'
import { PostContext } from "@/modules/Post";
import { useContext } from "react";
import {BsChevronBarExpand} from'react-icons/bs'

const PostBody = () => {
    const { body, title } = useContext(PostContext);
    const [extend, setExtend] = useState(false)

    function toggleExtend() {
        setExtend(!!!extend)
    }

    return (
        <article className={`${style.container} flex-column`} onDoubleClick={toggleExtend}>
            <h3 className={style.title}>{title}</h3>
            <PostContentViewer extend={extend} body={body} />
            <Media />
            <ExtendBtn extend={extend} onClick={toggleExtend} />
        </article>
    );
};

const CollapseTrigger = () => {
    return (
        <>
        
        </>
    )
}

// const ExpendTrigger = () => {
//     return (

//     )
// }

const ExtendBtn = ({ extend, onClick }) => {
    // const Content = 

    return (
        <button className={`${style.see_more} ${extend && style.extend} d-flex right w-100`} onClick={onClick}>
            <BsChevronBarExpand size={20} />
            <span>{extend ? "thu nhỏ..." : "read more..."}</span>
            {/* {extend ? <CgArrowsExpandDownRight /> : <CgArrowsExpandDownRight />} */}
            {/* <BiExpand size={20}/> */}
        </button>
    )
}

const PostContentViewer = ({ body, extend }) => {
    return (
        <div className={`${style.content_wrapper} ${extend || style.line_clamp}`}>
            <p>{body}</p>
        </div>
    )
}

const Media = () => {
    const { medias } = useContext(PostContext);
    const mediaMain = medias[0]

    return (
        <img src={mediaMain.src} className={style.img} />
    )
}



// if (media_type === "image") return <img src={media_source} alt="" />;
// else if (media_type === "video")
//   return <iframe src={media_source} allowFullScreen></iframe>;


export default PostBody;