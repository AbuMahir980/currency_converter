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

    currencyConvertUrl.searchParams.append('from=USD', fromCurrency)
    currencyConvertUrl.searchParams.append("to=ZAR", toCurrency);

    const result = await fetch(currencyConvertUrl);
    const json = await result.json();
      // console.log(json.rates)
    return (json.rates);
};

// getCurrencyRate();
// const countries = {
//     AUD: "Australian Dollar",
//     BGN: "Bulgarian Lev",
//     BRL: "Brazilian Real",
//     CAD: "Canadian Dollar",
//     CHF: "Swiss Franc",
//     CNY: "Chinese Renminbi Yuan",
//     CZK: "Czech Koruna",
//     DKK: "Danish Krone",
//     EUR: "Euro",
//     GBP: "British Pound",
//     HKD: "Hong Kong Dollar",
//     HUF: "Hungarian Forint",
//     IDR: "Indonesian Rupiah",
//     ILS: "Israeli New Sheqel",
//     INR: "Indian Rupee",
//     ISK: "Icelandic Króna",
//     JPY: "Japanese Yen",
//     KRW: "South Korean Won",
//     MXN: "Mexican Peso",
//     MYR: "Malaysian Ringgit",
//     NOK: "Norwegian Krone",
//     NZD: "New Zealand Dollar",
//     PHP: "Philippine Peso",
//     PLN: "Polish Złoty",
//     RON: "Romanian Leu",
//     SEK: "Swedish Krona",
//     SGD: "Singapore Dollar",
//     THB: "Thai Baht",
//     TRY: "Turkish Lira",
//     USD: "United States Dollar",
//     ZAR: "South African Rand"
// }
// const currencyKeys = [...Object.keys(countries)]
// console.log(currencyKeys)
// const appendToSelect = (selectElement, optionItem) => {
//     const optionElement = document.createElement('option');
//     const optionKeys = currencyKeys;
//     optionItem = optionKeys
//     optionElement.value = optionItem
//     optionElement.textContent = optionItem;

//     selectElement.appendChild(optionElement);
// };

// appendToSelect();

// // const populateSelectElement = (selectElement, optionList) => {
// //   optionList.forEach(optionItem => {
// //       appendOptionToSelect(selectElement, optionItem);
// //   })
// // };

const setupCurrencies = async () => {
      const fromCurrencyElem = document.querySelector('#fromCurrency');
      const toCurrencyElem = document.querySelector("#toCurrency");

      const currOptions = await getCurrency();


}
