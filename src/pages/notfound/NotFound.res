open BaseBindings
open Ancestor.Default
@module("../../utils/assets/samuraiOpacity.svg") external samuraiOpacity: string = "default"

module Styles = {
  open Emotion

  let background = css({
    "display": "flex",
    "backgroundSize": "auto",
    "backgroundRepeat": "no-repeat",
    "height": "70%",
    "width": "39%",
    "justifyContent": "center",
    "alignItems": "center",
  })

  let textTitle = css({
    "fontSize": "6em",
    "color": Theme.Colors.grey->Theme.Colors.toString,
    "fontWeight": "700",
  })

  let textSpan = css({
    "fontSize": "2em",
    "color": Theme.Colors.spanPurple->Theme.Colors.toString,
    "fontWeight": "500",
  })
}

@react.component
let make = () => {
  <Layout>
    <Base
      display=[#xs(#flex)]
      width=[#xs(100.0->#pct)]
      height=[#xs(100.0->#pct)]
      justifyContent=[#xs(#center)]
      alignItems=[#xs(#center)]>
      <Box className=Styles.background>
        <Box
          display=[#xs(#flex)]
          justifyContent=[#xs(#center)]
          flexDirection=[#xs(#column)]
          alignItems=[#xs(#center)]
          bgColor=[#xs(Theme.Colors.primaryPurple)]
          borderRadius=[#xs(1)]
          height=[#xs(200->#px)]
          width=[#xs(50.0->#rem)]
          borderStyle=[#xs(#solid)]
          borderColor=[#xs(Theme.Colors.grey)]>
          <Typography className=Styles.textTitle> {"Error 404!"->text} </Typography>
          <Typography className=Styles.textSpan> {"page not found :("->text} </Typography>
        </Box>
      </Box>
    </Base>
  </Layout>
}
