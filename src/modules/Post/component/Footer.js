import { PostContext } from "@/modules/Post"
import { useContext } from "react"
import { useLikeHook } from "../hook"
import style from './style/post_footer.module.css';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai'
import  {FaCommentDots, FaShareSquare} from  'react-icons/fa'

const ReactIndicator = () => {
    const {id, react_count} = useContext(PostContext)
    const [isLike, likeToggle] = useLikeHook(id)

    const ReactIcon = isLike ? <AiFillStar/> : <AiOutlineStar />
    const Value = react_count + isLike

    return (
        <button onClick={likeToggle} className="d-flex">
            <span>{Value}</span>
            {ReactIcon}
        </button>
    )
}

const CommentIndicator = () => {
    const {id, comment_count} = useContext(PostContext)

    return (
        <button className="d-flex">
            <span>{comment_count}</span>
            {/* <FaCommentDots /> */}
            <FaCommentDots />
        </button>
    )
}

const ShareBtn = () => {
    
    return (
        <button className="right d-flex">
            <FaShareSquare />
            <div>Share</div>
        </button>
    )
}

const Footer = () => {
    return (
        <div className={`d-flex ${style.container}`}>
            <ReactIndicator />
            <CommentIndicator />
            <ShareBtn />
        </div>
    )
}

export default Footer;


// const PostFooter = ({ setLike, is_like }) => {
//     const { star_count, comment_count, editor } = useContext(PostContext);
  
//     return (
//       <div className={PostStyle.post_footer}>
//         <div className={PostStyle.post_footer_count}>
//           <div style={{ marginRight: "0.25em" }}>
//             {" "}
//             {is_like ? star_count + 1 : star_count}
//           </div>
//           <div>
//             {" "}
//             <img
//               src="/star_count.svg"
//               alt="star_count"
//               width={15}
//               height={15}
//               onClick={() => setLike(!!!is_like)}
//             />
//           </div>
//         </div>
//         <div className={PostStyle.post_footer_count}>
//           <div style={{ marginRight: "0.25em" }}>{comment_count}</div>
//           <div>
//             <img
//               src="/comment_count.svg"
//               alt="comment_count"
//               width={15}
//               height={15}
//             />
//           </div>
//         </div>
//         <sub>Edited By: {editor}</sub>
//       </div>
//     );
//   };
  
  