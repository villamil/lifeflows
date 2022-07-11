import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import { trpc } from "../utils/trpc";

const HomePage: NextPage = () => {
  const hello = trpc.useQuery(["hello", { text: "client" }]);
  console.log(hello);
  return (
    <>
      <div className="bg-[url('/pilates.png')] bg-cover w-full h-full bg-no-repeat bg-right-top h-112 sm:h-176 lg:h-288">
        <Header />
        <div className="container mx-auto px-6 flex relative lg:py-40">
          <div className="w-4/5 sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
            <span className="w-20 h-2  bg-white mb-4 sm:mb-12"></span>
            <h1 className="font-bebas-neue uppercase text-lg sm:text-4xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              Te presentamos
              <span className="text-2xl sm:text-5xl">
                Life Flows Pilates Studio
              </span>
            </h1>
            <p className="text-sm sm:text-base text-gray-700 dark:text-white">
              Dimension of reality that makes change possible and
              understandable. An indefinite and homogeneous environment in which
              natural events and human existence take place.
            </p>
            <div className="flex  mt-8 ">
              <a
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              >
                Agendar
              </a>
              <a
                href="#"
                className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
              >
                Mas Información
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-700 to-gray-800 py-8">
        <div className="container flex flex-col md:flex-row gap-2 mx-auto p-8">
          <div className=" w-full flex flex-col items-center justify-center p-12 text-center">
            <h2 className="uppercase text-amber-500 text-4xl">
              UN POCO ACERCA DE MÍ
            </h2>
            <p className="text-amber-50 mt-4 text-lg">
              Ponerte en forma no debe ser una experiencia tortuosa. Algunas
              veces los músculos se sentirán adoloridos, pero ejercitarte debe
              ser divertido y no sinónimo de sufrimiento. Me dedico a cambiar
              vidas; y esto no solo es un privilegio para mí, sino que, además,
              es increíblemente satisfactorio y gratificante.
            </p>
            <p className="text-amber-50 mt-4 text-lg">
              Como entrenador(a) 100% acreditado(a), creo firmemente en los
              beneficios que tiene el ejercicio en todos los aspectos de
              nuestras vidas. Si te inscribes en mis servicios, disfrutarás de
              una increíble agenda de diversas clases y, además, obtendrás
              muchos consejos y recursos para llevar una vida saludable. ¿Estás
              listo para hacer un cambio? Contáctame para obtener más
              información.
            </p>
          </div>
          <div className=" w-full relative ">
            <Image
              src="/pesas.png"
              layout="responsive"
              objectFit="cover"
              alt="Pilates"
              height={600}
              width={700}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
