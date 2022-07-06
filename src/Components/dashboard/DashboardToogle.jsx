import React from 'react';
import { Button, Icon, Drawer } from 'rsuite';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';

const DashboardToogle = () => {
  const { isOpen, close, open } = useModalState();
  const isMobile = useMediaQuery('(Max-width: 992px)');
  return (
    <div>
      <Button color="blue" onClick={open} block>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer full={isMobile} placement="left" show={isOpen} onHide={close}>
        <Dashboard />
      </Drawer>
    </div>
  );
};
export default DashboardToogle;
