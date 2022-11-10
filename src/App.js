import './App.css';
import Main from "./main/Main";
import ImgInn from "./imginn/ImgInn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="container">
              <header className="header">header</header>

              <div className="content">

                  <Main/>

                  <ImgInn/>

              </div>
            <div className={"fake"}></div>
              <footer className="footer">footer</footer>
          </div>
      </header>
    </div>
  );
}

export default App;
