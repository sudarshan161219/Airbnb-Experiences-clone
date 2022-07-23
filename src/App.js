import './App.css';
import Nav from './Nav.js';
import Hero from './Hero.js'
import Card from './Card'
import data from './data'


function App() {

const card = data.map(item => {

  return(

    <Card 

    key={item.id}
    item={item}

    // {...item}  Spread syntax (...)

/>

  )

})

  return (
    <div className="App">
  
<Nav />
<Hero />

<section className="cards-list">

     {card}

 </section>
       

    </div>
  );
}

export default App;
