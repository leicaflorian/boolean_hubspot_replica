(function () {
  let navbarSecondaryEl
  let navbarPrimaryEl
  let brandSvg

  function onElementVisible(entries, observer) {
    entries.forEach(entry => {
      let target = entry.target

      if (entry.isIntersecting && !target.classList.contains("animate__fadeInUp")) {
        target.classList.add('animate__fadeInUp')
      }
    })
  }

  function onSecondaryNavbarOut(value) {
    if (!navbarSecondaryEl) {
      return
    }

    const classToToggle = "navbar-sticked"
    const hasClass = navbarPrimaryEl.classList.contains(classToToggle)
    const brandSvgGroup = brandSvg.querySelector(".cls-2")

    if (value > 52 && !hasClass) {
      navbarPrimaryEl.classList.add(classToToggle)

      window.anime({
        targets: brandSvgGroup,
        opacity: 0,
        easing: "linear",
        duration: 200
      })

    } else if (value < 52 && hasClass) {
      navbarPrimaryEl.classList.remove(classToToggle)

      window.anime({
        targets: brandSvgGroup,
        opacity: 1,
        easing: "linear",
        duration: 200
      })
    }
  }

  window.addEventListener("DOMContentLoaded", function () {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: .5
    }

    let observer = new IntersectionObserver(onElementVisible, options);
    const images = document.querySelectorAll("img")

    navbarSecondaryEl = document.querySelector(".navbar-secondary")
    navbarPrimaryEl = document.querySelector(".navbar-primary")
    brandSvg = document.getElementById("HSLogo_color")

    images.forEach(img => {
      let target = img

      if (target.classList.contains("main-section__hero__background-img")) {
        target = target.parentNode
      }

      target.classList.add('animate__animated')
      observer.observe(target)
    })
  })

  window.addEventListener("scroll", function (e) {
    const value = e.target.scrollingElement.scrollTop

    onSecondaryNavbarOut(value)
  })
})()
