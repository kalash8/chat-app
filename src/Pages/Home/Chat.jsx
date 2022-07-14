import React from 'react';
import { useParams } from 'react-router';
import { Loader } from 'rsuite';
import ChatTop from '../../Components/chat-window/top';
import Messages from '../../Components/chat-window/messages';
import ChatBottom from '../../Components/chat-window/bottom';
import { useRooms } from '../../Components/context/rooms.context';

const Chat = () => {
  const { chatId } = useParams();

  const rooms = useRooms();

  if (!rooms) {
    return <Loader center vertical size="md" content="Loading" speed="slow" />;
  }

  const currentroom = rooms.find(room => room.id === chatId);

  if (!currentroom) {
    return <h6 className="text-center mt-page "> Chat {chatId} not found</h6>;
  }

  return (
    <>
      <div className="chat-top">
        <ChatTop />
      </div>
      <div className="chat-middle">
        <Messages />
      </div>
      <div className="chat-bottom">
        <ChatBottom />
      </div>
    </>
  );
};

export default Chat;
