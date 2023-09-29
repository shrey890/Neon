import { Link } from "react-router-dom"

export const Footer = () => {
    return (

        <footer className="bg-white rounded  shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Shrey</Link>
                </span>
                <ul className="flex flex-wrap cursor-pointer items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a  rel="noreferrer" href="https://github.com/shrey890" target="_blank" className="  mr-4 hover:underline md:mr-6 ">Github</a>
                    </li>
                    <li>
                        <a  rel="noreferrer" href="https://twitter.com/shrey4875" target="_blank" className="mr-4 hover:underline md:mr-6">Twitter</a>
                    </li>
                    <li>
                        <a  rel="noreferrer" href="https://www.linkedin.com/in/shrey911/" target="_blank" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
                    </li>
                    <li>
                        <a  rel="noreferrer" href="mailto:shrey90@proton.me" target="_blank" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}
