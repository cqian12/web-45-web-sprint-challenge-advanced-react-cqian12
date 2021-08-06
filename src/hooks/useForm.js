// write your custom hook here to control your checkout form
import { useState } from "react"

const initialValue = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  };

const useCheckoutState = () => {
  //states used in CheckoutForm
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  //functions that modify state used in CheckoutForm
  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  //returns states, functions to be used in CheckoutForm
  return [showSuccessMessage, values, handleChanges, handleSubmit]
}

export default useCheckoutState