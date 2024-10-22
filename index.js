function openPage(pageName, elmnt) {
  var j, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (j = 0; j < tabcontent.length; j++) {
    tabcontent[j].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (j = 0; j < tablinks.length; j++) {
    tablinks[j].style.backgroundColor = "";
    tablinks[j].style.textShadow="0 0 0";    

  }
  document.getElementById(pageName).style.display = "flex";
  elmnt.style.textShadow="0 0 7px white";
}


document.getElementById("open_btn").click();






function sendMsg()
{
  var txtbx = document.getElementById("textar").value;
  alert("entered is "+txtbx);

}

$('#textar').keyup(function() {
  var txt_count = $('#counter');
  var txtct = document.getElementById("textar").value.length;
  txt_count.text(txtct+"/300");

});








let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("boxy");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

