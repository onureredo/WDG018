import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';

const ImageForm = () => {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState('');
  const { setProfilePic } = useOutletContext();

  const handleSubmit = async e => {
    try {
      e.preventDefault();
      setLoading(true);
      if (!prompt) throw new Error('Prompt is required');
      const res = await fetch(`${import.meta.env.VITE_OPENAI_PROXY}/api/v1/images/generations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json ',
          provider: 'open-ai',
          mode: import.meta.env.VITE_OPENAI_PROXY_MODE
        },
        body: JSON.stringify({
          model: 'dall-e-3',
          prompt,
          response_format: 'b64_json',
          size: '1024x1024'
        })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setProfilePic(data[0]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex items-center gap-2'>
        <textarea
          name='message'
          value={prompt}
          rows='2'
          onChange={e => setPrompt(e.target.value)}
          placeholder='Describe the image you want to generate...'
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
  );
};

export default ImageForm;
