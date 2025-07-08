import { AccordionDemo } from '@/components/accordian-demo';
import { AlertDemo } from '@/components/alert-demo';
import { BadgeDemo } from '@/components/badge-demo';
import { BreadcrumbDemo } from '@/components/breadcrumb-demo';
import { ComboboxDemo } from '@/components/combobox-demo';
import { ComboboxDropdownMenu } from '@/components/combobox-dropdown';
import { ComboboxForm } from '@/components/combobox-form';
import { ComboboxPopover } from '@/components/combobox-popover';
import { ComboBoxResponsive } from '@/components/combobox-responsive';
import { CommandDemo } from '@/components/command-demo';
import { CustomButton } from '@/components/custom-button';
import { DialogDemo } from '@/components/dialog-demo';
import Form from '@/components/form';
import FramerMotionDemo from '@/components/framer-motion';
import { HoverCardDemo } from '@/components/hovercard-demo';
import { NavigationMenuDemo } from '@/components/nav-demo';
import { PopoverDemo } from '@/components/popover-demo';
import { SelectDemo } from '@/components/select-demo';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  return (
    <div className="mx-auto">
      {/* <Form /> */}

      <FramerMotionDemo />

      {/* <AccordionDemo />

      <AlertDemo />

      <CustomButton variant="primary">Submit</CustomButton>

      
      <Badge variant="default">Badge</Badge>
      <Badge variant="outline">Badge</Badge>
      <Badge variant="secondary">Badge</Badge>
      <Badge variant="destructive">Badge</Badge>
     
      <BadgeDemo />

      <div className="font-bold border-2 border-red-500 p-4">
        Ctrl + k for command-demo
      </div>
      <CommandDemo />

      <DialogDemo />

      <HoverCardDemo />

      <NavigationMenuDemo />

      <PopoverDemo />

      <BreadcrumbDemo />

      <SelectDemo />

      <ComboboxDemo />
      <ComboboxPopover />
      <ComboboxDropdownMenu />
      
      <ComboboxForm /> */}
    </div>
  );
}
