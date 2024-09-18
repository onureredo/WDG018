import { useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';

const ImagePreview = () => {
  const { profilePic } = useOutletContext();

  const saveImage = () => {
    localStorage.setItem(
      'profilePic',
      JSON.stringify({
        b64_json: `data:image/png;base64,${profilePic.b64_json}`,
        revised_prompt: profilePic.revised_prompt
      })
    );
    toast.success('Image saved successfully');
  };

  const isImageTheSame =
    JSON.parse(localStorage.getItem('profilePic')).b64_json === profilePic.b64_json;

  if (!profilePic)
    return (
      <div role='alert' className='alert alert-info mt-5'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          className='h-6 w-6 shrink-0 stroke-current'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          ></path>
        </svg>
        <span>Nothing to show yet!</span>
      </div>
    );
  return (
    <>
      <div className='my-5 flex flex-col justify-center items-center gap-3'>
        <img
          src={
            profilePic.b64_json.includes('data:image/png;base64,')
              ? profilePic.b64_json
              : `data:image/png;base64,${profilePic.b64_json}`
          }
          alt='Generated Image'
          className='rounded-lg shadow-lg'
          width={400}
        />
        <button className='btn btn-secondary' onClick={saveImage} disabled={isImageTheSame}>
          {isImageTheSame ? 'Image already saved' : 'Save Image'}
        </button>
      </div>
      <p>
        <strong>The image was generated using this revised prompt:</strong>{' '}
        {profilePic.revised_prompt}
      </p>
    </>
  );
};

export default ImagePreview;
