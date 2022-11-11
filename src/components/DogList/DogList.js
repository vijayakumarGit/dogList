import DogImage from "./DogImage.js";
import './DogList.css'

const DogList = ({results}) => {

    let dogList = [];
	if (results.data) {
		dogList = results.data || [];
	}

	if(dogList.length > 0){
		return (
			<div className="row">
				{dogList.map((dog) => (
					<div className="col-lg-4 col-md-6 col-sm-12 col-xs-6 mb-5" key={dog.id} >
                    <div className="text-left h-100 list-container">
                        <DogImage image={dog.reference_image_id}/>
                        <div className="card-body">
                            <h5 className="card-title">{dog.name ? dog.name : "Not Available"}</h5>
                            <div className="card-text"><span>Breed:</span> {dog.breed_group ? dog.breed_group : "Not Available"}</div>
                            <div className="card-text"><span>Breed For:</span> {dog.bred_for ? dog.bred_for : "Not Available"}</div>
                            <div className="card-text"><span>Height:</span> {dog.height.metric ? dog.height.metric : "Not Available"}</div>
                            <div className="card-text"><span>Life Span:</span> {dog.life_span ? dog.life_span : "Not Available"}</div>
                            <div className="card-text"><span>Temperament:</span> {dog.temperament ? dog.temperament : "Not Available"}</div>
                            <div className="card-text"><span>Origin:</span> {dog.origin ? dog.origin : "Not Available"}</div>
                        </div>
                    </div>
                </div> 
				))}
			</div>
		);
	}else{
		return (
			<div className="text-center error-txt">No results found..</div>
		);
	}

   
}
 
export default DogList;