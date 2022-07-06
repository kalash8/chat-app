import React, { useCallback } from 'react';
import { Button, Icon, Drawer, Alert } from 'rsuite';
import { useMediaQuery, useModalState } from '../../misc/custom-hooks';
import Dashboard from '.';
import { auth } from '../../misc/firebase';

const DashboardToogle = () => {
  const { isOpen, close, open } = useModalState();
  const isMobile = useMediaQuery('(Max-width: 992px)');

  const onSignOut = useCallback(() => {
    auth.signOut();

    Alert.info('Signed Out', 4000);

    close();
  }, [close]);

  return (
    <div>
      <Button color="blue" onClick={open} block>
        <Icon icon="dashboard" /> Dashboard
      </Button>
      <Drawer full={isMobile} placement="left" show={isOpen} onHide={close}>
        <Dashboard onSignOut={onSignOut} />
      </Drawer>
    </div>
  );
};
export default DashboardToogle;
