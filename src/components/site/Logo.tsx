import Image from "next/image";

type Variant =
  | "blue" // blue icon + white text — use on dark bg
  | "blue-dark" // blue icon + black text — use on light bg
  | "pink" // pink icon + white text — use on dark bg
  | "pink-dark" // pink icon + black text — use on light bg
  | "white" // monotone white — use on dark bg
  | "black"; // monotone black — use on light bg

const SRC: Record<Variant, string> = {
  blue: "/logos/nanasolar-blue.png",
  "blue-dark": "/logos/nanasolar-blue-black.png",
  pink: "/logos/nanasolar-pink.png",
  "pink-dark": "/logos/nanasolar-pink-black.png",
  white: "/logos/nanasolar-white.png",
  black: "/logos/nanasolar-black.png",
};

export function Logo({
  variant = "pink-dark",
  width = 180,
  height = 44,
  priority = false,
  className = "",
}: {
  variant?: Variant;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={SRC[variant]}
      alt="Nanasolar — Energía solar a tu medida"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
