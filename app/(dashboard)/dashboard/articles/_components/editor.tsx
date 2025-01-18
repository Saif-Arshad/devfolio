"use client";

import React, { useMemo, useRef } from 'react';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";
import { uploadImage } from '../../../../_lib/upload-file';

export default function RichTextEditor({ value, setValue }: any) {
    const quillRef = useRef<any>();

    const imageHandler = () => {
        const editor = quillRef.current?.getEditor();
        if (!editor) return;

        if (!document) return;
        const input = document?.createElement("input");
        input.setAttribute("type", "file");
        input.setAttribute("accept", "image/*");
        input.click();

        input.onchange = async () => {
            // @ts-ignore
            const file = input && input?.files[0];
            if (file && /^image\//.test(file.type)) {
                const url = await uploadImage(file);
                const href = url?.href;
                editor.insertEmbed(editor.getSelection(), "image", href);
            } else {
                console.log('You could only upload images.');
            }
        };
    };

    const modules = useMemo(() => ({
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', "strike"],
                [{ 'list': 'ordered' }, { 'list': 'bullet' },
                { 'indent': '-1' }, { 'indent': '+1' }],
                ['image', "link",],
                [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'] }]
            ],
            handlers: {
                image: imageHandler
            }
        },
    }), []);


    return (
        <ReactQuill
            theme="snow"
            className="bg-neutral-800 w-full rounded-lg min-h-52 h-full"
            ref={quillRef}
            value={value}
            modules={modules}
            onChange={setValue}
        />
    );
}
