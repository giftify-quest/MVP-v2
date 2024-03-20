import { TextFieldInfoVariantType } from "@/reusableComponent/TextFieldInfo/TextFieldInfo";

export const setFontSizeTextFieldInfo = (value: string, variant: TextFieldInfoVariantType): number => {
  if (typeof window === "undefined") {
    return 22
  }
  const sizeScreen = window.innerWidth;

  if (sizeScreen >= 1366 && variant === "question") {
    if (value.length <= 97) {
      return 32
    }
    if (value.length >= 98 && value.length <= 191 ) {
      return 27
    }
  }

  if (sizeScreen <= 1366 && variant === "question") {
    if (value.length <= 97) {
      return 24
    }
    if (value.length >= 98 && value.length <= 191 ) {
      return 18
    }
  }

  if (sizeScreen >= 1366 && variant === "errorMessage") {
    if (value.length <= 20) {
      return 27
    }
    if (value.length >= 21 && value.length <= 60 ) {
      return 20
    }
    if (value.length >= 61 && value.length <= 100 ) {
      return 16
    }
  }

  if (sizeScreen <= 1366 && variant === "errorMessage") {
    if (value.length <= 20) {
      return 18
    }
    if (value.length >= 21 && value.length <= 60 ) {
      return 14
    }
  }
  return 22
}