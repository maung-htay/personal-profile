import { getAllWorkHistory } from '@/lib/work-history'
import { Label } from "@/components/ui/label"
import JobPage from '@/components/jobs/job';

import type { Metadata } from 'next'
import { getAllGeneral } from '@/lib/general';

export const metadata: Metadata = {
    title: 'Experience',
    description: 'Created by @maung-htay',
}

const History = () => {
    const workData: workHistory = getAllWorkHistory()
    const data = workData;

    const generalData: general = getAllGeneral()
    const general = generalData;

    return (
        <div className="mt-20 flex flex-col items-center mb-20">
            <Label className="mt-10 text-3xl font-extralight tracking-wide">職　務　経　歴　書</Label>
            <div className="flex flex-row mt-0 w-full mx-[3%] py-[3%] gap-1 md:px-[20%] md:gap-32">
                {/* Work History */}
                <div className="flex flex-col text-left">
                    <Label htmlFor="" className="mt-0 tracking-wide text-2xl">—職務経歴 概略—</Label>

                    <div className='flex pr-2 md:px-6 gap-4 md:gap-6 text-2xl'>
                        <div><Label> {workData['work-history'].companyName}</Label></div>
                        <div className=''> <Label className='mr-3 border rounded-md p-1 dark:border-cyan-200 border-slate-400'> {workData['work-history'].date}</Label></div>

                    </div>

                </div>


            </div>
            {/* Education History */}
            <div className="flex flex-row mt-2 mx-[2%] gap-1 md:px-[20%] w-full">
                <div className="flex flex-col ">
                    <Label htmlFor="" className="mt-3 tracking-wide text-2xl">—職務経歴—</Label>
                    {data['job-career'].map((eachJob, index) => (
                        <div key={index} className='mb-10 flex flex-col'>

                            <Label className='p-2'>{eachJob.date}</Label>

                            <Label className='p-2'>{eachJob.dept}</Label>

                            <Label className='p-2'>{eachJob.jobContent}</Label>

                            <JobPage data={eachJob} />

                        </div>

                    ))}
                </div>
            </div>
            <div className='flex flex-col mt-5 mx-[2%] gap-1 md:flex-row  md:px-[20%] w-full'>
                <div className='flex flex-col'>
                    <Label className=''>—得意分野—　　</Label>
                    <div className='mt-5 list-disc ml-10'>
                        {
                            generalData.speciality.map((item, index) => <li key={index}>
                                {item}
                            </li>)
                        }
                    </div>
                </div>
                <div className='flex flex-col'>
                    <Label className=''>—保有資格—</Label>

                    <div className='mt-5 ml-10 mr-1 border'>
                        {
                            generalData.qualification.map((item, index) => <div key={index} className='grid grid-cols-2 divide-x'>
                                <div className='border'>{item.date}</div>
                                <div className='border'>{item.degree}</div>
                            </div>)
                        }
                    </div>

                </div>
            </div>

            {/* Skill */}
            <div className="flex flex-col mt-5 mx-[2%] md:px-[20%] w-full">
                <div className='border'>スキール</div>
                <div className='flex flex-col'>
                    {
                        generalData.skill.map((item, index) => <div key={index} className='flex'>
                            <div className='w-[20%] border'>{item.jp}</div>
                            <div className='w-[100%] border'>{item.languages}</div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    )
}

export default History