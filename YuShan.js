function password(pwd) {
  event.preventDefault();
  if (pwd == "玉山") {
    alert("你真厲害");
    window.location.href = "./Scripts/000.html";
  } else {
    alert("Denied !");
  }
}
