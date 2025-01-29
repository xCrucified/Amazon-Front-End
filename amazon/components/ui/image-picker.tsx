import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDropzone } from "react-dropzone";
import Cropper from "react-easy-crop";
import getCroppedImg from "@/lib/utils";
import { Button } from "./button";
import { useDispatch, useSelector } from "react-redux";
import {
  clearImage,
  setAvatarPicture,
  setAvatarPictureUrl,
  setSelected,
} from "@/store/slices/signupSlice";
import { RootState } from "@/store/store";

interface Props {
  className?: string;
  onChange: (value: string) => void;
}

const ImagePicker: React.FC<Props> = ({ className, onChange }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const isSelected = useSelector((state: RootState) => state.signup.isSelected);
  const selectedImageUrl = useSelector(
    (state: RootState) => state.signup.avatarPictureUrl
  );
  const dispatch = useDispatch();

  const [croppedImagePreview, setCroppedImagePreview] = useState<string | null>(
    null
  );

  const [imageForCrop, setImageForCrop] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    dispatch(setSelected(false));

    const file = acceptedFiles[0];
    if (file) {
      const fileExtension = file.name.split(".").pop();
      const uniqueName = `${uuidv4()}.${fileExtension}`;
      const fileUrl = URL.createObjectURL(file);

      setImageForCrop(fileUrl);
      setSelectedImage(uniqueName);
      onChange(uniqueName);
    } else {
      dispatch(clearImage());
      onChange("");
    }
  }, []);

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
    <div className={className}>
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
                dispatch(setAvatarPicture(selectedImage!));
                dispatch(setAvatarPictureUrl(croppedImagePreview!));
                dispatch(setSelected(true));
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
                dispatch(setAvatarPicture(""));
                if (!isSelected) {
                  dispatch(setSelected(true));
                }
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
          className="min-w-[300px] min-h-[300px] cursor-pointer flex flex-col justify-center border border-input rounded-md"
        >
          <input {...getInputProps()} />
          {selectedImageUrl && selectedImageUrl !== "" ? (
            <Image
              src={selectedImageUrl}
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
