function password(pwd) {
  event.preventDefault();
  if (pwd == "玉山") {
    alert("你真厲害");
    window.location.href = "./RingBell.html";
  } else {
    alert("Denied !");
  }
}
