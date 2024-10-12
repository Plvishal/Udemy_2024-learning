import { calculateInvestmentResults } from '../utils/investment.js';

function Result({ input }) {
  const resultData = calculateInvestmentResults(input   );
  console.log(resultData);
  return <div>Result</div>;
}

export default Result;
