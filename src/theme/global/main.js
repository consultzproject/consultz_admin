import * as Theme from "src/theme";

export const Main = () => ({
  ...Theme.Global.Components(),
  ...Theme.Global.Palette(),
  ...Theme.Global.Typography(),
});
