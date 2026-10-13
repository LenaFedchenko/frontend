import '../assets/styles/card.css'

type CardProps = {
    title: string
    content: string
    category: string
    author: string
}

export function Card({ title, content, category, author }: CardProps) {
    return (
        <div className="candy-card">
            <div className="candy-card__header">
                <h2 className="candy-card__title">{title}</h2>
            </div>
            <div className="candy-card__body">
                <p className="candy-card__content">{content}</p>
            </div>
            <div className="candy-card__footer">
                <p className="candy-card__category">Category: {category}</p>
                <p className="candy-card__author">Author: {author}</p>
            </div>
        </div>
    )
}

export default Card
