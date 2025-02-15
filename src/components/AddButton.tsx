import React from 'react'

interface AddButtonProps {
    onClick: () => void
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
    return (
        <button className="button btn-add" type="button" onClick={onClick}>
            Agregar Campo
        </button>
    )
}

export default AddButton
