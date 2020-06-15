const inputs = document.querySelectorAll('.controls input');

function handlleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}


inputs.forEach(input => input.addEventListener('change', handlleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handlleUpdate));