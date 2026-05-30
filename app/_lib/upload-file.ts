import { createClient } from "@/utils/supabase/client";

const BUCKET = "assets";

/**
 * Uploads an image to Supabase Storage and returns its public URL (string).
 */
export const uploadImage = async (file: File): Promise<string | undefined> => {
    const supabase = createClient();

    const ext = file.name.includes(".") ? file.name.split(".").pop() : "png";
    const path = `${crypto.randomUUID()}.${ext}`;

    try {
        const { error } = await supabase.storage
            .from(BUCKET)
            .upload(path, file, { cacheControl: "3600", upsert: false });

        if (error) {
            console.log("Error uploading image:", error);
            return;
        }

        const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
        return data.publicUrl;
    } catch (error) {
        console.log("Error uploading image:", error);
    }
};
