
import { useEffect, useState } from 'react';
import './index.css';
import Menu from './Components/Menu';
import NewsGrid from './Components/NewsGrid';
import LabNewsLogo from './skylablogo.png'

function App(){
  const [items, setItems] = useState([])
  const[active, setActive] = useState([1])
  const[category, setCategory] = useState(["general"])
  
  

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=765956fe90d94219a23f1d4aeca3823b`)
      .then((res) => res.json())
      .then((data) => setItems(data.articles))
    
  }, [category]);
  

  return(
    <div className='App'>
        <div className='Header'>
        <img src={LabNewsLogo} alt='LabNewsLogo' className="logo2"/>
        <h1 className='title'>LabNews</h1>
        </div>
      <Menu active= {active} setActive= {setActive} setCategory= {setCategory} />
      <NewsGrid items={items} />
    </div>
  )
}

export default App
