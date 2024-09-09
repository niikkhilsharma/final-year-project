"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useToast } from "@/components/ui/use-toast";
import { uploadImgCloudinary } from "@/utils/functions";
import { ReloadIcon } from "@radix-ui/react-icons";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signIn } from "next-auth/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  clubName: z
    .string()
    .min(2, { message: "Club name must be atlest 2 characters." }),
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
  clubType: z.string({
    required_error: "Please select an club type to display.",
  }),
});

export default function UpdateClubHead() {
  const { toast } = useToast();
  const [identityDocUrl, setIdentityDocUrl] = useState<string>("");
  const [uploadingImg, setUploadingImg] = useState<boolean>(false);
  const [cllgImageUrl, setCllgImageUrl] = useState<string>();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fName: "",
      city: "",
      state: "",
      country: "",
      description: "",
      clubName: "",
      clubType: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setUploadingImg(true);
    await signIn("resend", {
      redirect: false,
      callbackUrl:
        "/sac-head" +
        `?role=SACHEAD&currentPanel=dashboard&fName=${values.fName}&city=${values.city}&state=${values.state}&country=${values.country}&description=${values.description}&identityDocUrl=${identityDocUrl}&cllgImageUrl=${cllgImageUrl}`,
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
      <MaxWidthWrapper className="max-w-screen-lg rounded-xl bg-background p-8">
        <div className="mx-auto mb-4 mt-8">
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
                    name="clubName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Club Name</FormLabel>
                        <FormControl>
                          <Input required placeholder="GDSC" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="clubType"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Club Type</FormLabel>
                        <Select
                          required
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a club type to display" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="m@example.com">
                              m@example.com
                            </SelectItem>
                            <SelectItem value="m@google.com">
                              m@google.com
                            </SelectItem>
                            <SelectItem value="m@support.com">
                              m@support.com
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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
                </div>
                <div className="flex gap-4">
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
                </div>
                <div className="flex gap-4">
                  <div className="w-full items-center">
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
                  <div className="w-full items-center">
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
}
