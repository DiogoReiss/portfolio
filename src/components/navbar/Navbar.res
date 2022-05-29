open Ancestor.Default
open BaseBindings
@module("../../utils/assets/samurai.svg") external samurai: string = "default"

module Styles = {
  open Emotion

  let navbarOption = css({
    "transition": "300ms",
    "color": Theme.Colors.grey->Theme.Colors.toString,
    "&:hover": {
      "transition": "300ms",
      "color": Theme.Colors.spanPurple->Theme.Colors.toString,
      "textDecoration": "underline",
      "textDecorationThickness": 3.0->#em,
    },
  })
}

@react.component
let make = () => {
  <Base
    display=[#xs(#flex)]
    justifyContent=[#xs(#"space-between")]
    mx=[#xs(30)]
    mt=[#xs(2)]
    alignContent=[#xs(#center)]>
    <a href={"/"}>
      <img
        src=samurai
        alt={"page logo"}
        id={"nav-logo"}
        width={70->Belt.Int.toString}
        height={70->Belt.Int.toString}
      />
    </a>
    <Box
      display=[#xs(#flex)]
      alignItems=[#xs(#center)]
      gap=[#xs(#one(#em(1.5)))]
      fontSize=[#xs(#em(2.5))]
      fontWeight=[#xs(#600)]
      color=[#xs(Theme.Colors.grey)]>
      <a key={0->Belt.Int.toString} className={Styles.navbarOption} href={"/"}> {"home"->text} </a>
      <a key={1->Belt.Int.toString} className={Styles.navbarOption} href={"/projects"}>
        {"projects"->text}
      </a>
      <a key={2->Belt.Int.toString} className={Styles.navbarOption} href={"/blog"}>
        {"blog"->text}
      </a>
      <a key={3->Belt.Int.toString} className={Styles.navbarOption} href={"/about"}>
        {"about me"->text}
      </a>
    </Box>
  </Base>
}
