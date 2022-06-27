import { useEffect, useState } from 'react'
import { Navigate, Outlet, Link } from 'react-router-dom'

import { getUser } from '../services/userServices'
import { useAuth } from '../hooks/useAuth'
import { getIdentification } from '../helpers/decoding'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const HomeLayouts = () => {
    const { user, token, logout } = useAuth()

    const [data, setData] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const identification = getIdentification(token)
            const res = await getUser(identification, token)
            const aux = res.data[0]
            setData(aux)
        }
        getData()
    }, [])

    if (!user) return <Navigate to="/" />

    return (
        <div className="senara-dashboard">
            <div className="senara-content-principal">
                <div className="senara-header">
                    <div className="senara-logo">
                        <div className="senara-img-logo"></div>
                    </div>
                    <div>
                        <div className="senara-description-page">
                            DIRECCION DISTRITO DE RIEGO ARENAL TEMPISQUE
                        </div>
                    </div>
                    <div>
                        <Link to="/dashboard/profile">
                            {user}
                            <FontAwesomeIcon icon={faUser} size="2x" color="#07392a"></FontAwesomeIcon>
                        </Link>
                        <a onClick={logout} style={{ cursor: 'pointer' }}>
                            Salir
                            <FontAwesomeIcon
                                icon={faDoorOpen}
                                size="2x"
                                color="rgb(169,0,0)"
                            ></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
                <div className="senara-content-menu">
                    <div className="senara-content"></div>
                    <div className="senara-content"></div>
                    <div className="senara-content"></div>
                </div>
                <Outlet context={[data, setData]} />
            </div>
        </div>
    )
}

export default HomeLayouts