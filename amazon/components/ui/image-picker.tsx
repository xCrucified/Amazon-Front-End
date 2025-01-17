import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDropzone } from "react-dropzone";
import Cropper from "react-easy-crop";
import getCroppedImg from "@/lib/utils";
import { Button } from "./button";

interface Props {
  className?: string;
  selectedImage: { url: string; name: string | null };
  onImageSelect: (imageData: {
    url: string | null;
    name: string | null;
  }) => void;
}

const ImagePicker: React.FC<Props> = ({
  className,
  selectedImage,
  onImageSelect,
}) => {
  const [croppedImagePreview, setCroppedImagePreview] = useState<string | null>(
    null
  );

  const [imageForCrop, setImageForCrop] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        const fileExtension = file.name.split(".").pop();
        const uniqueName = `${uuidv4()}.${fileExtension}`;
        const fileUrl = URL.createObjectURL(file);

        setImageForCrop(fileUrl);

        onImageSelect({ url: null, name: uniqueName });
      } else {
        onImageSelect({ url: null, name: null });
      }
    },
    [onImageSelect]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
    },
  });

  const onCropComplete = async (croppedArea: any, croppedAreaPixels: any) => {
    if (imageForCrop) {
      const croppedImage = await getCroppedImg(imageForCrop, croppedAreaPixels);
      if (croppedImage) {
        setCroppedImagePreview(croppedImage);
      }
    }
  };

  return (
    <div
      className={cn("w-[400px] h-[400px] flex flex-col relative", className)}
    >
      {imageForCrop ? (
        <div className="w-full h-full rounded-md flex flex-col gap-2">
          <div className="h-full border-2 bg-secondary border-input relative ">
            <Cropper
              image={imageForCrop}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <div className="flex gap-2">
            <Button
              className="w-full"
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                onImageSelect({
                  url: croppedImagePreview,
                  name: selectedImage.name,
                });
                setImageForCrop(null);
                setCroppedImagePreview(null);
              }}
              disabled={!croppedImagePreview}
            >
              Confirm
            </Button>
            <Button
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                setImageForCrop(null);
                setCroppedImagePreview(null);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className="w-full h-full cursor-pointer flex flex-col justify-center border border-input rounded-md"
        >
          <input {...getInputProps()} />
          {selectedImage.url ? (
            <Image
              src={selectedImage.url}
              alt="Selected"
              className="w-full h-full rounded-md object-cover"
              width={0}
              height={0}
            />
          ) : (
            <p className="text-center">
              Drag & drop an image here, or click to select one
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ImagePicker;
