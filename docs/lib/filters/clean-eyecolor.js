function cleanEyecolor(eyeColors) {

  const cleanedEyecolors = eyeColors.map(function ding(person) {
    let eyeColor = person.eyeColor

    if (eyeColor.startsWith('#')) {
      return eyeColor
    } else {
      const newEyecolor = '#'.concat(eyeColor);
      return newEyecolor
    }
  })
  return cleanedEyecolors
}


export {
  cleanEyecolor
}
