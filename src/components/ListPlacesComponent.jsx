import React, { Component } from 'react'
import PlaceService from '../Services/PlaceService'


export default class ListPlacesComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            places:[]
        }
    }

componentDidMount(){
PlaceService.getPlaces().then((res)=>{

  this.setState({places:res.data});
})

  }
  render() {
    return (
      <div>
        <h2 className="text-center">Places List</h2>
        <div className="row">
          <table className="table table-stripes table-bordered">
            <thead>
              <tr>
                <th>locationId</th>
                <th>latitude</th>
                <th>longtitude</th>
                <th>radius</th>
                <th>addressName</th>

              </tr>
            </thead>
            <tbody>
              {
                this.state.places.map(

                  place=>
                  <tr key={place.Id}>
                    <td>{place.latitude}</td>
                    <td>{place.longtitude}</td>
                    <td>{place.radius}</td>
                    <td>{place.AddressName}</td>
                  </tr>

                )

              }

            </tbody>
          </table>
          </div>
      </div>
    )
  }
}
//export default ListPlaceComponent