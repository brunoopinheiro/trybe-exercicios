import EmailInbox from './components/EmailInbox';
import messagesList from './data/messagesList';
import { useEffect, useState } from 'react';
import { READ, UNREAD } from './constants';
import './App.css';
import Controls from './components/Controls';

function App() {
  const [messages, setMessages] = useState(messagesList);

  useEffect(() => {
    const isAllMessagesRead = messages.every(({ status }) => status === READ);

    if (isAllMessagesRead) {
      alert('Parabéns! Você leu todas as mensagens!');
    }
  }, [messages]);

  const setMessageStatus = (messageId, newStatus) => {
    const updatedMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status: newStatus }
      }
      return currentMessage;
    });

    setMessages(updatedMessages);
  }

  const markAllAsRead = () => {
    const allAsRead = messages.map((m) => ({ ...m, status: READ }));
    setMessages(allAsRead);
  }

  const markAllAsUnread = () => {
    const allAsUnread = messages.map((m) => ({ ...m, status: UNREAD }));
    setMessages(allAsUnread);
  }

  return (
    <div className="App">
      <header>
        <h1>TrybeMail</h1>
      </header>
      <Controls
        markAllAsRead={ markAllAsRead }
        markAllAsUnread={ markAllAsUnread }
      />
      <EmailInbox
        messages={ messages }
        setMessageStatus={ setMessageStatus }
      />
    </div>
  );
}

export default App;
