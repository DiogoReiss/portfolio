open Theme.Icons
open Ancestor.Default

module Styles = {
  open Emotion

  let aside = css({
    "color": Theme.Colors.grey->Theme.Colors.toString,
    "display": "flex",
    "flexDirection": "column",
    "position": "absolute",
    "justifyContent": "center",
    "height": "100%",
    "marginLeft": "-100px",
    "gap": "26px",
    "width": "200px",
    "transition": "400ms",
    "&:hover": {
      "transition": "400ms",
      "marginLeft": "0px"
    }
  })
  let itemAside = css({
    "width": "38px",
    "height": "auto",
    "marginLeft": "24px",
    "color": Theme.Colors.grey->Theme.Colors.toString,
    "transition": "200ms",
    "&: focus": {
      "transition": "200ms",
      "color": Theme.Colors.spanPurple->Theme.Colors.toString,
      "cursor": "pointer"
    }
  })
}

type links = {
  instagram: string,
  linkedin: string,
  github: string
}
let links = {
  instagram: "https://www.instagram.com/_diogomatoss/",
  linkedin: "https://www.linkedin.com/in/diogo-matos-reis-2380791ba/",
  github: "https://github.com/DiogoReiss"
} 

@react.component
let make = () => {
  <aside className=Styles.aside> 
    <Box width=[#xs(20.0->#pct)]>
      <a href=links.instagram> <AiFillInstagram className=Styles.itemAside/> </a>
    </Box> 
    <Box width=[#xs(20.0->#pct)]>
      <a href=links.github> 
        <AiOutlineGithub className=Styles.itemAside/> 
      </a>
    </Box>
    <Box width=[#xs(20.0->#pct)]>
      <a href=links.linkedin> 
        <AiFillLinkedin className=Styles.itemAside/> 
      </a>
    </Box>
  </aside>
}