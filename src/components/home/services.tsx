"use client";

import { DetailedHTMLProps, HTMLAttributes, ReactElement, forwardRef } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Paragraph,
  Subtitle,
  Title,
} from "@app/components/ui";
import { Button } from "@app/components/ui/button";
import { useMediaQuery } from "@app/hooks/useMediaQuery";
import { cn } from "@app/lib/utils";

export type ServiceList = {
  title: string;
  subtitle?: string;
  description: string;
  cta: string;
  icon: ReactElement;
};

type ServiceProps = {
  data: {
    icon: ReactElement;
    title: string;
    subtitle?: string;
    serviceList: ServiceList[];
  };
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const ServicesSection = forwardRef<HTMLDivElement, ServiceProps>(({ data, className, ...props }, ref) => {
  const { serviceList, icon: Icon, title, subtitle } = data;
  /* ### TailwindCSS Breakpoints
   * - `sm`: 640px (default)
   * - `md`: 768px
   * - `lg`: 1024px
   * - `xl`: 1280px
   * - `2xl`: 1536px
   */
  const isMobile: boolean = useMediaQuery(768);

  return (
    <section ref={ref} className={cn("flex flex-col gap-8", className)} {...props}>
      <header className="flex items-center gap-2">
        {Icon && Icon}
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </header>
      {isMobile ? (
        <div className={"flex gap-12"}>
          {serviceList.map(({ icon: Icon, title, subtitle, description, cta }) => (
            <Card key={title.trim()} className="flex w-full max-w-[25rem] flex-col items-center shadow-lg">
              <CardHeader className="items-center text-center">
                {Icon && Icon}
                <CardTitle className="font-title">{title}</CardTitle>
                {subtitle && <CardTitle className="font-subtitle">{subtitle}</CardTitle>}
              </CardHeader>
              <CardContent className="md:px-8">
                <CardDescription>{description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full font-sans font-semibold text-white uppercase" variant={"default"} size={"lg"}>
                  {cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <Carousel
          opts={{
            active: true,
            loop: false,
            watchResize: true,
          }}
          ref={ref}
          className="w-full"
          {...props}
        >
          <CarouselContent className="md:-ml-4 ml-0">
            {serviceList.map(({ icon: Icon, title, subtitle, description, cta }) => (
              <CarouselItem key={title.trim()} className="pl-3 md:pl-4">
                <Card className="flex h-full w-full flex-col items-center justify-center shadow-lg">
                  <CardHeader className="items-center text-center">
                    {Icon && Icon}
                    <CardTitle className="font-title">{title}</CardTitle>
                    {subtitle && <CardTitle className="font-subtitle">{subtitle}</CardTitle>}
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-paragraph">{description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full font-sans font-semibold text-white uppercase"
                      variant={"default"}
                      size={"lg"}
                    >
                      {cta}
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-9" />
          <CarouselNext className="mr-9" />
        </Carousel>
      )}
    </section>
  );
});
ServicesSection.displayName = "ServicesSection";
