'use client'

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dispatch, SetStateAction, useState } from "react";
import { Controller, useForm } from "react-hook-form"
import { toast } from "react-hot-toast";
import { Textarea } from "./ui/textarea"
import { products } from "@/lib/data"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

interface FormModalProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

type FormData = {
    name: string;
    email: string;
    mobile: string;
    location: string;
    // carModel?: string;
    message: string;
    product: string;
};

export function FormModalComponent({ open, setOpen }: FormModalProps) {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm<FormData>();

    const productCategories = [
        ...new Set(
            products
                .map((p) => p.subSubCategory)
                .filter((item): item is string => Boolean(item))
        )
    ];

    const onSubmit = async (data: any) => {
        setLoading(true);
        // console.log("data from contact form", data);

        // const dataWithSource = {
        //     ...data,
        //     source: "Contact", // Add source field
        // };

        try {
            // await createQuery(dataWithSource);
            console.log(data)

            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed to send email");

            console.log("Query submitted successfully!");

            reset();

            toast.success("Your query was submitted successfully!");
            // 🔥 CLOSE MODAL ON SUCCESS
            setOpen(false);
        } catch (error) {
            console.error("Failed to submit query:", error);
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-sm">
                <DialogHeader>
                    <DialogTitle>We are here for you!</DialogTitle>
                    <DialogDescription>
                        Fill out the form and we’ll get back to you.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-2">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.name.message as string}
                            </p>
                        )}
                    </div>

                    {/* Email (Optional) */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            {...register("email", {
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Enter a valid email",
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.email.message as string}
                            </p>
                        )}
                    </div>

                    {/* Mobile Number */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="mobile">Mobile No</Label>
                        <Input
                            id="mobile"
                            type="tel"
                            {...register("mobile", {
                                required: "Mobile number is required",
                                pattern: {
                                    value: /^[6-9]\d{9}$/,
                                    message: "Enter a valid 10-digit Indian mobile number",
                                },
                            })}
                        />
                        {errors.mobile && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.mobile.message as string}
                            </p>
                        )}
                    </div>

                    {/* Location */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            {...register("location", { required: "Location is required" })}
                        />
                        {errors.location && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.location.message as string}
                            </p>
                        )}
                    </div>

                    {/* Products */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="product">Select Product</Label>

                        <Controller
                            name="product"
                            control={control}
                            rules={{ required: "Product is required" }}
                            render={({ field }) => (
                                <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select Product" />
                                    </SelectTrigger>

                                    <SelectContent side="bottom" position="popper">
                                        <SelectGroup>
                                            {productCategories.map((cat) => (
                                                <SelectItem key={cat} value={cat}>
                                                    {cat}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            )}
                        />

                        {errors.product && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.product.message as string}
                            </p>
                        )}
                    </div>


                    {/* Message */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="message">Message (Optional)</Label>
                        <Textarea
                            id="message"
                            rows={4}
                            placeholder="Write your message here..."
                            {...register("message")}
                        />
                        {errors.message && (
                            <p className="text-sm text-red-500 mt-1">
                                {errors.message.message}
                            </p>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-2 pt-2">
                        {/* <Button variant="outline" type="button" onClick={onClose}>
                        Cancel
                    </Button> */}
                        <Button type="submit" disabled={loading}>
                            {loading ? "Submitting..." : "Submit"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
