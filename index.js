function interceptLinkClicks() {
  // Get all links on the page
  var links = document.querySelectorAll("a");

  // Loop through the links
  for (var i = 0; i < links.length; i++) {
    // Check if the link is external
    if (links[i].href.indexOf("http://") === 0 || links[i].href.indexOf("https://") === 0) {
      // Add an event listener to the link
      links[i].addEventListener("click", function(event) {
        // Prevent the default action from happening
        event.preventDefault();

        // Create an iframe
        var iframe = document.createElement("iframe");

        // Set the iframe's src to the link's href
        iframe.src = this.href;

        // Append the iframe to the body
        document.body.appendChild(iframe);
      });
    }
  }
}

// Add a function to close the iframe
function closeIframe() {
  // Get all iframes on the page
  var iframes = document.querySelectorAll("iframe");

  // Loop through the iframes
  for (var i = 0; i < iframes.length; i++) {
    // Check if the iframe is visible
    if (iframes[i].style.display !== "none") {
      // Remove the iframe from the page
      document.body.removeChild(iframes[i]);
    }
  }
}

// Add the interceptLinkClicks() function to the window object
window.interceptLinkClicks = interceptLinkClicks;

// Add the closeIframe() function to the window object
window.closeIframe = closeIframe;
