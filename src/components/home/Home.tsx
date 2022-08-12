import Ghost from "../../assets/ghost-img.png"

export function Home() {
  return (
    <div className="flex flex-col justify-center items-center ml-4 md:grid grid-flow-col gap-16 md:mt-20">
      <div>
        <h1 className="text-purple-500 font-bold text-7xl mb-5 lg:text-9xl" >
          404...
        </h1>
        <h2 className="text-green-400 font-semibold text-3xl mb-8 lg:mb-10">
          Repito, 404. Câmbio!
        </h2>
        <div className="text-gray-400 font-normal text-lg mb-3">
          <p>Acho que você chegou ao limite.</p>
          <p>A página que você requisitou não foi encontrada.</p>
        </div>
          <button className="p-4 bg-violet-700 text-white rounded lg:mt-8 hover:bg-violet-900 transition-colors">
            <a href="https://github.com/EvanderInacio/Feedback" target="_blank">
              ACESSAR PÁGINA DO PROJETO
            </a>
          </button>  
      </div>
      <div className="w-56 mt-8 lg:w-96 ">
        <img className="animate-bounce"
         src={Ghost} alt="Fantasma" />
      </div>
    </div>
  )
}