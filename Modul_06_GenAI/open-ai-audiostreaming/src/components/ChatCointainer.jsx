import Markdown from 'marked-react';
import { useOutletContext } from 'react-router-dom';
import { Refractor, registerLanguage } from 'react-refractor';
// Load any languages you want to use from `refractor`
import bash from 'refractor/lang/bash';
import js from 'refractor/lang/javascript.js';
import php from 'refractor/lang/php.js';
import python from 'refractor/lang/python.js';
import { toast } from 'react-toastify';
import { useRef } from 'react';

// Then register them
registerLanguage(bash);
registerLanguage(js);
registerLanguage(php);
registerLanguage(python);

const renderer = {
  code(snippet, lang) {
    if (!lang) lang = 'bash';
    const allowedLangs = ['js', 'php', 'python'];
    if (!allowedLangs.includes(lang)) lang = 'bash';
    return <Refractor key={this.elementId} language={lang} value={snippet} />;
  },
};

const ChatContainer = ({ messages }) => {
  const { profilePic } = useOutletContext();

  const audioRef = useRef(null);

  const readMessage = async (messageId) => {
    const msg = messages.find((m) => m.id === messageId)?.content;

    try {
      const res = await fetch(`${import.meta.env.VITE_OPENAI_PROXY}/api/v1/audio/speech`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          provider: 'open-ai',
          mode: import.meta.env.VITE_OPENAI_PROXY_MODE,
        },
        body: JSON.stringify({
          model: 'tts-1',
          input: msg,
          voice: 'alloy',
        }),
      });

      const mediaSource = new MediaSource();

      audioRef.current.src = URL.createObjectURL(mediaSource);

      const handleMedia = async () => {
        let queue = [];
        const sourceBuffer = mediaSource.addSourceBuffer('audio/mpeg');

        const processQueue = () => {
          if (!sourceBuffer.updating && queue.length > 0) {
            const chunk = queue.shift();
            sourceBuffer.appendBuffer(chunk);
          }
        };
        sourceBuffer.addEventListener('updateend', () => {
          processQueue();
        });
        for await (const chunk of res.body) {
          queue.push(chunk);
          processQueue();
        }
      };

      mediaSource.addEventListener('sourceopen', handleMedia);
      audioRef.current.play();
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <audio ref={audioRef} controls></audio>
      <button onClick={() => audioRef.current.pause()}>Stop</button>
      {messages
        .filter((m) => m.role !== 'system') // Filter out system
        .map((m) => (
          <div key={m.id} className={`chat ${m.role === 'assistant' ? 'chat-start' : 'chat-end'}`}>
            {m.role === 'user' && profilePic && (
              <div className='chat-image avatar'>
                <div className='w-20 rounded-full'>
                  <img
                    src={
                      profilePic.b64_json.includes('data:image/png;base64,')
                        ? profilePic.b64_json
                        : `data:image/png;base64,${profilePic.b64_json}`
                    }
                    alt='User'
                    className='rounded-full shadow-lg'
                    width={50}
                  />
                </div>
              </div>
            )}
            {m.role === 'assistant' && (
              <button onClick={() => readMessage(m.id)} className='btn btn-primary'>
                Read out loud
              </button>
            )}
            <div className={`chat-bubble ${m.role === 'assistant' ? 'chat-bubble-primary' : 'chat-bubble-secondary'}`}>
              <Markdown gfm renderer={renderer}>
                {m.content}
              </Markdown>
            </div>
          </div>
        ))}
    </>
  );
};

export default ChatContainer;
