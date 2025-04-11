const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className={'flex justify-center items-center py-4 px-12'}>
                &copy; {year} Burger Town. All rights reserved
        </footer>
    );
};

export default Footer;