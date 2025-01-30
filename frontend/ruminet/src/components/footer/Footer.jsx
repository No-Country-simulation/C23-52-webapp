//Built in next/image component (accesibility ensured) )
import Image from "next/image";


// Footer component
export const Footer = () => {
  return (
    // Footer container
    <section
      background-color="black"
      className="bg-black text-white flex justify-center items-center h-96 md:h-36 md:bg-black"
    >
      {/* Wrapper */ }
      <div className="flex flex-col w-5/6 md:w-5/6 md:flex md:flex-row md:justify-evenly md:items-center">
        {/* Contact & Address */}
        <div className=" flex flex-col justify-center items-center md:w-1/3 md:justify-right ">
          <div className="  md:flex md:justify-right md:w-1/2 md:h-7">
            <Image
              src="/images/carrusel.png"
              alt="logo"
              width={70}
              height={10}
            />
          </div>
          <p className=" md:w-1/2">bolivar 1556</p>
          <p className=" md:w-1/2">9000 Gent</p>
          <p className=" md:w-1/2">Info.Ruminet.com</p>
          <p className=" md:w-1/2">0213456789</p>
        </div>
        <div className="border-b border-gray-300 md:hidden" ></div>
        {/* Web App Navigaton Links */}
        <div className="  flex-col justify-center items-center md:w-1/3">
          <ul className=" flex flex-col w-full justify-evenly items-center">
            <li className="">
              <a className="footer-navigation-items hover:text-[#fe6d01]" href="/">
                Inicio
              </a>
            </li>
            <li>
              <a className="footer-navigation-items hover:text-[#fe6d01]"  href="/">
                Creadores
              </a>
            </li>
            <li>
              <a className="footer-navigation-items hover:text-[#fe6d01]" href="/">
                Lectores
              </a>
            </li>
            <li>
              <a className="footer-navigation-items hover:text-[#fe6d01]" href="/">
                Accesibilidad
              </a>
            </li>
            <li>
              <a className="footer-navigation-items hover:text-[#fe6d01]" href="/">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="border-b border-gray-300 md:hidden" ></div>
        {/* Related Social Meda Links & Copy-right*/}
        <div className="flex flex-col md:w-1/3">
          <ul className="flex w-full justify-evenly md:w-3/4">
            <li>
              <a href="https://www.facebook.com/">
                <Image
                  src="/facebook.svg"
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              <a
                className="footer-related-links"
                href="https://www.facebook.com/"
              >
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <Image
                  src="/twitter.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <Image
                  src="/youtube.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <Image
                  src="/linkedin.svg"
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </a>
            </li>
          </ul>
          <p className=" text-center">Cookies</p>
          <p className=" text-center">Política de privacidad</p>
          <p className=" text-center">Acuerdo de miembro</p>
          <small className=" text-center">
            Copyright © 2025 Ruminet. Todos los derechos reservados.
          </small>
        </div>
      </div>
    </section>
  );
};
