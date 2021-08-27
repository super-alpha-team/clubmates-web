import ActivityItem, { ActivityProps as ActivityItemProps } from 'components/kit/ActivityItem'
import ClubItem, { ClubItemProps } from 'components/kit/ClubItem'
import React from 'react'

type SearchResultProps = {
    searchKeyword: string;
    activityResults: ActivityItemProps[];
    clubResults: ClubItemProps[]
}

function SearchResults({searchKeyword, activityResults, clubResults}:SearchResultProps) {
    return (
        <>
            <div className="mt-4">Kết quả tìm kiếm cho: <span className="text-orange-dark italic">{searchKeyword}</span></div>
            <div className="grid justify-items-center gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-8">
                {activityResults.map((result, index) => <ActivityItem key={index} data={result.data} />)}
            </div>

            <div className="grid justify-items-center gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-8">
                {clubResults.map((result, index) => <ClubItem key={index} data={result.data} />)}
            </div>
        </>
    )
}

export default SearchResults
