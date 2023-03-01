import data from '../data.json' assert {type: 'json'}

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const date = new Date();
let day = days[date.getDay()];
console.log(day)

document.getElementById('bar-mon').textContent = data[0].amount
document.getElementById('bar-tue').textContent = data[1].amount
document.getElementById('bar-wed').textContent = data[2].amount
document.getElementById('bar-thu').textContent = data[3].amount
document.getElementById('bar-fri').textContent = data[4].amount
document.getElementById('bar-sat').textContent = data[5].amount
document.getElementById('bar-sun').textContent = data[6].amount

