import React from 'react';

import { Button } from '@/components/ui/button';

export interface RideShareButtonProps {
    variant?: 'ghost' | 'link' | 'default' | 'destructive' | 'outline' | 'secondary';
    classname?: string;
    disabled?: boolean;
    iconBefore?: React.ReactNode;
    onClick?: () => void;
    label?: React.ReactNode;
    type?: 'submit' | 'reset' | 'button';
    icon?: React.ReactNode;
    view: 'primary' | 'secondary' | 'tertiary' | 'tertiary1' | 'danger' | 'none'
}

export function CustomButton({
    variant = 'default',
    view,
    label,
    disabled,
    icon,
    type = 'button',
    iconBefore,
    ...props
}: RideShareButtonProps) {
    return (
        <Button
            type={type}
            disabled={disabled}
            className={`cursor-pointer h-10  rounded-4xl py-2 ${props.classname} +
     ${view === 'primary' ? 'bg-appOrange border-appOrange text-white hover:bg-orange-400' :
                    view === 'danger' ? 'bg-red-600 text-white hover:bg-red-400 hover:text-text' :
                        view === 'tertiary' ? 'bg-appGray text-white hover:bg-rideshareGrey3 hover:text-rideshareRed' :
                            view === 'tertiary1' ? 'bg-rideshareGrey1 text-black hover:bg-rideshareGrey3 ' :
                                view === 'secondary' ? 'bg-white text-appOrange border border-appOrange hover:bg-appLightOrange1 hover:text-appOrange' : ''
                }`}
            variant={variant} {...props}>
            {iconBefore}  {label} {icon}
        </Button>
    );
}

/**
 * Sample usage:
 *
 * <RideShareButton variant="outline" label="Book now" />
 */
