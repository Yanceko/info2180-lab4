window.onload=function(){
    var button = document.querySelector("button");
    var httpRequest;


    button.addEventListener("click",function(element) {
    element.preventDefault();
    ///*
    httpRequest = new XMLHttpRequest();

    // GET Request
    var url = "http://localhost/info2180-lab4/superheroes.php";
    httpRequest.onreadystatechange = getSupe;
    httpRequest.open('GET', url);
    httpRequest.send();
  });

  function getSupe() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var response = httpRequest.responseText;
        alert(response);
      } else {
        alert('There was a problem with the request.');
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