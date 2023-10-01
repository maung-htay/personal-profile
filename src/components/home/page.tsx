import { Label } from "@/components/ui/label"
import Image from 'next/image'

export default function HomePage() {
    return (
        <div className='flex flex-col mt-16 items-center text-center dark:text-white'>

            <Image
                src="/MH.png"
                width={250}
                height={250}
                alt="Picture of the author"
                className="rounded-full mt-10"
            />

            <Label htmlFor="" className="mt-10 italic font-extralight text-8xl tracking-wide">Hello</Label>


            <Label htmlFor="" className="mt-10 italic font-extralight text-4xl md:text-6xl tracking-wide">My name is Maung Htay</Label>

            <Label htmlFor="" className="mt-10 italic font-extralight text-3xl md:text-5xl tracking-wide">I am Full Stack Developer</Label>

            <Label htmlFor="" className="mt-10 italic font-extralight text-3xl md:text-5xl tracking-wide">I am From Myanmar</Label>


        </div>
    )
}
