(function() {
  // Detect the script URL
  const scriptSrc = document.currentScript.src;
  const baseUrl = scriptSrc.substring(0, scriptSrc.lastIndexOf('/') + 1);

  // CONFIG
  const imageUrl = baseUrl + "rsa-widget-blue.jpg"; // image file in same repo/folder as this script
  const linkUrl = "https://web.rollerskating.com/search"; // external site to open

  // Create styles
  const style = document.createElement('style');
  style.textContent = `
    .custom-floating-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 99999;
      cursor: pointer;
    }
    .custom-floating-widget img {
      width: 90px;
      height: auto;
      border-radius: 4px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      transition: transform 0.3s ease;
    }
    .custom-floating-widget img:hover {
      transform: scale(1.05);
    }
  `;
  document.head.appendChild(style);

  // Create floating widget
  const widget = document.createElement('div');
  widget.className = 'custom-floating-widget';

  const link = document.createElement('a');
  link.href = linkUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = "Floating Widget";

  link.appendChild(img);
  widget.appendChild(link);
  document.body.appendChild(widget);
})();
