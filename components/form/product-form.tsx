"use client";
import { useState } from "react";
import {
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/lib/data/imageUpload";
import { toast } from "sonner";
import { InsertProduct } from "@/lib/data/products";

export default function ProductForm({
  categories = [],
}: {
  categories: { id: number; name: string }[];
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const formSchema = z.object({
    title: z.string().min(1, "This field is required"),
    price: z.coerce.number().min(1, "This field is required"),
    description: z.string().min(1, "This field is required"),
    category: z.string().min(1, "Please choose a category"),
    images: z
      .any()
      .refine((files) => files?.length > 0, "Please insert image here"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      category: "",
      images: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);

      const imageFormData = new FormData();
      imageFormData.append("file", values.images[0]);

      const uploadProduct = await ImageUpload(imageFormData);

      const productData = {
        title: values.title,
        price: values.price,
        description: values.description,
        categoryId: Number(values.category),
        images: [uploadProduct.location],
      };

      const data = await InsertProduct(productData);
      console.log(data);
      toast.success("Upload New Product Successfully.");
      form.reset();
    } catch (error) {
      toast.error("Failed to upload new product! Please try again.");
    } finally {
      setIsLoading(false);
      setUploadProgress(0);
    }
  }

  function onReset() {
    form.reset();
    form.clearErrors();
  }

  return (
    <div className="mx-auto max-w-xl w-full">
      {/* Form Header */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground">New Product</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Fill in the details below to add a new product.
        </p>
      </div>

      {/* Form Card */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          onReset={onReset}
          className="flex flex-col gap-5"
        >
          {/* title */}
          <Controller
            control={form.control}
            name="title"
            render={({ field, fieldState }) => (
              <Field className="flex flex-col gap-1.5">
                <FieldLabel className="text-sm font-medium text-foreground">
                  Product Name
                </FieldLabel>
                <Input
                  placeholder="Macbook Pro 16"
                  {...field}
                  value={field.value ?? ""}
                  className="h-10 rounded-lg border-border bg-background text-sm"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* price */}
          <Controller
            control={form.control}
            name="price"
            render={({ field, fieldState }) => (
              <Field className="flex flex-col gap-1.5">
                <FieldLabel className="text-sm font-medium text-foreground">
                  Price <span className="text-muted-foreground font-normal">(USD)</span>
                </FieldLabel>
                <Input
                  type="number"
                  placeholder="0"
                  {...field}
                  value={field.value ?? 0}
                  className="h-10 rounded-lg border-border bg-background text-sm"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* description */}
          <Controller
            control={form.control}
            name="description"
            render={({ field, fieldState }) => (
              <Field className="flex flex-col gap-1.5">
                <FieldLabel className="text-sm font-medium text-foreground">
                  Description
                </FieldLabel>
                <Textarea
                  {...field}
                  value={field.value ?? ""}
                  placeholder="Describe your product..."
                  className="min-h-[100px] rounded-lg border-border bg-background text-sm resize-none"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* category */}
          <Controller
            control={form.control}
            name="category"
            render={({ field, fieldState }) => (
              <Field className="flex flex-col gap-1.5">
                <FieldLabel className="text-sm font-medium text-foreground">
                  Category
                </FieldLabel>
                <Select
                  value={field.value ?? ""}
                  onValueChange={(val) => field.onChange(val)}
                >
                  <SelectTrigger className="h-10 rounded-lg border-border bg-background text-sm">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent position="popper" className="z-50">
                    {(categories ?? []).map((c) => (
                      <SelectItem key={c.id} value={c.id.toString()}>
                        {c.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* image */}
          <Controller
            control={form.control}
            name="images"
            render={({ field, fieldState }) => (
              <Field className="flex flex-col gap-1.5">
                <FieldLabel className="text-sm font-medium text-foreground">
                  Product Image
                </FieldLabel>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files)}
                  className="h-10 rounded-lg border-border bg-background text-sm
                    file:mr-3 file:border-0 file:bg-muted file:text-muted-foreground
                    file:text-xs file:font-medium file:rounded-md file:px-3 file:py-1
                    cursor-pointer"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          {/* divider */}
          <div className="border-t border-border my-1" />

          {/* buttons */}
          <div className="flex gap-3">
            <Button
              type="reset"
              variant="outline"
              disabled={isLoading}
              className="flex-1 h-10 rounded-lg text-sm font-medium"
            >
              Reset
            </Button>
            <Button
              type="submit"
              variant="default"
              disabled={isLoading}
              className="flex-1 h-10 rounded-lg text-sm font-medium"
            >
              {isLoading
                ? `Submitting...`
                : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}