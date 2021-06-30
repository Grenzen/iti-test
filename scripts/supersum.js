const digitOne = document.querySelector('.digit-one')
const digitTwo = document.querySelector('.digit-two')
const sumButton = document.querySelector('.supersum__button')

function superSum (digitOne, digitTwo) {
  const sum = (digitOne.includes('.') && digitTwo.includes('.')) ?
    +(+digitOne + +digitTwo).toFixed(2) : +digitOne + +digitTwo
  return alert(sum)
}

const superSumHandler = () => {
  !/^\s*$/.test(digitOne.value) && !/^\s*$/.test(digitTwo.value) && !isNaN(digitOne.value) && !isNaN(digitTwo.value) ? superSum(digitOne.value, digitTwo.value) : alert('Введите два числа для получения результата')
}

sumButton.addEventListener('click', superSumHandler)