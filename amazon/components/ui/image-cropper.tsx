import { useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Button } from "./button";

interface ImageCropperProps {
  imageSrc: string;
  onCropComplete: (croppedDataUrl: string) => void;
  onCancel: () => void;
}

const ImageCropper: React.FC<ImageCropperProps> = ({ imageSrc, onCropComplete, onCancel }) => {
  const cropperRef = useRef<ReactCropperElement>(null);

  const handleCrop = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const cropper = cropperRef.current?.cropper;
    if (cropper) {
        const croppedDataUrl = cropper.getCroppedCanvas()?.toDataURL();
        if (croppedDataUrl) {
          onCropComplete(croppedDataUrl); 
        }
      }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full max-w-md mx-auto rounded-xl overflow-hidden border-[3px] border-[#5a6c8d]">
        <Cropper
          ref={cropperRef}
          src={imageSrc}
          className="w-full h-full"
          aspectRatio={1}
          guides={false}
          viewMode={1}
          dragMode="move"
        />
      </div>
      <div className="flex gap-2">
        <Button className="w-full" onClick={handleCrop}>
          Crop
        </Button>
        <Button variant="destructive" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default ImageCropper;
