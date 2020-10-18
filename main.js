// Global Variables

const addCurrButton = document.querySelector(".searchbtn");
const addCurrList = document.querySelector(".listadd");
const currenciesList = document.querySelector(".currencies");

const dataURL = "https://api.exchangerate.host/latest";

const initlist = ["USD", "EUR", "AUD", "AED", "RUB"];
let baseCurrency;
let baseCurrencyAmount;

let currencies = [
  {
    name: "United Arab Emirates dirham",
    abbreviation: "AED",
    symbol: "د.إ",
    flagURL: "https://img.geonames.org/flags/x/ae.gif"
  },
  {
    name: "Afghan afghani",
    abbreviation: "AFN",
    symbol: "\u060B",
    flagURL: "https://img.geonames.org/flags/x/af.gif"
  },
  {
    name: "Albanian lek",
    abbreviation: "ALL",
    symbol: "L",
    flagURL: "https://img.geonames.org/flags/x/af.gif"
  },
  {
    name: "Armenian Dram",
    abbreviation: "AMD",
    symbol: "֏",
    flagURL: "https://img.geonames.org/flags/x/am.gif"
  },
  {
    name: "Netherlands Antillean Guilder",
    abbreviation: "ANG",
    symbol: "ƒ",
    flagURL: "https://img.geonames.org/flags/x/cw.gif"
  },
  {
    name: "Angolan kwanza",
    abbreviation: "AOA",
    symbol: "Kz",
    flagURL: "https://img.geonames.org/flags/x/ao.gif"
  },
  {
    name: "Argentine Peso",
    abbreviation: "ARS",
    symbol: "\u0024",
    flagURL: "https://img.geonames.org/flags/x/ar.gif"
  },
  {
    name: "Australian Dollar",
    abbreviation: "AUD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/au.gif"
  },
  {
    name: "Aruban Florin",
    abbreviation: "AWG",
    symbol: "Afl",
    flagURL: "https://img.geonames.org/flags/x/aw.gif"
  },
  {
    name: "Azerbaijani Manat",
    abbreviation: "AZN",
    symbol: "₼",
    flagURL: "https://img.geonames.org/flags/x/az.gif"
  },
  {
    name: "Bosnia and Herzegovina convertible mark",
    abbreviation: "BAM",
    symbol: "KM",
    flagURL: "https://img.geonames.org/flags/x/ba.gif"
  },
  {
    name: "Barbadian Dollar",
    abbreviation: "BBD",
    symbol: "\u0024",
    flagURL: "https://img.geonames.org/flags/x/bb.gif"
  },
  {
    name: "Bangladeshi Taka",
    abbreviation: "BDT",
    symbol: "৳",
    flagURL: "https://img.geonames.org/flags/x/bd.gif"
  },
  {
    name: "Bulgarian Lev",
    abbreviation: "BGN",
    symbol: "\u043B\u0432",
    flagURL: "http://www.geonames.org/flags/l/bg.gif"
  },
  {
    name: "Bahraini Dinar",
    abbreviation: "BHD",
    symbol: "BD",
    flagURL: "https://img.geonames.org/flags/x/bh.gif"
  },
  {
    name: "Burundian Franc",
    abbreviation: "BIF",
    symbol: "FBu",
    flagURL: "https://img.geonames.org/flags/x/bi.gif"
  },
  {
    name: "Bermudian Dollar",
    abbreviation: "BMD",
    symbol: "\u0024",
    flagURL: "https://img.geonames.org/flags/x/bm.gif"
  },
  {
    name: "Bolivian Boliviano",
    abbreviation: "BND",
    symbol: "Bs",
    flagURL: "https://img.geonames.org/flags/x/bo.gif"
  },
  {
    name: "Brazilian Real",
    abbreviation: "BRL",
    symbol: "\u0052\u0024",
    flagURL: "http://www.geonames.org/flags/l/br.gif"
  },
  {
    name: "Bahamian Dollar",
    abbreviation: "BSD",
    symbol: "\u0024",
    flagURL: "https://img.geonames.org/flags/x/bs.gif"
  },
  {
    name: "Bitcoin",
    abbreviation: "BTC",
    symbol: "₿",
    flagURL: ""
  },
  {
    name: "Bhutanese Ngultrum",
    abbreviation: "BTN",
    symbol: "Nu.",
    flagURL: "https://img.geonames.org/flags/x/bt.gif"
  },
  {
    name: "Botswanan Pula",
    abbreviation: "BWP",
    symbol: "P",
    flagURL: "https://img.geonames.org/flags/x/bw.gif"
  },
  {
    name: "Belarusian Ruble",
    abbreviation: "BYN",
    symbol: "Br",
    flagURL: "https://img.geonames.org/flags/x/by.gif"
  },
  {
    name: "Belize Dollar",
    abbreviation: "BZD",
    symbol: "\u0024",
    flagURL: "https://img.geonames.org/flags/x/bz.gif"
  },
  {
    name: "Canadian Dollar",
    abbreviation: "CAD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/ca.gif"
  },
  {
    name: "Congolese Franc",
    abbreviation: "CDF",
    symbol: "FC",
    flagURL: "https://img.geonames.org/flags/x/cg.gif"
  },
  {
    name: "Swiss Franc",
    abbreviation: "CHF",
    symbol: "\u0043\u0048\u0046",
    flagURL: "http://www.geonames.org/flags/l/ch.gif"
  },
  {
    name: "Unidad de Fomento",
    abbreviation: "CLF",
    symbol: "UF",
    flagURL: "https://img.geonames.org/flags/x/cl.gif"
  },

    {
      name: "Chilean Peso",
      abbreviation: "CLP",
      symbol: "\u0024",
      flagURL: "https://img.geonames.org/flags/x/cl.gif"
    },
    {
      name: "Chinese Yuan (Offshore)",
      abbreviation: "CNH",
      symbol: "\u00A5",
      flagURL: "http://www.geonames.org/flags/l/cn.gif"
    },
  {
      name: "Chinese Yuan Renminbi",
      abbreviation: "CNY",
      symbol: "\u00A5",
      flagURL: "http://www.geonames.org/flags/l/cn.gif"
    },
  {
      name: "Colombian Peso",
      abbreviation: "COP",
      symbol: "\u0024",
      flagURL: "https://img.geonames.org/flags/x/co.gif"
    },
  {
      name: "Costa Rican Colón",
      abbreviation: "CRC",
      symbol: "\u20A1",
      flagURL: "https://img.geonames.org/flags/x/cr.gif"
    },
  {
      name: "Cuban Convertible Peso",
      abbreviation: "CUC",
      symbol: "\u0024",
      flagURL: "https://img.geonames.org/flags/x/cu.gif"
    },
  {
      name: "Cuban Peso",
      abbreviation: "CUP",
      symbol: "\u0024",
      flagURL: "https://img.geonames.org/flags/x/cu.gif"
    },
  {
      name: "Cape Verdean escudo",
      abbreviation: "CVE",
      symbol: "\u0024",
      flagURL: "https://img.geonames.org/flags/x/cv.gif"
    },
  {
      name: "Czech Republic Koruna",
      abbreviation: "CZK",
      symbol: "\u004B\u010D",
      flagURL: "http://www.geonames.org/flags/l/cz.gif"
    },
  {
      name: "Djiboutian Franc",
      abbreviation: "DJF",
      symbol: "Fdj",
      flagURL: "https://img.geonames.org/flags/x/dj.gif"
    },
  {
      name: "Danish Krone",
      abbreviation: "DKK",
      symbol: "\u006B\u0072",
      flagURL: "http://www.geonames.org/flags/l/dk.gif"
    },
  {
      name: "Dominican Peso",
      abbreviation: "DOP",
      symbol: "\u0024",
      flagURL: "https://img.geonames.org/flags/x/dm.gif"
    },
  {
      name: "Algerian Dinar",
      abbreviation: "DZD",
      symbol: "DA",
      flagURL: "https://img.geonames.org/flags/x/dz.gif"
    },
  {
      name: "Egyptian Pound",
      abbreviation: "EGP",
      symbol: "\u00A3",
      flagURL: "https://img.geonames.org/flags/x/eg.gif"
    },
  {
      name: "Eritrean Nakfa",
      abbreviation: "ERN",
      symbol: "Nkf",
      flagURL: "https://img.geonames.org/flags/x/er.gif"
    },
  {
      name: "Ethiopian Birr",
      abbreviation: "ETB",
      symbol: "Br",
      flagURL: "https://img.geonames.org/flags/x/et.gif"
    },
   {
      name: "Euro",
      abbreviation: "EUR",
      symbol: "\u20AC",
      flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
    },
  {
      name: "Fijian Dollar",
      abbreviation: "FJD",
      symbol: "\u0024",
      flagURL: "https://img.geonames.org/flags/x/fj.gif"
    },
  {
      name: "Falkland Islands Pound",
      abbreviation: "FKP",
      symbol: "\u00A3",
      flagURL: "https://img.geonames.org/flags/x/fk.gif"
    },
  {
      name: "British Pound",
      abbreviation: "GBP",
      symbol: "\u00A3",
      flagURL: "http://www.geonames.org/flags/l/uk.gif"
    },
  {
      name: "Georgian Lari",
      abbreviation: "GEL",
      symbol: "\u20BE",
      flagURL: "https://img.geonames.org/flags/x/ge.gif"
    },
  {
      name: "Guernsey Pound",
      abbreviation: "GGP",
      symbol: "\u00A3",
      flagURL: "https://img.geonames.org/flags/x/gg.gif"
    },
  {
      name: "Ghanaian Cedi",
      abbreviation: "GHS",
      symbol: "\u20B5",
      flagURL: "https://img.geonames.org/flags/x/gh.gif"
    },
  {
      name: "Gambian Dalasi",
      abbreviation: "GMD",
      symbol: "D",
      flagURL: "https://img.geonames.org/flags/x/gm.gif"
    },
  {
      name: "Guinean Franc",
      abbreviation: "GNF",
      symbol: "FG",
      flagURL: "https://img.geonames.org/flags/x/gn.gif"
    },
  {
      name: "Guatemalan Quetzal",
      abbreviation: "GTQ",
      symbol: "Q",
      flagURL: "https://img.geonames.org/flags/x/gt.gif"
    },
  {
      name: "Guyanese Dollar",
      abbreviation: "GYD",
      symbol: "\u0024",
      flagURL: "https://img.geonames.org/flags/x/gy.gif"
    },
   {
      name: "Hong Kong Dollar",
      abbreviation: "HKD",
      symbol: "\u0024",
      flagURL: "http://www.geonames.org/flags/l/hk.gif"
    },
   {
      name: "Honduran Lempira",
      abbreviation: "HNL",
      symbol: "L",
      flagURL: "http://www.geonames.org/flags/l/us.gif"
    },
    {
      name: "Croatian Kuna",
      abbreviation: "HRK",
      symbol: "\u006B\u006E",
      flagURL: "http://www.geonames.org/flags/l/hr.gif"
    },
    {
      name: "Croatian Kuna",
      abbreviation: "HTG",
      symbol: "\u006B\u006E",
      flagURL: "http://www.geonames.org/flags/l/hr.gif"
    },
    {
      name: "Hungarian Forint",
      abbreviation: "HUF",
      symbol: "\u0046\u0074",
      flagURL: "http://www.geonames.org/flags/l/hu.gif"
    },
    {
      name: "Indonesian Rupiah",
      abbreviation: "IDR",
      symbol: "\u0052\u0070",
      flagURL: "http://www.geonames.org/flags/l/id.gif"
    },
    {
      name: "Israeli Shekel",
      abbreviation: "ILS",
      symbol: "\u20AA",
      flagURL: "http://www.geonames.org/flags/l/il.gif"
    }
    {
      name: "Manx Pound",
      abbreviation: "IMP",
      symbol: "\u00A3",
      flagURL: "https://img.geonames.org/flags/x/im.gif"
    },
    {
      name: "Indian Rupee",
      abbreviation: "INR",
      symbol: "\u20B9",
      flagURL: "http://www.geonames.org/flags/l/in.gif"
    },
    {
      name: "Iraqi Dinar",
      abbreviation: "IQD",
      symbol: "د.ع",
      flagURL: "https://img.geonames.org/flags/x/iq.gif"
    },
    {
      name: "Iranian Rial",
      abbreviation: "IRR",
      symbol: "﷼",
      flagURL: "https://img.geonames.org/flags/x/ir.gif"
    },
    {
      name: "Iranian Rial",
      abbreviation: "IRR",
      symbol: "﷼",
      flagURL: "https://img.geonames.org/flags/x/ir.gif"
    },
    {
      name: "Icelandic Krona",
      abbreviation: "ISK",
      symbol: "\u006B\u0072",
      flagURL: "http://www.geonames.org/flags/l/is.gif"
    },
    {
      name: "Jersey Pound",
      abbreviation: "JEP",
      symbol: "\u00A3",
      flagURL: "http://www.geonames.org/flags/l/je.gif"
    },
    {
      name: "Jamaican Dollar",
      abbreviation: "JMD",
      symbol: "\u0024",
      flagURL: "https://img.geonames.org/flags/x/jm.gif"
    },
    {
      name: "Jordanian Dinar",
      abbreviation: "JOD",
      symbol: "د.أ",
      flagURL: "https://img.geonames.org/flags/x/jo.gif"
    },
    {
      name: "Japanese Yen",
      abbreviation: "JPY",
      symbol: "\u00A5",
      flagURL: "http://www.geonames.org/flags/l/jp.gif"
    },
    {
      name: "Kenyan Shilling",
      abbreviation: "KES",
      symbol: "KSh",
      flagURL: "https://img.geonames.org/flags/x/ke.gif"
    },
    {
      name: "Kyrgyzstani Som",
      abbreviation: "KGS",
      symbol: "C",
      flagURL: "https://img.geonames.org/flags/x/kg.gif"
    },
    {
      name: "Cambodian Riel",
      abbreviation: "KHR",
      symbol: "\u17DB",
      flagURL: "https://img.geonames.org/flags/x/kh.gif"
    },
    {
      name: "Comorian Franc",
      abbreviation: "KMF",
      symbol: "CF",
      flagURL: "https://img.geonames.org/flags/x/km.gif"
    },
    {
      name: "North Korean Won",
      abbreviation: "KPW",
      symbol: "\u20A9",
      flagURL: "https://img.geonames.org/flags/x/kp.gif"
    },
    {
      name: "South Korean Won",
      abbreviation: "KRW",
      symbol: "\u20A9",
      flagURL: "http://www.geonames.org/flags/l/kr.gif"
    },
    {
      name: "Kuwaiti Dinar",
      abbreviation: "KWD",
      symbol: "KD",
      flagURL: "https://img.geonames.org/flags/x/kw.gif"
    },
    {
      name: "Cayman Islands Dollar",
      abbreviation: "KYD",
      symbol: "\u0024",
      flagURL: "https://img.geonames.org/flags/x/ky.gif"
    },
    {
      name: "Kazakhstani Tenge",
      abbreviation: "KZT",
      symbol: "₸",
      flagURL: "https://img.geonames.org/flags/x/kz.gif"
    },
    {
      name: "Lao Kip",
      abbreviation: "LAK",
      symbol: "₭",
      flagURL: "https://img.geonames.org/flags/x/la.gif"
    },
    {
      name: "Lebanese Pound",
      abbreviation: "LAK",
      symbol: "\u00A3",
      flagURL: "https://img.geonames.org/flags/x/lb.gif"
    },
    {
      name: "Sri Lankan Rupee",
      abbreviation: "LKR",
      symbol: "රු",
      flagURL: "https://img.geonames.org/flags/x/lk.gif"
    },
    {
      name: "Liberian Dollar",
      abbreviation: "LRD",
      symbol: "\u0024",
      flagURL: "https://img.geonames.org/flags/x/lr.gif"
    },
    {
      name: "Lesotho Loti",
      abbreviation: "LSL",
      symbol: "L",
      flagURL: "https://img.geonames.org/flags/x/ls.gif"
    },
    {
      name: "Libyan Dinar",
      abbreviation: "LYD",
      symbol: "LD",
      flagURL: "https://img.geonames.org/flags/x/ly.gif"
    },







  {
    name: "US Dollar",
    abbreviation: "USD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/us.gif"
  },
  {
    name: "Euro",
    abbreviation: "EUR",
    symbol: "\u20AC",
    flagURL: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg"
  },

  {
    name: "British Pound",
    abbreviation: "GBP",
    symbol: "\u00A3",
    flagURL: "http://www.geonames.org/flags/l/uk.gif"
  },



  {
    name: "Chinese Yuan Renminbi",
    abbreviation: "CNY",
    symbol: "\u00A5",
    flagURL: "http://www.geonames.org/flags/l/cn.gif"
  },
  {
    name: "Swedish Krona",
    abbreviation: "SEK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/se.gif"
  },
  {
    name: "New Zealand Dollar",
    abbreviation: "NZD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/nz.gif"
  },
  {
    name: "Mexican Peso",
    abbreviation: "MXN",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/mx.gif"
  },
  {
    name: "Singapore Dollar",
    abbreviation: "SGD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/sg.gif"
  },
  {
    name: "Hong Kong Dollar",
    abbreviation: "HKD",
    symbol: "\u0024",
    flagURL: "http://www.geonames.org/flags/l/hk.gif"
  },
  {
    name: "Norwegian Krone",
    abbreviation: "NOK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/no.gif"
  },

  {
    name: "Turkish Lira",
    abbreviation: "TRY",
    symbol: "\u20BA",
    flagURL: "http://www.geonames.org/flags/l/tr.gif"
  },
  {
    name: "Russian Ruble",
    abbreviation: "RUB",
    symbol: "\u20BD",
    flagURL: "http://www.geonames.org/flags/l/ru.gif"
  },


  {
    name: "South African Rand",
    abbreviation: "ZAR",
    symbol: "\u0052",
    flagURL: "http://www.geonames.org/flags/l/za.gif"
  },
  {
    name: "Philippine Peso",
    abbreviation: "PHP",
    symbol: "\u20B1",
    flagURL: "http://www.geonames.org/flags/l/ph.gif"
  },
  {
    name: "Czech Koruna",
    abbreviation: "CZK",
    symbol: "\u004B\u010D",
    flagURL: "http://www.geonames.org/flags/l/cz.gif"
  },

  {
    name: "Malaysian Ringgit",
    abbreviation: "MYR",
    symbol: "\u0052\u004D",
    flagURL: "http://www.geonames.org/flags/l/my.gif"
  },


  {
    name: "Croatian Kuna",
    abbreviation: "HRK",
    symbol: "\u006B\u006E",
    flagURL: "http://www.geonames.org/flags/l/hr.gif"
  },

  {
    name: "Romanian Leu",
    abbreviation: "RON",
    symbol: "\u006C\u0065\u0069",
    flagURL: "http://www.geonames.org/flags/l/ro.gif"
  },
  {
    name: "Danish Krone",
    abbreviation: "DKK",
    symbol: "\u006B\u0072",
    flagURL: "http://www.geonames.org/flags/l/dk.gif"
  },
  {
    name: "Thai Baht",
    abbreviation: "THB",
    symbol: "\u0E3F",
    flagURL: "http://www.geonames.org/flags/l/th.gif"
  },
  {
    name: "Polish Zloty",
    abbreviation: "PLN",
    symbol: "\u007A\u0142",
    flagURL: "http://www.geonames.org/flags/l/pl.gif"
  },

];

// Event Listeners

addCurrButton.addEventListener("click", addCurrButtonClick);

function addCurrButtonClick(event) {
  addCurrButton.classList.toggle("open");
}

addCurrList.addEventListener("click", addCurrListClick);

function addCurrListClick(event) {
  const clickedListItem = event.target.closest("li");
  if(!clickedListItem.classList.contains("disabled")) {
    const newCurrency = currencies.find(c => c.abbreviation===clickedListItem.getAttribute("data-currency"));
    if(newCurrency) newCurrenciesListItem(newCurrency);
  }
}

currenciesList.addEventListener("click", currenciesListClick);

function currenciesListClick(event) {
  if(event.target.classList.contains("close")) {
    const parentNode = event.target.parentNode;
    parentNode.remove();
    addCurrList.querySelector(`[data-currency=${parentNode.id}]`).classList.remove("disabled");
    if(parentNode.classList.contains("base-currency")) {
      const newBaseCurrencyLI = currenciesList.querySelector(".currency");
      if(newBaseCurrencyLI) {
        setNewBaseCurrency(newBaseCurrencyLI);
        baseCurrencyAmount = Number(newBaseCurrencyLI.querySelector(".input input").value);
      }
    }
  }
}

function setNewBaseCurrency(newBaseCurrencyLI) {
  newBaseCurrencyLI.classList.add("base-currency");
  baseCurrency = newBaseCurrencyLI.id;
  const baseCurrencyRate = currencies.find(currency => currency.abbreviation===baseCurrency).rate;
  currenciesList.querySelectorAll(".currency").forEach(currencyLI => {
    const currencyRate = currencies.find(currency => currency.abbreviation===currencyLI.id).rate;
    const exchangeRate = currencyLI.id===baseCurrency ? 1 : (currencyRate/baseCurrencyRate).toFixed(4);
    currencyLI.querySelector(".base-currency-rate").textContent = `1 ${baseCurrency} = ${exchangeRate} ${currencyLI.id}`;
  });
}

currenciesList.addEventListener("input", currenciesListInputChange);

function currenciesListInputChange(event) {
  const isNewBaseCurrency = event.target.closest("li").id!==baseCurrency;
  if(isNewBaseCurrency) {
    currenciesList.querySelector(`#${baseCurrency}`).classList.remove("base-currency");
    setNewBaseCurrency(event.target.closest("li"));
  }
  const newBaseCurrencyAmount = isNaN(event.target.value) ? 0 : Number(event.target.value);
  if(baseCurrencyAmount!==newBaseCurrencyAmount || isNewBaseCurrency) {
    baseCurrencyAmount = newBaseCurrencyAmount;
    const baseCurrencyRate = currencies.find(currency => currency.abbreviation===baseCurrency).rate;
    currenciesList.querySelectorAll(".currency").forEach(currencyLI => {
      if(currencyLI.id!==baseCurrency) {
        const currencyRate = currencies.find(currency => currency.abbreviation===currencyLI.id).rate;
        const exchangeRate = currencyLI.id===baseCurrency ? 1 : (currencyRate/baseCurrencyRate).toFixed(4);
        currencyLI.querySelector(".input input").value = exchangeRate*baseCurrencyAmount!==0 ? (exchangeRate*baseCurrencyAmount).toFixed(4) : "";
      }
    });
  }
}

currenciesList.addEventListener("focusout", currenciesListFocusOut);

function currenciesListFocusOut(event) {
  const inputValue = event.target.value;
  if(isNaN(inputValue) || Number(inputValue)===0) event.target.value="";
  else event.target.value = Number(inputValue).toFixed(4);
}

currenciesList.addEventListener("keydown", currenciesListKeyDown);

function currenciesListKeyDown(event) {
  if(event.key==="Enter") event.target.blur();
}

// Auxiliary Functions

function populateAddCyrrencyList() {
  for(let i=0; i<currencies.length; i++) {
    addCurrList.insertAdjacentHTML(
      "beforeend",
      `<li data-currency=${currencies[i].abbreviation}>
        <img src=${currencies[i].flagURL} class="flag"><span>${currencies[i].abbreviation} - ${currencies[i].name}</span>
      </li>`
    );
  }
}

function populateCurrenciesList() {
  for(let i=0; i<initlist.length; i++) {
    const currency = currencies.find(c => c.abbreviation===initlist[i]);
    if(currency) newCurrenciesListItem(currency);
  }
}

function newCurrenciesListItem(currency) {
  if(currenciesList.childElementCount===0) {
    baseCurrency = currency.abbreviation;
    baseCurrencyAmount = 0;
  }
  addCurrList.querySelector(`[data-currency=${currency.abbreviation}]`).classList.add("disabled");
  const baseCurrencyRate = currencies.find(c => c.abbreviation===baseCurrency).rate;
  const exchangeRate = currency.abbreviation===baseCurrency ? 1 : (currency.rate/baseCurrencyRate).toFixed(4);
  const inputValue = baseCurrencyAmount ? (baseCurrencyAmount*exchangeRate).toFixed(4) : "";

  currenciesList.insertAdjacentHTML(
    "beforeend",
    `<li class="currency ${currency.abbreviation===baseCurrency ? "base-currency" : ""}" id=${currency.abbreviation}>
      <img src=${currency.flagURL} class="flag">
      <div class="info">
        <p class="input"><span class="currency-symbol">${currency.symbol}</span><input placeholder="0.0000" value=${inputValue}></p>
        <p class="currency-name">${currency.abbreviation} - ${currency.name}</p>
        <p class="base-currency-rate">1 ${baseCurrency} = ${exchangeRate} ${currency.abbreviation}</p>
      </div>
      <span class="close">&times;</span>
    </li>`
  );
}

fetch(dataURL)
  .then(res => res.json())
  .then(data => {
    document.querySelector(".date").textContent = data.date;
    data.rates["EUR"] = 1;
    currencies = currencies.filter(currency => data.rates[currency.abbreviation]);
    currencies.forEach(currency => currency.rate = data.rates[currency.abbreviation]);
    populateAddCyrrencyList();
    populateCurrenciesList();
  })
  .catch(err => console.log(err));
