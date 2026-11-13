import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold mb-3">Mi Proyecto React</h1>

            <p className="text-gray-400 mb-10">
                Selecciona una sección para comenzar
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                <Link
                    to="/app"
                    className="bg-purple-600 hover:bg-purple-700 p-8 rounded-xl text-center transition"
                >
                    <h2 className="text-2xl font-bold mb-2">App</h2>
                    <p>App con React + Tailwind</p>
                </Link>
                
                <Link
                    to="/flex"
                    className="bg-purple-600 hover:bg-purple-700 p-8 rounded-xl text-center transition"
                >
                    <h2 className="text-2xl font-bold mb-2">Flex</h2>
                    <p>Diseños con Flexbox</p>
                </Link>

                <Link
                    to="/grid"
                    className="bg-purple-600 hover:bg-purple-700 p-8 rounded-xl text-center transition"
                >
                    <h2 className="text-2xl font-bold mb-2">Grid</h2>
                    <p>Diseños con Grid</p>

                </Link>
                <Link
                    to="/form"
                    className="bg-purple-600 hover:bg-purple-700 p-8 rounded-xl text-center transition"
                >
                    <h2 className="text-2xl font-bold mb-2">Form</h2>
                    <p>Formulario</p>
                </Link>
            </div>
        </div>
    );
}
