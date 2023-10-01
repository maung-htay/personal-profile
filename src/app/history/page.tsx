import { getAllWorkHistory } from '@/lib/work-history'
import { Label } from "@/components/ui/label"
import JobPage from '@/components/jobs/job';

const History = () => {
    const workData: workHistory = getAllWorkHistory()
    const data = workData;

    return (
        <div className="mt-20 flex flex-col items-center mb-20">
            <Label className="mt-10 text-3xl font-extralight tracking-wide">職　務　経　歴　書</Label>
            <div className="flex flex-row mt-6 w-full px-[10%] gap-1 md:px-[20%] md:gap-32">
                {/* Work History */}
                <div className="flex flex-col text-left">
                    <Label htmlFor="" className="mt-3 tracking-wide text-2xl">—職務経歴 概略—</Label>

                    <div className='flex pr-2 md:px-6 gap-4 md:gap-6 text-2xl'>
                        <div><Label> {workData['work-history'].companyName}</Label></div>
                        <div className=''> <Label className='mr-3 border rounded-md p-1 dark:border-cyan-200 border-slate-400'> {workData['work-history'].date}</Label></div>

                    </div>

                </div>


            </div>
            {/* Education History */}
            <div className="flex flex-row mt-6 px-[10%] gap-1 md:px-[20%] w-full">
                <div className="flex flex-col ">
                    <Label htmlFor="" className="mt-3 tracking-wide text-2xl">—職務経歴—</Label>
                    {data['job-career'].map((eachJob, index) => (
                        <>

                            <Label className='p-2'>{eachJob.date}</Label>



                            {/* <div key={index} className="flex flex-col m-2 bg-slate-400 border rounded-md p-2 justify-between gap-3 items-baseline w-[100%]"> */}
                            <Label className='p-2'>{eachJob.dept}</Label>

                            {/* </div> */}
                            {/* <div key={index} className="flex flex-col m-2 bg-slate-400 border rounded-md p-2 justify-between gap-3 items-baseline w-[100%]"> */}
                            <Label className='p-2'>{eachJob.jobContent}</Label>

                            {/* </div> */}



                            <JobPage data={eachJob['jobs']} />



                        </>

                    ))}
                </div>
            </div>

        </div>
    )
}

export default History