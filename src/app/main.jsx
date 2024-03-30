import * as Api from "src/api";
import * as MuiTheme from "src/theme";
import * as Routes from "src/app/routes";
import * as Router from "react-router-dom";
import * as Providers from "src/app/providers";
import * as Contexts from "src/app/contexts";

export const Main = () => {
  return (
    <Api.Server.Main>
      <Providers.customHandlingProvider>
        <MuiTheme.Main>

          <Contexts.UserProvider>
            <Router.HashRouter>
              <Routes.Main />
            </Router.HashRouter>
          </Contexts.UserProvider>

        </MuiTheme.Main>





































































        
      </Providers.customHandlingProvider>
    </Api.Server.Main>
  );
};
