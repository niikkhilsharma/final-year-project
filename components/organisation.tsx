import Image from "next/image";
import React, { useState, useEffect } from "react";
import type { Organisation, User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TbListDetails } from "react-icons/tb";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ClubCard from "./clubCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface OrganisationType {
  organisationDetails: Organisation;
  users: User[];
}

const OrganisationPage = ({ organisationId }: { organisationId: string }) => {
  const [organisation, setOrganisation] = useState<OrganisationType | null>(
    null,
  );

  useEffect(() => {
    async function getOrganisationDetails() {
      const organisation = await fetch(
        `/api/database/getOrganisation/${organisationId}`,
      );
      const organisationDetailsResponse = await organisation.json();
      console.log(organisationDetailsResponse);
      setOrganisation(organisationDetailsResponse);
    }
    getOrganisationDetails();
  }, []);

  return (
    <>
      {organisation?.organisationDetails && (
        <div className="p-4">
          <Image
            src={organisation.organisationDetails.image}
            alt="Organisation Image"
            width={700}
            height={700}
            className="h-96 w-full rounded-xl"
          />
          <div className="my-4">
            <div className="flex justify-center gap-2 text-center text-3xl font-semibold">
              Organisation <TbListDetails size={30} />
            </div>
            <div className="space-y-8">
              <div>
                <h1 className="mb-2 text-xl font-semibold">
                  Organisation Details
                </h1>
                <div>
                  <h3 className="text-lg font-medium">
                    SAC Head:
                    <span className="pl-1">
                      {
                        organisation.users.find(
                          (user) => user.role === "SACHEAD",
                        )?.name
                      }
                    </span>
                  </h3>
                  <h3 className="text-lg font-medium">
                    Organisation Name:
                    <span className="pl-1">
                      {organisation.organisationDetails.collegeName}
                    </span>
                  </h3>
                  <h3 className="text-lg font-medium">
                    City:
                    <span className="pl-1">
                      {organisation.organisationDetails.collegeName}
                    </span>
                  </h3>
                  <h3 className="text-lg font-medium">
                    Created By:
                    <span className="pl-1">
                      {organisation.organisationDetails.createdBy}
                    </span>
                  </h3>
                  <h3 className="text-lg font-medium">
                    State:
                    <span className="pl-1">
                      {organisation.organisationDetails.state}
                    </span>
                  </h3>
                  <h3 className="text-lg font-medium">
                    Country:
                    <span className="pl-1">
                      {organisation.organisationDetails.country}
                    </span>
                  </h3>
                  <h3 className="text-lg font-medium">
                    Website URL:
                    <span className="pl-1">
                      {organisation.organisationDetails.websiteUrl}
                    </span>
                  </h3>
                  <h3 className="text-lg font-medium">
                    About:
                    <span className="pl-1">
                      {organisation.organisationDetails.about}
                    </span>
                  </h3>
                  <h3 className="text-lg font-medium">
                    Created At:
                    <span className="pl-1">
                      {new Date(
                        organisation.organisationDetails.createdAt,
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </h3>
                </div>
              </div>
              <div>
                <h1 className="mb-2 text-xl font-semibold">Sac Head Details</h1>
                <div>
                  <div className="flex items-center">
                    <h1 className="mr-1 text-lg font-medium">
                      Profile Picture:
                    </h1>

                    <Avatar>
                      <AvatarImage
                        src={
                          organisation.users.find(
                            (user) => user.role === "SACHEAD",
                          )?.image as string
                        }
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="text-lg font-medium">
                    Name:
                    <span className="pl-1">
                      {
                        organisation.users.find(
                          (user) => user.role === "SACHEAD",
                        )?.name
                      }
                    </span>
                  </h3>
                  <h3 className="text-lg font-medium">
                    Email:
                    <span className="pl-1">
                      {
                        organisation.users.find(
                          (user) => user.role === "SACHEAD",
                        )?.email
                      }
                    </span>
                  </h3>
                  <h3 className="text-lg font-medium">
                    Created At:
                    <span className="pl-1">
                      {(() => {
                        const sacheadUser = organisation.users.find(
                          (user) => user.role === "SACHEAD",
                        );
                        const createdAt = sacheadUser?.createdAt;

                        return createdAt
                          ? new Date(createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : "Date not available";
                      })()}
                    </span>
                  </h3>
                </div>
              </div>
              <div>
                <h1 className="mb-2 text-xl font-semibold">Clubs</h1>
                <div className="mx-12">
                  <Carousel className="w-full max-w-screen-lg">
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem
                          key={index}
                          className="pl-2 md:basis-1/2 md:pl-4 lg:basis-1/3"
                        >
                          <div className="p-1">
                            <ClubCard />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
              <div className="max-w-md md:max-w-screen-sm">
                <h1 className="text-xl font-semibold">FAQ&apos;S</h1>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrganisationPage;
