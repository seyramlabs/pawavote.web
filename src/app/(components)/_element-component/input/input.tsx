'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';

interface RideShareInputProps {
  placeholder?: string;
  defaultValue?: string | number;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  required?: boolean
  name: string
}

export function CustomInput({
  placeholder = 'Enter text',
  value,
  defaultValue,
  onChange,
  type = 'text',
  className,
  required,
  name,
  ...props
}: RideShareInputProps) {
  return (
    <Input
      defaultValue={defaultValue}
      id={name}
      name={name}
      type={type === 'number' ? 'text' : type}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={(event) => {
        if (type === 'number') {
          const regex = /^[0-9]+$/;
          if (regex.test(event.target.value) || event.target.value === '') {
            onChange?.(event);
          }
        } else {
          onChange?.(event);
        }
      }}
      className={cn('h-12 hover:ring! hover:ring-appsOrange! shadow-none rounded-lg border-none bg-gray-100 text-appGray', className)}
      {...props}
    />
  );
}

interface RideShareSelectProps {
  options: Record<string, any>[];
  onChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
  value?: string;
  name:string
  defaultValue?:string
}

export function CustomSelect({
  options,
  onChange,
  className,
  placeholder = 'Select an option',
  value,
  name,
  ...props
}: RideShareSelectProps) {
  return (
    <Select onValueChange={onChange} value={value} {...props}>
      <SelectTrigger className={cn('shadow-none h-12! selection:border-0! active:ring-0! hover:ring-appsOrange!  rounded-lg border-none bg-gray-100 text-appGray', className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <SelectItem id={name} key={index} value={String(option.value)}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

/**
 * Sample usage:
 *
 * <RideShareSelect
 *   options={[
 *     { value: 'option1', label: 'Option 1' },
 *     { value: 'option2', label: 'Option 2' }
 *   ]}
 *   value={selectedValue}
 *   onChange={handleSelectChange}
 *   placeholder="Choose an option"
 * />
 */



/**
 * Sample usage:
 *
 * <RideShareInput
 *   type="text"
 *   value={state.email}
 *   onChange={handleChange}
 *   placeholder="Enter your email address"
 * />
 */
