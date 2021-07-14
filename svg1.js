
const svg = document.getElementById("arrows");

svg.onclick = () => {
    const colors = ['pink', 'purple', 'yellow', 'orange']
    const random = () => colors[Math.floor(Math.random() * colors.length)]
    document.documentElement.style.cssText = `
    --blue-color: ${random()};
    --green-color: ${random()};
    `
}