
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
import { signInAction, signInWithAppleAction, signInWithGoogleAction, signInWithXAction } from "@/app/actions";
import Link from "next/link";

export default function SignInForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<AuthFormValues>({
    resolver: zodResolver(AuthSchema), // Reusing AuthSchema as it fits email/password
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: AuthFormValues) {
    setIsSubmitting(true);
    const result = await signInAction(values);
    setIsSubmitting(false);

    if (result.success) {
      toast({
        title: "Success",
        description: result.message,
      });
      // Potentially redirect user here
      // form.reset();
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
          {isSubmitting ? "Logging in..." : "Log into my account"}
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
        <Button variant="outline" className="w-full" onClick={() => handleSocialLogin(signInWithAppleAction)} disabled={isSubmitting}>
          <Apple className="mr-2 h-5 w-5" />
          Sign in with Apple
        </Button>
        <Button variant="outline" className="w-full" onClick={() => handleSocialLogin(signInWithGoogleAction)} disabled={isSubmitting}>
          <GoogleIcon className="mr-2 h-5 w-5" />
          Sign in with Google
        </Button>
        <Button variant="outline" className="w-full" onClick={() => handleSocialLogin(signInWithXAction)} disabled={isSubmitting}>
          <XIcon className="mr-2 h-5 w-5" />
          Sign in with X
        </Button>
      </div>
       <p className="mt-6 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/" className="font-medium text-primary hover:underline">
          Create account
        </Link>
      </p>
    </Form>
  );
}
