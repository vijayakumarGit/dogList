import "./Search.css";
import { debounce } from "./utility.js";
const Search = (props) => {
    const { onSearch } = props;


    const handleSearch = (evt) => {
        var searchText = evt.target.value;
        debounce(()=>{
            onSearch(searchText)
        },1000)
    }

    return (
        <div className="justify-content-center mb-4">
            <form className="form-inline">
                <input className="search-container form-control" type="text"
                    name="search"
                    placeholder="Search.."
                    onChange={handleSearch}
                    autoComplete="off"
                    autoFocus />
            </form>

        </div>
    );
}

export default Search;