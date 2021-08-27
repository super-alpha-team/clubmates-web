import Activity from 'components/layout/Activity'
import React from 'react'
import { ActivityProps } from './Activity'

type RelevantResultsProps = {
    relevantResults: ActivityProps[];
}

function RelevantResults({relevantResults}:RelevantResultsProps) {
    return (
        <>
            <div className="mt-4">Gợi ý cho bạn</div>
            <div className="grid justify-items-center gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-8">
                {relevantResults.map((result, index) => <Activity key={index} data={result.data} />)}
            </div>
        </>
    )
}

export default RelevantResults
