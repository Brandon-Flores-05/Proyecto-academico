function App() {
  
  return (
    <>
      <h1 className="bg-blue-600 text-white py-4 my-5 text-center text-3xl font-bold">
      My App con Tailwind!
      </h1>

      <div className="flex justify-center">
        <button className="bg-sky-700 px-4 py-2 rounded text-white hover:bg-sky-900 mx-auto">
        Enviar
      </button>
      </div>

      <div className="border w-1/2 my-5 mx-auto text-center bg-gray-300 rounded p-2">
        Este es un contenedor 
      </div>

    </>
  )
}

export default App