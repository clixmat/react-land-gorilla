# 📌 Formulario Dinámico en React con TypeScript

Este proyecto es un formulario dinámico creado con **React, TypeScript, React Hook Form y Zod**, que permite a los usuarios agregar y eliminar campos de entrada de forma dinámica. Se incluyen validaciones y una simulación de envío a una API.

## 🚀 Tecnologías Usadas
- **React** + **Vite**
- **TypeScript**
- **React Hook Form** (Manejo del formulario)
- **Zod** (Validaciones)
- **Tailwind CSS** (Estilizado, opcional)

## 📂 Estructura del Proyecto
```
📦 src
 ┣ 📂 components
 ┃ ┣ 📜 DynamicForm.tsx       # Formulario principal
 ┃ ┣ 📜 FormField.tsx        # Componente de campo individual
 ┃ ┣ 📜 AddButton.tsx        # Botón para agregar campos
 ┃ ┣ 📜 SubmitButton.tsx     # Botón de envío del formulario
 ┃ ┗ 📜 RemoveButton.tsx     # Botón para eliminar campos
 ┣ 📜 App.tsx                # Integración del formulario
 ┣ 📜 main.tsx               # Punto de entrada de la app
 ┗ 📜 index.css              # Estilos globales
```

## 📌 Instalación
1. Clona el repositorio:
   ```sh
   git clone https://github.com/clixmat/react-land-gorilla.git
   ```
2. Entra en el directorio del proyecto:
   ```sh
   cd react-land-gorilla
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```
   o con **yarn**:
   ```sh
   yarn install
   ```

## 🛠️ Uso
Ejecuta el servidor de desarrollo:
```sh
npm run dev
```
o con **yarn**:
```sh
yarn dev
```
Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## 🏗️ Componentes
### 🔹 `DynamicForm.tsx`
Maneja el formulario, el estado y el envío de datos.

### 🔹 `FormField.tsx`
Componente reutilizable para cada campo del formulario (nombre y valor).

### 🔹 `AddButton.tsx`
Botón para agregar nuevos campos al formulario.

### 🔹 `RemoveButton.tsx`
Botón para eliminar un campo específico.

### 🔹 `SubmitButton.tsx`
Botón para enviar el formulario.

## 🛡️ Validaciones
Las validaciones se realizan con **Zod**:
- `name`: Mínimo 2 caracteres.
- `value`: Mínimo 2 caracteres.

## 📬 Simulación de Envio a API
El formulario simula el envío de datos con `setTimeout`.

```tsx
const onSubmit: SubmitHandler<FormValues> = async (data) => {
  console.log("Datos enviados:", data);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  alert("Datos enviados con éxito");
};
```

## 📝 Gestión del Estado del Formulario y Validaciones

El estado del formulario se maneja utilizando React Hook Form. Este hook permite registrar los campos y gestionar el estado de cada uno de ellos de manera eficiente.

```tsx
const { register, handleSubmit, control, formState: { errors } } = useForm<FormValues>({
  resolver: zodResolver(schema),
});
```

- **register**: Registra cada campo del formulario para que React Hook Form pueda seguir su estado.
- **handleSubmit**: Maneja el envío del formulario.
- **control**: Se pasa a los componentes personalizados como FormField para gestionar los campos dinámicos.
- **errors**: Contiene los errores de validación que se mostrarán si alguna regla no se cumple.