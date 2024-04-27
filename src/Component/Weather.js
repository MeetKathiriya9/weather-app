import React, { Component } from 'react'
import axios from 'axios'
import Search from './Search'
import Result from './Result'

export class Weather extends Component {

    constructor(props) {
        super(props)
        this.props = props;

        this.state = {
            lat: "",
            lon: "",
            city: "",
            weatherDATA: null,
            loading: false
        }
    }

    ChangeHandler = (event) => {
        let name = event.target.name;

        if (name === "city") {
            this.setState({ city: event.target.value })
        }
        else if (name === "lat") {
            this.setState({ lat: event.target.value })
        }
        else if (name === "lon") {
            this.setState({ lon: event.target.value })
        }

    }

    getlocation = (event) => {
        event.preventDefault();
        this.setState({ lat: "", lon: "", city: "" , loading: true})

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((result) => {
                setTimeout(() => {
                    this.setState({
                        lat: result.coords.latitude,
                        lon: result.coords.longitude
                    })

                    const { latitude: lat, longitude: lon } = result.coords;

                    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b1e66862402ec349b854554465ed884a`).then((res) => {
                        //console.log("new",res)
                        this.setState({
                            city: res.data.name,
                            weatherDATA: res.data
                        })
                    }).catch((err) => {
                        console.log(err)
                    })

                }, 1000)
            })
        }
    }

    serachHandler = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        })
        if (!this.state.lat || !this.state.lon) {
            return;
        }

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=b1e66862402ec349b854554465ed884a`).then((result) => {
                this.setState({
                    city: result.data.name,
                    weatherDATA: result.data,
                })
            }).catch((err) => {
                console.log(err)
            });

    }

    render() {

        console.log(this.state.city)
        console.log(this.state.lat)
        console.log(this.state.lon)
        console.log("w", this.state.weatherDATA)

        return (
            <div>
                <Search
                    lat={this.state.lat}
                    lon={this.state.lon}
                    city={this.state.city}
                    change={this.ChangeHandler}
                    getlocation={this.getlocation}
                    search = {this.serachHandler}>
                </Search>

                <Result weatherdata={this.state.weatherDATA} loader={this.state.loading}></Result>
            </div>
        )
    }
}

export default Weather
