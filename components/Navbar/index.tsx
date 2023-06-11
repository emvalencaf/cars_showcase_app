
// components
import { CustomButton, Logo } from "..";


const Navbar = () => {
    return (
        <nav className='max-w-[1440px] mx=auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Logo />
            <CustomButton
                title="Sign In"
                btnType="button"
                containerStyles='text-primary-blue rounded-full bg-white min--w-[130px]'
            />
        </nav>
    );
};

export default Navbar;