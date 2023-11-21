import logo from './logo.svg';
import './style.css';
import data from './templateData.json'
import React, {useState}  from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className='templateContainer'>
        <div className='searchInput_Container'>
          <input id='searchInput' type='text' placeholder='Search Here ...'  onChange={(event) => {
            setSearchTerm(event.target.value);
          }}/>
        </div>
        <div className='template_Container'>
          {
            data
            .filter((val) => {
              if(searchTerm == ""){
                return val;
              } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val;
              }
            })
            .map((val) => {
              return(
                <div className='template' key={val.id}>
                  <img src={val.image} alt="" />
                  <h3>{val.title}</h3>
                  <h3>${val.price}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
