import React from 'react'

export default function Search(props) {
  return (
    <div>
        <div style={{margin:"auto",marginTop:"100px",width:"80%",display:"block"}}>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Enter City Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="city" value={props.city} onChange={props.change}/>
                </div>

                <br/><br/>

                <button type="submit" onClick={props.getlocation}>GET LOCATION</button>

                <br/><br/>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Latitude</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name="lat" value={props.lat} onChange={props.change} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Longitute</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name="lon" value={props.lon} onChange={props.change} />
                </div>
               
                <button type="submit" className="btn btn-primary" onClick={props.search}>Submit</button>
            </form>

            
            </div>
    </div>
  )
}
