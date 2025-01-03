"use client"

import React, { useEffect, useState } from 'react'
import Articles from './_components'
export const dynamic = "force-dynamic";

function page() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    if (!isClient) return null;
    return (
        <Articles />
    )
}

export default page