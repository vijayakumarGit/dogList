
import { useState } from 'react';
import './App.css';
import DogList from './components/DogList/DogList';
import Search from './components/Search/Search';
import SortBy from './components/SortBy/SortBy';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    results: [],
    searchText: '',
    sortByType: "",
    order: 'asc',
  });
  const [error,setError]=useState(false)


  const onSearch = async (text) => {
    setError(false);
    try{
      const results = await axios.get("https://api.thedogapi.com/v1/breeds/search", {
        params: { q: text, "api-key": "live_JsiDymwqxfcXynRzqsvlEc5V9gfbxo0uRdaN6lLk4WgODkeQC8BG6p5RLPIXeNiJ" },
      });
      setState(() => {
        return { results, searchText: text, sortByType: "", order: '' }
      })
    }
    catch(e){
      setState(() => {
        return { results:[], searchText: text, sortByType: "", order: '' }
      })
      setError(true)
      console.log(e)
    }
   
  };

  const onSortBy = (type) => {
    switch (type) {
      case 'name':{
        sortUtility(sortByname)
        setState(prevState => {
          return { ...prevState, sortByType: "Name" }
        })
      }
        break;
      case 'height':
        sortUtility(sortByLife)
        setState(prevState => {
          return { ...prevState, sortByType: "Height" }
        })
        break;
      case 'lifeSpan':
        sortUtility(sortByHeight)
        setState(prevState => {
          return { ...prevState, sortByType: "Life span" }
        })
        break;
      default:
        return "";
    }
    //Setting State
    setState(prevState => {
      return { ...prevState, order: prevState.order === 'asc' ? 'desc' : 'asc' }
    })
  }

  const sortUtility=(type)=>{
    const { results, order } = state;
    const sortOrder = (order === 'asc') ? -1 : 1;

    //Sorting
    results.data.sort((a, b) => {
      return sortOrder * type(a, b);
    })

  }

  //Name Sort
  const sortByname = (a, b) => {
    return a.name.localeCompare(b.name);
  }

  //Life Span Sort
  const sortByLife = (a, b) => {
    return parseFirst2Characters(a.life_span) - (parseFirst2Characters(b.life_span));
  }

  //Height Sort
  const sortByHeight = (a, b) => {
    return parseFirst2Characters(a.height.metric) - (parseFirst2Characters(b.height.metric));
  }

  //Getting First 2 Characters To Do Sorting
  const parseFirst2Characters = (val) => {
    return parseInt(val.substring(0, 2).trim());
  }
  return (
    <div className="App">
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 dark-bg d-flex justify-content-center">
              <div className="pt-5 pb-5 w-50">
                <Search onSearch={onSearch} />
                {state.searchText !== '' && state.results.data.length !== 0 && <div className='row'>
                <div className="text-white text-left col-6">{state.results.data.length + " results Found"}</div>
                <div className='col-6'>
                <SortBy sortByType={state.sortByType} order={state.order} handleClick={onSortBy}/>
                  </div>
               
                </div> }
              </div>
            </div>
          </div>
        </div>
        <div className="container">
         {error ?  <div className="text-center error-txt"> Oops error occuried please try again ! </div> : <div className="row">
            <div className="col-12 mt-5">
              {state.searchText !== '' ?
                <DogList results={state.results} />
                :
                <p className="text-center search-txt">Please enter your dog name to search..</p>
              }
            </div>
          </div>}
        </div>
      </section>
    </div>
  );
}

export default App;
