import { BsImages } from "react-icons/bs";
import ButtonStyle from "./Button.module.css";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { INSERT_IMAGE_COMMAND } from "../../plugins/ImagesPlugin";
import { useState, useEffect } from "react";

const UploadButton = ({ id, isComment }) => {
  const [fileReader, setFileReader] = useState(null)
  const [editor] = useLexicalComposerContext();
  const [src, setSrc] = useState("");

  useEffect(() => {
    const reader = new FileReader();

    reader.addEventListener('error', () => { alert('error on load Image') })

    reader.addEventListener('load', () => {
      setSrc(reader.result);
    })

    setFileReader(reader)

    return () => {
      removeEventListener('error', fileReader);
      removeEventListener('load', fileReader)
    }
  }, [])

  useEffect(() => {
    if (src !== "") {
      editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
        altText: "Locally uploaded",
        src: src,
        width: "80%",
        height: "60%",
      });
    }
  }, [src, editor]);

  const encodeImage = (e) => {
    if (e.files && fileReader) {

      const uploadedFile = e.files[0];
      uploadedFile && fileReader.readAsDataURL(uploadedFile);
    }
  }

  return (
    <div>
      <label htmlFor={id}>
        <BsImages
          className={!isComment ? ButtonStyle.icon : ButtonStyle.icon_comment}
        />
      </label>
      <input
        className={ButtonStyle.upload_button}
        type="file"
        id={id}
        onChange={(e) => {
          encodeImage(e.target);
        }}
      />
    </div>
  );
};

export { UploadButton };
