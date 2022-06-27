import { useState } from 'react'
import { Link, Navigate } from "react-router-dom";
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'

import { useAuth } from '../../hooks/useAuth'
import { loginUser } from '../../services/userServices'
import Logo from '../../components/Logo';

const Login = () => {
	const { user, login } = useAuth()

	if (user) return <Navigate to="/dashboard" />

	const inicioSeccionShema = Yup.object().shape({
		email: Yup.string().email('Email no valido').required('El email es obligatorio'),
		password: Yup.string().required('Es requerida la contraseña')
	})

	const [validUsuario, setvalidUsuario] = useState()

	const handleSubmit = async values => {
		await loginUser(values)
			.then(res => {
				if (res.status === 200) {
					setvalidUsuario(true)
					login(res.data.token)
				}
			})
			.catch(err => {
				console.log(err)
				if (res.response.status === 401) {
					setvalidUsuario(false)
				}
			})
	}

	return (
		<>
			<div className='senara-content-sm-login'>
				<Logo />
				<div className='senara-content-legend-auth'>
					<legend className='senara-tagline'>Bienvenido</legend>
					<legend className='senara-description-page'>Iniciar Sesión</legend>
				</div>

				<Formik
					initialValues={{
						email: 'marars@gmail.com',
						password: '123qweasd'
					}}
					onSubmit={values => { handleSubmit(values) }}
					validationSchema={inicioSeccionShema}
				>
					{({ errors, touched }) => {
						return (
							<>
								<Form className="senara-form form-login">

									<div className="senara-form-group">
										{errors.email && touched.email
											? <a> {errors.email} </a> : null
										}
										<Field
											id="email"
											type="email"
											name="email"
											className="floating-input"
											placeholder=" "
										/>
										<span className="highlight"></span>
										<label>Correo o Usuario</label>
										<FontAwesomeIcon icon={faKey} />
									</div>

									<div className="senara-form-group">
										{errors.password && touched.password
											? <a> {errors.password} </a> : null
										}
										<Field
											id="password"
											type="password"
											name="password"
											className="floating-input"
											placeholder=" "
										/>
										<span className="highlight"></span>
										<label>Contraseña</label>
										<FontAwesomeIcon icon={faKey} />
									</div>

									<input type="submit" className="senara-btn-primary btn-center max-c" value="Iniciar Sesión" />

								</Form>
								<div className="senara-actions">
									<Link to="/register"> Crear Cuenta </Link>
									<Link to="/forget-password"> ¿Olvidó su contraseña? </Link>
								</div>
							</>
						)
					}}
				</Formik>
			</div>

			{validUsuario === true ? (
				<p className="alert-senara success">Inicio de seccion exitoso</p>
			) : validUsuario === false ? (
				<p className="alert-senara error">Usuario o contraseña incorrecta</p>
			) : null}

		</>
	)
}

export default Login