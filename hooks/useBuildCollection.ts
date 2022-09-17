import React, { useRef, useState } from 'react';
import { Crop, PixelCrop } from 'react-image-crop';
import { SubmitHandler, useForm } from 'react-hook-form';

import { canvasPreview } from 'utils/canvasPreview';
import { useDebounceEffect } from 'hooks/useDebounceEffect';
import { BuildCollectionInputType } from 'constants/CollectionConstants';
import { centerAspectCrop, checkImageDimension, resizeImageDimension } from 'utils/helper';

const useBuildCollection = () => {
  const [show, setShow] = useState(false);
  const [crop, setCrop] = useState<Crop>();
  const [imgSrc, setImgSrc] = useState('');
  const [isCropAllow, setIsCropAllow] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();

  const { control, handleSubmit } = useForm<BuildCollectionInputType>();

  const imgRef = useRef<HTMLImageElement>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement>(null);

  const aspect = 1;
  const acceptedTypeNames = ['JPG', 'PNG'];

  const onSubmit: SubmitHandler<BuildCollectionInputType> = async data => {
    try {
      console.log(data);
      // Check if image is uploaded then generate image thumbnail
      if (selectedFile && imgSrc) {
        await resizeImageDimension(imgSrc, 1200, (resizedImage: string) => {
          console.log('resizedImage 1200 dataUri', { resizedImage });
        });
        await resizeImageDimension(imgSrc, 300, (resizedImage: string) => {
          console.log('resizedImage 300 dataUri', { resizedImage });
        });
      }
    } catch (error) {
      console.log('onSubmit', error);
    }
  };

  const onAllowCropModal = (isCrop: boolean) => {
    setShow(true);
    setIsCropAllow(!isCrop);
  };

  const onSelectFile = async (fileList: File[]) => {
    try {
      const assetUrl = URL.createObjectURL(fileList[0]);
      await checkImageDimension(assetUrl, (dimensionCheck: boolean) => {
        // if both dimension width and height is greater then 1200
        if (dimensionCheck) {
          setCrop(undefined); // Makes crop preview update between images.
          setSelectedFile(fileList[0]);
          setImgSrc(assetUrl);
        }
      });
    } catch (error) {
      console.log('onSelectFile', error);
    }
  };

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  };

  useDebounceEffect(
    async () => {
      if (completedCrop?.width && completedCrop?.height && imgRef.current && previewCanvasRef.current) {
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
      }
    },
    100,
    [completedCrop],
  );

  return {
    crop,
    show,
    imgRef,
    imgSrc,
    control,
    isCropAllow,
    selectedFile,
    completedCrop,
    previewCanvasRef,
    acceptedTypeNames,
    setShow,
    setCrop,
    onSubmit,
    onImageLoad,
    handleSubmit,
    onSelectFile,
    onAllowCropModal,
    setCompletedCrop,
    checkImageDimension,
  };
};

export default useBuildCollection;
