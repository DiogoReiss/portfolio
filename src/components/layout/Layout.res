open Ancestor.Default

@react.component
let make = (~children) => {
  <Base
    height=[#xs(100.0->#vh)]
    display=[#xs(#flex)]
    overflow=[#xs(#hidden)]
    flexDirection=[#xs(#column)]>
    <Navbar /> {children} <Aside />
  </Base>
}
