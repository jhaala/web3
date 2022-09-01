import { NextPage } from 'next';
import { useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const BuildCollection: NextPage = () => {
  //const cropperRef = useRef();

  const defaultSrc = 'https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg';

  const [image, setImage] = useState(defaultSrc);
  const [cropData, setCropData] = useState(defaultSrc);
  const [cropper, setCropper] = useState<any>();

  const formSubmit = () => {
    console.log('Submit form...');
    console.log('cropData:', cropData);
    console.log('image:', image);
    //cropImage()
  };

  const onChange = (e: any) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };

  const resetCropper = () => {
    //
  };

  const getCropData = () => {
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  /*const [image, setImage] = useState(defaultCollectionImgSrc);
  const [cropData, setCropData] = useState('#');
  const [cropper, setCropper] = useState<any>();



  const setCanvasCropData = () => {
    if (typeof cropper !== 'undefined') {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      console.log('cropData:', cropData);
    }
  };

  const cropImage = () => {
    console.log('Cropping image...')
    //const imageElement: any = cropperRef?.current;
    //const cropper: any = imageElement?.cropper;
    //console.log(cropper.getCroppedCanvas().toDataURL());
    setCanvasCropData();
  };

  const onPhotoChange = (e: any) => {
    console.log('New image file...')
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as any);
    };
    reader.readAsDataURL(files[0]);
  };*/

  return (
    <div className='mb-10'>
      <div className='container'>
        <form className='mt-4'>
          <div className='mt-8'>
            <label htmlFor='slug' className='block text-sm font-semibold text-gray-700'>
              Photo
            </label>
            <div className='mt-2'>
              <Cropper
                src='https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg'
                style={{ height: 500, width: '100%' }}
                // Cropper.js options
                initialAspectRatio={1}
                aspectRatio={1.0}
                alt='Collection photo'
                /*crop={cropImage}*/
                dragMode='move'
                guides={true}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                onInitialized={instance => {
                  setCropper(instance);
                }}
                preview='.img-preview'
                /*ref={cropperRef}*/
                viewMode={2}
                zoomTo={0.5}
              />
            </div>
            <div className='flex items-center justify-center space-x-4 mt-2'>
              <div>
                <input type='file' onChange={onChange} accept='image/*' />
              </div>
              <div className='flex justify-center'>
                <button
                  type='button'
                  onClick={resetCropper}
                  className='inline-flex w-64 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Reset
                </button>
              </div>
              <div className='flex justify-center'>
                <button
                  type='button'
                  onClick={getCropData}
                  className='inline-flex w-64 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  Crop Image
                </button>
              </div>
            </div>
            <div>
              <div className='box' style={{ width: '50%', float: 'right' }}>
                <h1>Preview</h1>
                <div className='img-preview' style={{ width: '100%', float: 'left', height: '300px' }} />
              </div>
              <div className='box' style={{ width: '50%', float: 'right', height: '300px' }}>
                <h1>
                  <span>Crop</span>
                  <button style={{ float: 'right' }} onClick={getCropData}>
                    Crop Image
                  </button>
                </h1>
                <img className='w-full' src={cropData} alt='' />
              </div>
            </div>
            <br style={{ clear: 'both' }} />
          </div>
          <div className='mt-12'>
            <div className='flex justify-center'>
              <button
                type='button'
                onClick={formSubmit}
                className='inline-flex w-64 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Save Collection
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BuildCollection;
