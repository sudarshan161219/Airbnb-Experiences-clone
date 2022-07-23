
import star_img from './Star 1.svg';
import dot from './Ellipse 6.svg';


export default function card (props){
console.log(props)
let badgeText 
// let cardBadge = document.querySelector('.card-badge')

if(props.item.openspots === 0 ){
    badgeText = "SOLD OUT"
}

else if (props.item.location === "Online"){
    badgeText = "ONLINE"
}


    return(

        <div className='card'>

{badgeText && <div className='card-badge'> <h3 className='badge-text' >{badgeText}</h3></div>}

        <img src={props.item.coverImg} className="card-img" alt="card-img" />
        
        <div className='card-grid'>
        
        <div className='card-content-flex' >
        <img src={star_img} className="star-img" alt="card-img" />
        <p>{props.item.stats.rating}</p>
        <span>({props.item.stats.reviewCount})</span>
        <img src={dot} className="dot-img" alt="img" />
        <span>{props.item.location}</span>
        </div>
        
        
        <div className='card-content'>
        <p className='card-paragraph'>{props.item.title}</p>
        <p><span className='card-span'>From ${props.item.price} </span>/ person</p>
        </div>
        
        </div>
        
        </div>
        
  

    )
  

}