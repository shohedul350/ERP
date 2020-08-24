import React from 'react';
import { BrowserRouter,Switch,Route  } from 'react-router-dom';
import AuthState from './context/authContext/AuthState'
import NotFound from './containers/Page/404'
import ErrorPage from './containers/Page/500'
import ComingSoon from './containers/Page/comingSoon'
import ForgetPassword from './containers/Page/forgotPassword'
import ResetPassword from './containers/Page/resetPassword'
import PrivetRoute from './privetRoute'
import App from './containers/App/App';
import Signin from './containers/Page/signin'



const PublicRoutes = () => {



  return (
  <AuthState>
      <BrowserRouter>
      <Switch>
      <div>
      <Route
          exact
          path={'/'}
          component={Signin}
        />
        <Route
          exact
          path={'/404'}
          component={NotFound}
        />
        <Route
          exact
          path={'/500'}
          component={ErrorPage}
        />
         <Route
          exact
          path={'/Terms&Conditions'}
          component={ComingSoon}
        />
     <Route
          exact
          path={'/Signin'}
          component={Signin}
        />
         <Route
          exact
          path={'/forget-password'}
          component={ForgetPassword}
        />
        <Route
          exact
          path={'/reset/:token'}
          component={ResetPassword}
        />

        <PrivetRoute
          path="/dashboard"
          component={App}
        />
      </div>
      </Switch>
      </BrowserRouter>
    </AuthState>
  );
};

export default PublicRoutes