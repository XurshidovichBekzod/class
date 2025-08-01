import React, { Component } from 'react'
import "./Countrydb.css"

export default class Countrydb extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      capital: "",
      population: "",
      area: "",
      data: [],
      updateID: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, capital, population, area, updateID, data } = this.state;

    if (updateID) {
      const updatedData = data.map((country) =>
        country.id === updateID
          ? { id: updateID, name, capital, population, area }
          : country
      );

      this.setState({
        data: updatedData,
        name: "",
        capital: "",
        population: "",
        area: "",
        updateID: null,
      });

    } else {
      const newCountry = {
        id: Date.now(),
        name,
        capital,
        population,
        area,
      };

      this.setState({
        data: [...data, newCountry],
        name: "",
        capital: "",
        population: "",
        area: "",
      });
    }
  }

  handleDelete = (id) => {
    this.setState({
      data: this.state.data.filter((country) => country.id !== id),
    });
  }

  handleUpdate = (country) => {
    this.setState({
      name: country.name,
      capital: country.capital,
      population: country.population,
      area: country.area,
      updateID: country.id,
    });
  }

  render() {
    const { data, name, capital, population, area, updateID } = this.state;

    return (
      <>
        <div className='inp'>
          <h2>Country</h2>
          <form onSubmit={this.handleSubmit} className='form'>
            <input
              type="text"
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder='Name'
              required
            />
            <input
              type="text"
              value={capital}
              onChange={(e) => this.setState({ capital: e.target.value })}
              placeholder='Capital'
              required
            />
            <input
              type="text"
              value={population}
              onChange={(e) => this.setState({ population: e.target.value })}
              placeholder='Population'
              required
            />
            <input
              type="text"
              value={area}
              onChange={(e) => this.setState({ area: e.target.value })}
              placeholder='Area'
              required
            />
            <button type="submit">
              {this.state.updateID ? "Update" : "Add"}
            </button>
          </form>
        </div>

        <div className='container dflex'>
          {
            data.map((country) => (
              <div className='card' key={country.id}>
                <h1>{country.name}</h1>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <p>Area: {country.area}</p>
                <div className='flex'>
                  <button onClick={() => this.handleDelete(country.id)}>Delete</button>
                  <button onClick={() => this.handleUpdate(country)}>Update</button>
                </div>
              </div>
            ))
          }
        </div>
      </>
    )
  }
}
