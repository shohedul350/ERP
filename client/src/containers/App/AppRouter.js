import React from 'react';
import { Switch } from 'react-router-dom';
import Widget from '../Widgets/index'
import Alluser from '../user/allUser'
import AddAuth from '../user/addAuth'
import MyProfile from '../user/myProfile'
import Permission from '../user/permission'
import ChangePassword from '../user/changePassword'
import AdminAccessRoute from '../../utils/adminAccessRoute'
import ProctedRoute from '../../utils/proctedRoute'
class AppRouter extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <ProctedRoute
          exact
          path={`${url}/`}
          component={Widget}
        />
    
 
         <AdminAccessRoute
          exact
          path={'/dashboard/all-user'}
          component={Alluser}
        />
          <AdminAccessRoute
          exact
          path={'/dashboard/add-auth'}
          component={AddAuth}
        />
          <ProctedRoute
          exact
          path={'/dashboard/my-profile'}
          component={MyProfile}
        />
        <ProctedRoute
          exact
          path={'/dashboard/permission'}
          component={Permission}
        />
        <ProctedRoute
          exact
          path={`${url}/change-Password`}
          component={ChangePassword}
        />
      
      </Switch>
    );
  }
}

export default AppRouter;
