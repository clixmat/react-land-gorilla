import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import AddButton from './AddButton'
import FormField from './FormField'
import SubmitButton from './SubmitButton'

// Validaciones con Zod:
// Las validaciones del formulario se gestionan utilizando Zod, una librería de validación de esquemas. Zod define el esquema de validación para los campos del formulario.
const formSchema = z.object({
    items: z.array(
        z.object({
            name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
            value: z.string().min(2, 'El valor debe tener al menos 2 caracteres'),
        }),
    ),
})

// Tipo inferido desde el esquema Zod
type FormValues = z.infer<typeof formSchema>

// Gestión del Estado del Formulario:
// El estado del formulario se gestiona con React Hook Form, que ofrece una manera eficiente y fácil de manejar los formularios en React.
// useForm: Se usa para registrar los campos del formulario, manejar el estado de cada campo y gestionar el envío de datos.

// Para integrar React Hook Form con Zod, se usa un resolver que permite a React Hook Form manejar el esquema de Zod.
// Esto asegura que, cuando el formulario se envíe, se validen los datos de acuerdo al esquema.
const DynamicForm: React.FC = () => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: { items: [{ name: '', value: '' }] },
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'items',
    })
    // Manejo del Envío:
    // Cuando el formulario es enviado, se usa handleSubmit de React Hook Form para manejar el proceso de envío,
    // el cual primero realiza la validación y luego llama a una función para procesar los datos.
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        console.log('Datos enviados:', data)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        alert('Datos enviados con éxito')
    }

    return (
        <div className="form-container">
            <h2>Formulario Dinámico</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {fields.map((field, index) => (
                    <FormField
                        errors={errors}
                        index={index}
                        key={field.id}
                        register={register}
                        remove={remove}
                    />
                ))}
                <AddButton onClick={() => append({ name: '', value: '' })} />
                <SubmitButton />
            </form>
        </div>
    )
}

export default DynamicForm
