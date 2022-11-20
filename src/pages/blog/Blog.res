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
}

@react.component
let make = () => {
  <Layout>
    <Base
      display=[#xs(#flex)]
      mt=[#xs(10)]
      mb=[#xs(0)]
      ml=[#xs(0)]
      mr=[#xs(0)]
      height=[#xs(100.0->#pct)]
      width=[#xs(100.0->#pct)]
      alignItems=[#xs(#center)]
      flexDirection=[#xs(#column)]>
      <Typography className=Styles.title> {`Posts`->text} </Typography>
      <Box
        height=[#xs(90.0->#em)]
        width=[#xs(30.0->#pct)]
        overflowX=[#xs(#visible)]
        overflowY=[#xs(#auto)]
        m=[#xs(0)]>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Box>
    </Base>
  </Layout>
}
