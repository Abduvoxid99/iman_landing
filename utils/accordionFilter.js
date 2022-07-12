export function AccordionFunction(text, data) {
  const arr = data.filter((el)=> el.question.toLowerCase().includes(text.toLowerCase()))
  return arr
}
