"use client";

import { Button, TextField, Callout,Text } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import z from "zod";
import { createIssue } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";

type formData= z.infer<typeof createIssue>

function Page() {
  const { register, control, handleSubmit,formState:{errors} } = useForm<formData>({
    resolver:zodResolver(createIssue),
    defaultValues: { title: "", description: "" },
  });

  const router = useRouter();
  const [error,setError] = useState< string|null >(null);

  return (
   
    <div  className="max-w-3xl mx-auto mt-4 space-y-6 p-4 rounded-xl shadow-lg">
      {error && <Callout.Root color="red">
        <Callout.Text>
         {error}
        </Callout.Text>
      </Callout.Root>}

      <form
        onSubmit={handleSubmit(async (data) => {
        try {
              await axios.post("/api/issues", data);
          router.push("/Issue");
        } catch (error) {
            setError("An Unexpected Error Occur");
        }
        })}
       
      >
        <div className="space-y-2">
          <label className="text-md font-medium text-gray-900">Title</label>
          <TextField.Root
            size="3"
            placeholder="Enter issue title..."
            {...register("title")}
          />
          {errors.title && <Text color='red'>{errors.title.message}</Text>}
        </div>

        <div className="flex flex-col gap-y-1">
          <label className="text-md font-medium text-gray-900">
            Description
          </label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE
                {...field}
                value={field.value || ""}
                onChange={field.onChange}
                placeholder="Enter issue description..."
              />
            )}
          />
          <div className="mb-2">
            {errors.description && <Text  color="red" as="p">{errors.description.message}</Text>}
            </div>
        </div>

        <Button size="3" className="w-full">
          Submit New Issue
        </Button>
      </form>
    </div>
  );
}

export default Page;
