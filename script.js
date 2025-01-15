function loadMap() {
    var map = new Microsoft.Maps.Map(document.getElementById('map'), {
        credentials: 'YOUR_BING_MAPS_KEY',
        center: new Microsoft.Maps.Location(47.6062, -122.3321),
        mapTypeId: Microsoft.Maps.MapTypeId.aerial,
        zoom: 10
    });
}