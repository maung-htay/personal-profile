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
  data: Job[] // Define the type of data you are receiving
}

const JobPage: React.FC<ReceivingProps> = ({ data }) => {
  return (
    <Table className='w-full'>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">業務期間</TableHead>
          <TableHead>プロジェクト名・内容</TableHead>
          <TableHead>担当業務</TableHead>
          <TableHead className="text-right">環境</TableHead>
          <TableHead className="text-right">役割・規模</TableHead>
          {/* <TableHead className="text-right">役割・規模</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>

        {data.map((eachJob, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium top-0.5">{eachJob.period}</TableCell>
            <TableCell className="font-medium">{eachJob.pjContent}</TableCell>
            <TableCell className="font-medium">{eachJob.responsible.detail} <br />
              {eachJob.responsible.participation.map(each =>
                <li key={each}>{each}</li>
              )}
            </TableCell>
            <TableCell className="font-medium">開発言語： 　<br />{eachJob.environment.languages.map(each =>
              <li key={each} className='pl-2'>{each}</li>
            )}
            </TableCell>
            <TableCell className="font-medium">{eachJob.role}</TableCell>
          </TableRow>

        ))}
      </TableBody>
    </Table>


  )
}

export default JobPage