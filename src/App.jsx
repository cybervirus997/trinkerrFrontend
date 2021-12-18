import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { SearchBar } from './Components/SearchBar';
// import { NameBox } from './Components/NameBox'
// import { CompanyData } from './Components/CompanyData'


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
