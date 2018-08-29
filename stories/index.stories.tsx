import * as React from "react";

import HelloWorld from "../src/components/HelloWorld";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
const { Welcome } = require("@storybook/react/demo");

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={"Button"} />
));
// storiesOf("Test nue ", module).add("bla", () => console.log("object"));
storiesOf("Test", module).add("typescript comp", () => <HelloWorld />);
