import MediaBarStyle from "./UploadPost.module.css";
import sanitizeHtml from 'sanitize-html';
import { MdSend } from 'react-icons/md'
import axios from 'axios'

function uploadImgElement (imgElement) {

    axios.put('')    
}

const UploadPostBtn = ({ isComment, editorClassname, editorRef }) => {
    
    function upload({isComment}) {
        
        const contentElement = editorRef.current.getElementsByClassName(editorClassname)[0]

        const htmlString = contentElement.innerHTML

        const data = {
            // Community: "HOC_DUONG",
            community: "Học đường",
            user_id: "0005",
            Content: htmlString,
            tags: ["#áp lực gia đình"],
        };

        // for (const imgElement of contentElement.getElementsByTagName('img') ) {
        //     uploadImgElement(imgElement)
        // }

        // axios.put(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/post`, data).
        //     catch(e => alert('Fail To Upload'));
    }

    if (isComment) {
        return (
            <button onClick={() => upload(isComment)} className={MediaBarStyle.post_button_small} > <MdSend /> </button>
        )
    }

    return (
        <button className={MediaBarStyle.post_button} onClick={upload}>Đăng  </button>
    )
};

export default UploadPostBtn;
