const input = document.querySelector('input[type=text]');
// const fromCurrency = document.querySelector('#fromCurrency')
// const toCurrency = document.querySelector("#toCurrency")

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
// getExchangeTo();

// console.log(getExchangeFrom())
btn.addEventListener('click', async() => {
  const results = input.va
  // console.log(results)
  // input.value = '';

  const exchangeFrom = await getExchangeFrom();
  const amount = `${exchangeFrom * results}`
  const exchangeTo = await getExchangeTo();
  const exchangeRate = `${amount * exchangeTo}`
  convertResult.textContent = exchangeRate;
})




