"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { IoIosMail } from "react-icons/io";
import { Button } from "../ui/button";

import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { signIn } from "next-auth/react";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().min(7, {
    message: "Email must be at least 7 characters.",
  }),
  // .refine((email) => email.endsWith("@rtu.ac.in"), {
  //   message: "Please enter your work email.",
  // }),
});

const EmailForm = ({ loginFor }: { loginFor: string }) => {
  const { toast } = useToast();
  const redirectUrl = loginFor.toLowerCase().replaceAll(" ", "-");
  const [mailSent, setMailSent] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Mail: Sent Successfully",
      description: "Kindly check your gmail account.",
    });

    await signIn("resend", {
      email: values.email,
      redirect: false,
      callbackUrl: "/" + redirectUrl + `?currentPanel=dashboard`,
    });
    setMailSent(true);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder={`${loginFor === "SAC Head" ? "Enter your work email" : "Enter your college email"}`}
                    {...field}
                    type="email"
                    className="py-6 pl-12 text-base placeholder:font-semibold placeholder:text-black"
                    startIcon={
                      <IoIosMail
                        size={32}
                        className="absolute -top-3 left-1 text-black"
                      />
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="mt-8 w-full bg-button py-6 text-lg hover:bg-button/90 focus:bg-button/90"
            disabled={mailSent ? true : false}
          >
            Register / Login
          </Button>
          <p className="mt-2 text-center text-sm">
            By creating an account, you agree to our terms of service
          </p>
        </form>
      </Form>
    </div>
  );
};

export default EmailForm;
