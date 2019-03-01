document.body.onload = function () {
  /* Initialize Variables */
  let page = document.getElementsByClassName('content')
  let link = document.getElementsByClassName('nav-link')
  let navToggle = document.getElementById('nav-toggle')
  let navDrop = document.getElementById('right-nav-link')
  let skillPercent = document.getElementsByClassName('skill-percent')

  /* - START - onclick nav-link change content */
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
      page[i].classList.add('active')
      link[i].classList.add('active-nav')

      animate({
        duration: 1100,
        timing (timeFraction) {
          return timeFraction
        },
        draw (progress) {
          if (i === 3) {
            if (window.matchMedia('(min-width: 1024px)').matches) {
              skillPercent[0].style.width = progress * 80 + '%'
              skillPercent[1].style.width = progress * 90 + '%'
              skillPercent[2].style.width = progress * 70 + '%'
            } else {
              skillPercent[0].style.width = progress * 70 + '%'
              skillPercent[1].style.width = progress * 80 + '%'
              skillPercent[2].style.width = progress * 60 + '%'
            }
          }
        }
      })

      for (let j = 0; j < page.length; j++) {
        if (page[j].classList.contains('active') && link[j].classList.contains('active-nav') && page[i] !== page[j] && link[i] !== link[j]) {
          page[j].classList.remove('active')
          link[j].classList.remove('active-nav')
        }
      }
    })
  }
  /* - END - */

  /* - START - Nav Toggle */
  navToggle.addEventListener('click', function () {
    navDrop.classList.toggle('drop')
  })

  for (let k = 0; k < link.length; k++) {
    link[k].addEventListener('click', function () {
      if (navDrop.classList.contains('drop')) {
        navToggle.click()
      }
    })
  }

  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      navDrop.removeAttribute('class')
    }
  })
  /* - END - */

  /* Function to Animate */
  function animate ({ timing, draw, duration }) {
    let start = performance.now() // eslint-disable-line
    requestAnimationFrame(function animate (time) { // eslint-disable-line
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration
      if (timeFraction > 1) timeFraction = 1

      // calculate the current animation state
      let progress = timing(timeFraction)

      draw(progress) // draw it
      if (timeFraction < 1) {
        requestAnimationFrame(animate) // eslint-disable-line
      }
    })
  }
}
