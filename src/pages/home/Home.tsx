import { Link as RouterLink } from 'react-router-dom'

function Home() {

    return <div>
        home works
        <RouterLink to="/login" >
            login
        </RouterLink>
    </div>
}

export default Home