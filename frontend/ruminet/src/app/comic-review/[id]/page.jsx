"use client";

import { useEffect, use } from "react";

import Image from "next/image";

//Components
import { Navbar } from '@/components/navbar/Navbar';
import {Footer} from '@/components/footer/Footer';

const ComicReviewPage = ({ params }) => {
  const { id } = use(params);

  useEffect(() => {
    console.log("ComicReviewPage mounted");
    console.log("id:", id);
    //Make a http request to API to retreive the comic data (fetch or axios)
  }, [id]);

  return (
    <>
    <Navbar/>
    {/* Comic-review-page-section Start */}
    <div className="bg-white flex flex-col justify-center items-center w-full">
        {/* Review Section */}
        <section className="flex justify-center h-[500]  w-full">
        <Image
          className="h-full w-full"
          src="/images/comicreview.png"
          alt="hero"
          width={300}
          height={300}
        />
        </section>
        <div className=" w-full md:flex">
        {/* Review Section */}
        <section className="bg-white h-[800] w-full p-4 md:order-2">
          {/*Review Section  */}
          <div className="flex flex-col justify-center items-center">
            <div>logo</div>
            <h2 className="font-bold">Todos los Lunes-Miércoles</h2>
         </div>
            <h5 className="font-bold">Sinopsis:</h5>
            <br/>
            <p className="text-base text-pretty text-center">
            En el místico Reino de Lumina, el equilibrio del mundo se
            ve amenazado cuando el Orbe Luminaris , un artefacto ancestral que
            controla los elementos, desaparece y fragmenta el orden natural.
            Eira, una joven marcada por un misterioso símbolo en su mano, es
            guiada por una visión hacia un bosque prohibido, donde descubre que
            solo ella puede restaurar el orbe y salvar su mundo.</p>
            <br/>
            <p className="text-base text-pretty text-center">Acompañada por
            Kael, un guardián desterrado, Eira emprende un peligroso viaje a
            través de islas flotantes y paisajes mágicos, enfrentando desafíos
            que pondrán a prueba su valentía y su fe en sí misma. Pero, a medida
            que descubre los secretos del orbe, Eira se da cuenta de que su
            misión no es simplemente restaurar el equilibrio perdido, sino
            reimaginar un nuevo futuro para Lumina.</p>
            <br/>
            <p className="text-base text-pretty text-center">"Lumina" es una épica
            historia de magia, coraje y transformación que te llevará a un mundo
            donde los héroes se forjan enfrentando lo imposible.</p>

            <div className="bg-green-300">
                <div className="flex justify-between items-center">
                    <div className="bg-orange-500 flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <Image src="/eye.svg" alt="eye svg" width={20} height={20}/>
                            <p>2M</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src="/people.svg" alt="group of people svg" width={20} height={20}/>
                            <p>201,435</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <Image src="/star.svg" alt="star svg" width={20} height={20}/>
                            <p>3.95</p>
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#e00d0c] text-white rounded-sm" >Calificar</button>
                    </div>
                </div>
            </div>

            <div className="bg-blue-800 w-full h-28 flex justify-center items-center">
                <button className="bg-red-200">Capitulo 1</button>
            </div>
        </section>
        {/* Chapters list */}
        <section className="bg-white h-96 w-full md:order-1">
          {/* Chapters Section */}
          <section>
            <div className="flex bg-white w-full h-28">
                <div className="bg-white w-1/5">
                    <Image className="h-full w-full"
                    src="/images/comicreview.png"
                    alt="hero"
                    width={100}
                    height={100}
                    />
                </div>
                <div className="w-4/5 p-4">
                    <h3>Capitulo 1</h3>
                    <p>Fecha de lanzamiento</p>
                    <div className="flex">
                        <p>Heart</p>
                        <p>22,500</p>
                    </div>
                </div>
            </div>
            <div className="flex bg-white w-full h-28">
                <div className="bg-white w-1/5">
                    <Image className="h-full w-full"
                    src="/images/comicreview.png"
                    alt="hero"
                    width={100}
                    height={100}
                    />
                </div>
                <div className="w-4/5 p-4">
                    <h3>Capitulo 2</h3>
                    <p>Fecha de lanzamiento</p>
                    <div className="flex">
                        <p>Heart</p>
                        <p>22,500</p>
                    </div>
                </div>
            </div>
          </section>
        </section>
        </div>
    </div>
    {/* Comic-review-page-section End */}
    <Footer/>
    </>
  );
};

export default ComicReviewPage;
