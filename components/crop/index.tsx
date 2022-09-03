import React from 'react';
import ReactCrop from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';

interface ImageCropperType {
  crop: any;
  imgSrc: any;
  imgRef: any;
  setCrop: any;
  onImageLoad: any;
  setCompletedCrop: any;
  className?: any;
  style?: any;
  disabled?: boolean;
}

const ImageCropper: React.FC<ImageCropperType> = ({
  crop,
  imgSrc,
  imgRef,
  setCrop,
  onImageLoad,
  setCompletedCrop,
  className,
  style,
  disabled,
}) => {
  return (
    <div className={className}>
      {Boolean(imgSrc) && (
        <ReactCrop
          locked={true}
          crop={crop}
          onChange={(_, percentCrop) => {
            // console.log({ percentCrop });
            setCrop(percentCrop);
          }}
          onComplete={c => {
            // console.log({ c });
            setCompletedCrop(c);
          }}
          disabled={disabled}
        >
          <img ref={imgRef} alt='Crop me' src={imgSrc} onLoad={onImageLoad} style={style} />
        </ReactCrop>
      )}
    </div>
  );
};

export default ImageCropper;
