const header = document.querySelector('.header')

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    console.log(entry)
  })
}, options)

observer.observe(header)
