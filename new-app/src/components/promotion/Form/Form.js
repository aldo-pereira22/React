import React from 'react'
import './Form.css'

const PromotionForm = () => {
     
    return (
        <div> 
            <h1> Promo Show </h1>
            <h2> Nova Promoção </h2>

            <form> 
                <div className="promotion-form__group"> 
                    <label htmlFor="title "> Título </label>
                    <input id="title" name="title" type="text" />

                </div>

                <div className="promotion-form__group"> 
                    <label htmlFor="url "> Link </label>
                    <input id="url" name="url" type="text" />

                </div>

                <div className="promotion-form__group"> 
                    <label htmlFor="imageUrl "> Imagem (url) </label>
                    <input id="imageUrl" name="imageUrl" type="text" />

                </div>

                <div className="promotion-form__group"> 
                    <label htmlFor="price "> Preço </label>
                    <input id="price" name="price" type="number" />

                </div>

                <div> 
                    <button type="submit">
                        Salvar
                    </button>
                </div>
            </form>

        </div>

    )
}


export default PromotionForm