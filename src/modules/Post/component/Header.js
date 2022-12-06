import style from './style/post_header.module.css'
import { AvatarLink } from "@/modules/UI_Component/Avatar";
import { getDurationFromPublic } from "../../../libs";
import { PostContext } from "@/modules/Post";
import { useLikeHook } from "@/modules/Post/hook";
import { useContext } from "react";
import {BsBookmarkStar, BsBookmarkStarFill} from 'react-icons/bs'

const ReactBtn = ({postId}) => {

  const [isLike, likeToggle] = useLikeHook(postId)

  return (
    <button
      className={'right'} onClick={likeToggle}
    >
      {isLike ? <BsBookmarkStarFill size={40} /> : <BsBookmarkStar size={40} />}
    </button>
  )
}

const PostMetaData = () => {
  const { author_name, tags, public_time } = useContext(PostContext);
  
  return (
    <div >
      <div className={style.author_tag_group} >
        <strong >{author_name}</strong>
        <small>{tags[0]} </small>
      </div>

      <small>{getDurationFromPublic(public_time)} </small>
    </div>
  )
}

const PostHeader = () => {
  const { author_img_sml, id } = useContext(PostContext);

  return (
    <div className={style.container}>
      <AvatarLink src={author_img_sml} />
      <PostMetaData />
      <ReactBtn postId={id} />
    </div>
  );
};

export default PostHeader