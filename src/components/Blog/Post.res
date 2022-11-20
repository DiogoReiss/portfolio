open BaseBindings
open Ancestor.Default
open Posts

@module("../../utils/assets/computer.jpeg") external computer: string = "default"

module Styles = {
  open Emotion
  let title = css({
    "fontSize": "5em",
    "fontWeight": "700",
    "color": Theme.Colors.grey->Theme.Colors.toString,
    "marginBottom": "20px",
  })
  let titlePost = css({
    "fontSize": "2.5em",
    "fontWeight": "600",
    "color": Theme.Colors.grey->Theme.Colors.toString,
    "marginBottom": "10px",
  })
  let text = css({
    "fontSize": "1.5em",
    "fontWeight": "400",
    "color": Theme.Colors.grey->Theme.Colors.toString,
  })
  let post = css({
    "display": "flex",
    "background": Theme.Colors.primaryPurple->Theme.Colors.toString,
    "borderRadius": "1em",
    "width": "70em",
    "height": "11em",
    "cursor": "pointer",
    "margin": "1.5em",
    "alignItems": "center",
    "zoom": "100%",
    "borderWidth": "0px",
    "borderStyle": "none",
    "transition": "400ms",
    "> img": {
      "width": "120px",
      "borderRadius": "2%",
      "color": "white",
      "margin": "1em",
    },
    "&:hover": {
      "transition": "400ms",
      "transform": "scale(1.02)",
      "borderWidth": "2px",
      "borderStyle": "solid",
      "borderColor": Theme.Colors.grey->Theme.Colors.toString,
    },
  })
}

@react.component
let make = () => {
  <Base className=Styles.post>
    <img src=computer />
    <Box width=[#xs(100.0->#pct)]>
      <Box display=[#xs(#flex)] alignItems=[#xs(#center)] justifyContent=[#xs(#"space-between")]>
        <Typography className=Styles.titlePost> {posts[0].title->text} </Typography>
        <Typography mr=[#xs(2)] className=Styles.text> {`20/02/2022`->text} </Typography>
      </Box>
      <Typography className=Styles.text> {posts[0].description->text} </Typography>
    </Box>
  </Base>
}
