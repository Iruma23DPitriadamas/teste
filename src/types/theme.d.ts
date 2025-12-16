export interface Theme {
  appBackground: string
  appColor: string
  appLogo: string
  appSkeletonFrom: string
  appSkeletonTo: string
  appDefaultStroke: string
  buttons: {
    alerta: string
    alertaColor: string
    alertaHover: string
    disabled: string
    disabledColor: string
    primary: string
    primaryColor: string
    primaryHover: string
  }
  card: {
    alert: string
    background: string
    border: string
    success: string
    warning: string
  }
  testInput: {
    active: string
    activeColor: string
    borderColor: string
    disabled: string
    disabledBorderColor: string
    disebledColor: string
    placeholderColor: string
  }
  typographies: {
    error: string
    subtitle: string
    success: string
  }
}
