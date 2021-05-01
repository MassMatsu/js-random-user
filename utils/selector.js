export const selector = (element) => {
  const target = document.querySelector(element)
  if (target) {
    return target
  }
  throw new Error(`there is no such element: ${element}`) 
}