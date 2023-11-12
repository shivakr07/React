// App.js
import React from 'react';
import { createContext } from 'react';
import First from './components/first';

const data = createContext();
const data1 = createContext();

const App = () => {
  const name = " Chris Evans"
  const role = "Captain America"
  return (
    <>
    <data.Provider value={name}>
      <data1.Provider value={role} >
        <First />
      </data1.Provider>
    </data.Provider>
    </>
  );
};

export default App;
export { data, data1 }