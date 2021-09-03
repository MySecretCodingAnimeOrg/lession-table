var test = setInterval(daty, 1)
var date = new Date();
month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
weeks = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

function daty() {
  let date = new Date();
  var thema = document.getElementsByClassName('time')[0];
  thema.innerHTML = '<b>Сегодня </b> <br />' + date.getFullYear() + '<br />' + date.getDate() + '-e ' + month[date.getMonth()] + ', ' + weeks[date.getDay()] + ". " + '<br />' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  
if(date.getDay()==0){
  document.getElementById('monday').style.border = 'border: #e34636 outset 10px'
}
if(date.getDay()==1){
  document.getElementById('tuesday').style.border = 'border: #e34636 outset 10px'
}
if(date.getDay()==2){
  document.getElementById('wensday').style.border = 'border: #e34636 outset 10px'
}
if(date.getDay()==3){
  document.getElementById('thursday').style.border = 'border: #e34636 outset 10px'
}
if(date.getDay()==4){
  document.getElementById('friday').style.border = 'border: #e34636 outset 10px'
}
if(date.getDay()==5){
  document.getElementById('saturday').style.border = 'border: #e34636 outset 10px'
}
}