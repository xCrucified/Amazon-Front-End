import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDropzone } from "react-dropzone";

interface Props {
  className?: string;
  selectedImage: { base64: string; name: string | null };
  onImageSelect: (imageData: { base64: string | null; name: string | null }) => void;
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
          const fileExtension = file.name.split(".").pop(); 
          const uniqueName = `${uuidv4()}.${fileExtension}`; 
  
          console.log("Unique File Name:", uniqueName); 
  
          onImageSelect({ base64: reader.result as string, name: uniqueName });
        };
        reader.readAsDataURL(file);
      } else {
        onImageSelect({ base64: null, name: null });
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

  return (
    <div {...getRootProps()} className={cn("cursor-pointer", className)}>
      <input {...getInputProps()} />
      {selectedImage.base64 ? (
        <div className="w-full h-full">
          <Image
            src={selectedImage.base64}
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
