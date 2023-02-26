// create a new element for the thumbs up emoji
const thumbsUp = document.createElement("div");
thumbsUp.innerHTML = "👍";
thumbsUp.style.position = "absolute";
thumbsUp.style.fontSize = "40px";
document.body.appendChild(thumbsUp);

// add an event listener to the document to track mouse movement
document.addEventListener("mousemove", function(event) {
  // update the position of the thumbs up emoji based on the mouse coordinates
  thumbsUp.style.left = event.pageX + "px";
  thumbsUp.style.top = event.pageY + "px";
});
