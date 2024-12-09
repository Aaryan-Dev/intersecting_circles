import { useState } from 'react';
import './App.css';

function App() {
  const [circles, setCircles] = useState([])

  const handleClick = (e) => {
    const radiusRandom = Math.random()

      if ( radiusRandom*400 < 40  ) {
       setCircles([...circles,  {x: e.clientX, y:e.clientY, radius: 40  }])
      } else {
        setCircles([...circles,  {x: e.clientX, y:e.clientY, radius: radiusRandom*400 }   ]  )
      }
      circles?.length >=2 && setCircles([])
    }

  return (
    <div onClick={(e) => handleClick(e)} class='App'>
      {circles?.map((el) => {
        const xcord = el.x - el.radius / 2;
        const ycord = el.y - el.radius / 2;
        return  <div  style={{ height:el.radius, width: el.radius,  background: 'black',  position: 'absolute', left: xcord, top: ycord, borderRadius: '50%'}} ></div>
    })}
    </div>
  );
}

export default App;
