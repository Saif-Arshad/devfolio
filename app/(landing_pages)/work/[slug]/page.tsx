import React from 'react'
import ProjectDetail from '../_components/ProjectDetail'

function page(
    {
        params
    }: any
) {
    console.log("🚀 ~ searchParams:", params)
    const slug = params.slug
    return (
        <div className="flex flex-wrap w-full px-1 sm:px-5 lg:px-10 items-start mb-20">
            <ProjectDetail slug={slug} />


        </div>
    )
}

export default page