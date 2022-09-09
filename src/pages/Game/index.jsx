window.onload = () => {
  const $ = (sel) => document.querySelector(sel)
  const $canvas = $('#canvas')
  $canvas.width = window.innerWidth
  $canvas.height = window.innerHeight
}