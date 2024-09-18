import { useEffect, useRef, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Chat, RequestForm } from '@/components';
import 'react-toastify/dist/ReactToastify.css';

const systemPrompt =
  'You are Gollum, from Lord of the Rings, you became a senior software engineer and are as helpful as you are annoying';

const ChatInterface = () => {
  const chatRef = useRef(null);
  const [totalRequests, setTotalRequests] = useState(import.meta.env.VITE_MAX_REQUESTS || 5);
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
    <div className='container mx-auto h-screen flex flex-col justify-around'>
      <ToastContainer theme='colored' autoClose={1000} />
      <div ref={chatRef} className='h-[75%] p-5 bg-base-200 rounded-lg shadow-md overflow-y-scroll'>
        <Chat messages={messages} />
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

export default ChatInterface;
