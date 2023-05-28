<script>
// Function to intercept link clicks and open them in an iframe
function interceptLinks() {
  var links = document.getElementsByTagName('a'); // Get all anchor tags

  for (var i = 0; i < links.length; i++) {
    var link = links[i];

    // Check if the link is an external or ref link
    if (link.hostname !== window.location.hostname || link.getAttribute('target') === '_blank') {
      // Intercept the click event
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Create an iframe element
        var iframe = document.createElement('iframe');
        iframe.src = this.href; // Set the iframe source to the link URL
        iframe.style.width = '100%';
        iframe.style.height = '100vh';

        // Replace the current page content with the iframe
        document.body.innerHTML = '';
        document.body.appendChild(iframe);
      });
    }
  }
}

// Call the interceptLinks function when the document has finished loading
document.addEventListener('DOMContentLoaded', interceptLinks);
</script>
