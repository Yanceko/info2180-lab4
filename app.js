window.onload=function(){

  var httpRequest = new XMLHttpRequest();
  var button = document.querySelector("button");
  var url = "http://localhost/info2180-lab4/superheroes.php";
  //httpRequest.onreadystatechange = getSupe;
  //httpRequest.open('GET', url);
  //httpRequest.send();
  /*if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var response = httpRequest.responseText;
      document.getElementById("Result").innerHTML= response;
      //alert(response);
    } else {
      document.getElementById("Result").innerHTML= "Error";
    }
  }*/

  button.addEventListener("click",function(element) {
  element.preventDefault();
  var name= document.getElementById("frm1");
  if(name==""){
    document.getElementById("Result").innerHTML= "SUPERHERO NOT FOUND";
  }
  else{
    httpRequest.onreadystatechange = getSupe;
  httpRequest.open('GET', url);
  httpRequest.send();    
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            document.getElementById("Result").innerHTML= response;
        //alert(response);
          } else {
              document.getElementById("Result").innerHTML= "Error";
      }
    }
  }
  
  //superheroes.php?query=name


  /*
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var response = httpRequest.responseText;
      document.getElementById("Result").innerHTML= response;
      //alert(response);
    } else {
      document.getElementById("Result").innerHTML= "Error";
    }
  }*/

  // GET Request
  
});

function getSupe() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      var response = httpRequest.responseText;
      document.getElementById("Result").innerHTML= response;
      //alert(response);
    } else {
      document.getElementById("Result").innerHTML= "Error";
    }
  } 
}

}
// Simple Example using jQuery's $.ajax() method
/*$(document).ready(function() {
  var xmlBtn = $('#getXml');
  xmlBtn.on('click', function() {
      $.ajax('superheroes.php', {
          method: "GET",
          dataType: 'xml'
      }).done(function(response) {
          var people = $(response).find('superhero');
          $('#results').append("<ul></ul>");
          $(people).each(function() {
              $('#results ul').append('<li>' + $(this).find($superhero['alias']).text() + '</li>');
          });
      }).fail(function() {
          alert('There was a problem with the request.');
      });
  });
});
}*/