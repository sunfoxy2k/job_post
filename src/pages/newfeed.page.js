import React, { useEffect } from "react";
import Post from "../modules/Post";
import IndexStyle from "./style/index-page.module.css";
import Widget from "../modules/UI_Component/Widget";
import Modal from "../modules/UI_Component/Modal";
import { PostEditor } from '../modules/Editor'
import { useDispatch, useSelector } from "react-redux";
import PostUpload from "../modules/Post/PostUploader";
import { openModal } from "../modules/UI_Component/Modal/slice";
import { AvatarLink } from "../modules/UI_Component/Avatar";
import { useGetNeedfeedQuery } from "./api";
import { setUp as setUpPostsData } from "../modules/Post/slice";
import Loading from "../modules/UI_Component/Loader";

const IndexPage = () => {
  const MODAL_ID = 'post-modal';

  const dispatch = useDispatch();

  const {
    data: posts,
    isLoading,
    isSuccess,
  } = useGetNeedfeedQuery()

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUpPostsData(posts));
    }
  }, [posts])

  if (isLoading) return <Loading />

  return (
    <>
      <div className={IndexStyle.container}>
        <UserColumnLeft modal_id={MODAL_ID} />
        <NewfeedContentColumn />
        <GeneralContentColumnRight />
      </div>
      <PostModal modal_id={MODAL_ID} />
    </>
  );
};

export default IndexPage;


const UserColumnLeft = ({ modal_id }) => {
  const current_user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  return (
    <div className={IndexStyle.side_content}>
      <Widget className={IndexStyle.widget__user}>
        {/* <AvatarLink src={current_user.profileImg} /> */}
        <h3>{current_user.name}</h3>
        <p>{current_user.description}</p>
      </Widget>
      <button
        className={IndexStyle.write_post}
        onClick={() => dispatch(openModal(modal_id))}
      >
        Đăng bài
      </button>
    </div>
  )
}


const NewfeedContentColumn = () => {
  const postsState = useSelector(state => state.posts)
  const postListId = postsState.allIds

  const PostList = postListId.map((postId) => <Post postId={postId} key={postId} />)

  return (
    <div className={IndexStyle.main_content}>
      <PostUpload />
      {PostList}
    </div>
  )
}


const GeneralContentColumnRight = () => {
  return (
    <div className={IndexStyle.side_content}>
      <Widget className={IndexStyle.community_list}>

      </Widget>
    </div>
  )
}

const PostModal = ({ modal_id }) => {
  return (
    <Modal modal_id={modal_id}>
      <div className={IndexStyle.post_modal_content}>
        <h2>Tạo Bài Viết</h2>
        <PostEditor />
      </div>
    </Modal>
  )
}