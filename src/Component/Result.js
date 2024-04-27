import React from 'react'
import Loader from './Loader';

export default function Result(props) {

    const { weatherdata: data } = props;

    // if (!data) {
    //     return null;
    // }
    function ktoc(k) {
        return (k - 273.15).toFixed(2) + "° C";
    }
    function getthedate(stamp){
        const date = new Date(stamp*1000);

        return date.toTimeString();
    }

    let showpage;

    if(data === null){
        if (props.loader === true) {
            showpage = <Loader></Loader>;
        }
     }
        else{
            showpage = (
                <div class="card" style={{ width: "18rem", margin: "50px 130px" }}>

                <div class="card-body">

                    <h5 class="card-title"><img src={` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt=''/> {data.name}</h5>
                    <p class="card-text">{ktoc(data.main.temp)}</p>
                    <p>{data.weather[0].description}</p>

                    <table>
                        <tr>
                            <th>Feels Like</th>
                            <tr>{ktoc(data.main.feels_like)}</tr>
                        </tr>
                        <tr>
                            <th>Min. Temp</th>
                            <td>{ktoc(data.main.temp_min)}</td>
                        </tr>
                        <tr>
                            <th>Max. Temp</th>
                            <td>{ktoc(data.main.temp_max)}</td>
                        </tr>
                        <tr>
                            <th>Sun Rise</th>
                            <td>{getthedate(data.sys.sunrise)}</td>
                        </tr>
                        <tr>
                            <th>Sun Set</th>
                            <td>{getthedate(data.sys.sunset)}</td>
                        </tr>
                    </table>

                </div>
            </div>
            );
        }
    
    return (
        <>
         {showpage}  
        </>
    )
}
