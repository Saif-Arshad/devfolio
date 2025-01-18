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
import { databases } from "../../../../_lib/appwrite";
import { uploadImage } from "../../../../_lib/upload-file";
import { useRouter } from "next/navigation";
import InputTags from "../../articles/_components/InputTags";
import { FaTrash } from "react-icons/fa";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import('../../articles/_components/editor'), {
    ssr: false, 
});
function ProjectDrawer({ button, project }: any) {
    const [content, setContent] = useState("");
    const [isClient, setIsClient] = useState(false);
    const [tags, setTags] = useState<string[]>([]);
    const [tech, setTech] = useState<string[]>([]);
    const [name, setName] = useState("");
    const [github_url, setGithubURL] = useState("");
    const [live_url, setLiveURL] = useState("");
    const [slug, setSlug] = useState("");
    const [discription, setDiscription] = useState("");
    const [bannerImage, setBannerImage] = useState<File | null>(null);
    const [uploadedImages, setUploadedImages] = useState<File[]>([]);
    const [galleryState, setGallery] = useState<string[]>([]);
    const [isFeatured, setIsFeatured] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const router = useRouter();
    const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
    const collectionId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_COLLECTION_ID!;

    useEffect(() => {
        if (project) {
            setContent(project.content);
            setName(project.name);
            setSlug(project.slug);
            setDiscription(project.discription);
            setGallery(project.gallery);
            setTags(project.tags);
            setTech(project.tech);
            setLiveURL(project.live_url);
            setGithubURL(project.github_url);
            setIsEdit(true);
            setIsFeatured(project.isFeatured);
        }
    }, [project]);

    useEffect(() => {
        if (name) {
            const slug = name.split(" ").join("-").toLowerCase();
            setSlug(slug);
        }
    }, [name]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleImageUpload = (event: any) => {
        const files = Array.from(event.target.files);
        setUploadedImages((prevImages: any) => [...prevImages, ...files]);
    };

    const handleImageDelete = (index: any) => {
        setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };
    const handleImageDeleteGalary = (index: any) => {
        setGallery((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const handleSubmit = async () => {
        if (!name || !content || !tags.length || !tech.length || !discription) {
            setErrorMessage("Please fill in all the fields.");
            return;
        }
        setLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        try {
            if (!bannerImage && !isEdit) {
                setErrorMessage("Please upload a banner image.");
                setLoading(false);
                return;
            }
            // @ts-ignore
            const bannerImageUrl = bannerImage ? (await uploadImage(bannerImage)).href
                : project.banner;
            if (!bannerImageUrl) {
                setErrorMessage("Please upload a banner image.");
                setLoading(false);
                return;
            }
            await Promise.all(uploadedImages.map((file) => uploadImage(file).then((res: any) => galleryState.push(res.href))))
            const data = {
                name,
                tags,
                content,
                slug,
                tech,
                discription,
                github_url,
                live_url,
                banner: bannerImageUrl,
                isFeatured,
                gallery: galleryState
            };

            if (isEdit) {

                await databases.updateDocument(databaseId, collectionId, project.$id, data);
                setSuccessMessage("Project updated successfully!");
            } else {
                await databases.createDocument(databaseId, collectionId, "unique()", data);
                setSuccessMessage("Project created successfully!");
            }

            setBannerImage(null);
            setUploadedImages([]);
            setContent("");
            setName("");
            setSlug("");
            setDiscription("");
            setGithubURL("");
            setLiveURL("");
            setGallery([]);
            setTags([]);
            setTech([]);
            setIsFeatured(false);
            router.refresh();
        } catch (error) {
            setErrorMessage("Failed to save the project. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Drawer>
            <DrawerTrigger asChild>{button}</DrawerTrigger>
            <DrawerContent className="min-w-[300px] md:min-w-[800px] h-full">
                <DrawerHeader>
                    <DrawerTitle className="flex items-center justify-between">
                        <span className="flex items-center gap-x-2">
                            <label className="inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isFeatured}
                                    onChange={(e) => setIsFeatured(e.target.checked)}
                                    className="sr-only peer"
                                />
                                <div className="relative w-9 h-[22px] bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                            </label>
                            Project Management
                        </span>

                        {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}
                        {successMessage && <div className="text-green-500 text-sm mt-2">{successMessage}</div>}
                    </DrawerTitle>
                </DrawerHeader>
                <div className="flex flex-col items-center gap-3 px-5 mt-5 py-7 h-full overflow-y-auto">
                    <div className="grid grid-cols-2 gap-3 w-full">

                        <Input
                            type="text"
                            placeholder="Title"
                            className="w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            placeholder="Github URL"
                            className="w-full"
                            value={github_url}
                            onChange={(e) => setGithubURL(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Live URL"
                            className="w-full"
                            value={live_url}
                            onChange={(e) => setLiveURL(e.target.value)}
                        />

                    </div>
                    <div className="grid grid-cols-1 gap-3 w-full">

                        <Input
                            type="text"
                            className="w-full"
                            placeholder="Slug"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-1 gap-3 w-full">

                        <Input
                            type="file"
                            multiple
                            className="w-full"
                            onChange={handleImageUpload}
                        />
                    </div>

                    {
                        galleryState.length > 0 && (
                            <div className="grid grid-cols-3 gap-4 mt-3 w-full">
                                {galleryState.map((image, index) => (
                                    <div key={index} className="relative group">
                                        <img
                                            src={image}
                                            alt="Uploaded preview"
                                            className="w-full h-24 object-cover rounded-md"
                                        />
                                        <button
                                            className="absolute top-1 right-1 text-red-500 hover:text-red-700"
                                            onClick={() => handleImageDeleteGalary(index)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )
                    }
                    {
                        uploadedImages.length > 0 && (

                            <div className="grid grid-cols-3 gap-4 mt-3 w-full">
                                {uploadedImages.map((image, index) => (
                                    <div key={index} className="relative group">
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt="Uploaded preview"
                                            className="w-full h-24 object-cover rounded-md"
                                        />
                                        <button
                                            className="absolute top-1 right-1 text-red-500 hover:text-red-700"
                                            onClick={() => handleImageDelete(index)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                ))}
                            </div>

                        )
                    }

                    <InputTags value={tags} onChange={(updatedTags) => setTags(updatedTags)} />

                    <div className="grid grid-cols-1 gap-3 w-full">

                        <Input
                            type="text"
                            className="w-full"
                            value={discription}
                            placeholder="Description"
                            onChange={(e) => setDiscription(e.target.value)}
                        />

                    </div>
                    <InputTags
                        value={tech}
                        placeholder="Enter Tech Used"
                        onChange={(updatedTags) => setTech(updatedTags)}
                    />

                    {isClient && (
                        <RichTextEditor value={content} setValue={setContent} />
                    )}

                    <div className="flex justify-end gap-3 mt-14 w-full">
                        <DrawerClose>
                            <button className="bg-slate-900 px-4 py-2 rounded-full">Cancel</button>
                        </DrawerClose>
                        <button
                            onClick={handleSubmit}
                            className="bg-primaryColor px-5 py-2 text-black rounded-full"
                            disabled={loading}
                        >
                            {isEdit ? (loading ? "Updating..." : "Update") : loading ? "Publishing..." : "Publish"}
                        </button>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
    );
}

export default ProjectDrawer;
