import Select, {components} from 'react-select';
import LoveIMG from './asset/love-24x24.png'
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';

const Control = ({ children, ...props }) => {
    return (
        <components.Control {...props}>
            <ExportedImage src={LoveIMG} style={{'marginLeft' : '0.5em'}} /> {children}
        </components.Control>
    )
}

const NewfeedLink = () => {
    return (
        <Link href='/newfeed'>Xem thêm</Link>
    )
}

const QuickContentSelection = () => {
    const contentOptions = [
        { value: 'consult', label: 'Mình cần tư vấn tâm lý' },
        { value: 'lgbt', label: 'Giới tính thứ 3' },
        { value: 'study', label: 'Áp lực học đường' }
    ]

    return (
        <Select
            isClearable
            // formatCreateLabel={(inputText) => `"${inputText}" Persian word for Create`}
            noOptionsMessage={NewfeedLink}
            options={contentOptions}
            components={{Control}}
            placeholder={'Tôi muốn tìm công việc IT'}
            className="content"
        />
    )
}

export default QuickContentSelection