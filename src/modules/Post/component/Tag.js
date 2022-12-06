import PostTagStyle from './style/post_tag.module.css';
import { useContext } from 'react';
import { PostContext } from '@/modules/Post';

const Tag = (props) =>{
  const { e } = props

  return (
    <small key={idx}>
      {e} {e != groups.slice(-1)[0] ? "|" : ""}{" "}
    </small>
  )
}

const PostTag = ({ className }) => {
  const { groups } = useContext(PostContext)

  return (
    <div className={PostTagStyle.container}>
      {groups.map((e, idx) => <Tag e={e} key={idx} />)}
    </div>
  );
};

export default PostTag;