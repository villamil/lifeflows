import type { NextPage } from "next";
import Header from "../components/Header";
import LoginIcon from "../icons/LoginIcon";
import SupportIcon from "../icons/SupportIcon";

const Login: NextPage = () => {
  return (
    <>
      <Header />
      <div className="h-176" style={{ backgroundColor: "white" }}>
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap justify-center h-full ">
          <div className="w-full p-8 lg:p-16 px-16 lg:px-32 mt-24">
            <h1 className="text-gray-800 text-4xl">
              <span className="inline-block">
                <LoginIcon />
              </span>
              Acceder
            </h1>

            <label className="block mt-6 text-sm">Correo Electronico:</label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="block mt-6 text-sm">Contraseña:</label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <div className="mt-6">
              <button className="uppercase w-full py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                Entrar
              </button>
            </div>
            <div className="mt-4 flex justify-end">
              <a href="#" className="flex items-center">
                <div className="w-5 h-5 inline-block">
                  <SupportIcon />
                </div>
                ¿Perdiste tu contraseña?
              </a>
            </div>
          </div>
          <span className="h-px w-112 lg:w-px lg:h-112 bg-gray-300 mb-4 sm:mb-12 mt-8 lg:mt-24"></span>
          <div className="w-full text-center p-16  lg:mt-24">
            <h1 className="text-gray-800 text-4xl">Registrate</h1>
            <p className=" lg:px-10 mt-4">
              Registrarte te permite tener acceso y control del estatus de tus
              órdenes, así como de tu historial de compras. Solo llena los
              campos y te daremos tu cuenta de inmediato. Solo te preguntaremos
              lo necesario para hacer tu proceso de compra lo más rápido y fácil
              posible.
            </p>
            <button className="uppercase mt-8 py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
              Registrarme
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
