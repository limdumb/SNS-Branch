import Image from "next/image";

interface ImageProps {
  imageURL: string;
  alt: string;
}

export default function CustomImage(props: ImageProps) {
  return (
    <Image
      style={{ width: "100%", height: "100%" }}
      src={props.imageURL}
      alt={props.alt}
    />
  );
}
