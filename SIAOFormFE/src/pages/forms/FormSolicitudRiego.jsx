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

const FormSolicitudRiego = () => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/" />

  const profileSchema = Yup.object().shape({
    nParcela: Yup.string().required('Este campo es necesario'),
    proyecto: Yup.string().required('Este campo es necesario'),
    subDistrito: Yup.string().required('Este campo es necesario'),
    area: Yup.string().required('Este campo es necesario'),
    cultivo: Yup.string().required('Este campo es necesario'),
    variedad: Yup.string().required('Este campo es necesario'),
    rendimientoAnterior: Yup.string().required('Este campo es necesario'),
    fax: Yup.string().required('Este campo es necesario'),
    email: Yup.string()
      .required('Este campo es necesario')
      .email('Email no valido'),
    observaciones: Yup.string().required('Este campo es necesario'),
    fechaReciboRiego: Yup.date().required('Este campo es necesario'),
  })

  const handleSubmit = (values) => {
    const formData = {}

    console.log(formData)
  }

  return (
    <>
      <div className="title-container">
        <p> Formulario Solicitud de Riego </p>
      </div>
      <div className="senara-forms">
        <Formik
          initialValues={{
            nParcela: '',
            proyecto: '',
            subDistrito: '',
            area: '',
            cultivo: '',
            variedad: '',
            rendimientoAnterior: '',
            fechaReciboRiego: '',
            fax: '',
            email: '',
            observaciones: '',
          }}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={profileSchema}
        >
          {({ errors, touched, setFieldValue }) => {
            return (
              <Form className="forms-container">
                <div className="forms-content">
                  <div>
                    <div className="senara-form-group">
                      {errors.nParcela && touched.nParcela ? (
                        <div className="senara-actions">{errors.nParcela}</div>
                      ) : null}
                      <Field
                        id="nParcela"
                        name="nParcela"
                        type="text"
                        placeholder="Numero de Parcela"
                        className="floating-input"
                        value=""
                      />
                      <FontAwesomeIcon icon={faAddressCard} />
                    </div>
                    <div className="senara-form-group">
                      {errors.proyecto && touched.proyecto ? (
                        <div className="senara-actions">{errors.proyecto}</div>
                      ) : null}
                      <Field
                        id="proyecto"
                        name="proyecto"
                        type="text"
                        placeholder="Nombre del Proyecto"
                        className="floating-input"
                        value=""
                      />
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="senara-form-group">
                      {errors.subDistrito && touched.subDistrito ? (
                        <div className="senara-actions">
                          {errors.subDistrito}
                        </div>
                      ) : null}
                      <Field
                        id="subDistrito"
                        name="subDistrito"
                        type="text"
                        placeholder="SubDistrito"
                        className="floating-input"
                        value=""
                      />
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="senara-form-group">
                      {errors.area && touched.area ? (
                        <div className="senara-actions">{errors.area}</div>
                      ) : null}
                      <Field
                        id="area"
                        name="area"
                        type="text"
                        placeholder="Area"
                        className="floating-input"
                        value=""
                      />
                      <FontAwesomeIcon icon={faKey} />
                    </div>
                    <div className="senara-form-group">
                      {errors.cultivo && touched.cultivo ? (
                        <div className="senara-actions">{errors.cultivo}</div>
                      ) : null}
                      <Field
                        id="cultivo"
                        name="cultivo"
                        type="text"
                        placeholder="Cultivo"
                        className="floating-input"
                        value=""
                      />
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                  </div>
                  <div>
                    <div className="senara-form-group">
                      {errors.rendimientoAnterior &&
                      touched.rendimientoAnterior ? (
                        <div className="senara-actions">
                          {errors.rendimientoAnterior}
                        </div>
                      ) : null}
                      <Field
                        id="rendimientoAnterior"
                        name="rendimientoAnterior"
                        type="text"
                        placeholder="Rendimiento anterior"
                        className="floating-input"
                        value=""
                      ></Field>
                    </div>
                    <div className="senara-form-group">
                      {errors.variedad && touched.variedad ? (
                        <div className="senara-actions">{errors.variedad}</div>
                      ) : null}
                      <Field
                        id="variedad"
                        name="variedad"
                        type="text"
                        placeholder="Variedad"
                        className="floating-input"
                        value=""
                      ></Field>
                    </div>

                    <div className="senara-form-group">
                      {errors.fechaReciboRiego && touched.fechaReciboRiego ? (
                        <div className="senara-actions">
                          {errors.fechaReciboRiego}
                        </div>
                      ) : null}

                      <Field
                        id="fechaReciboRiego"
                        name="fechaReciboRiego"
                        type="date"
                        className="floating-input"
                      ></Field>
                    </div>

                    <div className="senara-form-group">
                      {errors.fax && touched.fax ? (
                        <div className="senara-actions">{errors.fax}</div>
                      ) : null}
                      <Field
                        id="fax"
                        name="fax"
                        type="text"
                        placeholder="Fax"
                        className="floating-input"
                        value=""
                      ></Field>
                    </div>
                    <div className="senara-form-group">
                      {errors.email && touched.email ? (
                        <div className="senara-actions">{errors.email}</div>
                      ) : null}
                      <Field
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Correo"
                        className="floating-input"
                        value=""
                      />
                    </div>
                    <div className="senara-form-group">
                      {errors.observaciones && touched.observaciones ? (
                        <div className="senara-actions">
                          {errors.observaciones}
                        </div>
                      ) : null}
                      <Field
                        id="observaciones"
                        name="observaciones"
                        as="textarea"
                        placeholder="Observaciones"
                        className="floating-textarea"
                        value=""
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

export default FormSolicitudRiego
