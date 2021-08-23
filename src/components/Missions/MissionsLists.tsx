import { LaunchListQuery } from './../../generated/graphql'
import "./index.css"

export interface OwnProps {
    handleIdChange: (newId: number) => void;
}


interface Props  extends OwnProps{
    data : LaunchListQuery
}

const MissionsLists: React.FC<Props> = ({data , handleIdChange}) => {
    return(
        <div className=" list-group  list-group-flush">
                <h4 className="list-group-item list-group-item-action text-warning bg-transparent">Launches</h4>
                {!!data.launches && data.launches.map((launchObj, ind) => !!launchObj &&(
                  <button type="button"  key={ind}  onClick={() => handleIdChange(launchObj.flight_number!)}
                   className="lists-item list-group-item list-group-item-action  border-white text-white bg-transparent
                   ">{launchObj?.mission_name}</button>
                ))}
        </div>
    )
}

export default MissionsLists