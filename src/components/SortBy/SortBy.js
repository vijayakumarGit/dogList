import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown91, faArrowUpAZ, faArrowUpZA } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown19 } from '@fortawesome/free-solid-svg-icons'
const SortBy = ({ sortByType, order, handleClick }) => {
    console.log(order)
    return (
        <>

            <div className="d-flex justify-content-around">
                <button className={sortByType !== "Name" ? "btn btn-outline-dark" : "btn btn-light"} onClick={() => handleClick('name')}> Name  
                 {sortByType === 'Name' && <FontAwesomeIcon icon={order === 'asc' ? faArrowUpAZ : faArrowUpZA} className="ml-1" />} </button>
                <button className={sortByType !== "Height" ? "btn btn-outline-dark" : "btn btn-light"} onClick={() => handleClick('height')}> Height 
                {sortByType === 'Height' && <FontAwesomeIcon icon={order === 'asc' ? faArrowDown19 : faArrowDown91} className="ml-1" />}</button>
                <button className={sortByType !== "Life span" ? "btn btn-outline-dark" : "btn btn-light"} onClick={() => handleClick('lifeSpan')}> Life Span 
                {sortByType === 'Life span' &&  <FontAwesomeIcon icon={order === 'asc' ? faArrowDown19 : faArrowDown91} className="ml-1" />}</button>
            </div>
        </>);
}

export default SortBy;