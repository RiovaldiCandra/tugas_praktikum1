import React from "react";
import Tubuh from "./pages/tubuh";
import Bank from "./pages/bank";
import Harga from "./pages/harga";
import Biner from "./pages/biner";
import Octal from "./pages/octal";
import Decimal from "./pages/decimal";
import Hexadecimal from "./pages/hexadecimal";
import { Route, Switch } from "react-router-dom";

export default class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/tubuh" component={Tubuh} />
        <Route path="/bank" component={Bank} />
        <Route path="/harga" component={Harga} />
        <Route path="/biner" component={Biner} />
        <Route path="/octal" component={Octal} />
        <Route path="/decimal" component={Decimal} />
        <Route path="/hexadecimal" component={Hexadecimal} />
      </Switch>
    );
  }
}