
const now = new Date();
const today = now.getFullYear() + "-" + ("0"+(now.getMonth()+1)).slice(-2) + "-" + ("0" + now.getDate()).slice(-2);

function createDate(days, months, years) {
        var date = new Date();
        date.setDate(date.getDate() + days);
        date.setMonth(date.getMonth() + months);
        date.setFullYear(date.getFullYear() + years);
        return date;
    }

const threemonths = createDate(0,-3,0);
const threemonthsformat = threemonths.getFullYear() + "-" + ("0"+(threemonths.getMonth()+1)).slice(-2) + "-" + ("0" + threemonths.getDate()).slice(-2);


const dataURL3months = 'https://api.exchangerate.host/timeseries?start_date='+encodeURI(threemonthsformat)+'&end_date='+encodeURI(today)+'&base=USD&format=csv';


async function getUserAsync(date)
{
  const response = await fetch(dataURL3months);
  const data = await response.text();

  return data;
}

getUserAsync('yourUsernameHere')
  .then(data => console.log(data));
