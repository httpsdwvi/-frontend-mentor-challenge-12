import data from '../data.json' assert {type: 'json'}

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const COLOR_RED = 'hsl(10, 79%, 65%)'
const COLOR_CYAN = 'hsl(186, 34%, 60%)'


const date = new Date();
let day = days[date.getDay()];
console.log(day)

//I need to change the code bellow : )

document.getElementById('bar-mon').style.backgroundColor = COLOR_RED
document.getElementById('bar-mon').style.height = data[0].amount+'px'
document.getElementById('bar-mon').style.width = '35px'

document.getElementById('bar-tue').style.backgroundColor = COLOR_RED
document.getElementById('bar-tue').style.height = data[1].amount+'px'
document.getElementById('bar-tue').style.width = '35px'

document.getElementById('bar-wed').style.backgroundColor = COLOR_RED
document.getElementById('bar-wed').style.height = data[2].amount+'px'
document.getElementById('bar-wed').style.width = '35px'

document.getElementById('bar-thu').style.backgroundColor = COLOR_RED
document.getElementById('bar-thu').style.height = data[3].amount+'px'
document.getElementById('bar-thu').style.width = '35px'

document.getElementById('bar-fri').style.backgroundColor = COLOR_RED
document.getElementById('bar-fri').style.height = data[4].amount+'px'
document.getElementById('bar-fri').style.width = '35px'

document.getElementById('bar-sat').style.backgroundColor = COLOR_RED
document.getElementById('bar-sat').style.height = data[5].amount+'px'
document.getElementById('bar-sat').style.width = '35px'

document.getElementById('bar-sun').style.backgroundColor = COLOR_RED
document.getElementById('bar-sun').style.height = data[6].amount+'px'
document.getElementById('bar-sun').style.width = '35px'