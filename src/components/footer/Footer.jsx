const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className={'flex justify-center items-center py-4 px-12 text-sm md:text-normal'}>
                &copy; {year} Burger Town. All rights reserved
        </footer>
    );
};

export default Footer;