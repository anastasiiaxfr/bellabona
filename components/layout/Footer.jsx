import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <h4>Folge uns!</h4>
            <p>Lorem ipsum Text Text Tex Textextext</p>

            <Link
              href="mailto:fragen@bellabona.com"
              className="flex gap-2 items-center my-4 hover:text-cstm-secondary"
            >
              <Mail /> fragen@bellabona.com
            </Link>

            <div className="flex gap-4 items-center flex-wrap mt-10">
              <Link
                href="#"
                traget="_blank"
                className="hover:scale-105 transition"
              >
                <Image
                  src="/icons/social-google.svg"
                  alt="Google"
                  width="24"
                  height="24"
                  loading="eager"
                ></Image>
              </Link>
              <Link
                href="#"
                traget="_blank"
                className="hover:scale-105 transition"
              >
                <Image
                  src="/icons/social-twitter.svg"
                  alt="Twitter"
                  width="24"
                  height="24"
                  loading="eager"
                ></Image>
              </Link>
              <Link
                href="#"
                traget="_blank"
                className="hover:scale-105 transition"
              >
                <Image
                  src="/icons/social-instagram.svg"
                  alt="Instagram"
                  width="24"
                  height="24"
                  loading="eager"
                ></Image>
              </Link>
              <Link
                href="#"
                traget="_blank"
                className="hover:scale-105 transition"
              >
                <Image
                  src="/icons/social-linkedin.svg"
                  alt="Linkedin"
                  width="24"
                  height="24"
                  loading="eager"
                ></Image>
              </Link>
              <Link
                href="#"
                traget="_blank"
                className="hover:scale-105 transition"
              >
                <Image
                  src="/icons/social-apple.svg"
                  alt="AppleStore"
                  width="24"
                  height="24"
                  loading="eager"
                ></Image>
              </Link>
              <Link
                href="#"
                traget="_blank"
                className="hover:scale-105 transition"
              >
                <Image
                  src="/icons/social-play-store.svg"
                  alt="PlayStore"
                  width="24"
                  height="24"
                  loading="eager"
                ></Image>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4>Schnellzugriffe</h4>
              <nav>
                <Link href="#">Für Arbeitgeber</Link>
                <Link href="#">für Mitarbeiter</Link>
                <Link href="#">Werde Teil des Bella&Bona-Teams!</Link>
                <Link href="#">Über uns</Link>
                <Link href="#">Fallstudien</Link>
                <Link href="#">Blogs</Link>
              </nav>
            </div>
            <div>
              <h4>Entdecken</h4>
              <nav>
                <Link href="#">Unser Menü</Link>
                <Link href="#">Geschäfts-Catering</Link>
                <Link href="#">tägliches Mittagessen</Link>
              </nav>
            </div>
            <div>
              <h4>Unsere Richtlinien</h4>
              <nav>
                <Link href="#">Nutzungsbedingungen</Link>
                <Link href="#">Datenschutz</Link>
                <Link href="#">Cookies</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-mdl">
        <Image src="/img/text-logo.svg" alt="BellaBona" fill />
      </div>
      <div className="footer-btm">
        <div className="container text-center border-t pt-4">
          <p>Bella&Bona Copyright &copy; 2025. Mit Liebe gestaltet.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
