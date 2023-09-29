import { Link } from 'react-router-dom'
import Logo from '../Assets/Logo.png'
import { Button } from '../Components/Button'
import { useEffect } from 'react'
export const PageNotFound = () => {
    useEffect(()=>{
        document.title = `Page not found`
    })
    return (
        <main>
            <section className="flex-flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4">
                    <p className="pb-2 dark:text-white   font-semibold">Error 404</p>
                    <h1 className="pb-4 text-5xl dark:text-white font-bold lg:text-6xl">Hey Buddy</h1>
                    <p className="pb-8 text-xl dark:text-white text-gray-700 my-10 font-semibold">
                        We can't seem to find the page <br />
                        you are looking for.
                    </p>

                    <div className="home__img justify-self-center">
                        <img
                            src={ Logo }
                            className="w-64  animate-floating lg:w-[400px]"
                            alt="404"
                        />
                        <div className="home__shadow mx-auto h-8 w-36 animate-shadow rounded-[50%] bg-gray-900/30 blur-md lg:w-64"></div>
                    </div>
                </div>
                <div className='flex justify-center my-4'>
                    <Link to="/">
                        <Button>Back to Neon</Button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
