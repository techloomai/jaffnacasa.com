import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Home, Calendar } from "lucide-react";

export function RoomsHighlights() {
  const rooms = [
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Family Rooms",
      description:
        "Spacious rooms ideal for families and groups. Comfortable accommodations designed for extended stays.",
    },
    {
      icon: <Home className="h-8 w-8 text-accent" />,
      title: "3 Bedroom + Hall + Kitchen",
      description:
        "Self-catering facilities perfect for long stays. Full kitchen and common areas for your convenience.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-accent" />,
      title: "Group Friendly",
      description:
        "Perfect for wedding groups, events, and pilgrim stays. We accommodate large parties with ease.",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Comfortable A/C & Non A/C Rooms
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Experience comfort and convenience in the heart of Jaffna
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="mb-4">{room.icon}</div>
                <CardTitle>{room.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {room.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

