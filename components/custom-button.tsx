// CustomButton.tsx
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CustomButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function CustomButton({
  variant = 'primary',
  children,
}: CustomButtonProps) {
  return (
    <Button
      className={cn(
        'px-4 py-2 rounded-xl text-white',
        variant === 'primary' && 'bg-blue-600 hover:bg-blue-700',
        variant === 'secondary' && 'bg-gray-600 hover:bg-gray-700'
      )}
    >
      {children}
    </Button>
  );
}
