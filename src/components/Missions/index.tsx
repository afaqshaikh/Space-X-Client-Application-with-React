import { useLaunchListQuery } from './../../generated/graphql'
import MissionsLists , { OwnProps } from './MissionsLists';

const MissionContainer = (props:OwnProps) => {
    const { data, error, loading } = useLaunchListQuery();

    if (loading)
        return <h2>Loading</h2>

    if (error || !data)
        return <h1>Error</h1>
    console.log(data);
    return(
            <MissionsLists  data={data}{...props}/>
    )
}

export default MissionContainer