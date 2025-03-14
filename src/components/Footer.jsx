import { Github,Linkedin} from "lucide-react";

function Footer (){
    return(
        <>
        <section className="flex flex-col justify-center items-center gap-6 bg-[#EFEEEB] h-38  mt-50 
                            sm:flex-row sm:justify-between sm:h-36 sm:px-30">
            <div className="flex flex-row justify-center gap-6 items-end">
                <a className=" text-base  font-bold  text-[#43403B]">Get in touch</a>
                <div className=" flex flex-row justify-end gap-4
                                ">
        {/* Logo */}
                    <div className =" w-6 h-6 rounded-full bg-[#43403B] flex justify-center items-center">
                        <Linkedin strokeWidth={1.5} className="w-4 h-4 text-[#EFEEEB] fill-white" />
                    </div>
                    <div className="relative w-[24px] h-[24px] rounded-full bg-[#43403B]">
                        <Github className="w-5 h-5 text-[#EFEEEB] fill-white absolute top-[5.5px] left-[2.1px]" />
                    </div>
                    <img className="w-6 h-6" src="./src/picture/img/IconGoogle.png"/>
                </div>
            </div>
            <a className="underline text-base cursor-pointer">Home page</a>
            
        </section>
        </>
    )
}
export default Footer 

