function w3_open() {
  document.getElementById("main").style.marginLeft = "35%";
  document.getElementById("mySidebar").style.width = "35%";
  document.getElementById("mySidebar").style.display = "block";
  // document.getElementById("openNav").style.display = 'none';
}
function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
}


function add_bus_item(index,bus_info){
  var html = "";
  html+=  '<a class="list-group-item" data-toggle="collapse" data-target="#demo'+ index +'">';
      html+='<div id="bus_name">';
        html+='<i id = "icons_front_bus" class="material-icons" >directions_bus</i> '+bus_info.id_bus+' | '+ bus_info.name;
      html+='</div>';
      html+='<div style="margin-top: 7px;">';
        html+='<i id = "icons_front_bus" class="material-icons" >access_alarms</i> '+bus_info.estim+' min <i id = "icons_front_bus" class="material-icons">airline_seat_recline_normal</i>';
        html+=  bus_info.perc+'%'; 
      html+='</div>';
    html+='</a>';
    html+='<div id="demo'+ index +'" class="collapse info_buses">';
        html+='<div class="info_buses_item"><i class="material-icons icon_info_bus">airline_seat_recline_normal</i>: '+bus_info.perc+'% - '+ bus_info.quant;
        html+='</div>';
        html+='<div class="info_buses_item">';
        html+='<i class="material-icons icon_info_bus">rv_hookup</i>:  '+bus_info.vel+' km/h';
        html+='</div>';
        html+='<div class="info_buses_item">';
        html+='<i class="fa fa-thermometer-half icon_info_bus"></i>:  '+bus_info.temp+' ºC';
        html+='</div>';
        html+='<div id="last_info_item" class="info_buses_item">';
        html+='<i class="material-icons icon_info_bus" style="color:red">error</i> : '+bus_info.sound+' (sound warnings)';
        html+='</div>';
    html+='</div>';
  return html;  
}


var control = 0;
$("#logo").click(function(){
  if(!control){
    control = 1;
    w3_open();
  }
  else{
    control = 0;
    w3_close();
  }
  console.log(control);
});

$("#close_but").click(function(){
  if(!control){
    control = 1;
    w3_open();
  }
  else{
    control = 0;
    w3_close();
  }
  console.log(control);
});

$(document).ready(function() {
  $("#test2").hide();
});


function myMap(){
  var icone = {
    url: "image/mobbi_icon_map.png",
    scaledSize: new google.maps.Size(30, 40)
  }
  var myCenter = new google.maps.LatLng(-8.055266, -34.951708);
  var mapProp = {
    center: new google.maps.LatLng(-8.055266, -34.951708),
    zoom: 15
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker = new google.maps.Marker({position: myCenter, icon : icone});
  marker.setMap(map);
  
  google.maps.event.addListener(marker,'click',function() {
    $(document).ready(function(){
      $("#test2").toggle();
      if(!control){
        control = 1;
        w3_open();
      }
      else{
        control = 0;
        w3_close();
      }
    });
  });
}