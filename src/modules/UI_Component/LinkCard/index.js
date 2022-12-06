import style from './style.module.css';
import Link from 'next/link';

const CardBody = (props) => {
    const { title, subtitle } = props;

    return (
        <div className={style.card_body}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    )
}


export const Card = (props) => {
    const { imgSrc, className, ...bodyProps } = props;

    return (
        <div className={[style.container, className].join(' ')}
            style={{
                'background-image': `linear-gradient(to bottom,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 0.2)), url(${imgSrc})`
            }}
        >
            <CardBody props={bodyProps} />

            
        </div>
    )
}

export const LinkCard = (props) => {
    const { href = '/newfeed', className, ...cardProps } = props

    return (
        <Link href={href} className={className}>
            <Card {...cardProps} />
        </Link>
    )
}