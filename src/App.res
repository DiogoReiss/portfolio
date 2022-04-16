Emotion.injectGlobal({
  "html": {
    "fontSize": "10px",
  },
  "html, body, root": {
    "width": "100%",
    "height": "100%",
    "margin": "0",
    "padding": "0",
    "backgroundColor": Theme.Colors.primaryPurple->Theme.Colors.toString,
  },
  "*": {
    "boxSixing": "border-box",
    "fontFamily": Theme.Constants.fontFamily,
  },
  "& ::selection": {
    "color": Theme.Colors.grey->Theme.Colors.toString,
    "backgroundColor": Theme.Colors.spanPurple->Theme.Colors.toString,
  },
  "a": {
    "color": "inherit",
    "textDecoration": "none",
  },
  "h1": {
    "color": Theme.Colors.grey->Theme.Colors.toString,
  },
  "h1::selection": {
    "color": Theme.Colors.spanPurple->Theme.Colors.toString,
  },
  "span": {
    "color": Theme.Colors.spanPurple->Theme.Colors.toString,
    "fontSize": #em(2),
  },
})

@react.component
let make = () => {
  let url = RescriptReactRouter.useUrl()

  switch url.path {
  //| list{"user", id} => <User id />
  | list{} => <Home />
  | _ => <NotFound /> // <NotFound />
  }
}
