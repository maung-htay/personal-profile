import { getAllResumes } from "@/lib/resume"
import { Label } from "@/components/ui/label"
import type { Metadata } from 'next'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Resume',
    description: 'Created by @maung-htay',
}
const Resume = async () => {
    const resumeData: Resume = getAllResumes()
    const data = resumeData;
    // console.log(data);
    return (
        <div className="mt-16 flex flex-col items-center mb-20">
            <Label className="mt-10 tracking-wide text-3xl font-extralight">履歴書</Label>

            <div className="flex flex-row mt-10 w-full px-[2%] gap-1 md:px-[30%] md:gap-32">
                {/* profile */}
                <div className="flex text-left">

                    <div className="flex flex-col w-24 md:w-40">
                        <Label htmlFor="" className="mt-3 tracking-wide">ふりがな : </Label>
                        <Label htmlFor="" className="mt-3 tracking-wide">氏　　名　: </Label>
                        <Label htmlFor="" className="mt-3 tracking-wide">生年月日 : </Label>
                        <Label htmlFor="" className="mt-3 tracking-wide">国籍: </Label>
                        <Label htmlFor="" className="mt-3 tracking-wide ">電話番号携帯 : </Label>
                        <Label htmlFor="" className="mt-3 tracking-wide ">Email: </Label>
                        <Label htmlFor="" className="mt-3 tracking-wide ">国現住所: </Label>
                    </div>
                    <div className="flex flex-col">
                        {Object.entries(data.info).map(([key, value]) => (
                            <Label key={key} className="mt-3">
                                {value}
                            </Label>
                        ))}
                    </div>

                </div>
                {/* image */}

                <div>
                    <Image
                        src="/Mg.jpeg"
                        width={170}
                        height={170}
                        alt="Picture of the author"

                    />

                </div>
            </div>
            <Label className="mt-10 tracking-wide text-2xl md:text-3xl font-extralight">学歴･職歴（各項目ごとにまとめて書く）</Label>
            <div className="flex flex-row mt-5 w-full px-[1%] md:px-[30%]">
                {/* education */}
                {/* <div className="flex flex-col">
                    {data['edu-background'].map((education, index) => (
                        <div key={index} className="flex mt-3 bg-slate-400 border rounded-md p-2 justify-between gap-3 items-baseline w-[100%]">
                            <Label className="">{education.title} </Label>
                            <Label className="font-extralight border rounded-sm bg-cyan-400 p-1">{education.date}</Label>


                        </div>
                    ))}
                </div> */}
                <Card className="border border-cyan-300 w-full m-0 md:w-[650px]">
                    <CardContent>
                        <div className="flex flex-col w-full gap-4 md:p-2">
                            {data['edu-background'].map((education, index) => (
                                <div key={index} className="flex flex-row space-y-1 justify-between items-baseline">
                                    <div className="flex flex-row gap-1">
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <Label className="tracking-wide">{education.title} </Label>
                                    </div>

                                    <Label className="border dark:border-cyan-200 border-slate-400 rounded-md p-1">{education.date}</Label>
                                </div>
                            ))}
                        </div>

                    </CardContent>
                </Card>
            </div>
            <Label className="mt-10 tracking-wide text-3xl font-extralight">職歴</Label>
            <div className="flex flex-row mt-5 w-full px-[1%] md:px-[30%]">
                {/* education */}
                {/* <div className="flex flex-col">
                    {data['work-history'].map((education, index) => (
                        <div key={index} className="flex mt-3 bg-slate-400 border rounded-md p-2 justify-between gap-3 items-baseline">
                            <Label className="">{education.companyName} </Label>
                            <Label className="font-extralight border rounded-sm bg-cyan-400 p-1">{education.date}</Label>


                        </div>
                    ))}
                </div> */}
                <Card className="border border-cyan-300 w-full md:w-[650px]">
                    <CardContent>
                        <div className="flex flex-col w-full gap-4 md:p-2">
                            {data['work-history'].map((education, index) => (
                                <div key={index} className="flex flex-row space-y-1 justify-between items-baseline">
                                    <div className="flex flex-row gap-1">
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <Label className="tracking-wide">{education.companyName} </Label>
                                    </div>
                                    <Label className="border dark:border-cyan-200 border-slate-400 rounded-md p-1">{education.date}</Label>
                                </div>
                            ))}
                        </div>

                    </CardContent>
                </Card>

            </div>
            <Label className="mt-10 tracking-wide text-3xl font-extralight">免許・資格</Label>
            <div className="flex flex-row  mt-5 w-full px-[1%] md:px-[30%] mb-10">
                {/* <div className="flex flex-col">
                    {data['qualification'].map((education, index) => (
                        <p key={index} className="flex mt-3 bg-slate-400 border rounded-md p-2 justify-between gap-3 items-baseline ">
                            <Label>{education.title} </Label>
                            <Label className="font-extralight border rounded-sm bg-cyan-400 p-1">{education.date}</Label>


                        </p>
                    ))}
                </div> */}
                <Card className="border border-cyan-300 w-full m-0 md:w-[650px]">
                    <CardContent>
                        <div className="flex flex-col w-full gap-4 md:p-2">
                            {data['qualification'].map((education, index) => (
                                <div key={index} className="flex flex-row space-y-1 justify-between items-baseline">
                                    <div className="flex flex-row gap-1">
                                        <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                        <Label className="tracking-wide">{education.title} </Label>
                                    </div>
                                    <Label className="border dark:border-cyan-200 border-slate-400 rounded-md p-1">{education.date}</Label>
                                </div>
                            ))}
                        </div>

                    </CardContent>
                </Card>
            </div>
            <Label className="mt-5 tracking-wide text-3xl font-extralight">専門分野</Label>
            <div className="flex flex-row mt-5 w-full px-[1%] gap-6 md:px-[30%] md:gap-32">
                {/* <div className="flex flex-col border border-blue-200 rounded-md p-4 bg-slate-400">
                    <Label htmlFor="" className="mt-3 font-extralight tracking-wide ">{data["specialized-field"].name}</Label>
                    <Label htmlFor="" className="mt-3 font-extralight tracking-wide ">{data["specialized-field"].languages}</Label>
                </div> */}
                <Card className="border border-cyan-300 w-full md:w-[650px]">
                    <CardContent>
                        <div className="flex flex-col w-full gap-4 md:p-2">
                            <div className="flex flex-row gap-1 items-baseline mt-2">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <Label htmlFor="" className="tracking-wide ">{data["specialized-field"].name}</Label>
                            </div>
                            <div className="flex flex-row gap-1 items-baseline mt-2">
                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                <Label htmlFor="" className="tracking-wide ">{data["specialized-field"].languages}</Label>
                            </div>
                        </div>
                    </CardContent>

                </Card>
            </div>
            <Label className="mt-10 tracking-wide text-2xl font-extralight">特技・趣味・得意科目等</Label>
            <div className="flex flex-row mt-5 w-full px-[1%] gap-6 md:px-[30%] md:gap-32">

                <Card className="border border-cyan-300 w-full md:w-[650px]">
                    <CardContent>
                        <div className="flex flex-col w-full gap-4 md:p-2">
                            <Label htmlFor="" className="mt-3 font-light tracking-wide ">{data["ability"]}</Label>
                        </div>
                    </CardContent>
                </Card>

            </div>
            <Label className="mt-10 tracking-wide text-2xl font-extralight">キャリア目標</Label>
            <div className="flex flex-row mt-5 w-full px-[1%] gap-6 md:px-[30%] md:gap-32">

                <Card className="border border-cyan-300 w-full md:w-[650px]">
                    <CardContent>
                        <div className="flex flex-col w-full gap-4 md:p-2">
                            <Label htmlFor="" className="mt-3 font-light tracking-wide ">{data["ability"]}</Label>
                        </div>
                    </CardContent>
                </Card>

            </div>
            <Label className="mt-10 tracking-wide text-2xl font-extralight">本人希望記入欄</Label>
            <div className="flex flex-row mt-5 w-full px-[1%] gap-6 md:px-[30%] md:gap-32">

                <Card className="border border-cyan-300 w-full md:w-[650px]">
                    <CardContent>
                        <div className="flex flex-col w-full gap-4 md:p-2">
                            <Label htmlFor="" className="mt-3 font-light tracking-wide ">{data["salary"]}</Label>
                        </div>
                    </CardContent>
                </Card>

            </div>

        </div>
    )
}

export default Resume
