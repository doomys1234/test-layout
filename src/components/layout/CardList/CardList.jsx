import CardItem from "../CardItem/CardItem";
import './CardList.scss'

export const CardList = ({items}) => {
    
    return (
        <div className="list-wrapper">
            <ul className="list">
                {items.map((item, index) => (<CardItem key={index} item={item} />))
                }
            </ul>
        </div>
    )
}
export default CardList;
