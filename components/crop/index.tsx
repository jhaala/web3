import React, { useState, useRef } from 'react';
import ReactCrop, { centerCrop, makeAspectCrop, Crop, PixelCrop } from 'react-image-crop';

import { canvasPreview } from './canvasPreview';
import { useDebounceEffect } from './useDebounceEffect';

import 'react-image-crop/dist/ReactCrop.css';

interface ImageCropperType {
  crop: any;
  imgSrc: any;
  imgRef: any;
  completedCrop: any;
  previewCanvasRef: any;
  setCrop: any;
  onImageLoad: any;
  onSelectFile: any;
  setCompletedCrop: any;
  //   onChange: (files: File[]) => void;
}

const ImageCropper: React.FC<ImageCropperType> = ({
  crop,
  imgSrc,
  completedCrop,
  imgRef,
  previewCanvasRef,
  setCrop,
  onImageLoad,
  onSelectFile,
  setCompletedCrop,
}) => {
  return (
    <div className='App'>
      <div className='Crop-Controls'>
        <input type='file' accept='image/*' onChange={onSelectFile} />
      </div>
      {Boolean(imgSrc) && (
        <ReactCrop locked={true} crop={crop} onChange={(_, percentCrop) => setCrop(percentCrop)} onComplete={c => setCompletedCrop(c)}>
          <img width='600' className='shadow-lg' ref={imgRef} alt='Crop me' src={imgSrc} onLoad={onImageLoad} />
        </ReactCrop>
      )}
    </div>
  );
};

export default ImageCropper;
