import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SearchBar } from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="col-8 mt-2" style={{border:"3px solid #F2F2F2",margin:"auto"}}>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
