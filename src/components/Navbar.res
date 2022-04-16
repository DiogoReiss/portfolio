open Ancestor.Default
open BaseBindings
@module("../utils/assets/samurai.svg") external samurai: string = "default"

@react.component
let make = () => {
  <Base
    display=[#xs(#flex)]
    justifyContent=[#xs(#"space-between")]
    mx=[#xs(10)]
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
      <a key={0->Belt.Int.toString} href={"/"}> {"home"->text} </a>
      <a key={1->Belt.Int.toString} href={"/projects"}> {"projects"->text} </a>
      <a key={2->Belt.Int.toString} href={"/blog"}> {"blog"->text} </a>
      <a key={3->Belt.Int.toString} href={"/curriculum"}> {"curriculum"->text} </a>
    </Box>
  </Base>
}
