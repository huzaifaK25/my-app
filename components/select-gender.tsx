import React from 'react';
import { Select } from './ui/select';
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormikProps, FormikValues } from 'formik';

interface Props {
  formik: FormikProps<FormikValues>;
}

const SelectGender: React.FC<Props> = ({ formik }) => {
  return (
    <>
      <Select
        value={formik.values.gender}
        onValueChange={(value) => {
          formik.setFieldValue('gender', value);
        }}
        onOpenChange={() => formik.setFieldTouched('gender', true)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select your gender" id="gender" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {/* <SelectLabel>Gender</SelectLabel> */}
            <SelectItem value="Male">Male</SelectItem>
            <SelectItem value="Female">Female</SelectItem>
            <SelectItem value="Others">Others</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      {formik.touched.gender && typeof formik.errors.gender === 'string' && (
        <p className="mt-1 text-sm text-red-600">{formik.errors.gender}</p>
      )}
    </>
  );
};

export default SelectGender;
