import React, { useEffect, useState } from 'react'
import { Navigate, useOutletContext } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faKey,
  faAddressCard,
  faEnvelope,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'

import { useAuth } from '../../hooks/useAuth'

const FormDeQuejas = () => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/" />

  const profileSchema = Yup.object().shape({
    phone: Yup.string().required('El teléfono es obligatorio!'),
    province: Yup.string().required('La provincia es obligatorio!'),
    canton: Yup.string().required('El canton es obligatorio!'),
    district: Yup.string().required('El distrito es obligatorio!'),
    exactAddress: Yup.string().required('La dirección exacta es obligatoria!'),
  })

  //   const [data, setData] = useOutletContext()

  const handleSubmit = (values) => {
    const formData = {}

    console.log(formData)
  }

  return (
    <>
      <div className="title-container">
        <p> Formulario de Quejas </p>
      </div>
      <div className="senara-forms">
        <Formik
          initialValues={{
            phone: '',
            province: '',
            canton: '',
            district: '',
            exactAddress: '',
          }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={profileSchema}
        >
          {({ errors, touched }) => {
            return (
              <Form className="forms-container">
                <div className="forms-content">
                  <div className="senara-form-group">
                    {errors.date && touched.date ? (
                      <div className="senara-actions">{errors.date}</div>
                    ) : null}
                    <Field
                      id="date"
                      name="date"
                      type="date"
                      className="floating-input"
                    />{' '}
                  </div>{' '}
                  <div className="senara-form-group">
                    {errors.time && touched.time ? (
                      <div className="senara-actions">{errors.time}</div>
                    ) : null}
                    <Field
                      id="time"
                      name="time"
                      type="time"
                      className="floating-input"
                    />
                  </div>
                  <div className="senara-form-group">
                    {errors.nombreDelPropietario &&
                    touched.nombreDelPropietario ? (
                      <div className="senara-actions">
                        {errors.nombreDelPropietario}
                      </div>
                    ) : null}
                    <Field
                      id="nombreDelPropietario"
                      name="nombreDelPropietario"
                      type="text"
                      placeholder="Nombre del Propietario"
                      className="floating-input"
                    />
                  </div>
                  <div className="senara-form-group">
                    {errors.telPropietario && touched.telPropietario ? (
                      <div className="senara-actions">
                        {errors.telPropietario}
                      </div>
                    ) : null}
                    <Field
                      id="telPropietario"
                      name="telPropietario"
                      type="tel"
                      placeholder="Teléfono"
                      className="floating-input"
                    />
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="senara-form-group">
                    {errors.nombreDelArrendatario &&
                    touched.nombreDelArrendatario ? (
                      <div className="senara-actions">
                        {errors.nombreDelArrendatario}
                      </div>
                    ) : null}
                    <Field
                      id="nombreDelArrendatario"
                      name="nombreDelArrendatario"
                      type="text"
                      placeholder="Nombre del Arrendatario"
                      className="floating-input"
                    />
                  </div>{' '}
                  <div className="senara-form-group">
                    {errors.telArrendatario && touched.telArrendatario ? (
                      <div className="senara-actions">
                        {errors.telArrendatario}
                      </div>
                    ) : null}
                    <Field
                      id="telArrendatario"
                      name="telArrendatario"
                      type="tel"
                      placeholder="Teléfono"
                      className="floating-input"
                    />
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="senara-form-group">
                    {errors.lugar && touched.lugar ? (
                      <div className="senara-actions">{errors.lugar}</div>
                    ) : null}
                    <Field
                      id="lugar"
                      name="lugar"
                      type="text"
                      placeholder="Lugar (proyecto)"
                      className="floating-input"
                    />
                  </div>
                  <div className="senara-form-group">
                    {errors.nParcela && touched.nParcela ? (
                      <div className="senara-actions">{errors.nParcela}</div>
                    ) : null}
                    <Field
                      id="nParcela"
                      name="nParcela"
                      type="text"
                      placeholder="Nº Parcela"
                      className="floating-input"
                    />
                  </div>{' '}
                  <div className="senara-form-group">
                    {errors.nToma && touched.nToma ? (
                      <div className="senara-actions">{errors.nToma}</div>
                    ) : null}
                    <Field
                      id="nToma"
                      name="nToma"
                      type="text"
                      placeholder="Nº Toma"
                      className="floating-input"
                    />
                  </div>{' '}
                  {/* <div className="senara-form-group">
                    {errors.lugar && touched.lugar ? (
                      <div className="senara-actions">{errors.lugar}</div>
                    ) : null}
                    <Field
                      id="problematica"
                      name="problematica"
                      type="text"
                      placeholder="Exponga su problemática"
                      className="floating-input"
                    />
                  </div> */}
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

export default FormDeQuejas
