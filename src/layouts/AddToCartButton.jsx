import React from 'react'

const AddToCartButton = (props) => {
    return (
        <div>
            <button
                className="px-6 py-1 border-2 border-button text-black
                            hover:text-button transition-all rounded-full">
                {props.title}
            </button>
        </div>
    )
}

export default AddToCartButton