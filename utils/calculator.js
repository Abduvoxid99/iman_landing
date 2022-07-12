export const calculateEarnings = (
  initialInvestment = 25,
  monthlyInvestment = 3,
  chosenInvestmentPeriod = 18
) => {
  const BASIC_SHARE_PROFIT = 0.9;
  const MAX_SHARE_PROFIT = 0.99;
  const BASIC_INVEST_AMOUNT = 1;
  const BASIC_INVEST_PERIOD = 1;
  const MAX_INVEST_PERIOD = 4;
  const PREMIUM_FOR_EACH_YEAR = 0.005;
  const PREMIUM_FOR_EACH_MLN = 0.0009;
  const MONTHLY_RETURN = 0.0207847284895;

  let earningsBeforeDistribution = [0];
  let investorShare = [0];
  let investorIncome = [0];
  let totalCount = [initialInvestment];
  let totalInvestedPerMonth = [0];
  let totalIncomePerMonth = [0];
  let arrAccumulatedProfit = [0];
  let totalInvestedTotal = [initialInvestment];
  let accumulatedProfit = 0;
  let resultTotalCount = 0;
  let allTotalCount = 0;
  let arrAllTotalCount = [0];
  const reducer = (prev, next) => prev + next;
  // console.log(`earningsBeforeDistribution  => `, earningsBeforeDistribution);
  // console.log(`investorShare  => `, investorShare)
  // console.log(`investorIncome  => `, investorIncome)
  // console.log(`totalCount  => `, totalCount);
  // console.log('totalInvestTotal=>', totalInvestedTotal)
  // console.log("chosenInvestmentPeriod", chosenInvestmentPeriod);
  // console.log('CALCULATE',Math.min(MAX_INVEST_PERIOD,chosenInvestmentPeriod))

  for (let i = 1; i < chosenInvestmentPeriod * 12 + 1; i++) {
    const resultEarningsBeforeDistribution = MONTHLY_RETURN * totalCount[i - 1];
    earningsBeforeDistribution.push(resultEarningsBeforeDistribution);

    // console.log(
    //   `resultEarningsBeforeDistribution ${i} =>`,
    //   resultEarningsBeforeDistribution
    // )

    const resultInvestorShare = Math.min(
      MAX_SHARE_PROFIT,
      BASIC_SHARE_PROFIT +
        (totalCount[i - 1] - BASIC_INVEST_AMOUNT) * PREMIUM_FOR_EACH_MLN +
        (Math.min(MAX_INVEST_PERIOD, chosenInvestmentPeriod) -
          BASIC_INVEST_PERIOD) *
          PREMIUM_FOR_EACH_YEAR
    );
    investorShare.push(resultInvestorShare);

    // console.log(`resultInvestorShare ${i} =>`, resultInvestorShare)
    // console.log(`tInvestorShare ${i} =>`, investorShare)

    const resultInvestorIncome =
      earningsBeforeDistribution[i] * investorShare[i];
    investorIncome.push(resultInvestorIncome);

    // console.log('earningsBeforeDistribution => ', earningsBeforeDistribution)
    // console.log('investorIncome => ', investorIncome)

    // console.log(`resultInvestorIncome ${i} => `, resultInvestorIncome)

    if ((i - 1) % 3 === 0) {
      accumulatedProfit = resultInvestorIncome;
      // console.log(`INITIAL ${i}`, accumulatedProfit);
      arrAccumulatedProfit.push(accumulatedProfit);
      // console.log(`ARRAY ACCUM ${i}`, arrAccumulatedProfit);
    }

    if ((i - 1) % 3 !== 0) {
      accumulatedProfit = accumulatedProfit + resultInvestorIncome;
      // console.log(`ACCUMULATED ${i}`, accumulatedProfit);
      arrAccumulatedProfit.push(accumulatedProfit);
      // console.log(`ARRAY ACCUM ${i}`, arrAccumulatedProfit);
    }

    if (i - 1 === 0) {
      resultTotalCount = initialInvestment;
      // console.log(`INITIAL TOTAL COUNT ${i}`, resultTotalCount);
    }

    if ((i - 1) % 3 !== 0) {
      resultTotalCount = resultTotalCount + monthlyInvestment;
      // console.log(`3 month TOTAL COUNT ${i}`, resultTotalCount);
    }

    if ((i - 1) % 3 === 0) {
      resultTotalCount =
        resultTotalCount + monthlyInvestment + arrAccumulatedProfit[i - 1];
      // console.log(`TOTAL TOTAL COUNT ${i}`, resultTotalCount);
    }

    totalCount.push(resultTotalCount);

    allTotalCount += resultInvestorIncome;
    arrAllTotalCount.push(allTotalCount);
    // console.log("Всего заработано", arrAllTotalCount);

    // if (i === 1) {
    //   const resultTotalCount =
    //     initialInvestment + monthlyInvestment + resultInvestorIncome;
    //   totalCount.push(resultTotalCount);
    //   // console.log(`resultTotalCount ${i} => `, resultTotalCount)
    //   // console.log('resultInvesterTotalIncome=> ', resultInvestorIncome)
    // } else {
    //   const resultAllTotalCount =
    //     totalCount[i - 1] +
    //     monthlyInvestment +
    //     investorShare[i] * earningsBeforeDistribution[i];
    //   totalCount.push(resultAllTotalCount); ///******** */

    //   // console.log(`resultAllTotalCount ${i} =>`, resultAllTotalCount)
    //   // console.log('monthlyInvestment => ', earningsBeforeDistribution[i])
    // }

    const resultTotalInvested = initialInvestment + monthlyInvestment;
    totalInvestedPerMonth.push(resultTotalInvested);
    // console.log('resultTotalInvested=>', resultTotalInvested)
    const reslutToltaEarnBenefit = resultInvestorIncome;
    totalIncomePerMonth.push(reslutToltaEarnBenefit);

    const investedTotal = initialInvestment + monthlyInvestment * [i];
    totalInvestedTotal.push(investedTotal);
  }
  return [arrAllTotalCount, totalInvestedTotal];
};
