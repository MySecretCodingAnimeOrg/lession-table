var test = setInterval(daty, 100)
var date = new Date();
month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
weeks = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

function daty() {
  let date = new Date();
  var thema = document.getElementsByClassName('time')[0];
  thema.innerHTML = '<b>Сегодня </b> <br />' + date.getFullYear() + '<br />' + date.getDate() + '-e ' + month[date.getMonth()] + ', ' + weeks[date.getDay()] + ". " + '<br />' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  
if(date.getHours()>5&&date.getHours()<16){
  document.body.style.backgroundImage = "url('lamp_vlight.png')";
} else {
  document.body.style.backgroundImage = "url('lamp_v3.png')";
}

}