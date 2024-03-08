// Function to fly to a specific location on the map
function flyToLocation(lon, lat, zoom) {
  map.flyTo({
    center: [lon, lat],
    zoom: zoom,
    essential: true, // this animation is considered essential with respect to prefers-reduced-motion
  });
}
// fly to specific cities on the map
document.getElementById("linköping").addEventListener("click", () => {
  // Fly to Location 1
  flyToLocation(15.650354, 58.396637, 12.5);
});

document.getElementById("stockholm").addEventListener("click", () => {
  // Fly to Location 2
  flyToLocation(18.044447, 59.316629, 11.5);
});

document.getElementById("malmö").addEventListener("click", () => {
  // Fly to Location 3
  flyToLocation(13.016948, 55.583480, 11.5);
});

document.getElementById("norrköping").addEventListener("click", () => {
  // Fly to Location 3
  flyToLocation(16.186906, 58.587211, 13);
  zoom: 13;
});

document.getElementById("gothenburg").addEventListener("click", () => {
  // Fly to Location 3
  flyToLocation(11.968393, 57.704154, 11.5);
  zoom: 13;
});

document.getElementById("lund").addEventListener("click", () => {
  // Fly to Location 3
  flyToLocation(13.194567, 55.700901, 13);
  zoom: 13;
});

document.getElementById("umeå").addEventListener("click", () => {
  // Fly to Location 3
  flyToLocation(20.261937, 63.822252, 13);
  zoom: 13;
});

document.getElementById("uppsala").addEventListener("click", () => {
  // Fly to Location 3
  flyToLocation(17.644119, 59.854053, 13);
  zoom: 13;
});

map.on("load", () => {
  // When the map loads, do nothing
});