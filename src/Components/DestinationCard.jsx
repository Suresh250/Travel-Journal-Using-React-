import path from "/Images/Path.png"

function DestinationCard(props) {
    return (
        <div className="card--container">
            <img src ={`/Images/${props.image}`} alt="Destination Image" className="card--destinationImage" ></img>
            <div className="card--details">
                <img src = {path} alt="location-icon" className="card--pathIcon"></img>
                <span aria-label="Country" className="card--country">{props.country}</span>
                <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="View on Google Maps" className="card--link">View on Google Maps</a>
                <h1 className="card--heading">{props.destination}</h1>
                <p className="card--Date"><time>{props.startDate}</time> - <time>{props.endDate}</time></p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}
export default DestinationCard;