import NavBar from "@/components/NavBar";

export default function loading(){
    return(
        <main className="bg-base w-[100vw] h-[100vh]">
            <NavBar />
            <div className='flex items-center justify-center mt-20 flex-col'>
                <button 
                    className='bg-blue-800 px-12 py-6 text-lg rounded-3xl text-white drop-shadow-md border-2 border-blue-500 hover:bg-blue-600 ease-in-out transition-colors active:bg-blue-900'>
                    <svg className="animate-spin h-12 w-12 border-t border-r border-t-green border-r-blue rounded-full" viewBox="20 20 24 24"></svg>
                </button>

                <div className='flex flex-row mt-12 text-white mb-60 justify-around w-full'>
                    <div className='w-1/4 bg-black h-40 rounded-3xl px-3 py-5 flex flex-col items-center drop-shadow-lg'>
                        <svg className="animate-spin h-12 w-12 border-t border-r border-t-green border-r-blue rounded-full" viewBox="20 20 24 24"></svg>
                    </div>

                    <div className='w-1/4 bg-blue-800 h-40 rounded-3xl px-3 py-5 flex flex-col items-center drop-shadow-lg'>
                        <svg className="animate-spin h-12 w-12 border-t border-r border-t-green border-r-blue rounded-full" viewBox="20 20 24 24"></svg>
                    </div>
                </div>

                <button className='bg-red-800 py-8 px-16  drop-shadow-xl rounded-3xl border-2 border-red-500 hover:bg-red-700 active:bg-red-900 ease-in-out transition-colors'>
                    <svg className="animate-spin h-12 w-12 border-t border-r border-t-green border-r-blue rounded-full" viewBox="20 20 24 24"></svg>
                </button>
            </div>


        </main>
    )
}