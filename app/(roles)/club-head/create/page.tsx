"use client";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { useToast } from "@/components/ui/use-toast";
import { uploadImgCloudinary } from "@/utils/functions";
import { ReloadIcon } from "@radix-ui/react-icons";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

const formSchema = z.object({
  fName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  organisation: z
    .string({
      required_error: "Please select an organisation to display.",
    })
    .min(2, { message: "Please select an organisation to display." }),
});

export default function UpdateClubHead() {
  const { toast } = useToast();
  const [identityDocUrl, setIdentityDocUrl] = useState<string>("");
  const [uploadingImg, setUploadingImg] = useState<boolean>(false);
  const [allOrganisations, setAllOrganisations] = useState<Object[]>();

  useEffect(() => {
    (async function getAllOrganisations() {
      const res = await axios.get("/api/database/getOrganisation");
      console.log(res.data);
      setAllOrganisations(res.data);
    })();
  }, []);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fName: "",
      organisation: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setUploadingImg(true);
    toast({
      title: "Account: Created Successfully🎉",
      description: "Please wait while your account is being ready.",
    });

    const res = await axios.post("/api/club-head/create", {
      fullName: values.fName,
      organisationId: values.organisation,
      profilePicture: identityDocUrl,
    });
    console.log(res.data);
    setUploadingImg(false);
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
                </div>
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="organisation"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Organisation</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          required
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a verified email to display" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {allOrganisations &&
                              allOrganisations?.map(
                                (organisation: any, indx: number) => (
                                  <SelectItem
                                    key={indx}
                                    value={organisation.organisationId}
                                  >
                                    {organisation.collegeName}
                                  </SelectItem>
                                ),
                              )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="w-full items-center">
                    <Label htmlFor="picture">Profile Picture</Label>
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
                </div>
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
