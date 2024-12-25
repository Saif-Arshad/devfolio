/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../../../../_components/ui/drawer"

function ArticleDrawer({
    button
}: any) {
    return (
        <Drawer 
        
        >
            <DrawerTrigger asChild>
                {button}
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
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