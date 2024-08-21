/*Import des libraries utiliser*/
import { Link } from 'react-router-dom';
function Thumb(props) {
    return (
        <Link className="thumb_card_div" to={"/one_accomodation/"+ props.id} key={ props.id}>
            <div className="thumb_title_div">
                <h5>{props.title}</h5>
            </div>
            <div className='thumb_img_div'>
                <img src={props.cover} alt={props.description}></img>
            </div>
        </Link>
    )
}
export default Thumb