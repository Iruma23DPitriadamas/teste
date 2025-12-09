export interface Theme {
  appBackgriund: string
  appColor: string
  appDefaultStroke: string
  appLogo: string
  appSkeletonFrom: string
  appskeletonTo: string
  buttons: {
    alert: string
    alertColor: string
    alertHover: string
    dissabled: string
    disabledColor: string
    primary: string
    primaryColor: string
    primaryHover: string
  }
  card: {
    alert: string
    background: string
    border: string
    border: string
    success: string
    warning: string
  }
  textInput: {
    active: string
    activeColor: string
    borderColor: string
    disabled: string
    disabledBorderColor: string
    disaceholderColor: string
  }
  typographies: {
    error: string
    subtitle: string
    success: string
  }
}
