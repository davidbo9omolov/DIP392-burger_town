import TestImage from '../../assets/images/image.png'
import Chicken from '../../assets/images/chicken.svg'
import Pizza from '../../assets/images/pizza.svg'
import Polygon from '../../assets/images/polygon.svg'
import FastFoodCards from "../fast-food-cards/FastFoodCards";

const SectionTwoHomePage = () => {
    return (
        <div className={'flex flex-col items-center p-5 w-full mt-20 bg-background-light relative overflow-hidden'}>
            <img src={Chicken} alt={'chicken'} className={'absolute top-1/3 left-0 w-[7%] min-w-[100px]'}/>
            <img src={Pizza} alt={'pizza'} className={'absolute -top-[10px] right-[0] w-[10%] min-w-[100px]'}/>
            <div className={'flex w-[70%] justify-between relative'}>
                <img src={Polygon} alt={'polygon'} className={'absolute left-0 -bottom-[40px] h-full'}/>
                <div className={'flex w-1/2 gap-5'}>
                    <div className={'flex flex-col gap-5 w-[60%] min-w-[220px]'}>
                        <FastFoodCards image={TestImage} className={'w-full h-auto object-cover rounded-md'}/>
                        <div className={'flex gap-5'}>
                            <FastFoodCards image={TestImage} className={'w-[80%] h-auto object-cover rounded-md'}/>
                            <FastFoodCards image={TestImage} className={'w-[20%] h-auto object-cover rounded-md'}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-5 w-[40%] justify-center mb-10'}>
                        <FastFoodCards image={TestImage} className={'w-full h-auto object-cover rounded-md'}/>
                        <FastFoodCards image={TestImage} className={'w-full h-auto object-cover rounded-md'}/>
                    </div>
                </div>
                <div className={'w-1/3 flex flex-col justify-center'}>
                    <h1 className={'text-primary text-3xl font-bold mb-5'}>We Always Provide Quality Fast Foods For
                        you</h1>
                    <p className={'text-primary/80'}>Burger Town is your go-to destination for high-quality fast food made with fresh, flavorful ingredients. We’re passionate about crafting delicious burgers, crispy chicken, and satisfying sides that hit the spot every time. Our commitment to quality and customer satisfaction means every meal is prepared with care and served with a smile. Whether you’re in for a quick bite or a casual meal with friends, Burger Town delivers taste, freshness, and great service in every visit.</p>
                </div>
            </div>
            <div className={'flex w-[70%] mt-12 gap-12'}>
                {Array.from(Array(3).keys()).map((_, i) => (
                    <FastFoodCards key={i} className={'w-[250px] h-[150px]'}/>
                ))}
            </div>
        </div>
    );
};

export default SectionTwoHomePage;