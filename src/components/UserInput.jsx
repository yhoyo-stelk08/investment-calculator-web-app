function UserInput({ onChangeValue, initialValue }) {
  function handleChange(e, valueIdentifier) {
    // console.log(e.target.value.length)
    if(valueIdentifier === "duration") {
      e.target.value.length < 1 ? alert('Duration Cannot empty') : ''
    }
    onChangeValue(valueIdentifier, parseInt(e.target.value));
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            defaultValue={initialValue.initialInvestment}
            required
            onChange={(e) => handleChange(e, "initialInvestment")}
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            defaultValue={initialValue.annualInvestment}
            required
            onChange={(e) => handleChange(e, "annualInvestment")}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            defaultValue={initialValue.expectedReturn}
            required
            onChange={(e) => handleChange(e, "expectedReturn")}
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            defaultValue={initialValue.duration}
            required
            onChange={(e) => handleChange(e, "duration")}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
