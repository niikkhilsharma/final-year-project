"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useToast } from "@/components/ui/use-toast";
import { uploadImgCloudinary } from "@/utils/functions";
import { ReloadIcon } from "@radix-ui/react-icons";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";

const formSchema = z.object({
  fName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(5, { message: "Email must be at least 5 characters." })
    .email(),
  cllgName: z.string().min(2, {
    message: "Colllege Name must be at least 3 characters.",
  }),
  cllgMailDomain: z
    .string()
    .min(2, {
      message: "Domain must be at least 5 characters.",
    })
    .refine((mailDomain) => !mailDomain.includes("@"), {
      message: "Please do not include '@'",
    }),
  cllgSiteUrl: z.string().url({ message: "Please enter the full URL" }),
  city: z.string().min(2, {
    message: "City name must be at least 2 characters.",
  }),
  state: z.string().min(2, {
    message: "State name must be at least 2 characters.",
  }),
  country: z
    .string()
    .min(3, { message: "Country name must be at least 2 characters." }),
  description: z
    .string()
    .min(10, {
      message: "College description must be at least 10 characters.",
    })
    .max(160, {
      message: "College description must not be longer than 30 characters.",
    }),
});

const CreateOrganisationPage = () => {
  const { toast } = useToast();
  const [identityDocUrl, setIdentityDocUrl] = useState<string>("");
  const [uploadingImg, setUploadingImg] = useState<boolean>(false);
  const [cllgImageUrl, setCllgImageUrl] = useState<string>();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fName: "",
      email: "",
      cllgName: "",
      cllgMailDomain: "",
      city: "",
      state: "",
      country: "",
      cllgSiteUrl: "",
      description: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setUploadingImg(true);
    await signIn("resend", {
      email: values.email,
      redirect: false,
      callbackUrl:
        "/sac-head" +
        `?role=SACHEAD&currentPanel=dashboard&fName=${values.fName}&email=${values.email}&cllgName=${values.cllgName}&cllgMailDomain=${values.cllgMailDomain}&city=${values.city}&state=${values.state}&country=${values.country}&cllgWebsiteUrl=${values.cllgSiteUrl}&description=${values.description}&identityDocUrl=${identityDocUrl}&cllgImageUrl=${cllgImageUrl}`,
    });
    setUploadingImg(false);
    toast({
      title: "Mail: Sent Successfully",
      description:
        "A verification mail has been sent to the registered gmail above. Kindly check your mail.",
    });
  }

  return (
    <div className="min-h-svh bg-secondary px-4 py-10">
      <MaxWidthWrapper className="flex max-w-screen-lg gap-8 rounded-xl bg-background p-4">
        <div className="flex w-1/2 justify-center rounded-xl bg-secondary">
          <Image
            src={"/assets/images/createOrganisation.png"}
            width={500}
            height={500}
            alt=""
          />
        </div>
        <div className="mb-4 mt-8 w-1/2">
          <h1 className="text-xl font-semibold">Get Started</h1>
          <p className="mt-2 text-muted-foreground">Create your organisation</p>
          <div className="mt-8">
            {" "}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="fName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            required
                            placeholder="Nikhil Sharma"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            required
                            placeholder="nikhil@rtu.ac.in"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="cllgName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>College Name</FormLabel>
                        <FormControl>
                          <Input required placeholder="RTU Kota" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cllgMailDomain"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>College Email Domain</FormLabel>
                        <FormControl>
                          <Input required placeholder="rtu.ac.in" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input required placeholder="Kota" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input required placeholder="Rajasthan" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input required placeholder="Rajasthan" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cllgSiteUrl"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>College Website</FormLabel>
                        <FormControl>
                          <Input
                            required
                            placeholder="https://rtu.sumsraj.com/"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-4">
                  <div className="w-full max-w-sm items-center">
                    <Label htmlFor="picture">SAC HEAD ID Card</Label>
                    <Input
                      id="picture"
                      type="file"
                      required
                      className="mt-1.5"
                      accept="image/*"
                      onChange={async (e) => {
                        if (e.target.files && e.target.files?.length > 0) {
                          setUploadingImg(true);
                          const file = e.target.files[0] as File;
                          const data = await uploadImgCloudinary(file);
                          console.log(data);
                          if (data.message === "success") {
                            setIdentityDocUrl(data.imgUrl);
                          } else {
                            throw new Error();
                          }
                          setUploadingImg(false);
                        }
                      }}
                    />
                  </div>
                  <div className="w-full max-w-sm items-center">
                    <Label htmlFor="picture">College Photo</Label>
                    <Input
                      id="picture"
                      type="file"
                      required
                      className="mt-1.5"
                      accept="image/*"
                      onChange={async (e) => {
                        if (e.target.files && e.target.files?.length > 0) {
                          setUploadingImg(true);
                          const file = e.target.files[0] as File;
                          const data = await uploadImgCloudinary(file);
                          console.log(data);
                          if (data.message === "success") {
                            setCllgImageUrl(data.imgUrl);
                          } else {
                            throw new Error();
                          }
                          setUploadingImg(false);
                        }
                      }}
                    />
                  </div>
                </div>
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>College Description</FormLabel>
                      <FormControl>
                        <Textarea
                          required
                          placeholder="Tell us a little bit about your college"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button disabled={uploadingImg} type="submit">
                  {uploadingImg ? (
                    <>
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default CreateOrganisationPage;
