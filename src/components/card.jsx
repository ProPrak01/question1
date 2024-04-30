import React, { useEffect, useState } from 'react'
import './card.css'

const Modal = ({ images, closeModal }) => (
    <div className="modal">
        <div className="modal-content">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`Product ${index}`} />
            ))}
            <button onClick={closeModal}>Back</button>
        </div>
    </div>
)

const Card = ({product}) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    useEffect(()=>{
        console.log(product.brand);
    },[])

    return (
        <div className="product" data-images={JSON.stringify(product.images)} onClick={toggleModal}>
            <img src={product.thumbnail} alt={product.title} />
            <h2 className="title">{product.title}</h2>
            <p className="description">{product.description}</p>
            <div className="details">
                <p className="price unit">Rs. {product.price}/-</p>
                <p className="brand unit">{product.brand}</p>
                <p className="rating unit">{product.rating}</p>
            </div>
            {showModal && <Modal images={product.images} closeModal={toggleModal} />}
        </div>
    )
}

export default Card