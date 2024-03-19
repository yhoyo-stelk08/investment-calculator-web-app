import { useState } from "react";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { calculateInvestmentResults } from "./util/investment";

const INITIAL_VALUE = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function calculatingData(data) {
  console.log(data);
  const x = calculateInvestmentResults(data);
  let investmentCapital = data.initialInvestment

  const updatedData = x.map(
    (item) => {
      investmentCapital += data.annualInvestment
      return { ...item, investmentCapital: investmentCapital }
    }
  );

  return updatedData;
}

function App() {
  const [userInput, setUserInput] = useState(INITIAL_VALUE);

  function handleChangeValue(identifier, newValue) {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [identifier]: newValue,
      };
    });
  }

  return (
    <section>
      <UserInput
        onChangeValue={handleChangeValue}
        initialValue={INITIAL_VALUE}
      />
      <Result calculatedData={calculatingData(userInput)} />
    </section>
  );
}

export default App;
