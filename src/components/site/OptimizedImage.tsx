type OptimizedImageProps = {
  src: string;
  webp?: string;
  srcSet?: string;
  webpSrcSet?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  sizes?: string;
};

export function OptimizedImage({
  src,
  webp,
  srcSet,
  webpSrcSet,
  alt,
  width,
  height,
  className,
  loading = "lazy",
  fetchPriority,
  sizes = "100vw",
}: OptimizedImageProps) {
  const imgProps = {
    alt,
    width,
    height,
    loading,
    decoding: "async" as const,
    className,
    ...(fetchPriority ? { fetchPriority } : {}),
  };

  if (!webp && !srcSet && !webpSrcSet) {
    return <img src={src} {...imgProps} />;
  }

  return (
    <picture>
      {webpSrcSet && (
        <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      )}
      {webp && !webpSrcSet && <source type="image/webp" srcSet={webp} />}
      <img
        src={src}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        {...imgProps}
      />
    </picture>
  );
}
