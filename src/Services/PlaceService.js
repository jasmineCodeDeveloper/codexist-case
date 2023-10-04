
import axios from 'axios';

const PLACES_API_BASE_URL="http://localhost:8080/api/v1/places";

class PlaceService{

    getPlaces(){

        return axios.get(PLACES_API_BASE_URL);
    
    }
    
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new PlaceService();