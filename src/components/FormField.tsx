import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'
import RemoveButton from './RemoveButton'

interface FormFieldProps {
    index: number
    register: UseFormRegister<{ items: { name: string; value: string }[] }>
    errors: FieldErrors<{ items: { name: string; value: string }[] }>
    remove: (index: number) => void
}

const FormField: React.FC<FormFieldProps> = ({ index, register, errors, remove }) => {
    return (
        <div className="input-group">
            <div className="input-content">
                <label className="input-label">Nombre del input field</label>
                <input
                    {...register(`items.${index}.name`)}
                    className="input-field"
                    placeholder="Ej: Register"
                />
                {errors.items?.[index]?.name && (
                    <p className="error-field">{errors.items[index]?.name?.message}</p>
                )}
            </div>
            <div className="input-content">
                <label className="input-label">Valor del input field</label>
                <input
                    type="text"
                    {...register(`items.${index}.value`)}
                    className="input-field"
                    placeholder="Ej: name-register"
                />
                {errors.items?.[index]?.value && (
                    <p className="error-field">{errors.items[index]?.value?.message}</p>
                )}
            </div>
            <RemoveButton onClick={() => remove(index)} />
        </div>
    )
}

export default FormField
