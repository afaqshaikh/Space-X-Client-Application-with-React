import { useEffect } from 'react'
import { useLaunchInfoQuery } from './../../generated/graphql'
import MissionsDetails from './MissionDetails'

interface OwnProps {
    id: number;
}

const MissionInfo = ({ id }: OwnProps) => {
    const { data, error, loading, refetch } = useLaunchInfoQuery({
        variables: { id: String(id) },
    })

    useEffect(() => {
        refetch({ id: String(id) });
    }, [refetch, id]);

    if (loading)
        return <h2>Loading</h2>

    if (error || !data)
        return <h1>Error</h1>
    console.log(data);
    return (
            <MissionsDetails data={data} />
    )
}

export default MissionInfo