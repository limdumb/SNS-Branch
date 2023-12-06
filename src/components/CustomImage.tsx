/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

interface ImageProps {
  imageURL: string;
  alt: string;
  borderRadious?: string;
}

export default function CustomImage(props: ImageProps) {
  return (
    <img
      style={{
        width: "100%",
        height: "100%",
        borderRadius: `${
          props.borderRadious !== undefined ? props.borderRadious : "0px"
        }`,
      }}
      src={props.imageURL}
      alt={props.alt}
    />
  );
}
