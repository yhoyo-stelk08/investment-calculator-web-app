import { formatter } from "../util/investment";

function Result({ calculatedData }) {
  let totalInterest = 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedData.map((data) => (
          <tr key={data.year}>
            <td>{data.year} </td>
            <td>{formatter.format(data.valueEndOfYear)} </td>
            <td>{formatter.format(data.interest)} </td>
            <td>{formatter.format((totalInterest += data.interest))} </td>
            <td>{formatter.format(data.investmentCapital)} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Result;
