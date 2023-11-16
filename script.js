const getCurrency = async () => {
    const response = await fetch(`https://api.frankfurter.app/currencies`);
    // console.log(response);
    const data = await response.json();
    console.log(data);
    return (data);
}
getCurrency();
// getCurrencyRate = (fromCurrency, toCurrency) => {
//     const 
// }