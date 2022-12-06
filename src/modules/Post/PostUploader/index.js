
import React from "react";
import style from "./post_upload.module.css";
import { AvatarLink } from "@/modules/UI_Component/Avatar";
import { PostEditor } from "@/modules/Editor";
import Widget from "@/modules/UI_Component/Widget";
import { useSelector } from "react-redux";


import {BiMessageRoundedDetail} from 'react-icons/bi'

const PostUpload = () => {
  const user = useSelector(state => state.auth.user)

  return (
    <Widget className={`${style.container} `}>
      <div className={style.input} >
        <div className={style.emphasize}> <AvatarLink src={user.profileImg} className={style.avatar} /> <span>  {' Cậu '}</span></div>
        <span>muốn tâm sự điều gì</span>
        <SubmitBtn />
      </div>
      <PostEditor className={style.editor} />
    </Widget>
  )
}

const SubmitBtn = () => {
  return (
    <BiMessageRoundedDetail size={25} className={style.icon} />
  )
}

export default PostUpload;
