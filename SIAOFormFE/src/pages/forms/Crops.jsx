import React from 'react'
import { Field, FieldArray } from 'formik'

const Crops = ({ touched, errors, values }) => {
    return (
        <div className="senara-form-group">
            <FieldArray name="crops">
                {({ insert, remove, push }) => (
                    <table id='senara-table'>
                        <thead>
                            <tr>
                                <th>Cultivo</th>
                                <th>Toma</th>
                                <th>Area</th>
                                <th>Fecha</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {values.crops.length > 0 &&
                                values.crops.map((_, index) => (
                                    <tr key={index}>
                                        <th>
                                            <Field
                                                name={`crops.${index}.cultivo`}
                                                placeholder="Cultivo"
                                                type="text"
                                            />
                                        </th>
                                        <th>
                                            <Field
                                                name={`crops.${index}.toma`}
                                                placeholder="Toma"
                                                type="text"
                                            />
                                        </th>
                                        <th>
                                            <Field
                                                name={`crops.${index}.area`}
                                                placeholder="Area Cultivo"
                                                type="text"
                                            />
                                        </th>
                                        <th>
                                            <Field
                                                name={`crops.${index}.fecha`}
                                                type="date"
                                            />
                                        </th>
                                        <th>
                                            <button
                                                type="button"
                                                onClick={() => remove(index)}
                                            >
                                                X
                                            </button>
                                        </th>
                                    </tr>
                                ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <input
                                        value="Agregar Cultivo"
                                        type="button"
                                        onClick={() => push({ cultivo: '', toma: '', area: '', fecha: '' })}
                                    />
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                )}
            </FieldArray>
        </div>
    )
}

export default Crops