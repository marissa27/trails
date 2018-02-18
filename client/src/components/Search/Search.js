import React, { Component } from 'react';

export default class Search extends Component {

  currentLocation() {
    console.log('curretnLocation')
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(latitude, longitude)
      })
    }
  }

  render() {
    { this.currentLocation() }
    return (
      <form>
        <h3>Time to find some hikes!</h3>
        <fieldset>
          <h4>Pick a location</h4>
          <input type="text" placeholder="city" />
          <input type="text" placeholder="state" />
          <h4>or</h4>
          <button>Use current location</button>
        </fieldset>
        <fieldset>
          <h4>Hike characteristics</h4>
          <h6>Not required</h6>
          <input type="text" placeholder="Distance away (miles)" />
          <input type="text" placeholder="Min Trail Length (miles)" />
          <select>
            <option value="" disabled selected>Difficulty</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </fieldset>
      </form>
    );
  }
}
