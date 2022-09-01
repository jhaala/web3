import { BsCloudUpload } from 'react-icons/bs';

import Card from 'components/card';
import Dropzone from 'components/dropzone';
import BuildCollection from 'components/crop';

const collection = () => {
  const acceptedTypeNames = ['JPG', 'PNG', 'GIF', 'SVG', 'WEBM', 'MP3', 'MP4'];

  return (
    <div className='mt-40'>
      <Card className='mx-2 sm:mx-10 md:mx-40'>
        <Dropzone onChange={() => console.log('TESTing')}>
          <BsCloudUpload size={25} className='mx-auto mb-3' />
          <div className='px-3 text-center'>
            <strong>Drag</strong> and <strong>Drop</strong> File <br />
            or <strong>browse media on your device</strong>
            <p className='mt-3'>{acceptedTypeNames.join().replaceAll(',', ', ')} Max. Size 100MB</p>
          </div>
        </Dropzone>
      </Card>
      <BuildCollection />
    </div>
  );
};

export default collection;
