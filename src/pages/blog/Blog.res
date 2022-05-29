open BaseBindings
open Ancestor.Default

module Styles = {
  open Emotion
  let title = css({
    "fontSize": "5em",
    "fontWeight": "700",
    "color": Theme.Colors.grey->Theme.Colors.toString,
    "marginBottom": "20px",
  })
  let text = css({
    "fontSize": "2em",
    "fontWeight": "500",
    "color": Theme.Colors.spanPurple->Theme.Colors.toString,
  })
  let findMore = css({
    "fontSize": "2em",
    "fontWeight": "500",
    "color": Theme.Colors.spanPurple->Theme.Colors.toString,
    "&: hover": {
      "transition": "200ms",
      "color": Theme.Colors.grey->Theme.Colors.toString,
    },
  })
}

@react.component
let make = () => {
  <Layout>
    <Base>
      <Typography className=Styles.title> {`Minha mulher é linda`->text} </Typography>
      <Typography className=Styles.title> {`Minha mulher é linda`->text} </Typography>
    </Base>
  </Layout>
}
