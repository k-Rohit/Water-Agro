import React from 'react'
import '../styles/components/Modal.css'
import productImg from '../assets/bottle-photo.png'

export const Modal = () => {
    return (
        <div className="modal-container">
            <div className="modal-content">
                <div className="modal-text">
                    <h2>Bifenthrin 10%EC</h2>
                    <p><strong>Best Used In:</strong> Paddy, Cotton, Sugarcane, Corn, Some Vegetables</p>
                    <p><strong>Defends Against:</strong> Different types of insects like ants, termites, aphids, beetles, cockroaches, and spiders.</p>
                    <p><strong>Dose/Acre:</strong> Recommended dosage ranges from 200 ml to 400 ml per acre, depending on the crop type and disease severity.</p>
                    <p><strong>Packaging Options:</strong> 250 ml, 500 ml, 1 ltr.</p>
                </div>
                <div className="modal-image">
                    <img src={productImg} alt="Bifenthrin Product" />
                </div>
            </div>
        </div>
    )
}
