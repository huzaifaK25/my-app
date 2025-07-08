'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FormikValues, useFormik } from 'formik';
import FormSchema from '@/lib/form-schema';
import SelectGender from './select-gender';

const Form = () => {
  const formik = useFormik<FormikValues>({
    initialValues: {
      email: '',
      password: '',
      date: '',
      time: '',
      description: '',
      gender: '',
    },
    validationSchema: FormSchema,
    onSubmit(values, { resetForm }) {
      console.log(values);
      // TODO: mutation here with onSuccess/onError
      alert('Form submitted successfully!');
      resetForm;
    },
  });
  return (
    // wrap form around a card
    <Card className="w-fit">
      <CardHeader>
        <CardTitle>Input Form</CardTitle>
        <CardDescription>Enter your data below</CardDescription>
        <CardAction>
          <Button variant="default">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-6">
            {/* input email pw box */}
            <div className="flex gap-4 items-start">
              {/* EMAIL INPUT */}
              <div className="grid gap-2 w-full">
                <Label htmlFor="email">Email:</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email &&
                  typeof formik.errors.email === 'string' && (
                    <p className="text-sm text-red-600">
                      {formik.errors.email}
                    </p>
                  )}
              </div>
              {/* PASSWORD INPUT */}
              <div className="w-full">
                <div className="grid gap-2 ">
                  <Label className="" htmlFor="password">
                    Password:
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    required
                    {...formik.getFieldProps('password')}
                  />

                  {formik.touched.password &&
                    typeof formik.errors.password === 'string' && (
                      <p className="text-sm text-red-600">
                        {formik.errors.password}
                      </p>
                    )}
                </div>
                <a
                  href="#"
                  className="ml-auto inline-block text-xs underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            {/* DOB/TIME INPUT */}
            <div className="flex gap-4">
              <div className="grid gap-2 w-full">
                <Label htmlFor="date">Date of birth: </Label>
                <Input
                  id="date"
                  type="date"
                  required
                  {...formik.getFieldProps('date')}
                />
                {formik.touched.date &&
                  typeof formik.errors.date === 'string' && (
                    <p className=" text-sm text-red-600">
                      {formik.errors.date}
                    </p>
                  )}
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="date">Time:</Label>
                <Input
                  id="time"
                  type="time"
                  required
                  {...formik.getFieldProps('time')}
                />
                {formik.touched.time &&
                  typeof formik.errors.time === 'string' && (
                    <p className=" text-sm text-red-600">
                      {formik.errors.time}
                    </p>
                  )}
              </div>
            </div>
            {/* TEXTAREA INPUT */}
            <div className="grid gap-2">
              <Label htmlFor="description">Tell us about yourself:</Label>
              <Textarea
                className=""
                placeholder="write here..."
                required
                {...formik.getFieldProps('description')}
              />
              {formik.touched.description &&
                typeof formik.errors.description === 'string' && (
                  <p className=" text-sm text-red-600">
                    {formik.errors.description}
                  </p>
                )}
            </div>
            {/* SELECT INPUT */}
            <div className="grid gap-2">
              <Label htmlFor="gender">Select your gender:</Label>
              <SelectGender formik={formik} />
            </div>
            {/* Action buttons */}
            <div className="flex flex-col gap-2">
              <Button type="submit" className="w-full">
                Login
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 mt-4"></CardFooter>
    </Card>
  );
};

export default Form;
