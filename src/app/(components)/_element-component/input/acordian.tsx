import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface AccordionTemplateProps {
  items: {
    value: string
    trigger: React.ReactNode
    content: React.ReactNode
  }[]
  type?: "single" | "multiple"
  collapsible?: boolean
}

export function CustomAccordion({
  items,
  type = "single",
  collapsible = true,
}: AccordionTemplateProps) {
  return (
    <Accordion type={type} collapsible={collapsible} className="w-full">
      {items.map(({ value, trigger,content  }) => (
        <AccordionItem key={value} value={value}>
          <AccordionTrigger>{trigger}</AccordionTrigger>
          <AccordionContent>{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
