var map = L.map( 'map', {
  center: [20.0, 5.0],
  minZoom: 2,
  zoom: 2
})

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo( map )

var markerClusters = L.markerClusterGroup();

for ( var i=0; i < cities.length; ++i )
{
	var popup_content = "";
	for ( var j=0; j < cities[i].alumni.length; ++j )
	{
		popup_content += 
		"<b>"+ cities[i].alumni[j].name +  "</b><br>" +
		cities[i].alumni[j].faculty + ", " +
		cities[i].alumni[j].EUSP_graduation_year +
		"<br>Текущее место работы:<br>" +
		cities[i].alumni[j].current_organization +", "+
		cities[i].alumni[j].current_position + "<br><br>" ;
	}
	var marker = L.marker([cities[i].lat, cities[i].lng])
		.bindPopup(popup_content,{	maxHeight: 500, width: 300,
		closeOnClick: true});
		
	markerClusters.addLayer( marker );
}
 
map.addLayer( markerClusters );



	

