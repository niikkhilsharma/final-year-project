export async function uploadImgCloudinary(imageFile: File) {
  const form = new FormData();
  form.set("file", imageFile);

  const res = await fetch("/api/cloudinary/image-upload", {
    method: "POST",
    body: form,
  });

  return await res.json();
}
