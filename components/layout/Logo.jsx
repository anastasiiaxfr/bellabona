import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/img/logo.svg"
        alt="logo"
        width="206"
        height="36"
        className="w-auto h-auto"
        fetchPriority="hight"
      />
    </Link>
  );
}

export default Logo;
