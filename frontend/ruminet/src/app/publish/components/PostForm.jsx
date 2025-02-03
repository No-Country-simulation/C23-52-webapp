import React from "react";

export default function PostForm() {
  return (
    <>
      <form className=" text-black flex flex-col">
        <label className="mt-3" htmlFor="Genero">Genero</label>
        <select
          autoFocus
          className="w-[100px] border rounded-lg p-1"
          name=""
          id="Genero"
        >
          <option value="Novela">Novela</option>
          <option value="Novela">Terror</option>
          <option value="Novela">Anime</option>
        </select>
        <label className="mt-3" htmlFor="title">Titulo de la serie</label>
        <input className="px-1 border rounded-lg p-1" id="title" type="text" />
        <label className="mt-3" htmlFor="sinopsis">Sinopsis</label>
        <textarea className="border rounded-lg px-1.5 py-0.5" id="sinopsis" />
        <label className="mt-3" htmlFor="email">Email</label>
        <input className="border rounded-lg p-1 mb-2" id="email" type="email" />
        <p className="text-black mb-10">
          Necesitamos una direccion de email para contactarte por temas
          relacionados con tu trabajo
        </p>
        <div className="flex gap-10">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold ">Click to upload</span> or drag
                  and drop
                </p>
                <p className="md:text-lg text-xs text-center text-gray-500 dark:text-gray-400">
                La imagen debe ser de 1080x1080 px y debe pesar menos de 500 kb. Solo se admiten los formatos JPG, JPEG y PNG.
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold ">Click to upload</span> or drag
                  and drop
                </p>
                <p className="md:text-lg text-xs text-center text-gray-500 dark:text-gray-400">
                La imagen debe ser de 1080x1920 px y debe pesar menos de 700 kb. Solo se admiten los formatos JPG, JPEG y PNG.
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
      </form>
    </>
  );
}
