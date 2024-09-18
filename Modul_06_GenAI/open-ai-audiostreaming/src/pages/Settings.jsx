import { ImageForm, ImagePreview } from '@/components';

const Settings = () => {
  return (
    <div className='container mx-auto h-[calc(100vh-68px)]'>
      <ImageForm />
      <ImagePreview />
    </div>
  );
};

export default Settings;
