module Colors = {
  let primaryPurple = #hex("#6665dd")
  let spanPurple = #hex("#a5a6cf")
  let grey = #hex("#efefef")
  let blackColor = #hex("#13132d")

  let toString = color =>
    switch color {
    | #hex(color) => color
    }
}

module Constants = {
  let fontFamily = "'Fira Code', monospace;"
}
