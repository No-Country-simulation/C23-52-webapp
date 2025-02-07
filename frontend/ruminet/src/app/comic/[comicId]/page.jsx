"use client";

import { useEffect, use } from "react";

import Image from "next/image";


const ComicIdPage = ({ params }) => {
  const { id } = use(params);

//   useEffect(() => {
//     console.log("ComicIdPage mounted");
//     console.log("id:", id);
//     //Make a http request to API to retreive the comic data (fetch or axios)
//     fetch(`https://api.example.com/comics/${id}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log("Comic data:", data);
//             // You can set the data to state here if needed
//         })
//         .catch(error => {
//             console.error("Error fetching comic data:", error);
//         });
//   }, [id]);

  return (
    <>
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
            <h2 className="font-bold">Todos los Lunes-Miércoles</h2>
         </div>
            <h5 className="font-bold">Sinopsis:</h5>
            <br/>
            <p className="text-base text-justify">
            En el místico Reino de Lumina, el equilibrio del mundo se
            ve amenazado cuando el Orbe Luminaris , un artefacto ancestral que
            controla los elementos, desaparece y fragmenta el orden natural.
            Eira, una joven marcada por un misterioso símbolo en su mano, es
            guiada por una visión hacia un bosque prohibido, donde descubre que
            solo ella puede restaurar el orbe y salvar su mundo.</p>
            <br/>
            <p className="text-base text-justify">Acompañada por
            Kael, un guardián desterrado, Eira emprende un peligroso viaje a
            través de islas flotantes y paisajes mágicos, enfrentando desafíos
            que pondrán a prueba su valentía y su fe en sí misma. Pero, a medida
            que descubre los secretos del orbe, Eira se da cuenta de que su
            misión no es simplemente restaurar el equilibrio perdido, sino
            reimaginar un nuevo futuro para Lumina.</p>
            <br/>
            <p className="text-base text-justify">"Lumina" es una épica
            historia de magia, coraje y transformación que te llevará a un mundo
            donde los héroes se forjan enfrentando lo imposible.</p>

            <div className="flex justify-evenly items-center h-12">
                
                    <div className="flex justify-center items-center">
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
                        <button className="bg-[#e00d0c] text-white rounded-sm w-[100] h-[30]" >Calificar</button>
                </div>
            </div>

            <div className=" w-full h-28 flex justify-center items-center">
                <button className="flex justify-center items-center font-bold rounded-sm text-white bg-[#e00d0c]">Capitulo 1 <span><Image src="/rightArrow.svg" alt="right arrow" svg width={20} height={20}/>    </span></button>
            </div>
        </section>
        {/* Chapters list */}
        <section className="bg-white h-96 w-full md:order-1">
          {/* Chapters Section */}
          <section className="p-4">
            <div className="flex bg-white w-full h-28 border mb-[4] hover:bg-gray-300 md:hover:cursor-pointer">
                <div className="bg-white w-1/5 ">
                    <Image className="h-full w-full"
                    src="/images/comicreview.png"
                    alt="hero"
                    width={100}
                    height={100}
                    />
                </div>
                <div className="w-4/5 p-4">
                    <h3 className="font-black">Capitulo 1</h3>
                    <p className="font-semibold">07/02/2025</p>
                    <div className="flex">
                        <Image src="/heart.svg" alt="heart svg" width={20} height={20}/>
                        <p className="text-sm">22,500</p>
                    </div>
                </div>
            </div>
            <div className="flex bg-white w-full h-28 border hover:bg-gray-300 md:hover:cursor-pointer">
                <div className="bg-white w-1/5">
                    <Image className="h-full w-full"
                    src="/images/comicreview.png"
                    alt="hero"
                    width={100}
                    height={100}
                    />
                </div>
                <div className="w-4/5 p-4">
                    <h3 className="font-black ">Capitulo 2</h3>
                    <p className="font-semibold" >07/02/2025</p>
                    <div className="flex">
                        <Image src="/heart.svg" alt="heart svg" width={20} height={20}/>
                        <p className="text-sm">22,500</p>
                    </div>
                </div>
            </div>
          </section>
        </section>
        </div>
    </div>
    {/* Comic-review-page-section End */}
    </>
  );
};

export default ComicIdPage;