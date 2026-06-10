import logoImg from "@/assets/LogoBasilea.png";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-11 w-auto" }: LogoProps) {
  return (
    <img
      src={logoImg}
      alt="Basilea Trading"
      width={220}
      height={88}
      className={className}
    />
  );
}
