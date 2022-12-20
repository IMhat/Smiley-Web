// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
// import StoreService from "../services/StoreService";
import RenderOnAnonymous from "./RenderOnAnonymous";
import RenderOnAuthenticated from "./RenderOnAuthenticated";
import Welcome from "./Welcome";
import React, {Suspense} from 'react';

// const store = StoreService.setup();



const Main= () => (

  <Suspense fallback={<div>loading...</div>}>
  {/* <Provider store={store}> */}
    <BrowserRouter>
      <div>
        <RenderOnAnonymous>
          <Welcome/>
        </RenderOnAnonymous>
        <RenderOnAuthenticated>
        <Nav/>          
        </RenderOnAuthenticated>
      </div>
    </BrowserRouter>
  {/* </Provider> */}
  </Suspense>
);

export default Main;
