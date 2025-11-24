"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export function Attractions() {
  const attractions = [
    {
      name: "Nallur Kandaswamy Kovil",
      description:
        "One of the most significant Hindu temples in Jaffna, known for its grand architecture and spiritual significance.",
    },
    {
      name: "Jaffna Public Library",
      description:
        "A symbol of resilience and knowledge, rebuilt after the civil war, housing thousands of books and historical documents.",
    },
    {
      name: "Jaffna Fort & Lagoon",
      description:
        "Historic Portuguese and Dutch fort overlooking the scenic Jaffna Lagoon, perfect for history enthusiasts.",
    },
    {
      name: "Clock Tower & City Centre",
      description:
        "The vibrant heart of Jaffna city, surrounded by local markets, shops, and traditional architecture.",
    },
    {
      name: "Local Temples & Arch Gateways",
      description:
        "Explore the beautiful white arch gateways and numerous temples that dot the Jaffna landscape.",
    },
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Explore the Beauty of Jaffna from Jaffna Casa
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Top attractions within easy reach of our guest house
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <CardTitle className="text-xl">{attraction.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {attraction.description}
                </CardDescription>
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-4"
                  asChild
                >
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                  }}>
                    View on Maps →
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

