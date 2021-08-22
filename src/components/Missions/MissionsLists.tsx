import { LaunchListQuery } from './../../generated/graphql'

export interface OwnProps {
    handleIdChange: (newId: number) => void;
}


interface Props  extends OwnProps{
    data : LaunchListQuery
}

const MissionsLists: React.FC<Props> = ({data , handleIdChange}) => {
    return(
        <div className="list-group  list-group-flush">
                <h4 className="list-group-item list-group-item-action list-group-item-dark">Launches</h4>
                {!!data.launches && data.launches.map((launchObj, ind) => !!launchObj &&(
                  <button type="button"  key={ind}  onClick={() => handleIdChange(launchObj.flight_number!)}
                   className="list-group-item list-group-item-action list-group-item-dark">{launchObj?.mission_name}</button>
                ))}
        </div>
    )
}

export default MissionsLists