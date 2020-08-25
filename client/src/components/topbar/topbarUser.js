
import React, {useState,useContext} from 'react';
import Popover from '../uielements/popover';
import IntlMessages from '../utility/intlMessages';
import AuthContext from '../../context/authContext/authContext'
import userpic from '../../image/user1.png';

import TopbarDropdownWrapper from './topbarDropdown.style';

export default function TopbarUser() {


  const [visible, setVisible] = useState(false);

  const {logout}=useContext(AuthContext)

     function handleVisibleChange(){
      
      !visible?setVisible(true) : setVisible(false)
      
      }
     
         const content = (
      <TopbarDropdownWrapper className="isoUserDropdown">
        
        <a className="isoDropdownLink">
          <IntlMessages id="themeSwitcher.settings" />
        </a>
       
        <a className="isoDropdownLink">
          <IntlMessages id="topbar.help" />
        </a>
        <a className="isoDropdownLink" onClick={logout}>
          <IntlMessages id="topbar.logout" />
        </a>
      </TopbarDropdownWrapper>
    );
  return (
      <Popover
        content={content}
        trigger="click"
        visible={visible}
        onVisibleChange={handleVisibleChange}
        arrowPointAtCenter={true}
        placement="bottomLeft"
      >
        <div className="isoImgWrapper">
          <img alt="user" src={userpic} />
          <span className="userActivity online" />
        </div>
      </Popover>
    );
}

