// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const mobileMenu = document.getElementById("mobileMenu")
const menuIcon = document.getElementById("menuIcon")
const closeIcon = document.getElementById("closeIcon")

mobileMenuBtn.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden")

  if (isOpen) {
    mobileMenu.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  } else {
    mobileMenu.classList.remove("hidden")
    menuIcon.classList.add("hidden")
    closeIcon.classList.remove("hidden")
  }
})

// Close mobile menu when clicking on a link
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  })
})

// Contact Form Submission
const contactForm = document.getElementById("contactForm")
const formSuccess = document.getElementById("formSuccess")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Show success message
  formSuccess.classList.remove("hidden")

  // Reset form
  contactForm.reset()

  // Hide success message after 3 seconds
  setTimeout(() => {
    formSuccess.classList.add("hidden")
  }, 3000)
})

// Set current year in footer
document.getElementById("currentYear").textContent = new Date().getFullYear()

// Intersection Observer for Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = "running"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Pause animations initially and observe them
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate-fade-in, .animate-slide-up, .animate-slide-in-left")

  animatedElements.forEach((el) => {
    el.style.animationPlayState = "paused"
    observer.observe(el)
  })
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Header scroll effect
const header = document.getElementById("header")
let lastScrollY = window.scrollY

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1)"
  } else {
    header.style.boxShadow = "none"
  }
  lastScrollY = window.scrollY
})
