// components
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="flex justify-center items-center">
            <Image
                src="assets/logo.svg"
                alt="Car Hub Logo"
                width={118}
                height={18}
                className='object-contain'
            />
        </Link>
    )
};

export default Logo;