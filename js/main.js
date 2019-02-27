document.body.onload = function () {
  /* - START - onclick nav-link change content */
  let page = document.getElementsByClassName('content')
  let link = document.getElementsByClassName('nav-link')

  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function () {
      page[i].classList.add('active')
      for (let j = 0; j < page.length; j++) {
        if (page[j].classList.contains('active') && page[i] !== page[j]) {
          page[j].classList.remove('active')
        }
      }
    })
  }
  /* - END - */

  /* - START - Nav Toggle */
  let navToggle = document.getElementById('nav-toggle')
  /* - END - */
}
