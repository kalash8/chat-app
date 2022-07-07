import React from 'react';
import { Divider } from 'rsuite';
import CreateRoomBtnModal from './dashboard/CreateRoomBtnModal';
import DashboardToogle from './dashboard/DashboardToogle';
import ChatRoomList from './rooms/ChatRoomList';

const Sidebar = () => {
  return (
    <div className="h-100 pt-2">
      <div>
        <DashboardToogle />
        <CreateRoomBtnModal />
        <Divider>Join Conversation</Divider>
      </div>
      <ChatRoomList />
    </div>
  );
};

export default Sidebar;
