import { getAllResumes } from "@/lib/resume"
import { Label } from "@/components/ui/label"
import Image from 'next/image'


const Resume = async () => {
    const resumeData: Promise<Resume> = getAllResumes()
    const data = await resumeData;
    // console.log(data);
    return (
        <div className="mt-20 flex flex-col items-center mb-20">
            <Label className="mt-10">履歴書</Label>

            <div className="flex flex-row mt-10 w-full px-[10%] gap-1 md:px-[30%] md:gap-32">
                {/* profile */}
                <div className="flex text-left">

                    <div className="flex flex-col w-24 md:w-40">
                        <Label htmlFor="" className="mt-3 font-extralight tracking-wide">ふりがな : </Label>
                        <Label htmlFor="" className="mt-3 font-extralight tracking-wide">氏　　名　: </Label>
                        <Label htmlFor="" className="mt-3 font-extralight tracking-wide">生年月日 : </Label>
                        <Label htmlFor="" className="mt-3 font-extralight tracking-wide">国籍: </Label>
                        <Label htmlFor="" className="mt-3 font-extralight tracking-wide ">電話番号携帯 : </Label>
                        <Label htmlFor="" className="mt-3 font-extralight tracking-wide ">Email: </Label>
                        <Label htmlFor="" className="mt-3 font-extralight tracking-wide ">国現住所: </Label>
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
            <Label className="mt-10">学歴･職歴（各項目ごとにまとめて書く）</Label>
            <div className="flex flex-row  mt-10 w-full px-[5%] md:px-[30%]">
                {/* education */}
                <div className="flex flex-col">
                    {data['edu-background'].map((education, index) => (
                        <div key={index} className="flex mt-3 bg-slate-400 border rounded-md p-2 justify-between gap-3 items-baseline w-[100%]">
                            <Label className="">{education.title} </Label>
                            <Label className="font-extralight border rounded-sm bg-cyan-400 p-1">{education.date}</Label>


                        </div>
                    ))}
                </div>
            </div>
            <Label className="mt-10">職歴</Label>
            <div className="flex flex-row  mt-10 w-full px-[5%] md:px-[30%]">
                {/* education */}
                <div className="flex flex-col">
                    {data['work-history'].map((education, index) => (
                        <div key={index} className="flex mt-3 bg-slate-400 border rounded-md p-2 justify-between gap-3 items-baseline">
                            <Label className="">{education.companyName} </Label>
                            <Label className="font-extralight border rounded-sm bg-cyan-400 p-1">{education.date}</Label>


                        </div>
                    ))}
                </div>
            </div>
            <Label className="mt-10">免許・資格</Label>
            <div className="flex flex-row  mt-5 w-full px-[5%] md:px-[30%] mb-10">
                <div className="flex flex-col">
                    {data['qualification'].map((education, index) => (
                        <p key={index} className="flex mt-3 bg-slate-400 border rounded-md p-2 justify-between gap-3 items-baseline ">
                            <Label>{education.title} </Label>
                            <Label className="font-extralight border rounded-sm bg-cyan-400 p-1">{education.date}</Label>


                        </p>
                    ))}
                </div>
            </div>
            <Label className="mt-10">専門分野</Label>
            <div className="flex flex-row mt-10 w-full px-[10%] gap-6 md:px-[30%] md:gap-32">
                <div className="flex flex-col border border-blue-200 rounded-md p-4 bg-slate-400">
                    <Label htmlFor="" className="mt-3 font-extralight tracking-wide ">{data["specialized-field"].name}</Label>
                    <Label htmlFor="" className="mt-3 font-extralight tracking-wide ">{data["specialized-field"].languages}</Label>
                </div>
            </div>
            <Label className="mt-10">特技・趣味・得意科目等</Label>
            <div className="flex flex-row mt-10 w-full px-[10%] gap-6 md:px-[30%] md:gap-32">
                <div className="flex flex-col border border-blue-200 rounded-md p-4 bg-slate-400">
                    <Label htmlFor="" className="mt-3 font-extralight tracking-wide ">{data["ability"]}</Label>

                </div>
            </div>

        </div>
    )
}

export default Resume
