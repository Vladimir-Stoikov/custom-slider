const range = document.getElementById('range');
const label = document.getElementById('label');

range.addEventListener('input', e => {
  const value = +e.target.value;
  label.textContent = `${value}`;
  label.style.left = `${scale(value, 0, 100, 4, 96)}%`;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
