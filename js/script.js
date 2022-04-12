function init()
 {

  function clickAlertMe() {
    var text = document.getElementById("entryinput").value;
    alert("Tingting Hu: " + text);
    document.getElementById("textoutput").innerHTML = text
  }
  var entrybtn = document.getElementById("entrybutton");
  entrybtn.addEventListener('click',clickAlertMe);
  
}
window.addEventListener('load', init);'

<script type="text/javascript' src="https://www.google.com/maps?file=api&hl=zh-CN&v=2&key=abcdefg" type="text/javascript"></script>
