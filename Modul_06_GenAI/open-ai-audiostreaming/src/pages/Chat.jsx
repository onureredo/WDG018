import { useEffect, useRef, useState } from 'react';
import { ChatCointainer, RequestForm } from '@/components';

// const systemPrompt =
//   'You are Gollum, from Lord of the Rings, you became a senior software engineer and are as helpful as you are annoying';

const systemPrompt = 'You are a helpful assistant. You keep yourself very short and reply in under 25 words only.';

const Chat = () => {
  const chatRef = useRef(null);
  const [totalRequests, setTotalRequests] = useState(import.meta.env.VITE_MAX_REQUESTS || 0);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'system',
      content: systemPrompt,
    },
  ]);

  useEffect(() => {
    chatRef.current.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div className='container mx-auto h-[calc(100vh-68px)] flex flex-col justify-around'>
      <div ref={chatRef} className='h-[75%] p-5 bg-base-200 rounded-lg shadow-md overflow-y-scroll'>
        <ChatCointainer messages={messages} />
      </div>
      <div className='h-[20%] p-5 bg-base-200 rounded-lg shadow-md'>
        <RequestForm
          messages={messages}
          setMessages={setMessages}
          totalRequests={totalRequests}
          setTotalRequests={setTotalRequests}
        />
      </div>
    </div>
  );
};

export default Chat;
