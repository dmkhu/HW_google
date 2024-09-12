Cypress.on('window:before:load', (win) => {
    const style = win.document.createElement('style');
    style.innerHTML = `
      * {
        transition: none !important;
        animation: none !important;
      }
    `;
    win.document.head.appendChild(style);
  });
  