import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { motion } from "framer-motion";

interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  topics: string[];
  social?: {
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}

interface SpeakersGridProps {
  speakers?: Speaker[];
  title?: string;
  subtitle?: string;
}

const SpeakersGrid = ({
  speakers = [
    {
      id: "1",
      name: "Sarah Johnson",
      title: "Worship Leader & Author",
      bio: "Sarah has led worship at conferences worldwide and authored three books on modern worship practices.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      topics: ["Worship", "Leadership", "Songwriting"],
    },
    {
      id: "2",
      name: "Pastor Michael Chen",
      title: "Senior Pastor & Conference Speaker",
      bio: "With over 20 years of ministry experience, Michael brings practical wisdom to equipping the next generation.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      topics: ["Discipleship", "Church Growth", "Leadership"],
    },
    {
      id: "3",
      name: "Dr. Rebecca Williams",
      title: "Theologian & Author",
      bio: "Rebecca's work bridges theological depth with practical application for today's church leaders.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=rebecca",
      topics: ["Theology", "Biblical Studies", "Cultural Engagement"],
    },
    {
      id: "4",
      name: "David Thompson",
      title: "Missions Director",
      bio: "David has pioneered innovative approaches to global missions and community development.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      topics: ["Missions", "Community Outreach", "Social Justice"],
    },
    {
      id: "5",
      name: "Esther Okafor",
      title: "Worship Artist & Mentor",
      bio: "Esther's music ministry has touched thousands, and she's passionate about mentoring emerging worship leaders.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=esther",
      topics: ["Worship", "Mentoring", "Creativity"],
    },
    {
      id: "6",
      name: "James Rivera",
      title: "Youth Ministry Specialist",
      bio: "James has revolutionized approaches to youth ministry in both large and small church contexts.",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      topics: ["Youth Ministry", "Digital Engagement", "Discipleship"],
    },
  ],
  title = "Featured Speakers",
  subtitle = "Learn from these influential Christian leaders who are shaping the future of worship and ministry",
}: SpeakersGridProps) => {
  return (
    <section className="w-full py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">{title}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="aspect-[3/2] bg-slate-200 overflow-hidden">
                      <Avatar className="w-full h-full rounded-none">
                        <AvatarImage
                          src={speaker.imageUrl}
                          alt={speaker.name}
                          className="object-cover w-full h-full"
                        />
                        <AvatarFallback className="w-full h-full text-2xl">
                          {speaker.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                      <h3 className="text-xl font-bold text-white">
                        {speaker.name}
                      </h3>
                      <p className="text-white/80">{speaker.title}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-slate-600 mb-4">{speaker.bio}</p>

                    <div className="flex flex-wrap gap-2">
                      {speaker.topics.map((topic) => (
                        <TooltipProvider key={topic}>
                          <Tooltip>
                            <TooltipTrigger>
                              <Badge
                                variant="outline"
                                className="bg-slate-100 hover:bg-slate-200"
                              >
                                {topic}
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Sessions on {topic}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersGrid;
