import Chicken from '../../assets/images/chicken.svg'
import Pizza from '../../assets/images/pizza.svg'
import Polygon from '../../assets/images/polygon.svg'
import FastFoodCards from "../fast-food-cards/FastFoodCards";
import ResponsiveCarousel from "../responsive-carousel/ResponsiveCarousel";

import BurgerCombo from '../../assets/images/beef_burger_combo.jpg'
import BBQBurgerCombo from '../../assets/images/bbq_beef_burger_combo.jpg'
import CheeseBurgerCombo from '../../assets/images/cheese_burger_combo.jpg'
import ChickenBurgerCombo from '../../assets/images/chicken_burger_combo.jpg'

import DoubleBeefCombo from '../../assets/images/double_beef_burger_combo.jpg'
import VegBurgerCombo from '../../assets/images/veg_burger_combo.jpg'
import MangoLassi from '../../assets/images/mango_lassi.png'
import GarlicSouce from '../../assets/images/garlic_sauce.jpg'
import Souce from '../../assets/images/bbq_sauce.jpg'

const SectionTwoHomePage = () => {

    const images = [
        {src: BurgerCombo, alt: 'Burger Combo', title: 'BBQ Beef Burger Combo'},
        {src: BBQBurgerCombo, alt: 'BBQ Burger Combo', title: 'BBQ Beef Burger Combo'},
        {src: CheeseBurgerCombo, alt: 'Cheese Burger Combo', title: 'Cheese Burger Combo'},
        {src: ChickenBurgerCombo, alt: 'Chicken Burger Combo', title: 'Chicken Burger Combo'},
    ]

    return (
        <div className={'flex flex-col items-center p-8 w-full mt-20 bg-background-light relative overflow-hidden'}>
            <img src={Chicken} alt={'chicken'} className={'absolute top-0 sm:top-1/3 left-0 w-[7%] min-w-[100px]'}/>
            <img src={Pizza} alt={'pizza'}
                 className="absolute bottom-0 sm:bottom-auto lg:-top-[10px] right-0 w-[10%] min-w-[100px]"/>
            <div className={'flex w-[70%] md:w-[80%] justify-between relative'}>
                <img src={Polygon} alt={'polygon'} className={'hidden lg:block absolute left-0 -bottom-[40px] h-full'}/>
                <div className={'hidden lg:flex items-center w-1/2 gap-5'}>
                    <div className={'flex flex-col gap-5 w-[60%] min-w-[220px]'}>
                        <FastFoodCards image={DoubleBeefCombo} className={'w-full h-auto object-cover rounded-md'}/>
                        <div className={'flex gap-5 w-full'}>
                            <FastFoodCards image={VegBurgerCombo} className={'w-[80%] h-auto object-cover rounded-md'}/>
                            <FastFoodCards image={Souce} className={'w-[15%] h-auto object-cover rounded-md'}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-5 w-[40%] justify-center mb-10 min-w-[140px] max-w-[200px]'}>
                        <FastFoodCards image={MangoLassi} className={'w-full h-auto object-cover rounded-md'}/>
                        <FastFoodCards image={GarlicSouce} className={'w-full h-auto object-cover rounded-md'}/>
                    </div>
                </div>
                <div className={'w-full lg:w-[40%] flex flex-col justify-center'}>
                    <h1 className={'text-primary text-lg text-center lg:text-3xl lg:text-left font-bold mb-5 '}>We
                        Always Provide Quality Fast Foods For
                        you</h1>
                    <p className={'text-primary/80 text-2xs sm:text-xs lg:text-normal'}>Burger Town is your go-to
                        destination for
                        high-quality fast food made with fresh, flavorful ingredients. We’re passionate about crafting
                        delicious burgers, crispy chicken, and satisfying sides that hit the spot every time. Our
                        commitment to quality and customer satisfaction means every meal is prepared with care and
                        served with a smile. Whether you’re in for a quick bite or a casual meal with friends, Burger
                        Town delivers taste, freshness, and great service in every visit.</p>
                </div>
            </div>
            <div className={'flex w-[80%] mt-12'}>
                <ResponsiveCarousel/>
                <div className={'hidden lg:flex w-full gap-12'}>
                    {images.map((item, i) => (
                        <FastFoodCards key={i} className={'w-[250px] h-[150px]'} item={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionTwoHomePage;