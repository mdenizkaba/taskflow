import clsx from "clsx";
import Image from "next/image";

export default function ProfileImage({
  src,
  alt = "Profile Image",
  className = "",
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div className={clsx("relative w-full h-full rounded-full overflow-hidden border-[1px] border-white/30", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={clsx("object-cover", className)}
      />
    </div>
  );
}
