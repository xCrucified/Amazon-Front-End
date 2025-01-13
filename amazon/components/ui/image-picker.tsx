import { cn } from "@/lib/utils";
import Image from "next/image";
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
        const reader = new FileReader();
        reader.onloadend = () => {
          onImageSelect(reader.result as string);
        };
        reader.readAsDataURL(file);
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
          <Image
            src={selectedImage}
            alt="Selected"
            width={0}
            height={0}
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
