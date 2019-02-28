document.body.onload = function () {
  /* Initialize Variables */
  let page = document.getElementsByClassName('content')
  let link = document.getElementsByClassName('nav-link')
  let navToggle = document.getElementById('nav-toggle')
  let navDrop = document.getElementById('right-nav-link')

  /* - START - onclick nav-link change content */
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
      page[i].classList.add('active')
      link[i].classList.add('active-nav')
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

  window.addEventListener('resize', function () {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      navDrop.removeAttribute('class')
      for (let j = 1; j < link.length; j++) {
        link[j].addEventListener('click', function () {
          navDrop.classList.toggle('drop')
        })
      }
    }
  })
  /* - END - */
}
