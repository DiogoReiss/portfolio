open Ancestor.Default

@react.component
let make = (~children) => {
  <Base height=[#xs(100.0->#pct)] display=[#xs(#flex)] flexDirection=[#xs(#column)]>
    <Navbar /> {children}
  </Base>
}
