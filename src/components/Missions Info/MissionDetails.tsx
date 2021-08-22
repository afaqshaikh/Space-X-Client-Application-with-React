import { LaunchInfoQuery } from './../../generated/graphql'

interface Props {
    data : LaunchInfoQuery
}
const MissionsDetails: React.FC<Props> = ({data}) => {
    console.log(data)
    if (!data.launch) {
        return <div>No launch available</div>;
      }
    return(
        <div> 
            <h3>Missions Details</h3>
            {JSON.stringify(data)}
            </div>
    )
}

export default MissionsDetails