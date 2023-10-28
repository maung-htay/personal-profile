import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface ReceivingProps {
  data: JobCareer // Define the type of data you are receiving
}

const JobPage: React.FC<ReceivingProps> = ({ data }) => {
  return (
    <Table className='w-full border border-cyan-300 align-top'>
      <TableCaption>{data.jobSummary}</TableCaption>
      <TableHeader className='align-text-top'>
        <TableRow>
          <TableHead className="w-[100px]">業務期間</TableHead>
          <TableHead className="w-[170px]">プロジェクト名・内容</TableHead>
          <TableHead>担当業務</TableHead>
          <TableHead className="text-left w-[170px]">環境</TableHead>
          <TableHead className="text-left w-[200px]">役割・規模</TableHead>
          {/* <TableHead className="text-right">役割・規模</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>

        {data['jobs'].map((eachJob, index) => (
          <TableRow key={index} className=''>
            <TableCell className="font-medium align-text-top">{eachJob.period}</TableCell>
            <TableCell className="font-medium align-text-top">{eachJob.pjContent}</TableCell>
            <TableCell className="font-medium align-text-top">{eachJob.responsible.detail} <br />
              {eachJob.responsible.participation.map(each =>
                <li key={each}>{each}</li>
              )}
            </TableCell>
            <TableCell className="font-medium align-text-top">開発言語： 　<br />{eachJob.environment.languages.map(each =>
              <li key={each} className='pl-2'>{each}</li>
            )}
              <br />
              フレームワーク： <br />
              {eachJob.environment.frameworks.map(each =>
                <li key={each} className='pl-2'>{each}</li>
              )}
              <br />
              システム環境： <br />
              {eachJob.environment.systemEnvironment.map(each =>
                <li key={each} className='pl-2'>{each}</li>
              )}

            </TableCell>
            <TableCell className="font-medium align-text-top">
              {eachJob.role.map(each =>
                <li key={each}>{each}</li>
              )}
            </TableCell>
          </TableRow>

        ))}
      </TableBody>
    </Table>


  )
}

export default JobPage