
import { useDispatch } from "react-redux";
import {likePost} from '@/modules/Post/slice'
import { useSelector } from "react-redux";

export const useLikeHook = (postId) => {

    const dispatch = useDispatch();
    const likeToggle = () => dispatch(likePost(postId));
  
    const current_user_like_list = useSelector(state => state.posts.is_like)
    const isLike = current_user_like_list.includes(postId)
  
    return [isLike, likeToggle]
  }