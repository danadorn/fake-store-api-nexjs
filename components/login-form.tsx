"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

// 1. define login validation rule with zod
const loginRule = z.object({
  email: z.email(),
  password: z.string()
  .min(1, "Password must be at least 8 characters long")
  .max(8, "Password must be at most 128 characters long")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character")
})
export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // 2. set form with loginRule
  const form = useForm<z.infer<typeof loginRule>>({
    resolver: zodResolver(loginRule),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  function onLoginSubmit(data: z.infer<typeof loginRule>) {
    console.log("Login data: ",data)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onLoginSubmit)}>
            <FieldGroup>
              <Controller 
              name="email"
              control={form.control}
              render={({ field, fieldState}) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input 
                  id="email" 
                  type="email" 
                  placeholder="example@gmail.com"
                  {...field} />
                
                  {
                    fieldState.error && (
                      <FieldError>{fieldState.error.message}</FieldError>
                    )
                  }
                </Field>
              )}
              />
              <Controller 
              name="password"
              control={form.control}
              render={({ field, fieldState}) => (
                <Field data-invalid={fieldState.invalid}>
                  <div className="flex items-center">
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input 
                  id="password" 
                  type="password"
                  {...field} />
                  {
                    fieldState.error && (
                      <FieldError>{fieldState.error.message}</FieldError>
                    )
                  }
                </Field>
              )}
              />
              <Field>
                <Button type="submit">Login</Button>
                <Button variant="outline" type="button">
                  Login with Google
                </Button>
                <FieldDescription className="text-center">
                  Don&apos;t have an account? <a href="#">Sign up</a>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
