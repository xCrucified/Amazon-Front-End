import { cn } from "@/lib/utils";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface Props {
  className?: string;
  selectedImage: string | null;
  onImageSelect: (image: string | null) => void;
}

const ImagePicker: React.FC<Props> = ({
  className,
  selectedImage,
  onImageSelect,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: any[]) => {
      const file = acceptedFiles[0];
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        onImageSelect(imageUrl);
      } else {
        onImageSelect(null);
      }
    },
    [onImageSelect]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/jpeg": [], "image/jpg": [], "image/png": [] },
  });

  return (
    <div {...getRootProps()} className={cn("cursor-pointer", className)}>
      <input {...getInputProps()} />
      {selectedImage ? (
        <div className="w-full h-full">
          <img
            src={selectedImage}
            alt="Selected"
            className="object-cover w-full h-full rounded-full antialiased"
          />
        </div>
      ) : (
        <p className="max-w-[200px] text-center select-none">
          Drag & drop an image here, or click to select one
        </p>
      )}
    </div>
  );
};

export default ImagePicker;