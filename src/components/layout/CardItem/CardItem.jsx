
import './CardItem.scss'
export const CardItem = ({item}) => {
    return (
        <li className="item">{item.id}</li>
    )
}
export default CardItem;