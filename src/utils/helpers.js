import { isValid } from 'tns-core-modules/color'

export const isColor = color => color && isValid(color) ? true : false

export function setColor(propColor, defaultColor) {
  if (isColor(propColor)) {
    return propColor
  } else {
    return defaultColor
  }
}
