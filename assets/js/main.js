var btnYes = document.getElementsByClassName("btn-yes")[0];
var btnNo = document.getElementsByClassName("btn-no")[0];
var body = document.getElementsByTagName("body")[0];
btnYes.onmouseenter = () => {
  var randomX = Math.floor(
    Math.random() * (body.clientWidth - (body.clientWidth * 10) / 100)
  );
  var randomY = Math.floor(
    Math.random() * (body.clientHeight - (body.clientHeight * 10) / 100)
  );
  btnYes.style.left = `${randomX}px`;
  btnYes.style.top = `${randomY}px`;
};
btnNo.onclick = () => {
    alert("Đúng rồi hiền kiểu quái gì được!");
}

