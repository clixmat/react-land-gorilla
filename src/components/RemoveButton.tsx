import React from 'react'

interface RemoveButtonProps {
    onClick: () => void
}

const RemoveButton: React.FC<RemoveButtonProps> = ({ onClick }) => {
    return (
        <button type="button" onClick={onClick} className="button btn-remove">
            Eliminar
        </button>
    )
}

export default RemoveButton
