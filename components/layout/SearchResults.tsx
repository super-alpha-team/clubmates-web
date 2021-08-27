import Activity, { ActivityProps } from 'components/layout/Activity'
import React from 'react'

type SearchResultProps = {
    searchKeyword: string;
    results: ActivityProps[];
}

function SearchResults({searchKeyword, results}:SearchResultProps) {
    return (
        <>
            <div className="mt-4">Kết quả tìm kiếm cho: <span className="text-orange-dark italic">{searchKeyword}</span></div>
            <div className="grid justify-items-center gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-8">
                {results.map((result, index) => <Activity key={index} data={result.data} />)}
            </div>
        </>
    )
}

export default SearchResults
