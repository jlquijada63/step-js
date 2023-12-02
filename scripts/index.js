const steps = document.querySelectorAll(".step__item")

const text = document.querySelector(".text")

const buttons = document.querySelectorAll(".buttons__button")

const buttonContainer = document.querySelector(".buttons")

let counter = 1



buttonContainer.addEventListener("click", e => {
	if (e.target.textContent === "Previous") {
		if (counter > 1) {
			counter--
		}
	} else {
		if (counter < 3) {
			counter++
		}
	}
	for (const step of steps ){
    step.classList.remove('active')
  }
  for (let i = 1; i <= counter; i ++){

    console.log(i)
    steps[i-1].classList.add('active')

  }
})
