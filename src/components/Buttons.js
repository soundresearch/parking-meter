import React from "react";

const Buttons = ({ time, setTime, setMessage, setWalletMessage, coinInserted, setCoinInserted, cardInserted, setCardInserted }) => {
    const increaseTime = () => {
      if (!cardInserted) {
        setMessage('Insert Credit Card');
        setTimeout(() => {
          setMessage('$2.00/hr 8 hours Max');
        }, 2000);
      } else {
        if (time < 480) { // Time less than 8 hours
          setTime(prevTime => prevTime + 15);
        }
      }
    };
  
    const decreaseTime = () => {
      if (!cardInserted) {
        setMessage('Insert Credit Card');
        setTimeout(() => {
          setMessage('$2.00/hr 8 hours Max');
        }, 2000);
      } else {
        if (time > 0) {
          setTime(prevTime => prevTime - 15);
        }
      }
    };

    const cancel = () => {
      setCoinInserted(false);
      setCardInserted(false);
      setTime(0);
      setMessage('Transaction Cancelled');
      setTimeout(() => {
        setMessage('$2.00/hr 8 hours Max');
      }, 2000);
      setWalletMessage('');
    };

    const okay = () => {
      if (!coinInserted && !cardInserted) {
        setMessage('Insert Coins or Card');
        setTimeout(() => {
          setMessage('$2.00/hr 8 hours Max');
        }, 2000);
      } else {
        if (time > 0) {
          setMessage('Payment Confirmed');
          setCoinInserted(false);
          setCardInserted(false);
          setWalletMessage('');
          setTimeout(() => {
            setMessage('$2.00/hr 8 hours Max');
          }, 2000);
        } else {
          setMessage('Please Add Time');
          setTimeout(() => {
            setMessage('$2.00/hr 8 hours Max');
          }, 2000);
        }
      }
    };

    return (
      <div className="button-container">
        <div className="button-wrapper h-flex">
          <div className="v-flex">
            Time
            <div className="h-flex">
              <button className="time button" onClick={increaseTime}>+</button>
              <button className="time button" onClick={decreaseTime}>−</button>
            </div>
          </div>
          <div className="v-flex">
            Cancel
            <button className="cancel button" onClick={cancel}></button>
          </div>
          <div className="v-flex">
            Ok
            <button className="ok button" onClick={okay}></button>
          </div>
        </div>
        Insert coins or credit card to start
      </div>
    )
}

export default Buttons;