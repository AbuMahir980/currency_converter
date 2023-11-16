const input = document.querySelector('input');

const btn = document.querySelector('button')

// 

const getExchangeFrom = async () => {
  const response = await fetch(
		"https://api.frankfurter.app/latest"
	);
  const data = await response.json()
    // console.log(data.rates.USD)
  return data.rates.USD;
  //108.49
}

const getExchangeTo = async () => {
	const newResponse = await fetch("https://api.frankfurter.app/latest");
	const newData = await newResponse.json();
	// console.log(data.rates.ZAR)
	return newData.rates.ZAR;
  //19.8718
};
// console.log(getExchangeTo());



btn.addEventListener('click', async () => {

  const amtVal = async () => {
		const results = Number(input.value);
		input.value = "";

		const exchangeFrom = await getExchangeFrom();
		const amount = `${exchangeFrom * results}`;
    console.log(amount)
		return amount;
	};

  const getAmtVal = amtVal();
  const exchangeTo = await getExchangeTo();
  const exchangeRate = `${getAmtVal * exchangeTo}`

  const convertResult = document.querySelector("#convertResult");
  convertResult.textContent = exchangeRate;
})






