import { useState } from 'react';
import { toast } from 'react-toastify';

// Standardeinstellungen für Bildgenerierung, den Prompt setzen wir später ein.
const promptObj = {
  model: 'dall-e-3',
  n: 1,
  size: '1024x1024',
  response_format: 'b64_json',
};

const Settings = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const body = { ...promptObj, prompt };

      // üblicher Aufbau, wenn wir posten: fetch(url, optionen)
      // In den Optionen schicken wir den Inhalt (body), die Methode (post, put, delete statt get) und headers mit
      // Wenn JSON als Inhalt mitgeschickt wird, brauchen wir den header 'Content-Type': 'application/json'
      const res = await fetch('http://localhost:5050/api/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          provider: 'open-ai',
          mode: 'production',
        },
        // Wir können nur Text in JSON-Format verschicken, keine Objekte direkt
        body: JSON.stringify(body),
      });

      if (!res.ok) throw Error('Posting failed');
      const data = await res.json();
      // console.log(data);
      setImage(data[0].b64_json); // für b64_json
      // setImage(data[0].url);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-screen'>
      <div className='h-[75%] p-5 bg-base-200 rounded-lg shadow-md overflow-y-scroll'>
        {image && (
          // base64 Dateien sind sehr einfach für den User downloadbar zu machen. Einfach dasselbe, was in die img src kommt hier in das href-Attribut und ein download-Attribut mit dem gewünschten Dateinamen (besser wäre es noch dynamisch).
          // Mit urls ist das wesentlich komplizierter.
          <a href={`data:image/png;base64,${image}`} download={'generatedImg.png'}>
            <img className='h-full' src={`data:image/png;base64,${image}`} alt='Image' />
          </a>
        )}
        {/* {image && <img className='h-full' src={image} alt='Image' />} */}
      </div>
      <div className='h-[20%] p-5 bg-base-200 rounded-lg shadow-md'>
        <form onSubmit={handleSubmit}>
          <div className='flex items-center gap-2'>
            <textarea
              name='prompt'
              value={prompt}
              rows='2'
              onChange={(e) => setPrompt(e.target.value)}
              placeholder='Prompt for an avatar'
              className='w-full textarea textarea-bordered'
              disabled={loading}
            ></textarea>
            <button type='submit' className='btn btn-primary btn-circle' disabled={loading}>
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                <span role='img' aria-label='sparkles'>
                  ✨
                </span>
              )}
            </button>
          </div>
        </form>
        {image && <button onClick={() => localStorage.setItem('avatar', image)}>Save Avatar</button>}
      </div>
    </div>
  );
};

export default Settings;
