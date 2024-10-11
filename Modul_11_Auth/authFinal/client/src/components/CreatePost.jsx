import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

function CreatePost() {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    image: '',
  });

  const navigate = useNavigate();

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts`,
        postData,
        { withCredentials: true }
      );

      if (response.status === 201) {
        setPostData({
          title: '',
          content: '',
          image: '',
        });
        toast.success('Post created');
        navigate('/');
      }
    } catch (error) {
      toast.error(error.response.data.error.message || 'Something went wrong');
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  return (
    <div className='container mx-auto max-w-md mt-8 rounded-xl shadow-xl shadow-gray-500'>
      <div className='p-4'>
        <h2 className='text-2xl font-semibold mb-4'>Create a Blog Post</h2>
        <form onSubmit={handlePost}>
          <div className='mb-4'>
            <label className='block mb-2'>Title:</label>
            <input
              type='text'
              name='title'
              value={postData.title}
              onChange={handleChange}
              className='border rounded w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Content:</label>
            <input
              type='text'
              name='content'
              value={postData.content}
              onChange={handleChange}
              className='border rounded w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>ImageURL:</label>
            <input
              type='text'
              name='image'
              value={postData.image}
              onChange={handleChange}
              className='border rounded w-full p-2'
            />
          </div>
          <button className='bg-blue-500 text-white p-2 rounded' type='submit'>
            POST
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;