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

module Icons = {
  module AiFillInstagram = {
    @module("react-icons/ai") @react.component
    external make: (~size: int=?, ~color: string=?, ~className: string=?) => React.element =
      "AiFillInstagram"
  }

  module AiOutlineGithub = {
    @module("react-icons/ai") @react.component
    external make: (~size: int=?, ~color: string=?, ~className: string=?) => React.element =
      "AiOutlineGithub"
  }

  module AiFillLinkedin = {
    @module("react-icons/ai") @react.component
    external make: (~size: int=?, ~color: string=?, ~className: string=?) => React.element =
      "AiFillLinkedin"
  }

  module AiFillCaretLeft = {
    @module("react-icons/ai") @react.component
    external make: (~size: int=?, ~color: string=?, ~className: string=?) => React.element =
      "AiFillCaretLeft"
  }
}
