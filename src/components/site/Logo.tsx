import { OptimizedImage } from "./OptimizedImage";
import { siteImages } from "@/lib/site-images";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-11 w-auto" }: LogoProps) {
  const { src, webp, width, height } = siteImages.logo;

  return (
    <OptimizedImage
      src={src}
      webp={webp}
      alt="Basilea Trading"
      width={width}
      height={height}
      loading="eager"
      fetchPriority="high"
      className={className}
    />
  );
}
