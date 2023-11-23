import Image from "next/image";

interface ImageProps {
  width: number;
  height: number;
  imageURL: string;
  alt: string;
}

export default function CustomImage(props: ImageProps) {
  return (
    <Image
      width={props.width}
      height={props.height}
      src={props.imageURL}
      alt={props.alt}
    />
  );
}
