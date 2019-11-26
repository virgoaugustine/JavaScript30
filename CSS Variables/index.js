const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix)
}
inputs.forEach(input => input.addEventListener('input', handleUpdate))

