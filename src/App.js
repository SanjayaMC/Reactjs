import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./NavBar/Navbar.js";
import './App.css';
import Computeritem from "./Main/ComputerItem.js";

function App() {
  return (
    <div>
      <Navbar />
      <div className="row" style={{marginTop: '100px'}}>
        <div className="col-md-12">
          <Computeritem />
        </div>
      </div>
    </div>
  );
}

export default App;
