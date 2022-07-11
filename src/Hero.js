import group from './Group 77.png';
import card_img from './image 12.png';
import star_img from './Star 1.svg';
import dot from './Ellipse 6.svg';


export default  function Hero() {
    return (
      <>
      
      <div className='hero-grid'>
    <div className='hero'>
      <img src={group} className="group-img" alt="group-img" />
  
      </div>


      <div className='text'>
      <h1>Online Experiences</h1>
<p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>

<div className='image-section'>

<div className='card'>
<img src={card_img} className="card-img" alt="card-img" />

<div className='card-grid'>

<div className='card-content-flex' >
<img src={star_img} className="star-img" alt="card-img" />
<p>5.0</p>
<span>(6)</span>
<img src={dot} className="dot-img" alt="img" />
<span>USA</span>
</div>


<div className='card-content'>
<p className='card-paragraph'>Life lessons with Katie Zaferes</p>
<p><span className='card-span'>From $136 </span>/ person</p>
</div>

</div>

</div>

</div>

      </div>
      
      </>
    );
  }