import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import { useToast } from "../../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { User } from "@prisma/client";
import { z } from "zod";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(7, {
    message: "Profile name must be at least 7 characters.",
  }),
});

const SacHeadProfile = ({ user }: { user: User }) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name as string,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await axios.post("/api/sac-head/update", {
      name: values.name as string,
      email: user.email,
    });
    const response = res.data;
    console.log(response);

    toast({
      title: "Congratulations 🎉",
      description: "Your name has been updated successfully.",
    });
  }
  return (
    <div className="max-w-screen-sm space-y-8 p-4">
      <div className="space-y-2">
        <h1 className="font-semibold text-muted-foreground">Profile Picture</h1>
        <div className="flex items-center gap-8">
          <Avatar className="h-20 w-20 shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]">
            <AvatarImage src={user.image || "/assets/images/sac-head.png"} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <Label htmlFor="profilePicture">
              <Button variant={"outline"}>Change Picture</Button>{" "}
            </Label>
            <Input className={"hidden"} id="profilePicture" type="file" />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base font-semibold text-muted-foreground">
                    Profile Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      className="text-base placeholder:font-semibold placeholder:text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor="email"
                  className="text-base font-semibold text-muted-foreground"
                >
                  Email
                </Label>
                <Input
                  className="text-base placeholder:text-black"
                  type="email"
                  id="email"
                  placeholder="Email"
                  disabled
                  value={user.email}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor="role"
                  className="text-base font-semibold text-muted-foreground"
                >
                  Role
                </Label>
                <Input
                  className="text-base placeholder:text-black"
                  type="text"
                  id="role"
                  disabled
                  placeholder="Role"
                  value={user.role as string}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor="organisationName"
                  className="text-base font-semibold text-muted-foreground"
                >
                  Organisation ID
                </Label>
                <Input
                  type="text"
                  className="text-base placeholder:text-black"
                  id="organisationName"
                  disabled
                  placeholder="Organisation"
                  value={user.organisationId as string}
                />
              </div>
            </div>
            <Button type="submit" onClick={form.handleSubmit(onSubmit)}>
              Save Changes
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SacHeadProfile;
