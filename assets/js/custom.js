/* Smooth scroll obtained from this tutorial */

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("#about").on('click', function(event) {

    if (this.hash !== "#about") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } // End if
  });
});


/* Tab functionality following W3 schools tutorial and customised to make own https://www.w3schools.com/howto/howto_js_tabs.asp */

    function openTab(tabName, event) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        
        document.getElementById(tabName).style.display = "block";
        
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        event.currentTarget.className += " active";    
        
    }

/* ------- Another developers code ------- */
/* Prevent default datepicker from displaying in chrome https://stackoverflow.com/questions/11320615/disable-native-datepicker-in-google-chrome */
$('input[type="date"]').click(function(e){
     e.preventDefault();
    }).datepicker({
        onSelect: function(dateText){
            var d = new Date(dateText),
            dv = d.getFullYear().toString().pad(4)+'-'+(d.getMonth()+1).toString().pad(2)+'-'+d.getDate().toString().pad(2);
            $(this).val(dv).trigger('change');
        }
    });
