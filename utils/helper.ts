import { centerCrop, makeAspectCrop } from 'react-image-crop';
import { MINIMUM_HEIGHT, MINIMUM_WIDTH } from 'constants/CollectionConstants';

export const resizeImageDimension = async (assetBlobUrl: string, size: number, callbackFunc: { (uri: string): void }) => {
  try {
    const img = new Image();
    img.src = assetBlobUrl;
    img.onload = function () {
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      // @ts-ignore
      ctx.drawImage(img, 0, 0, size, size);
      const dataurl = canvas.toDataURL();
      return callbackFunc(dataurl);
    };
    // const assetUrl = URL.createObjectURL(imageFile);
  } catch (error) {
    console.log('resizeImage', error);
  }
};

export const checkImageDimension = async (assetBlobUrl: string, callbackFunc: { (bool: boolean): void }) => {
  const img = new Image();
  img.src = assetBlobUrl;
  img.onload = () => {
    if (img.width < MINIMUM_WIDTH || img.height < MINIMUM_HEIGHT) {
      alert(`Invalid dimension: A larger dimension photo is needed minimum of 1200*1200 dimension`);
      return callbackFunc(false);
    }
    return callbackFunc(true);
  };
};

// This is to demonstate how to make and center a % aspect crop
// which is a bit trickier so we use some helper functions.Í
export const centerAspectCrop = (mediaWidth: number, mediaHeight: number, aspect: number) => {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 95,
      },
      aspect,
      mediaWidth,
      mediaHeight,
    ),
    mediaWidth,
    mediaHeight,
  );
};
