const getCurrency = async () => {
    const response = await fetch(`https://api.frankfurter.app/currencies`);
    // console.log(response);
    const data = await response.json();
    // console.log(data);
    return data;
}
// getCurrency();

const getCurrencyRate = async (fromCurrency, toCurrency) => {
    const currencyConvertUrl = new URL(
			"https://api.frankfurter.app/latest"
		);
    // const currencyConvertUrlTo = new URL(
		// 	"https://api.frankfurter.app/latest?to=ZAR"
		// );

    currencyConvertUrl.searchParams.append('from=USD', fromCurrency)
    currencyConvertUrl.searchParams.append("to=ZAR", toCurrency);

    const result = await fetch(currencyConvertUrl);
    const json = await result.json();
      // console.log(json.rates)
    return (json.rates);
};

// getCurrencyRate();

const appendToSelect = (selectElement, optionItem) => {
    const optionElement = document.createElement('option');
    optionElement.value = optionItem.code;
    optionElement.textContent = optionItem.description;

    selectElement.appendChild(optionElement);
};

const populateSelectElement = (selectElement, optionList) => {
  optionList.forEach(optionItem => {
      appendOptionToSelect(selectElement, optionItem);
  })
};

const setupCurrencies = async () => {
      const fromCurrencyElem = document.querySelector('#from');
      const toCurrencyElem = document.querySelector("#to");
}
