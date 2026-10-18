const root = document.documentElement;
const theme = document.querySelector('#theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && matchMedia('(prefers-color-scheme: dark)').matches)) root.classList.add('dark');
window.addEventListener('pointermove', event => {
  root.style.setProperty('--mouse-x', `${event.clientX}px`);
  root.style.setProperty('--mouse-y', `${event.clientY}px`);
}, { passive: true });
theme.addEventListener('click', () => {
  root.classList.toggle('dark');
  localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
});
document.querySelector('#year').textContent = new Date().getFullYear();

const canvas = document.querySelector('#constellation');
const context = canvas.getContext('2d');
let points = [];
function resize() {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  draw();
}
function draw() {
  const style = getComputedStyle(root);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = style.getPropertyValue('--text');
  context.strokeStyle = style.getPropertyValue('--muted');
  context.lineWidth = .75;
  points.forEach((point, index) => {
    for (let i = index + 1; i < points.length; i++) {
      const other = points[i];
      const distance = Math.hypot(point.x - other.x, point.y - other.y);
      if (distance < 145) { context.globalAlpha = 1 - distance / 145; context.beginPath(); context.moveTo(point.x, point.y); context.lineTo(other.x, other.y); context.stroke(); }
    }
    context.globalAlpha = 1; context.beginPath(); context.arc(point.x, point.y, 2.2, 0, Math.PI * 2); context.fill();
  });
}
canvas.addEventListener('pointerdown', event => { const rect=canvas.getBoundingClientRect(); points.push({x:event.clientX-rect.left,y:event.clientY-rect.top}); draw(); });
document.querySelector('#clear-canvas').addEventListener('click',()=>{points=[];draw();});
theme.addEventListener('click', draw);
window.addEventListener('resize', resize);
resize();
