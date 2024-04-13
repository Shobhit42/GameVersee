import Image from "next/image";

export default function Logo() {

    return (
        <div className=" flex cursor-pointer">
            <Image 
                src="/Vector.png"
                alt="Vercel Logo"
                className="max-w-full"
                width={40}
                height={20}
                priority
            />
          
      <div className="  hover:text-[#1eff1e] ml-2">GAMEVERSE</div>
          </div>
    );
}