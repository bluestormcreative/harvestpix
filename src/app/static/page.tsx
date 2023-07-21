import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";

export default async function StaticPage() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id" +
      process.env.UNSPLASH_ACCESS_KEY
  );
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width); // return the smallest number
  const height = (width / image.width) * image.height; // keep aspect ratio

  return (
    <div className="d-flex flex-column align-items-center">
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
      />
    </div>
  );
}
