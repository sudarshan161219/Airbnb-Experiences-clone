// import card_img from './image 12.png';
import star_img from './Star 1.svg';
import dot from './Ellipse 6.svg';


export default function card (props){

    return(

 

        <div className='card'>

        <img src={props.img} className="card-img" alt="card-img" />
        
        <div className='card-grid'>
        
        <div className='card-content-flex' >
        <img src={star_img} className="star-img" alt="card-img" />
        <p>{props.rating}</p>
        <span>({props.reviewCount})</span>
        <img src={dot} className="dot-img" alt="img" />
        <span>{props.country}</span>
        </div>
        
        
        <div className='card-content'>
        <p className='card-paragraph'>{props.title}</p>
        <p><span className='card-span'>From ${props.price} </span>/ person</p>
        </div>
        
        </div>
        
        </div>
        
  

    )


}