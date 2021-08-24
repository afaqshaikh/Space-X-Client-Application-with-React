import { LaunchInfoQuery } from './../../generated/graphql'
import './index.css'
import Header from './../Header'
interface Props {
    data: LaunchInfoQuery
}

const MissionsDetails: React.FC<Props> = ({ data }) => {
    console.log(data)
    if (!data.launch) {
        return <div>No launch available</div>;
    }
    const { flight_number, launch_success, mission_name, rocket, launch_site, launch_year, details, links } = data.launch
    return (
        <div className="container">
            <Header/>
            <div className="row mt-3 ">
                
                <p className="text-white">Flight {flight_number} : {launch_success ? <span className="text-success fs-5 fw-bold">Success</span>
                    : <span className="text-danger fs-5 fw-bold">Failed</span>} </p>
                <h3 className="fw-bold text-light">{`${mission_name} (${rocket?.rocket_name} | ${rocket?.rocket_type})`}</h3>
                <h6 className="text-warning">Launch Site : {launch_site?.site_name}</h6>
                <h6 className="text-primary">Launch Year : {launch_year}</h6>
                <p className="details mt-3">{details}</p>
            </div>
                {!!links && !!links.flickr_images && (
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-1">

                        {links?.flickr_images?.map((v, i) => v ?
                            <div className="col">
                            <div className="card  ">
                                <img src={v} className="images card-img" key={i} alt={`${mission_name}`}></img>
                            </div>
                            </div> : null
                        )}
            </div>

                )}
        </div>
    )
}

export default MissionsDetails