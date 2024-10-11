import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SpinnerCircular } from 'spinners-react';

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const MAX_CONTENT_LENGTH = 150;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/posts`
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <h2>LOADING</h2>
        {/* <SpinnerCircular
          size={75}
          thickness={100}
          speed={100}
          color='rgba(57, 117, 172, 1)'
          secondaryColor='rgba(0, 0, 0, 0.44)'
        /> */}
      </div>
    );
  }

  if (error) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <p className='text-red-500'>
          Error loading posts. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className='flex justify-center flex-wrap my-4'>
      {posts.map((post) => {
        const formattedDate = post.date
          ? format(new Date(post.date), 'dd MMMM yyyy, @HH:mm')
          : '';

        return (
          <div
            className='lg:w-1/4 h-full m-4 border-2 border-slate-50 rounded-xl shadow-xl shadow-gray flex flex-col justify-between'
            key={post._id}
          >
            <div className='m-4 flex flex-col'>
              <h2 className='text-2xl font-semibold mb-4 text-center'>
                {post.title}
              </h2>
              <img
                className='rounded'
                src={post.image}
                alt={post.title}
                onError={(e) => {
                  e.target.src =
                    'https://pokemon-ko.netlify.app/static/media/not_found.6d682c14615b3df8087f.png';
                }}
              />
              <p className='my-4'>
                {post.content.length > MAX_CONTENT_LENGTH
                  ? `${post.content.substring(0, MAX_CONTENT_LENGTH)}...`
                  : post.content}
              </p>
              {post.content.length > MAX_CONTENT_LENGTH && (
                <Link
                  className='text-blue-500 hover:underline'
                  to={`/posts/${post._id}`}
                >
                  Read more
                </Link>
              )}
            </div>
            <div className='m-4'>
              <p>
                <Link className='text-blue-500 hover:underline' to='/'>
                  @{post.author ? post.author.username : 'Unknown User'}
                </Link>{' '}
                &middot; {formattedDate}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
