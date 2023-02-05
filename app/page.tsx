export default function Home() {
  return (
    <main className="flex items-center justify-center bg-base w-[100vw] h-[100vh]">
      <div className="bg-white max-w-5xl max-h-96 w-full h-full rounded-tl-[60px] rounded-br-[60px] flex flex-row justify-between overflow-hidden">
        <div className="w-1/2 bg-black">
          esquerdo
        </div>
        <div className="w-1/2 bg-blue-800">
          direito
        </div>
      </div>
    </main>
  )
}
