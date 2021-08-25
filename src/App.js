import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.ibb.co/VmrPt4F/Matt-Profile-Img.jpg" className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.instagram.com/matt.morri/?hl=en-gb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Matt Morrison
        </a>
        <p>Creator of <a
          className="Teamsheet-link"
          href="https://teamsheet.net/home"
          target="_blank"
          rel="noopener noreferrer"
        ><img src="https://i.ibb.co/qYrB0Jx/Team-Sheet-Logo-White.png" className="Teamsheet-logo" alt="logo" />
        </a></p>
      </header>
    </div>
  );
}

export default App;
