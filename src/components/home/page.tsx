import { Label } from "@/components/ui/label"
import Image from 'next/image'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"


export default function HomePage() {
    return (
        <div className='flex flex-col mt-12 md:mt-16 gap-5 items-center dark:text-white'>

            <Image
                src="/MH.png"
                width={200}
                height={200}
                alt="Picture of the author"
                className="rounded-full mt-10"
            />

            <Card className="mx-[5%] mb-[5%] border border-cyan-300 md:mx-[30%]">
                <CardHeader>
                    <CardTitle>Hello</CardTitle>
                    <CardDescription></CardDescription>
                </CardHeader>
                <CardContent>

                    <p>My name is Maung Maung Htay. I am Software Engineer.
                        I have 7 Years experiences. In my career, I developed various projects including Api development , various reports of Excel and CSV, Data Analysis and etc...</p>
                    <p>
                        And I am always continuing learning of new technology. I learned and am learning programmings and other technologys like FastApi, Flask, React, NextJs, TypeScript, Tailwind CSS, Data Analysis and Machine Learning , AWS from Udemy. I am already familiar with Docker, Docker Compose and Kubernetes(Learning). I want to utilize my experiences and want to search new experiences from best environment.</p>
                </CardContent>
                <CardFooter>
                    <p>Please kindly check my <Link className="border-b border-blue-500" href="/resume">Resume</Link> and
                        <Link className="border-b border-blue-500" href="/history"> Work Background</Link></p>


                </CardFooter>
            </Card>

            {/* <Label htmlFor="" className="mt-10 italic font-extralight text-8xl tracking-wide">Hello</Label>


            <Label htmlFor="" className="mt-10 italic font-extralight text-2xl md:text-4xl mx-10 tracking-wide">
                <p>
                   
                </p>

            </Label> */}

            {/* <Label htmlFor="" className="mt-10 italic font-extralight text-3xl md:text-5xl tracking-wide">I am Full Stack Developer</Label>

            <Label htmlFor="" className="mt-10 italic font-extralight text-3xl md:text-5xl tracking-wide">I am From Myanmar</Label> */}


        </div>
    )
}
