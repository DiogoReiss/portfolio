open BaseBindings
@module("../utils/assets/samurai.svg") external samurai: string = "default"

@react.component
let make = () => {
  <div>
    <a>
      <img
        src=samurai
        alt={"page logo"}
        id={"nav-logo"}
        width={70->Belt.Int.toString}
        height={70->Belt.Int.toString}
      />
    </a>
    <div>
      <a key={0->Belt.Int.toString} href={"/"}> {"home"->text} </a>
      <a key={1->Belt.Int.toString} href={"/projects"}> {"projects"->text} </a>
      <a key={2->Belt.Int.toString} href={"/blog"}> {"blog"->text} </a>
      <a key={3->Belt.Int.toString} href={"/curriculum"}> {"curriculum"->text} </a>
    </div>
  </div>
}
