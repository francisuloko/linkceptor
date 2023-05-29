<script>
  // Wait for the document to fully load
  document.addEventListener('DOMContentLoaded', function() {
    // Get all the links on the page
    var links = document.getElementsByTagName('a');

    // Loop through each link
    for (var i = 0; i < links.length; i++) {
      var link = links[i];

      // Check if the link is an external or referral link
      if (link.hostname !== window.location.hostname) {
        // Intercept the click event
        link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent the link from opening normally

          // Create an iframe element
          var iframe = document.createElement('iframe');
          iframe.src = this.href;
          iframe.style.width = '100%';
          iframe.style.height = '100vh';
          iframe.style.border = 'none';
          iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
          
          // Replace the link with the iframe
          this.parentNode.replaceChild(iframe, this);
        });
      }
    }
  });
</script>
