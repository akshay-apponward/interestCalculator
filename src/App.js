import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    totalAmount: "",
    interest: "",
    duration: "",
    durationType: 0,
    totalInterest: "",
  });
  const [errors, setErrors] = useState({});
  const clearValue = (event) => {
    setValues({
      totalAmount: "",
      interest: "",
      duration: "",
      durationType: 0,
      totalInterest: "",
    });
  };
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value && parseInt(event.target.value),
    });
    console.log("vlaues", values);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    if (!values.totalAmount) {
      errors.totalAmount = "Total Amount is required";
    }
    if (!values.interest) {
      errors.interest = "Interest Rate is required";
    }

    if (!values.duration) {
      errors.duration = "Duration is required";
    }

    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log("submit value", values);
      if (values.durationType === 0) {
        setValues({
          ...values,
          totalInterest:
            (values.totalAmount * values.interest * values.duration) / 100,
        });
      }
      if (values.durationType === 1) {
        setValues({
          ...values,
          totalInterest:
            (values.totalAmount * values.interest * values.duration) /
            (12 * 100),
        });
      }
      if (values.durationType === 2) {
        setValues({
          ...values,
          totalInterest:
            (values.totalAmount * values.interest * values.duration) /
            (365 * 100),
        });
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h2 className="mainHeading">Interest Calculator</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="col-25">
                <label htmlFor="tAmount">Total Amount*</label>
              </div>
              <div className="col-75">
                <input
                  type="number"
                  id="tAmount"
                  name="totalAmount"
                  placeholder="Total amount.."
                  value={values.totalAmount}
                  onChange={handleChange}
                />
                {errors.totalAmount && (
                  <p className="err-msg">{errors.totalAmount}</p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="interest">Interest Rate*</label>
              </div>
              <div className="col-75">
                <input
                  type="number"
                  id="interest"
                  name="interest"
                  placeholder="Enter Interest Rate..."
                  value={values.interest}
                  onChange={handleChange}
                />
                {errors.interest && (
                  <p className="err-msg">{errors.interest}</p>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="duration">Duration Type*</label>
              </div>
              <div className="col-75">
                <select
                  id="duration_type"
                  name="durationType"
                  value={values.durationType}
                  onChange={handleChange}
                >
                  <option defaultValue value="0">
                    Yearly
                  </option>
                  <option value="1">Monthly</option>
                  <option value="2">days</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="duration">Total Duration*</label>
              </div>
              <div className="col-75">
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  placeholder="Enter Interest Rate..."
                  value={values.duration}
                  onChange={handleChange}
                />
                {errors.duration && (
                  <p className="err-msg">{errors.duration}</p>
                )}
              </div>
            </div>
            <div className="row">
              <input type="submit" value="Calculate Interest" />
            </div>
          </form>
          <div className="row">
            <button className="clear" onClick={clearValue}>
              Reset Value
            </button>
          </div>
          <div className="row res">
            <div className="col-25">
              <label htmlFor="duration">Total Interest</label>
            </div>
            <div className="col-75 result">
              <label htmlFor="duration">{values.totalInterest}</label>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
