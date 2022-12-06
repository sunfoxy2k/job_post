import React, { useContext, useState } from "react";
import style from "./post.module.css";
import { AvatarLink } from "../UI_Component/Avatar";
import Comment from "./Comment";
import { CommentEditor } from "../Editor";
import Widget from "../UI_Component/Widget";
import { useSelector } from "react-redux";

import PostTag from "./component/Tag";
import PostHeader from "./component/Header";
import PostBody from "./component/Body";
import PostFooter from './component/Footer';
import { createContext } from "react";
import LineBorder from "@/modules/UI_Component/LineBorder";

export const PostContext = createContext();

const Post = ({ postId }) => {
  const postData = useSelector(state => state.posts.byId[postId])

  return (
    <PostContext.Provider value={postData}>
      <PostViewer />
    </PostContext.Provider>
  )
}

const PostViewer = () => {
  return (
    <div className={style.container }>
      <PostTag className={style.tag} />
      <Widget className={`${style.card}`}>
        <PostHeader  />
        <PostBody />
        <LineBorder className={style.line}/>
        <PostFooter />
      </Widget>
    </div>
  )
}

export default Post;







