(function() {
  // Prevent double insertion
  if (window.__myFloatingWidgetLoaded) return;
  window.__myFloatingWidgetLoaded = true;

  // Create container
  const widget = document.createElement('div');
  widget.style.position = 'fixed';
  widget.style.bottom = '20px';
  widget.style.right = '20px';
  widget.style.zIndex = '9999';
  widget.style.cursor = 'pointer';

  // Create link
  const link = document.createElement('a');
  link.href = 'https://web.rollerskating.com/search';  // change this to your desired URL
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  // Create image
  const img = document.createElement('img');
  img.src = 'https://funtasticnovelties.com/wp-content/uploads/2025/07/rsa-widget.jpg'; // change to your image URL
  img.alt = 'Click me!';
  img.style.width = '100px';  // adjust as needed
  img.style.height = 'auto';

  // Assemble
  link.appendChild(img);
  widget.appendChild(link);
  document.body.appendChild(widget);
})();
