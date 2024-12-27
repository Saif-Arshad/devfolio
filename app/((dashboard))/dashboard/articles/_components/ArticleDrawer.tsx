"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "../../../../_components/ui/drawer";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { Input } from "../../../../_components/ui/input";
import InputTags from "./InputTags";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function ArticleDrawer({ button }: any) {
    const [content, setContent] = useState("");
    const [isClient, setIsClient] = useState(false);
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <Drawer>
            <DrawerTrigger asChild>{button}</DrawerTrigger>
            <DrawerContent className="min-w-[300px] md:min-w-[800px]">
                <DrawerHeader>
                    <DrawerTitle>Add a new Article</DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col items-center gap-3 px-5 mt-5">
                    <Input type="text" placeholder="Title" />
                    <InputTags value={tags} onChange={(updatedTags) => setTags(updatedTags)} />

                    {isClient && (
                        <ReactQuill
                            value={content}
                            onChange={(value) => setContent(value)}
                            className="bg-neutral-800 w-full rounded-lg min-h-52 "
                        />
                    )}
                </div>
                <DrawerFooter>
                    <div className="flex justify-end gap-3">

                        <DrawerClose>
                            <button className="bg-slate-900 p-3 px-4 rounded-full">Cancel</button>
                        </DrawerClose>
                        <button className="bg-primaryColor p-3 px-5 text-black rounded-full">Publish</button>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default ArticleDrawer;
