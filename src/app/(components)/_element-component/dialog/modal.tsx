import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

export interface CustomModalProps {
  content?: React.ReactNode
  open: boolean
  title: string
  classname?: string
  onClose: () => void
  borderButton?:boolean
  large?:boolean
}

export function CustomModal({ content,large,borderButton, classname, open, title, onClose }: CustomModalProps) {
  return (
    <Dialog open={open}  onOpenChange={onClose}>
     <DialogContent
        className={cn(
          large ? "max-w-[95vw] w-full sm:max-w-[800px] h-auto max-h-[90vh] overflow-y-auto" : "",
          classname
        )}
      >
        <DialogHeader className="text-center ">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        { borderButton && <hr /> }
        {content}
      </DialogContent>
    </Dialog>
  )
}

