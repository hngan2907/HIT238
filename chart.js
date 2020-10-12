const now = new Date();
const today = now.getFullYear() + "-" + ("0" + (now.getMonth() + 1)).slice(-2) + "-" + ("0" + now.getDate()).slice(-2);

function createDate(days, months, years) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  date.setMonth(date.getMonth() + months);
  date.setFullYear(date.getFullYear() + years);
  return date;
}


const aweek = createDate(-7, 0, 0);
const aweekformat = aweek.getFullYear() + "-" + ("0" + (aweek.getMonth() + 1)).slice(-2) + "-" + ("0" + aweek.getDate()).slice(-2);
const threemonths = createDate(0, -3, 0);
const threemonthsformat = threemonths.getFullYear() + "-" + ("0" + (threemonths.getMonth() + 1)).slice(-2) + "-" + ("0" + threemonths.getDate()).slice(-2);
const ayear = createDate(0, 0, -1);
const ayearformat = ayear.getFullYear() + "-" + ("0" + (ayear.getMonth() + 1)).slice(-2) + "-" + ("0" + ayear.getDate()).slice(-2);

function getchartdata () {

const e = document.getElementById("curr1");
const curr1 = e.options[e.selectedIndex].value;
const b = document.getElementById("curr2");
const curr2 = b.options[b.selectedIndex].value;

const d = document.getElementById("id2");
const getper = d.options[d.selectedIndex].value;

var dataURL;
if (getper == 'aweek') {
  dataURL = 'https://api.exchangerate.host/timeseries?start_date=' + encodeURI(aweekformat) + '&end_date=' + encodeURI(today) + '&base=' + encodeURI(curr1) + '&format=csv'
} else if (getper == 'threemonths') {
  dataURL = 'https://api.exchangerate.host/timeseries?start_date=' + encodeURI(threemonthsformat) + '&end_date=' + encodeURI(today) + '&base=' + encodeURI(curr1) + '&format=csv'
} else if (getper == 'ayear') {
  dataURL = 'https://api.exchangerate.host/timeseries?start_date=' + encodeURI(ayearformat) + '&end_date=' + encodeURI(today) + '&base=' + encodeURI(curr1) + '&format=csv'
} else {
  document.getElementById('urlerr').innerHTML = "Please choose the period of the chart";
}

console.log(dataURL)


async function getAsync() {
  const response = await fetch(dataURL);
  const data = await response.text();
  const rows = data.split('"\n"');
  const datedata = [];
  const ratedata = [];

  rows.forEach(row => {
    const bb = row.split('","');
    const date = bb[0];
    const code = bb[1];
    const rate = bb[2];
    const nn = [date, code, rate];

    if (nn[1] === curr2) {
      datedata.push(nn[0]);
      ratedata.push(nn[2]);

    }
  });
  console.log(datedata, ratedata)
}

getAsync()
  .then(nn =>

    console.log(nn)
  );

}
