/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../../../../_components/ui/drawer"
import { Input } from '../../../../_components/ui/input'

function ArticleDrawer({
    button
}: any) {
    return (
        <Drawer

        >
            <DrawerTrigger asChild>
                {button}
            </DrawerTrigger>
            <DrawerContent className='min-w-[300px] md:min-w-[800px]'>
                <DrawerHeader>
                    <DrawerTitle>Add a new Article</DrawerTitle>
                </DrawerHeader>
                <div className='flex flex-col items-center gap-3 px-5 mt-5'>
                    <Input
                        type='text'
                        placeholder='Title'
                    />
                </div>
                <DrawerFooter>
                    {/* <Button>Submit</Button> */}
                    <DrawerClose>
                        <button >Cancel</button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}

export default ArticleDrawer