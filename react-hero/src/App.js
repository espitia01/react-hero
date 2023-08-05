import React, {useState} from "react";

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  const [superPower, setSuperPower] = useState('')
  const[display, setDisplay] = useState()
  const [hide, setHide] = useState("Display Hero")

  const toggleDisplay = () => {
    if(display){
      setDisplay(false)
      setHide("Display Hero")
    }
    else{
      setDisplay(true)
      setHide("Hide Hero")
    }
  }
  return (
    <div className="App" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '50vh', 
        backgroundColor: '#f3f3f3' // light gray background 
    }}>
      <h1 style={{ 
          marginBottom: '40px', 
          fontSize: '32px', 
          color: '#333' // dark text color
      }}>Build a Hero</h1>
      <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          marginBottom: '20px',
          width: '80%',
          justifyContent: 'space-around' // Distributes items evenly
      }}>
        <div>
          <label style={{ marginRight: '5px' }}>Hero Name:</label>
          <input type="text" placeholder="Iron Man" onChange={(event)=>{setName(event.target.value)}} value={name}/>
        </div>
        <div>
          <label style={{ marginRight: '5px' }}>Age:</label>
          <input type="number" placeholder="40"  onChange={(event)=>{setAge(event.target.value)}} value={age}/>
        </div>
        <div>
          <label style={{ marginRight: '5px' }}>Height:</label>
          <input type="number" placeholder="1.80 cm"  onChange={(event)=>{setHeight(event.target.value)}} value={height}/>
        </div>
        <div>
          <label style={{ marginRight: '5px' }}>Super power:</label>
          <input type="text" placeholder="intelligence"  onChange={(event)=>{setSuperPower(event.target.value)}} value={superPower}/>
        </div>
      </div>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '5vh', 
        backgroundColor: '#f3f3f3' // light gray background 
      }}>
        <div>
        <button onClick={toggleDisplay}>{hide}</button>
      </div>
      {display && (
        <div style={{marginTop: "20px"}}>
          <ul>
            <h3>Hero</h3>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Height: {height}</li>
            <li>Super power: {superPower}</li>
          </ul>
        </div>
      )}

      </div>
    </div>
  );
}

export default App;
