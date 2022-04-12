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

<script src="https://www.google.com/maps?file=api&hl=zh-CN&v=2&key=abcdefg" type="js/script.js"></script>
  var map = new Map2(document.getElementByIdx_x_x("map"),
   {size:GSize(200,200),backgroundColor:"#FF0000"});

   map.addControl(new GSmallMapControl());
   map.addControl(new GMapTypeControl());
   map.setCenter(new GLatLng(37.4419,-122.1419), 13);
