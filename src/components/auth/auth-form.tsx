"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Apple, X as XIcon } from "lucide-react";

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
import { useToast } from "@/hooks/use-toast";
import { AuthSchema, type AuthFormValues } from "@/lib/schemas";
import { GoogleIcon } from "@/components/icons/google-icon";
import { createAccountAction, signUpWithAppleAction, signUpWithGoogleAction, signUpWithXAction } from "@/app/actions";

export default function AuthForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(AuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: AuthFormValues) {
    setIsSubmitting(true);
    const result = await createAccountAction(values);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Success",
        description: result.message,
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }
  }

  async function handleSocialLogin(action: () => Promise<{success: boolean, message: string}>) {
    setIsSubmitting(true);
    const result = await action();
    setIsSubmitting(false);
     if (result.success) {
      toast({
        title: "Redirecting...",
        description: result.message,
      });
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Your password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Create my account"}
        </Button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <Button variant="outline" className="w-full" onClick={() => handleSocialLogin(signUpWithAppleAction)} disabled={isSubmitting}>
          <Apple className="mr-2 h-5 w-5" />
          Sign up with Apple
        </Button>
        <Button variant="outline" className="w-full" onClick={() => handleSocialLogin(signUpWithGoogleAction)} disabled={isSubmitting}>
          <GoogleIcon className="mr-2 h-5 w-5" />
          Sign up with Google
        </Button>
        <Button variant="outline" className="w-full" onClick={() => handleSocialLogin(signUpWithXAction)} disabled={isSubmitting}>
          <XIcon className="mr-2 h-5 w-5" />
          Sign up with X
        </Button>
      </div>
       <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <a href="#" className="font-medium text-primary hover:underline">
          Sign in
        </a>
      </p>
    </Form>
  );
}
