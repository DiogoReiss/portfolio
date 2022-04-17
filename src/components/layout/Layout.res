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
    "marginLeft": "24px",
    "gap": "26px"
  })
  let itemAside = css({
    "width": "38px",
    "height": "auto",
    "color": Theme.Colors.grey->Theme.Colors.toString,
    "&: hover": {
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
  instagram: "https://wwwlinkedin.instagram.com/_diogomatoss/",
  linkedin: "https://www.linkedin.com/in/diogo-matos-reis-2380791ba/",
  github: "https://github.com/DiogoReiss"
} 

open Theme.Icons
@react.component
let make = (~children) => {
  <Base height=[#xs(100.0->#vh)] display=[#xs(#flex)] flexDirection=[#xs(#column)]>
    <Navbar />
    {children}
    <aside className=Styles.aside> <a href=links.instagram> <AiFillInstagram className=Styles.itemAside/> </a> <a href=links.github> <AiOutlineGithub className=Styles.itemAside/> </a> <a href=links.linkedin> <AiFillLinkedin className=Styles.itemAside/> </a></aside>
  </Base>
}

// 
// AiFillInstagram
// AiOutlineGithub
// AiFillLinkedin
