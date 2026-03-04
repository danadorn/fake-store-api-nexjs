"use client";
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
import { InsertProduct, uploadProduct } from "@/lib/data/products";

export default function ProductForm() {
  const formSchema = z.object({
    title: z.string().min(1, { message: "This field is required" }),
    price: z.coerce.number().optional(),
    description: z.string().min(1, { message: "This field is required" }),
    categoryId: z.string(),
    images: z.any().optional(),
    // submit: z.string().optional(),
    // reset: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: 0,
      description: "",
      categoryId: "",
      images: undefined,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    const mockProduct = {
      title: "a new productd",
      price: 7822,
      description: "A descrissavpdsassss1dbcdfffbssssstmmmion",
      categoryId: 39,
      images: [
        "https://api.escuelajs.co/api/v1/files/4c55.png"
      ]
    }
    const res = await InsertProduct(mockProduct)
    console.log("After upload product", res);
    const data = await res;
    console.log("After upload product", data);
  // Insert Product 
  // const res = await InsertProduct(mockProduct)
  //   console.log("After insert product",res);

}

function onReset() {
  form.reset();
  form.clearErrors();
}

return (
  <form
    onSubmit={form.handleSubmit(onSubmit)}
    onReset={onReset}
    className="space-y-8 "
  >
    <div className="grid grid-cols-12 gap-4">
      <Controller
        control={form.control}
        name="title"
        render={({ field, fieldState }) => (
          <Field
            className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
            data-invalid={fieldState.invalid}
          >
            <FieldLabel className="flex w-auto!">Product Title</FieldLabel>

            <Input
              key="text-input-0"
              placeholder="Macbook pro"
              type="text"
              className=""
              {...field}
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        control={form.control}
        name="price"
        render={({ field, fieldState }) => (
          <Field
            className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
            data-invalid={fieldState.invalid}
          >
            <FieldLabel className="flex w-auto!">Price</FieldLabel>

            <Input
              key="number-input-0"
              placeholder="200 USD"
              type="number"
              className=""
              {...field}
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        control={form.control}
        name="description"
        render={({ field, fieldState }) => (
          <Field
            className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
            data-invalid={fieldState.invalid}
          >
            <FieldLabel className="flex w-auto!">
              Product Description
            </FieldLabel>

            <Textarea
              key="textarea-0"
              id="description"
              placeholder="Product description here..."
              className=""
              {...field}
            />


            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        control={form.control}
        name="categoryId"
        render={({ field, fieldState }) => (
          <Field
            className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
            data-invalid={fieldState.invalid}
          >
            <FieldLabel className="flex w-auto!">Category</FieldLabel>

            <Select
              key="select-0"
              value={field.value}
              name={field.name}
              onValueChange={field.onChange}
            >
              <SelectTrigger className="w-full ">
                <SelectValue placeholder="Please Choose category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem key="Computer" value="Computer">
                  Electronic
                </SelectItem>

                <SelectItem key="Food" value="Food">
                  Drink
                </SelectItem>
              </SelectContent>
            </Select>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        control={form.control}
        name="images"
        render={({ field, fieldState }) => (
          <Field
            className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
            data-invalid={fieldState.invalid}
          >
            <FieldLabel className="flex w-auto!">Choose Images</FieldLabel>

            <Input
              key="file-input-0"
              placeholder=""
              type="file"
              className=""
              {...field}
            />

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        control={form.control}
        name="submit"
        render={({ field, fieldState }) => (
          <Field
            className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
            data-invalid={fieldState.invalid}
          >
            <FieldLabel className="hidden w-auto!">Submit</FieldLabel>

            <Button
              key="submit-button-0"
              id="submit"
              name=""
              className="w-full"
              type="submit"
              variant="default"
            >
              Submit
            </Button>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Controller
        control={form.control}
        name="reset"
        render={({ field, fieldState }) => (
          <Field
            className="col-span-12 col-start-auto flex self-end flex-col gap-2 space-y-0 items-start"
            data-invalid={fieldState.invalid}
          >
            <FieldLabel className="hidden w-auto!">Reset</FieldLabel>

            <Button
              key="reset-button-0"
              id="reset"
              name=""
              className="w-full"
              type="reset"
              variant="outline"
            >
              Reset
            </Button>

            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </div>
  </form>
);
}
