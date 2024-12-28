"use client";

import React, { useEffect, useState } from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
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
import { useRouter } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ArticleDrawer({ button, article }: { button: any; article?: any }) {
    console.log("🚀 ~ ArticleDrawer ~ article:", article)
    const [content, setContent] = useState("");
    const [isClient, setIsClient] = useState(false);
    const [tags, setTags] = useState<string[]>([]);
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [discription, setDiscription] = useState("");
    const [bannerImage, setBannerImage] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const router = useRouter()
    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;
    useEffect(() => {
        if (article) {
            console.log("🚀 ~ useEffect ~ article:", article)
            console.log(article.content)
            setContent(article.content)
            setTitle(article.title)
            setSlug(article.slug)
            setDiscription(article.discription)
            setTags(article.tags)
            setIsEdit(true)
        }
    }, [article])
    useEffect(() => {
        if (title) {
            const slug = title.split(" ").join("-").toLowerCase();
            setSlug(slug)
        }
    }, [title])
    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleSubmit = async () => {
        if (isEdit) {
            if (!title || !content || !tags.length || !discription) {
                setErrorMessage("Please fill in all the fields.");
                return;
            }
            setLoading(true);
            setErrorMessage("");
            setSuccessMessage("");

            try {
                const bannerImageUrl = bannerImage ? await uploadImage(bannerImage) : article.bannerImage;
                await databases.updateDocument(databaseId, collectionId, article.$id, {
                    title,
                    tags,
                    content,
                    slug,
                    discription,
                    bannerImage: bannerImageUrl,
                });

                setSuccessMessage("Article Updated successfully!");
                setBannerImage(null);
                setContent("")
                setTitle("")
                setSlug("")
                setDiscription("")
                setTags([])
                router.refresh()
            } catch (error) {
                console.error("Error publishing article:", error);
                setErrorMessage("Failed to publish the article. Please try again.");
            } finally {
                setLoading(false);
            }
        }
        else {


            if (!title || !content || !bannerImage || !tags.length || !discription) {
                setErrorMessage("Please fill in all the fields.");
                return;
            }
            setLoading(true);
            setErrorMessage("");
            setSuccessMessage("");

            try {
                const bannerImageUrl = bannerImage ? await uploadImage(bannerImage) : null;
                await databases.createDocument(databaseId, collectionId, "unique()", {
                    title,
                    tags,
                    content,
                    slug,
                    discription,
                    bannerImage: bannerImageUrl,
                });

                setSuccessMessage("Article published successfully!");
                setBannerImage(null);
                setContent("")
                setTitle("")
                setSlug("")
                setDiscription("")
                setTags([])
                router.refresh()


            } catch (error) {
                console.error("Error publishing article:", error);
                setErrorMessage("Failed to publish the article. Please try again.");
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <Drawer>
            <DrawerTrigger asChild>{button}</DrawerTrigger>
            <DrawerContent className="min-w-[300px] md:min-w-[800px] h-full">
                <DrawerHeader>
                    <DrawerTitle className="flex items-center justify-between">
                        <span>
                            Add a new Article
                        </span>

                        {errorMessage && (
                            <div className="text-red-500 text-sm text-center mt-2">
                                {errorMessage}
                            </div>
                        )}
                        {successMessage && (
                            <div className="text-green-500 text-sm text-center mt-2">
                                {successMessage}
                            </div>
                        )}
                    </DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col items-center gap-3 px-5 mt-5 py-7 h-full overflow-y-auto">
                    <div className="grid grid-cols-2 gap-3 w-full">
                        <Input
                            type="text"
                            placeholder="Title"
                            className="w-full"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Input
                            type="file"
                            className="w-full"
                            placeholder="Banner Image"
                            onChange={(e) => setBannerImage(e.target.files?.[0] || null)}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-3 w-full">

                        <Input
                            type="text"
                            className="w-full"
                            placeholder="Slug"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                        />
                        <Input
                            type="text"
                            className="w-full"
                            value={discription}
                            placeholder="Discription"
                            onChange={(e) => setDiscription(e.target.value)}
                        />

                    </div>
                    <InputTags value={tags} onChange={(updatedTags) => setTags(updatedTags)} />

                    {isClient && (
                        <RichTextEditor
                            value={content}
                            setValue={setContent}
                        />
                    )}
                    <div className="flex flex-col gap-2 w-full mt-14">
                        <div className="flex justify-end gap-3">
                            <DrawerClose>
                                <button className="bg-slate-900 px-4 py-2 rounded-full">Cancel</button>
                            </DrawerClose>
                            <button
                                onClick={handleSubmit}
                                className="bg-primaryColor px-5 py-2 text-black rounded-full"
                                disabled={loading}
                            >
                                {
                                    isEdit ?
                                        loading ? "Updating..." : "Update"
                                        : loading ? "Publishing..." : "Publish"
                                }
                            </button>
                        </div>

                    </div>
                </div>
                {/* <DrawerFooter>
                </DrawerFooter> */}
            </DrawerContent>
        </Drawer>
    );
}

export default ArticleDrawer;
