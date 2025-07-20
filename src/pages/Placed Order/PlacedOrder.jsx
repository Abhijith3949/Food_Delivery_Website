import React, { useContext , useState} from 'react'
import './PlacedOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlacedOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)

  // Add missing state declarations for controlled inputs
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [country, setCountry] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            placeholder='First Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder='Last Name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <input
          type="email"
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder='Street'
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <div className="multi-fields">
          <input
            type="text"
            placeholder='City'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder='State'
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="multi-fields">
          <input
            type="text"
            placeholder='Zip code'
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <input
            type="text"
            placeholder='Country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder='Phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlacedOrder
