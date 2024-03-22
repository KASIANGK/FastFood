import { useSelector } from "react-redux";
import Modal from "react-modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {removeFromCart} from '../../basketSlice'

function Basket() {

  const cart = useSelector(state => state.basket.cart)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const dispatch = useDispatch()

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }))
  }

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div className="parent-container">
      <div className="basket">
        <h2>BASKET</h2>
        {cart.length === 0 ? (
          <h2>quantity: ({totalQuantity})</h2>
        ) : (
          <div>
            <h2>quantity: ({totalQuantity})</h2>
            <button onClick={toggleModal}>SHOW MORE</button>
          </div>
        )}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          contentLabel="Contenu du modal"
          className="modal-container"
        >
          <div className="modal-content">
            <h2>UR BASKET</h2>
            {cart.map((item, index) => (
              <div key={index}>
                <img src={item.img} alt={item.name} />
                <p>name : {item.name}</p>
                <p>quantity : {item.quantity}</p>
                <p>price : {item.price * item.quantity}</p>
                <button onClick={() => handleRemoveFromCart(item.id)}>DELETE</button>
              </div>
            ))}
            <button onClick={toggleModal}>CLOSE</button>
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default Basket