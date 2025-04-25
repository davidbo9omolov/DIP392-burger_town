import {clsx} from "clsx";
import {useState} from "react";
import {Link} from 'react-router-dom';
import { motion } from "framer-motion";
import {WebRoutes} from '../../constants/routes';
import BigBurger from '../../assets/images/big-burger.svg';
import BurgerCards from "../burger-cards/BurgerCards";

const LinkPages = {
    OrderNow: 'OrderNow',
    ViewMenu: 'ViewMenu',
}

const SectionOneHomePage = () => {
    const active = LinkPages.OrderNow
    const [activeCard, setActiveCard] = useState(2);

    return (
        <div className={'flex flex-col h-full sm:h-[90vh] px-12'}>
            <div className={'flex relative w-full h-full'}>
                <div className={'flex flex-col items-center lg:items-normal  w-full lg:w-1/2 mt-20 sm:mt-40'}>
                    <h1 className={'font-kavoon tracking-wider text-lg xs:text-2xl sm:text-4xl md:text-6xl'}>FLAVOURFUL MOMENTS <br/>
                        AT OUR BURGER TOWN
                    </h1>
                    <p className={'my-7 text-primary/80 text-xs sm:text-sm md:text-normal'}>
                        Fast food is a quick and delicious option for any meal. Burger Town offers fresh, flavorful
                        burgers,
                        crispy fries, and refreshing drinks. Our menu is designed for convenience and great taste.
                        Whether
                        dining in or on the go, Burger Town delivers satisfying meals at affordable prices. Try us
                        today!
                    </p>
                    <div className={'flex mt-10 md:mt-0'}>
                        <button
                            className={clsx('w-fit p-2 px-4 rounded-xl mr-5 border-2 hover:text-primary hover:bg-secondary hover:border-[#EFBB8B]',
                                active === LinkPages.OrderNow ? 'bg-secondary text-primary border-[#EFBB8B]' : 'text-secondary border-transparent'
                            )}>
                            Order Now
                        </button>
                        <Link to={WebRoutes.MENU}
                              className='w-fit p-2 px-4 rounded-xl text-secondary border-2 border-transparent hover:text-primary hover:bg-secondary hover:border-[#EFBB8B]'>
                            View menu
                        </Link>
                    </div>
                </div>
                <div className={'w-auto lg:w-1/2 flex items-center justify-center'}>
                    <div className={'hidden lg:flex justify-center items-center absolute top-1/2 -translate-y-[45%] w-[55vw]'}>
                        <motion.img
                            src={BigBurger}
                            className="w-full h-auto z-30"
                            animate={{y: [-25, 0, -25], opacity: 1}}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                            }}
                        />
                        <span
                            className={'absolute block bg-primary opacity-[0.01] rounded-full w-[80%] h-[80%] z-20 top-1/2 -translate-y-[55%] -translate-x-[50%] left-[45%]'}/>
                        <span
                            className={'absolute block bg-primary opacity-[0.01] rounded-full w-[70%] h-[70%] z-30 top-1/2 -translate-y-[55%] -translate-x-[50%] left-[45%]'}/>
                    </div>
                </div>
            </div>
            <div className={'flex gap-6 z-30 flex-wrap justify-center xl:justify-start mt-8'}>
                {Array.from(Array(5).keys()).map((_, i) =>
                    <BurgerCards key={i} index={i} active={activeCard === i} setActiveCard={setActiveCard}/>
                )}
            </div>
        </div>
    );
};

export default SectionOneHomePage;