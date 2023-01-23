const containerHeight = document.querySelector(".main-content--paragraph").offsetHeight
const paragraph = (document.querySelector(".main-content--paragraph p"))
const lineHeight = window.getComputedStyle(paragraph).getPropertyValue("line-height")

const numberOfLines = Math.floor(containerHeight/parseInt(lineHeight))

paragraph.style.webkitLineClamp = `${numberOfLines}`

console.log(numberOfLines)
