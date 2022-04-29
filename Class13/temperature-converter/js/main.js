//Write your pseduo code first! 
document.querySelector('#convert').addEventListener('click', run)

function run() {
    let res = document.querySelector('#temp').value * 1.8 + 32

    document.querySelector('#result').innerText = `${res}`
}