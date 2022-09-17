import { PixelCrop } from 'react-image-crop';
import { canvasPreview } from 'utils/canvasPreview';

let previewUrl = '';

export function toBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise(resolve => {
    // @ts-ignore
    canvas.toBlob(resolve);
  });
}

export async function imgPreview(image: HTMLImageElement, crop: PixelCrop) {
  const canvas = document.createElement('canvas');
  canvasPreview(image, canvas, crop);

  const blob = await toBlob(canvas);
  if (previewUrl) {
    URL.revokeObjectURL(previewUrl);
  }

  previewUrl = URL.createObjectURL(blob);
  return previewUrl;
}
