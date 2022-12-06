import initialTheme from "./themes/initialTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import ToolbarPlugin from "./plugins/Test";
import ImagesPlugin from "./plugins/ImagesPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";

import EditorStyle from "./Editor.module.css";
import editorNodes from "./nodes/EditorNodes";
import MediaBar from "./components/UploadImageBtn/MediaBar";
import { v4 as uuidv4 } from 'uuid'
import { useEffect, useRef } from "react";
import UploadPostBtn from "./components/UploadPostBtn";

const Placeholder = ({isComment}) => {
  const PlaceholderRef = useRef()

  const commentPosition = isComment ? 1 : 0;

  function setPlaceholderPosition() {
    // repeat check element
    var EditorInput

    if (EditorInput = document.querySelectorAll(`.${EditorStyle.editor_input} p`)[commentPosition]) {
      const Editor = document.querySelectorAll(`.${EditorStyle.container}`)[commentPosition];

      const { top: top_input, left: left_input } = EditorInput.getBoundingClientRect();
      const { top: top_editor, left: left_editor } = Editor.getBoundingClientRect();

      const placeHolderEle = PlaceholderRef.current;
      placeHolderEle.style.display = 'block'
      placeHolderEle.style.top = top_input - top_editor + 'px'
      placeHolderEle.style.left = left_input - left_editor + 'px'
    } else {
      setTimeout(() => {
        setPlaceholderPosition()
      }, 50);
    }
  }

  useEffect(() => {
    setPlaceholderPosition()
  }, [])

  return (
    <div className={EditorStyle.placeholder} ref={PlaceholderRef}>Bạn đang suy nghĩ gì ?</div>
  );
};


export const PostEditor = ({className}) => {
  return <Editor isComment={false} className={className}/>
}

export const CommentEditor = () => {
  return <Editor isComment={true} />
}

const editorConfig = {
  theme: initialTheme,
  onError(error) {
    throw error;
  },
  nodes: editorNodes,
};

const ContentEditableWrapper = ({editorRef, className}) => {
  return (
    <div ref={editorRef}>
      <ContentEditable  className={className}/>
    </div>
  )
}

const Editor = ({ isComment, className }) => {
  const id = uuidv4();
  const EditorRef = useRef();

  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className={`${EditorStyle.container} ${isComment && EditorStyle.comment} flex-grow ${className}`}>
        {!isComment && <ToolbarPlugin />}
        <div className={EditorStyle.editor_input_wrapper + ' flex-column flex-grow'}>
          <RichTextPlugin
            contentEditable={<ContentEditableWrapper className={`${EditorStyle.editor_input} flex-grow`} editorRef={EditorRef}/>}
            placeholder={<Placeholder isComment={isComment} />}
          />
          <HistoryPlugin />
          <ImagesPlugin />
          <ListPlugin />
          <LinkPlugin />
          <ListPlugin />
          <AutoFocusPlugin />
          <AutoLinkPlugin />
          <MediaBar id={`Editor-${id}`} isComment={isComment} />
        </div>
        <UploadPostBtn isComment={isComment} editorClassname={EditorStyle.editor_input} editorRef={EditorRef} />
      </div>
    </LexicalComposer>
  );
};

export default Editor
