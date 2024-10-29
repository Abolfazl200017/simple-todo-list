import { Link as RouterLink } from 'react-router-dom'
import { useUserState } from '../../redux/hooks'

function Home() {
    const { userData } = useUserState()

    return <>
        home works
        <RouterLink to="/login" >
            login
        </RouterLink>
        {JSON.stringify(userData)}
    </>
}

export default Home