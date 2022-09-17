import React from 'react';
import ReactCrop, { Crop, PixelCrop } from 'react-image-crop';

import 'react-image-crop/dist/ReactCrop.css';

interface ImageCropperType {
  crop?: Crop;
  imgSrc: string;
  imgRef: React.RefObject<HTMLImageElement>;
  setCrop: React.Dispatch<React.SetStateAction<Crop | undefined>>;
  onImageLoad: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  setCompletedCrop: React.Dispatch<React.SetStateAction<PixelCrop | undefined>>;
  className?: string;
  style?: React.CSSProperties;
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
            setCrop(percentCrop);
          }}
          onComplete={c => {
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
