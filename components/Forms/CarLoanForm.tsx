'use client'

import React, { useState } from 'react'

import { Controller, useForm } from "react-hook-form";
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from '../ui/textarea';
import { createQuery } from '@/app/api/query';
import toast from 'react-hot-toast';

type FormData = {
    name: string;
    email: string;
    mobile: string;
    location: string;
    // carModel?: string;
    message: string;
};

export default function CarLoanForm() {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = async (data: any) => {
        setLoading(true);
        // console.log("data from contact form", data);

        const dataWithSource = {
            ...data,
            source: "Car Loan", // Add source field
        };

        try {
            await createQuery(dataWithSource);
            console.log("Query submitted successfully!");
            reset();

            toast.success("Your query was submitted successfully!");
        } catch (error) {
            console.error("Failed to submit query:", error);
            toast.error("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col w-full p-4 border-1 border-slate-200 shadow-md bg-white'>
            <div className='text-2xl font-semibold'>Get in touch</div>

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

                {/* Car Model Dropdown */}
                {/* <div className="flex flex-col gap-2">
                    <Label htmlFor="carModel">Car Model</Label>
                    <Controller
                        name="carModel"
                        control={control}
                        rules={{ required: "Car model is required" }}
                        render={({ field }) => (
                            <Select onValueChange={field.onChange} value={field.value}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a model" />
                                </SelectTrigger>
                                <SelectContent>
                                    {marutiSuzukiModels.map((model) => (
                                        <SelectItem key={model} value={model}>
                                            {model}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        )}
                    />
                    {errors.carModel && (
                        <p className="text-sm text-red-500 mt-1">
                            {errors.carModel.message as string}
                        </p>
                    )}
                </div> */}

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
        </div>
    )
}
