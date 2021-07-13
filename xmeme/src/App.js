import React from 'react';
import './App.css';
import Topbar from './Topbar';
import Feed from'./Feed';

function App() {
  return (
    <div className="App">
        <div className='appHeader'>
            <img src="data:image/jpeg;base64,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" ></img>
            <h1>XMeme : Meme Stream</h1>
        </div>
        <Topbar />
        <Feed />
    </div>
  );
}

export default App;