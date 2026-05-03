// ===== YAHIWENIS CHOIR WEBSITE =====

// Choir information
const choirName = "Yahiwenis"
const foundedYear = 2010
const memberCount = 28

// Function to log choir info
function logChoirInfo(name, year, count) {
  console.log(`Choir: ${name}`)
  console.log(`Founded: ${year}`)
  console.log(`Members: ${count}`)
}

logChoirInfo(choirName, foundedYear, memberCount)

// ===== DOM PRACTICE =====
// Wait for page to fully load before running
document.addEventListener("DOMContentLoaded", function() {
  
  // Select the hero button on home page
  const heroBtn = document.querySelector(".btn")

  // Only run if button exists on this page
  if (heroBtn) {
    heroBtn.addEventListener("click", function() {
      console.log("Hero button clicked — navigating to about page")
    })
  }

})

