import { menuLink, navLinks, socialMedia } from "../constans";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="px-2 py-8 absolute z-10 w-full  bg-black border-b-2 border-green">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                <img src="/src/assets/images/logo.svg" alt="logo"
                width={183.17}
                height={38} />
                </a>

                <ul className="flex items-center gap-16 text-white font-dmsans font-400 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="max-lg:hidden">
                    <Button label="Get Started" fullWidth />
                </div>

                <div className="hidden max-lg:block ml-auto" onClick={() => setIsOpen(!isOpen)}>
                    <img src="/src/assets/icons/hamburger.svg" alt="hamburger" />
                </div>
                {isOpen && (
                    <ul className="absolute top-full w-full bg-black text-white font-dmsans text-base flex flex-col items-center max-lg:block">
                        {navLinks.map((item) => (
                            <li key={item.label} className=" ml-5 w-[189px] py-5 border-b-2 border-white mt-5">
                                <a href={item.href} onClick={() => setIsOpen(false)}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        {menuLink.map((item) => (
                            <li key={item.label} className="ml-5 w-[189px] py-5 border-b-2 border-white mt-5 mb-5 font-dmsans text-base">
                                <a href={item.href} onClick={() => setIsOpen(false)}>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <div className="flex items-center gap-5 mt-10">
                            {socialMedia.map((icon) => (
                                <div className="flex justify-center items-center w-12 h-12 rounded-full"
                                key={icom.alt}>
                                    <img src={icon.src} alt={icon.alt} 
                                    width={40}
                                    height={40}/>
                                </div>
                            ))}
                        </div>
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default Navbar