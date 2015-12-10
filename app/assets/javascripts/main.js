function initialize(){
    var mapOptions = {
      center: new google.maps.LatLng(40.7065993,-74.0109305),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

  }

$(document).ready(function(){
  initialize();


  $("#search-form").on('submit', function(event){
    event.preventDefault();

    $.ajax({
      method: 'post',
      url: $(event.target).attr('action'),
      data: $(event.target).serialize(),
      dataType: 'json'
    }).done(function(response){
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(response.results[0]["geometry"]["location"]["lat"], response.results[0]["geometry"]["location"]["lng"]),
        map: map,
        title: response.results[0]["formatted_address"]
    });
    }).fail(function(error){
      console.log(error);
    });
  })

  google.maps.event.addDomListener(map, 'click', function(event){
    console.log(event);
    debugger
  })
  // myLatLng = new google.maps.LatLng(40.71,-74.00);
  // marker_id = 1;
  // $("#map").on('click', function(event){
  //   var marker = new google.maps.Marker({
  //   position: new google.maps.LatLng(40.71 + Math.random(), -74.00 + Math.random()),
  //   map: map,
  //   title: 'Hello World!',
  //   id: "marker-id" + marker_id
  //   });
  //   marker_id += 1;
  // })
});

// function initialize() {
//   var mapProp = {
//     center:new google.maps.LatLng(51.508742,-0.120850),
//     zoom:5,
//     mapTypeId:google.maps.MapTypeId.ROADMAP
//   };
//   var map=new google.maps.Map(document.getElementById("map"),mapProp);
// }
// google.maps.event.addDomListener(window, 'load', initialize);
