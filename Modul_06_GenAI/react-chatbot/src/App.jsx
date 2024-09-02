import { useState } from 'react';

//  Schreibe mit bitte eine recursive Fibonnaci Funktion in JavaScript.

function App() {
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: 'Du bist ein Coding Guru, der nur in Reimen antworten kann.',
    },
  ]);
  const [input, setInput] = useState('');
  const [stream, setStream] = useState(true);

  const [status, setStatus] = useState('success'); // "loading", "error", "success"

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInput = {
      role: 'user',
      content: input,
    };

    // Dies ist ein State Setter mit Update-Funktion.
    setMessages((frühereMessages) => [...frühereMessages, userInput]);

    // input ist noch nicht in messages state enthalten
    // console.log(messages);
    try {
      setStatus('loading');
      const res = await fetch('http://localhost:5050/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          mode: 'production',
          provider: 'open-ai',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userInput],
          model: 'gpt-4o',
          stream,
        }),
      });

      if (!stream) {
        const data = await res.json();
        console.log(data);
        setMessages((prev) => [...prev, data.message]);
        setInput('');
        setStatus('success');
      } else {
        const reader = res.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let result = false;
        const newMessageId = crypto.randomUUID();

        while (!(result = await reader.read()).done) {
          const chunk = decoder.decode(result.value, { stream: true });
          const lines = chunk.split('\n');

          lines.forEach((line) => {
            if (line.startsWith('data:')) {
              const jsonStr = line.replace('data:', '');
              const data = JSON.parse(jsonStr);
              const content = data.choices[0].delta.content;

              if (content) {
                setMessages((vorherige) => {
                  const isMessageAlreadyAdded = vorherige.find((m) => m.id === newMessageId);
                  if (isMessageAlreadyAdded) {
                    // Fall wenn Nachricht schon angefangen
                    return vorherige.map((m) =>
                      m.id === newMessageId ? { ...m, content: `${m.content}${content}` } : m
                    );
                  } else {
                    // Fall wenn Nachricht neu
                    return [...vorherige, { id: newMessageId, role: 'assistant', content }];
                  }
                });
              }
            }
          });
        }

        setStatus('success');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className='max-w-2xl mx-auto space-y-5'>
      <h1 className='text-center my-2 font-semibold'>React Chatbot 🤖</h1>
      <form onSubmit={handleSubmit} className='grid gap-3'>
        <div className='form-control justify-self-start'>
          <label className='cursor-pointer label'>
            <span className='label-text mr-3'>Streaming</span>
            <input
              type='checkbox'
              className='checkbox checkbox-accent'
              checked={stream}
              onChange={() => setStream((s) => !s)}
            />
          </label>
        </div>
        <textarea
          placeholder='Your Message'
          className='textarea textarea-bordered min-h-[5lh] textarea-md w-full'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button className='btn btn-primary shadow-md' disabled={status === 'loading'}>
          {status === 'loading' ? <span className='loading loading-bars loading-xs'></span> : 'Submit✨'}
        </button>
      </form>
      <div className='artboard artboard-horizontal px-2 py-1 phone-2 shadow-md rounded outline outline-1 overflow-y-scroll'>
        {messages.length > 0 &&
          messages.map(
            (msg, ind) =>
              msg.role !== 'system' && (
                <div key={'chat-' + ind} className={`chat ${msg.role === 'assistant' ? 'chat-start' : 'chat-end'}`}>
                  <div className='chat-bubble'>{msg.content}</div>
                </div>
              )
          )}
      </div>
    </div>
  );
}

export default App;
