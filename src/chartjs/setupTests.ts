import 'jest-canvas-mock';
const originalConsoleError = console.error;
console.error = function(msg) {
  if (msg.startsWith('Error: Could not parse CSS stylesheet')) return;
  originalConsoleError(msg);
};
