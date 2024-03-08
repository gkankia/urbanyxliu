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
  flyToLocation(44.8, 41.729, 12);
});

document.getElementById("stockholm").addEventListener("click", () => {
  // Fly to Location 2
  flyToLocation(41.654, 41.651, 12.5);
});

document.getElementById("malmö").addEventListener("click", () => {
  // Fly to Location 3
  flyToLocation(42.693, 42.251, 12.5);
});

document.getElementById("norrköping").addEventListener("click", () => {
  // Fly to Location 3
  flyToLocation(41.863, 42.51, 12.5);
  zoom: 13;
});

document.getElementById("gothenburg").addEventListener("click", () => {
  // Fly to Location 3
  flyToLocation(44.114, 41.984, 13);
  zoom: 13;
});

document.getElementById("lund").addEventListener("click", () => {
  // Fly to Location 3
  flyToLocation(41.668, 42.14, 13.5);
  zoom: 13;
});

document.getElementById("umeå").addEventListener("click", () => {
  // Fly to Location 3
  flyToLocation(41.009, 43.001, 13.5);
  zoom: 13;
});

document.getElementById("uppsala").addEventListener("click", () => {
  // Fly to Location 3
  flyToLocation(42.991, 41.64, 13.5);
  zoom: 13;
});

map.on("load", () => {
  // When the map loads, do nothing
});