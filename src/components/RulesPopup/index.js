import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import './index.css'

const RulesPopup = () => (
  <div>
    <Popup
      modal
      trigger={
        <div className="rules-container">
          <button type="button" className="rule-btn">
            RULES
          </button>
        </div>
      }
    >
      {close => (
        <>
          <div className="popup-container">
            <button type="button" className="close-btn" onClick={() => close()}>
              <RiCloseLine />
            </button>
            <img
              alt="rules"
              className="rules-img"
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            />
          </div>
        </>
      )}
    </Popup>
  </div>
)

export default RulesPopup
