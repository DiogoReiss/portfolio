open BaseBindings
open Ancestor.Default
@module("../../utils/assets/samurai.svg") external samurai: string = "default"
@module("../../utils/assets/background.svg") external backgroundImage: string = "default"

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
    <Base
      display=[#xs(#flex)]
      mt=[#xs(0)]
      mb=[#xs(0)]
      height=[#xs(100.0->#pct)]
      alignItems=[#xs(#center)]
      justifyContent=[#xs(#"space-evenly")]
      flexDirection=[#xs(#column), #md(#row)]>
      <Box>
        <Typography className=Styles.title> {"Hello world :)"->text} </Typography>
        <Typography className=Styles.text>
          {"Hey! Welcome to my website, make yourself at home."->text}
        </Typography>
      </Box>
      <Box
        width=[#xs(30.0->#pct)]
        display=[#xs(#flex)]
        alignItems=[#xs(#center)]
        flexDirection=[#xs(#column)]>
        <img src=samurai />
        <a href={"/about"}>
          <Box position=[#xs(#relative)]>
            <Typography
              cursor=[#xs(#pointer)]
              zIndex=[#xs(2)]
              className=Styles.findMore
              position=[#xs(#relative)]
              height=[#xs(30->#px)]>
              {"find out more ->"->text}
            </Typography>
            <Box
              position=[#xs(#absolute)]
              bgColor=[#xs(Theme.Colors.primaryPurple)]
              borderRadius=[#xs(1)]
              height=[#xs(10->#px)]
              width=[#xs(100.0->#pct)]
              top=[#xs(15->#px)]
              zIndex=[#xs(0)]
            />
          </Box>
        </a>
      </Box>
    </Base>
  </Layout>
}
