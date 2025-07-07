import { AccordionDemo } from '@/components/accordian-demo';
import { AlertDemo } from '@/components/alert-demo';

export default function Home() {
  return (
    <div className="  flex flex-col items-center pt-20 pb-20 gap-20">
      <AccordionDemo />
      <AlertDemo />
    </div>
  );
}
