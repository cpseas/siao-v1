import React, { useEffect, useState } from 'react'
import { Navigate, useOutletContext } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey, faAddressCard, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

import { useAuth } from '../../hooks/useAuth'

const Profile = () => {
    const { user } = useAuth()

    if (!user) return <Navigate to="/" />

    const profileSchema = Yup.object().shape({
        phone: Yup.string().required('El teléfono es obligatorio!'),
        province: Yup.string().required('La provincia es obligatorio!'),
        canton: Yup.string().required('El canton es obligatorio!'),
        district: Yup.string().required('El distrito es obligatorio!'),
        exactAddress: Yup.string().required('La dirección exacta es obligatoria!')
    })

    const [data, setData] = useOutletContext()

    // Se pueden fusionar los useState de ubicacion
    const [statusProvincia, setStatusProvincia] = useState('')
    const [statusCanton, setStatusCanton] = useState('')

    const [provinces, setProvinces] = useState()
    const [cantons, setCantons] = useState()
    const [districts, setDistricts] = useState()


    const loadCantons = (e, setFieldValue) => {
        const idProvincia = e.target.value
        const aux = provinces.filter(province => province[0] === idProvincia)
        setFieldValue('province', aux[0][0])
        setStatusProvincia(aux[0][0])
        fetch(`https://ubicaciones.paginasweb.cr/provincia/${idProvincia}/cantones.json`)
            .then(response => response.text())
            .then(data => setCantons(Object.entries(JSON.parse(data))))
    }

    const loadDistricts = (e, setFieldValue) => {
        const idCanton = e.target.value
        const aux = cantons.filter(canton => canton[0] === idCanton)
        setFieldValue('canton', aux[0][0])
        setStatusCanton(aux[0][0])
        fetch(`https://ubicaciones.paginasweb.cr/provincia/${statusProvincia}/canton/${idCanton}/distritos.json`)
            .then(response => response.text())
            .then(data => setDistricts(Object.entries(JSON.parse(data))))
    }

    useEffect(() => {
        fetch('https://ubicaciones.paginasweb.cr/provincias.json')
            .then(e => e.json())
            .then(data => setProvinces(Object.entries(data)))
    }, [])

    const handleSubmit = (values) => {
        const formData = {
            ...data,
            ...values,
            province: statusProvincia,
            canton: statusCanton
        }

        console.log(formData)
    }

    return (
        <>
            <div className='title-container'>
                <p> Perfil </p>
            </div>
            <div className="senara-forms">
                <Formik
                    initialValues={{
                        phone: '',
                        province: '',
                        canton: '',
                        district: '',
                        exactAddress: ''
                    }}
                    onSubmit={values => handleSubmit(values)}
                    validationSchema={profileSchema}
                >
                    {({ errors, touched, setFieldValue }) => {
                        return (
                            <Form className="forms-container">
                                <div className="forms-content">
                                    <div>
                                        <div className="senara-form-group">
                                            {errors.fullName && touched.fullName ? (
                                                <div className="senara-actions">{errors.fullName}</div>
                                            ) : null}
                                            <Field
                                                id="fullName"
                                                name="fullName"
                                                type="text"
                                                placeholder="Nombre"
                                                className="floating-input"
                                                value={data.fullName}
                                                disabled={true}
                                            />
                                            <FontAwesomeIcon icon={faAddressCard} />
                                        </div>
                                        <div className="senara-form-group">
                                            {errors.email && touched.email ? (
                                                <div className="senara-actions">{errors.email}</div>
                                            ) : null}
                                            <Field
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="Correo"
                                                className="floating-input"
                                                value={data.email}
                                                disabled={true}
                                            />
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div className="senara-form-group">
                                            {errors.userName && touched.userName ? (
                                                <div className="senara-actions">{errors.userName}</div>
                                            ) : null}
                                            <Field
                                                id="userName"
                                                name="userName"
                                                type="text"
                                                placeholder="Nombre de Usuario"
                                                className="floating-input"
                                                value={data.userName}
                                                disabled={true}
                                            />
                                            <FontAwesomeIcon icon={faUser} />
                                        </div>
                                        <div className="senara-form-group">
                                            {errors.password && touched.password ? (
                                                <div className="senara-actions">{errors.password}</div>
                                            ) : null}
                                            <Field
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder="Contraseña"
                                                className="floating-input"
                                                value={data.password}
                                                disabled={true}
                                            />
                                            <FontAwesomeIcon icon={faKey} />
                                        </div>
                                        <div className="senara-form-group">
                                            {errors.phone && touched.phone ? (
                                                <div className="senara-actions">{errors.phone}</div>
                                            ) : null}
                                            <Field
                                                id="phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="Teléfono"
                                                className="floating-input"
                                            />
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="senara-form-group">
                                            {errors.province && touched.province ? (
                                                <div className="senara-actions">{errors.province}</div>
                                            ) : null}
                                            <Field
                                                id="province"
                                                name="province"
                                                as="select"
                                                multiple={false}
                                                className="floating-select"
                                                value={statusProvincia}
                                                onChange={e => loadCantons(e, setFieldValue)}
                                            >
                                                <option value=""> Seleccione una Provincia </option>
                                                {provinces &&
                                                    provinces.map((value, key) => {
                                                        return <option key={key} value={value[0]}> {value[1]} </option>
                                                    })
                                                }
                                            </Field>
                                        </div>
                                        <div className="senara-form-group">
                                            {errors.canton && touched.canton ? (
                                                <div className="senara-actions">{errors.canton}</div>
                                            ) : null}
                                            <Field
                                                id="canton"
                                                name="canton"
                                                as="select"
                                                multiple={false}
                                                className="floating-select"
                                                value={statusCanton}
                                                disabled={statusProvincia === '' && true}
                                                onChange={e => loadDistricts(e, setFieldValue)}
                                            >
                                                <option value=""> Seleccione un Cantón </option>
                                                {cantons &&
                                                    cantons.map((value, key) => {
                                                        return <option key={key} value={value[0]}> {value[1]} </option>
                                                    })
                                                }
                                            </Field>
                                        </div>
                                        <div className="senara-form-group">
                                            {errors.district && touched.district ? (
                                                <div className="senara-actions">{errors.district}</div>
                                            ) : null}
                                            <Field
                                                id="district"
                                                name="district"
                                                as="select"
                                                multiple={false}
                                                className="floating-select"
                                                disabled={statusCanton === '' && true}
                                            >
                                                <option value=""> Seleccione un Distrito </option>
                                                {districts &&
                                                    districts.map((value, key) => {
                                                        return <option key={key} value={value[0]}> {value[1]} </option>
                                                    })
                                                }
                                            </Field>
                                        </div>
                                        <div className="senara-form-group">
                                            {errors.exactAddress && touched.exactAddress ? (
                                                <div className="senara-actions">{errors.exactAddress}</div>
                                            ) : null}
                                            <Field
                                                id="exactAddress"
                                                name="exactAddress"
                                                as="textarea"
                                                className="floating-textarea"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="senara-btn-primary">
                                    Guardar
                                </button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </>
    )
}

export default Profile