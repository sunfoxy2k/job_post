import { UploadButton } from ".";
import MediaBarStyle from "./MediaBar.module.css";

const MediaBar = ({ id, isComment }) => {

  return (
      <div className={isComment ? MediaBarStyle.container_comment : MediaBarStyle.container}>
        {!isComment && (
          <span className={MediaBarStyle.prompt}>
            Thêm vào bài viết của bạn
          </span>
        )}
        <div className={MediaBarStyle.buttons}>
          <UploadButton id={id} isComment={isComment} />
        </div>
      </div>
  );
};

export default MediaBar;
