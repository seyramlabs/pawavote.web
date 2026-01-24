import * as React from 'react';

import { ChevronDown } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export interface DropdownProps {
    triggerLabel: string;
    items: { label: string; onClick: () => void }[];
    classname?: string;
    labelStyle?: string
}

export const CustomDropdown: React.FC<DropdownProps> = ({labelStyle, triggerLabel, items, classname }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={`${classname} flex items-center focus:outline-none`}>
                <span className={labelStyle|| 'flex items-center'}>
                </span>
                    {triggerLabel} 
                    <ChevronDown size={10} className='ml-1' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {items.map((item, index) => (
                    <DropdownMenuItem key={index} onClick={item.onClick} className='focus:outline-none'>
                        {item.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

