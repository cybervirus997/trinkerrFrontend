import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SearchBar } from './Components/SearchBar';
import { NameBox } from './Components/NameBox'


function App() {
  return (
    <div className="App">
      <div className="col-8 mt-2" style={{margin:"auto"}}>
        <SearchBar />
        <NameBox/>
      </div>
    </div>
  );
}

export default App;
