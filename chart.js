
const now = new Date();
const today = now.getFullYear() + "-" + ("0"+(now.getMonth()+1)).slice(-2) + "-" + ("0" + now.getDate()).slice(-2);

function createDate(days, months, years) {
        var date = new Date();
        date.setDate(date.getDate() + days);
        date.setMonth(date.getMonth() + months);
        date.setFullYear(date.getFullYear() + years);
        return date;
    }

const threemonths = createDate(-2,0,0);
const threemonthsformat = threemonths.getFullYear() + "-" + ("0"+(threemonths.getMonth()+1)).slice(-2) + "-" + ("0" + threemonths.getDate()).slice(-2);


const dataURL3months = 'https://api.exchangerate.host/timeseries?start_date='+encodeURI(threemonthsformat)+'&end_date='+encodeURI(today)+'&base=USD&format=csv';

document.getElementById("p1").innerHTML = dataURL3months;

const datedata = [];
const ratedata = [];


async function getAsync()
{
  const response = await fetch(dataURL3months);
  const data = await response.text();
    const rows = data.split('"\n"');
    rows.forEach( row =>{
      const bb = row.split('","');
      const date = bb[0];
      const code = bb[1];
      const rate = bb[2];
      const nn = [date,code,rate];
      for (i=0; i<nn.length; i++) {
        if (nn[1] === "ALL") {
          datedata.push(nn[0]);
          ratedata.push(nn[2]);
        }
      }
    });


}

getAsync()
  .then(nn =>

    console.log(nn)
  );
