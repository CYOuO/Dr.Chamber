function next0() {
  document.getElementById("next").addEventListener("click", function () {
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "block";
  });
  document.getElementById("next2").addEventListener("click", function () {
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "block";
  });
  document.getElementById("next3").addEventListener("click", function () {
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "block";
  });
  document.getElementById("next4").addEventListener("click", function () {
    document.getElementById("p4").style.display = "none";
    document.getElementById("p5").style.display = "block";
  });
  document.getElementById("next5").addEventListener("click", function () {
    document.getElementById("p5").style.display = "none";
    document.getElementById("p6").style.display = "block";
  });
}

window.addEventListener("load", function () {
  next0();
});
