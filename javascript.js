setInterval(function () {
  var launch = moment("2020-08-29");
  var current = moment();
  var diff = launch - current;
  //console.log('The difference is', diff);

  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  //console.log(days);

  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //console.log(hours);

  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  //console.log(minutes);

  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
  //console.log(seconds);

  document.getElementById("date").innerText =
    days + "D " + hours + "H " + minutes + "M " + seconds + "S";
}, 1000);
