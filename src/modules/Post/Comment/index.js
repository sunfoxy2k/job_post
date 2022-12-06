import React, { useContext, useState } from "react";
import {AvatarLink} from "../../UI_Component/Avatar";
import CommentStyle from "./comment.module.css";
import { PostWriteComment } from "..";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { getDurationFromPublic } from "../../../libs";

const CommentContext = React.createContext();

const Comment = ({ comment_info }) => {
  const [vote, setVote] = useState(0);

  return (
    <CommentContext.Provider value={comment_info}>
      <div className={CommentStyle.comment_wrapper}>
        <div className={CommentStyle.comment_body}>
          <AvatarLink
            src={comment_info.avatar_img_src}
            style={{ flexShrink: "0" }}
          />
          <CommentContent vote={vote} setVote={setVote} />
          {/* <UpDownVote setVote={setVote} vote={vote} /> */}
        </div>
      </div>
    </CommentContext.Provider>
  );
};

const CommentContent = ({ vote, setVote }) => {
  const [expand, setExpand] = useState(false);
  const { user_name, public_time, content, reply_count, replies } =
    useContext(CommentContext);
  const [loadedReplies, setLoadedReplies] = useState(0);
  const [writeReply, setWriteReply] = useState(false);
  const repliesPerLoad = 5;

  return (
    <div className={CommentStyle.comment_content}>
      <div>
        <strong style={{ marginRight: "0.3em" }}>{user_name}</strong>
        <small>{getDurationFromPublic(public_time)}</small>
      </div>
      <p>{content}</p>
      <CommentFooter
        vote={vote}
        setVote={setVote}
        writeReply={writeReply}
        setWriteReply={setWriteReply}
      />
      {expand &&
        replies
          .slice(0, loadedReplies)
          .map((e, idx) => <ReplyContent reply_info={e} key={idx} />)}
      {loadedReplies - reply_count < 0 && (
        <span
          onClick={() => {
            if (!expand) setExpand(!!!expand);
            setLoadedReplies(loadedReplies + repliesPerLoad);
          }}
        >
          <strong>
            Xem thêm {reply_count - loadedReplies} comment
            {reply_count - loadedReplies >= 2 ? "s" : ""}
          </strong>
        </span>
      )}
      {writeReply && <PostWriteComment user_name={user_name} isReply={true} />}
    </div>
  );
};

const ReplyContent = ({ reply_info }) => {
  const [writeReply, setWriteReply] = useState(false);
  return (
    <div className={CommentStyle.reply_wrapper}>
      <Comment comment_info={reply_info} />
    </div>
  );
};

const CommentFooter = ({ vote, setVote, writeReply, setWriteReply }) => {
  const { upvote_count, downvote_count, reply_count } =
    useContext(CommentContext);

  const handleOnClick = (voteType) => {
    if (vote === voteType) setVote(0);
    else setVote(voteType);
  };

  const upvote_props = {
    style: { display: "block" },
    className: CommentStyle.vote,
    onClick: () => handleOnClick(1),
  };

  const downvote_props = {
    className: CommentStyle.vote,
    onClick: () => handleOnClick(-1),
  };

  return (
    <div>
      <div className={CommentStyle.comment_footer}>
        <div className={CommentStyle.comment_footer__icon}>
          <span>{vote == 1 ? upvote_count + 1 : upvote_count}</span>
          {(vote == 1 && <BsFillArrowUpCircleFill {...upvote_props} />) ||
            (vote != 1 && <AiOutlineArrowUp {...upvote_props} />)}
        </div>
        <div className={CommentStyle.comment_footer__icon}>
          <span>{vote == -1 ? downvote_count + 1 : downvote_count}</span>
          {(vote == -1 && <BsFillArrowDownCircleFill {...downvote_props} />) ||
            (vote != -1 && <AiOutlineArrowDown {...downvote_props} />)}
        </div>
        <div
          className={CommentStyle.comment_footer__icon}
          style={{ marginLeft: "auto" }}
        >
          <span>{reply_count}</span>
          <img
            src="/comment_count.svg"
            alt="comment_count"
            width={17}
            height={17}
            onClick={() => setWriteReply(!!!writeReply)}
          />
        </div>
      </div>
      {/* { writeReply && <PostWriteComment /> } */}
    </div>
  );
};

const UpDownVote = ({ setVote, vote }) => {
  const handleOnClick = (voteType) => {
    if (vote === voteType) setVote(0);
    else setVote(voteType);
  };

  const upvote_props = {
    style: { display: "block" },
    className: CommentStyle.vote,
    onClick: () => handleOnClick(1),
  };

  const downvote_props = {
    className: CommentStyle.vote,
    onClick: () => handleOnClick(-1),
  };

  return (
    <div className={CommentStyle.updown_vote}>
      {vote === 1 ? (
        <BsFillArrowUpCircleFill {...upvote_props} />
      ) : (
        <AiOutlineArrowUp {...upvote_props} />
      )}
      {vote === -1 ? (
        <BsFillArrowDownCircleFill {...downvote_props} />
      ) : (
        <AiOutlineArrowDown {...downvote_props} />
      )}
    </div>
  );
};

export default Comment;
