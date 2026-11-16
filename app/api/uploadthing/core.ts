import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

// Dummy: no hay login todavía.
const auth = async (): Promise<{ id: string }> => ({ id: "user" });

export const ourFileRouter = {
  imageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(async () => {
      const user = await auth();
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload completo para:", metadata.userId, file.ufsUrl);
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
