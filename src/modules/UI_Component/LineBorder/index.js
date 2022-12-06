import style from './lineborder.module.css';

const LineBorder = ({className}) => {
    return (
        <div className={`${style.container} ${className}`}/>
    )
}

export default LineBorder;