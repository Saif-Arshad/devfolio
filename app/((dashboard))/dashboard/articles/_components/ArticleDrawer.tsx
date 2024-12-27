"use client";

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
import "react-quill/dist/quill.snow.css";
import { Input } from "../../../../_components/ui/input";
import InputTags from "./InputTags";
import { databases } from "../../../../_lib/appwrite";
import { uploadImage } from "../../../../_lib/upload-file";
import RichTextEditor from "./editor";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ArticleDrawer({ button }: any) {
    const [content, setContent] = useState("");
    const [isClient, setIsClient] = useState(false);
    const [tags, setTags] = useState<string[]>([]);
    const [title, setTitle] = useState("");
    const [bannerImage, setBannerImage] = useState<File | null>(null);


    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
    console.log("🚀 ~ ArticleDrawer ~ databaseId:", databaseId)
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;
    console.log("🚀 ~ ArticleDrawer ~ collectionId:", collectionId)
    useEffect(() => {
        setIsClient(true);
    }, []);



    const handleSubmit = async () => {
        try {
            const bannerImageUrl = bannerImage ? await uploadImage(bannerImage) : null;
            console.log("🚀 ~ handleSubmit ~ bannerImageUrl:", bannerImageUrl)
            console.log(title, tags, content, bannerImageUrl);
            await databases.createDocument(databaseId, collectionId, "unique()", {
                title,
                tags,
                content,
                bannerImage: bannerImageUrl,
            });

            alert("Article published successfully!");
        } catch (error) {
            console.log("🚀 ~ handleSubmit ~ error:", error)
        }
    };


    return (
        <Drawer>
            <DrawerTrigger asChild>{button}</DrawerTrigger>
            <DrawerContent className="min-w-[300px] md:min-w-[800px]">
                <DrawerHeader>
                    <DrawerTitle>Add a new Article</DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col items-center gap-3 px-5 mt-5  overflow-y-auto ">
                    <Input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <InputTags value={tags} onChange={(updatedTags) => setTags(updatedTags)} />
                    <Input
                        type="file"
                        placeholder="Banner Image"
                        onChange={(e) => setBannerImage(e.target.files?.[0] || null)}
                    />

                    {isClient && (
                        <RichTextEditor
                            value={content}
                            setValue={setContent}
                        />
                    )}
                </div>
                <DrawerFooter>
                    <div className="flex justify-end gap-3">
                        <DrawerClose>
                            <button className="bg-slate-900 p-3 px-4 rounded-full">Cancel</button>
                        </DrawerClose>
                        <button
                            onClick={handleSubmit}
                            className="bg-primaryColor p-3 px-5 text-black rounded-full"
                        >
                            Publish
                        </button>
                    </div>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
}

export default ArticleDrawer;
