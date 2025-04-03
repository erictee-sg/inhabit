import React, { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

interface ScheduleItemProps {
  time: string;
  title: string;
  speaker: string;
  location: string;
  type: "keynote" | "workshop" | "worship" | "break";
  description?: string;
  capacity?: number;
}

interface DayScheduleProps {
  date: string;
  items: ScheduleItemProps[];
}

const ScheduleItem = ({
  time = "9:00 AM",
  title = "Session Title",
  speaker = "Speaker Name",
  location = "Main Hall",
  type = "keynote",
  description = "Description of this session goes here. Learn about important topics and grow in your faith journey.",
  capacity = 200,
}: ScheduleItemProps) => {
  const typeColors = {
    keynote: "bg-brand-primary/20 text-brand-primary",
    workshop: "bg-brand-secondary/20 text-brand-secondary",
    worship: "bg-brand-primary/10 text-brand-primary",
    break: "bg-gray-100 text-gray-800",
  };

  const typeIcons = {
    keynote: <Users className="h-4 w-4 mr-1" />,
    workshop: <Users className="h-4 w-4 mr-1" />,
    worship: <Users className="h-4 w-4 mr-1" />,
    break: <Clock className="h-4 w-4 mr-1" />,
  };

  return (
    <Card
      className="mb-4 overflow-hidden border-l-4 hover:shadow-md transition-shadow"
      style={{
        borderLeftColor:
          type === "keynote"
            ? "#fa7a2c"
            : type === "workshop"
              ? "#889a98"
              : type === "worship"
                ? "#fa7a2c"
                : "#9ca3af",
      }}
    >
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="bg-gray-50 p-4 md:w-1/4 flex flex-col justify-center items-center md:items-start">
            <div className="text-lg font-bold text-gray-900">{time}</div>
            <div className="flex items-center mt-2">
              <MapPin className="h-4 w-4 text-gray-500 mr-1" />
              <span className="text-sm text-gray-600">{location}</span>
            </div>
            <Badge className={`mt-2 ${typeColors[type]} flex items-center`}>
              {typeIcons[type]}
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>
            {capacity && (
              <div className="text-xs text-gray-500 mt-2 flex items-center">
                <Users className="h-3 w-3 mr-1" />
                Capacity: {capacity}
              </div>
            )}
          </div>
          <div className="p-4 md:w-3/4">
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-sm font-medium text-brand-primary mb-2">
              {speaker}
            </p>
            <p className="text-gray-600 text-sm">{description}</p>
            <Button variant="outline" size="sm" className="mt-3">
              Add to My Schedule
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const DaySchedule = ({
  date = "Day 1 - Friday, October 15",
  items = [],
}: DayScheduleProps) => {
  const defaultItems: ScheduleItemProps[] = [
    {
      time: "9:00 AM",
      title: "Opening Keynote: The Heart of Worship",
      speaker: "Pastor David Wilson",
      location: "Main Auditorium",
      type: "keynote",
      description:
        "An inspiring message on rediscovering authentic worship and its transformative power in our daily lives.",
      capacity: 500,
    },
    {
      time: "11:00 AM",
      title: "Workshop: Leading Worship with Excellence",
      speaker: "Sarah Johnson",
      location: "Workshop Room A",
      type: "workshop",
      description:
        "Practical training for worship leaders on song selection, team dynamics, and creating meaningful worship experiences.",
      capacity: 150,
    },
    {
      time: "12:30 PM",
      title: "Lunch Break",
      speaker: "Catering Team",
      location: "Fellowship Hall",
      type: "break",
      description: "Enjoy a delicious meal and connect with other attendees.",
      capacity: 300,
    },
    {
      time: "2:00 PM",
      title: "Afternoon Worship Session",
      speaker: "inHabit Worship Team",
      location: "Main Auditorium",
      type: "worship",
      description:
        "A powerful time of corporate worship led by our talented team of musicians and vocalists.",
      capacity: 500,
    },
    {
      time: "4:00 PM",
      title: "Workshop: The Theology of Worship",
      speaker: "Dr. Michael Thompson",
      location: "Workshop Room B",
      type: "workshop",
      description:
        "Exploring the biblical foundations of worship and how it shapes our understanding of God and community.",
      capacity: 150,
    },
  ];

  const scheduleItems = items.length > 0 ? items : defaultItems;

  return (
    <div className="py-4">
      <div className="flex items-center mb-6">
        <Calendar className="h-5 w-5 text-brand-primary mr-2" />
        <h2 className="text-xl font-bold text-gray-900">{date}</h2>
      </div>
      <div className="space-y-4">
        {scheduleItems.map((item, index) => (
          <ScheduleItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

interface ScheduleSectionProps {
  title?: string;
  subtitle?: string;
  days?: DayScheduleProps[];
}

const ScheduleSection = ({
  title = "Conference Schedule",
  subtitle = "Join us for three days of inspiring keynotes, practical workshops, and powerful worship experiences.",
  days = [],
}: ScheduleSectionProps) => {
  const [activeTab, setActiveTab] = useState("day1");

  const defaultDays: DayScheduleProps[] = [
    {
      date: "Day 1 - Friday, October 15",
      items: [
        {
          time: "9:00 AM",
          title: "Opening Keynote: The Heart of Worship",
          speaker: "Pastor David Wilson",
          location: "Main Auditorium",
          type: "keynote",
          description:
            "An inspiring message on rediscovering authentic worship and its transformative power in our daily lives.",
          capacity: 500,
        },
        {
          time: "11:00 AM",
          title: "Workshop: Leading Worship with Excellence",
          speaker: "Sarah Johnson",
          location: "Workshop Room A",
          type: "workshop",
          description:
            "Practical training for worship leaders on song selection, team dynamics, and creating meaningful worship experiences.",
          capacity: 150,
        },
        {
          time: "12:30 PM",
          title: "Lunch Break",
          speaker: "Catering Team",
          location: "Fellowship Hall",
          type: "break",
          description:
            "Enjoy a delicious meal and connect with other attendees.",
          capacity: 300,
        },
        {
          time: "2:00 PM",
          title: "Afternoon Worship Session",
          speaker: "inHabit Worship Team",
          location: "Main Auditorium",
          type: "worship",
          description:
            "A powerful time of corporate worship led by our talented team of musicians and vocalists.",
          capacity: 500,
        },
        {
          time: "4:00 PM",
          title: "Workshop: The Theology of Worship",
          speaker: "Dr. Michael Thompson",
          location: "Workshop Room B",
          type: "workshop",
          description:
            "Exploring the biblical foundations of worship and how it shapes our understanding of God and community.",
          capacity: 150,
        },
      ],
    },
    {
      date: "Day 2 - Saturday, October 16",
      items: [
        {
          time: "9:00 AM",
          title: "Morning Devotional",
          speaker: "Pastor Lisa Chen",
          location: "Main Auditorium",
          type: "worship",
          description:
            "Start your day with scripture, prayer, and worship to center your heart on God's presence.",
          capacity: 500,
        },
        {
          time: "10:30 AM",
          title: "Keynote: Worship as Mission",
          speaker: "Dr. James Anderson",
          location: "Main Auditorium",
          type: "keynote",
          description:
            "Exploring how worship shapes our missional identity and empowers us to serve our communities.",
          capacity: 500,
        },
        {
          time: "12:00 PM",
          title: "Lunch Break",
          speaker: "Catering Team",
          location: "Fellowship Hall",
          type: "break",
          description:
            "Enjoy a delicious meal and connect with other attendees.",
          capacity: 300,
        },
        {
          time: "1:30 PM",
          title: "Workshop: Songwriting for Worship",
          speaker: "Mark Williams",
          location: "Workshop Room A",
          type: "workshop",
          description:
            "Learn the craft of writing theologically rich and musically engaging worship songs for your congregation.",
          capacity: 150,
        },
        {
          time: "3:30 PM",
          title: "Workshop: Technology in Worship",
          speaker: "Tech Team Leaders",
          location: "Workshop Room C",
          type: "workshop",
          description:
            "Practical guidance on using sound, lighting, and visual media to enhance the worship experience.",
          capacity: 100,
        },
        {
          time: "7:00 PM",
          title: "Evening Worship Concert",
          speaker: "Guest Worship Artist",
          location: "Main Auditorium",
          type: "worship",
          description:
            "A special evening of worship featuring renowned guest artists and the inHabit worship team.",
          capacity: 500,
        },
      ],
    },
    {
      date: "Day 3 - Sunday, October 17",
      items: [
        {
          time: "9:00 AM",
          title: "Prayer and Worship",
          speaker: "Prayer Team",
          location: "Prayer Chapel",
          type: "worship",
          description:
            "An intimate gathering for intercessory prayer and quiet worship before the final day begins.",
          capacity: 150,
        },
        {
          time: "10:30 AM",
          title: "Closing Keynote: Commissioned to Worship",
          speaker: "Bishop Robert Taylor",
          location: "Main Auditorium",
          type: "keynote",
          description:
            "A powerful message on carrying the spirit of worship beyond the conference into our daily lives and ministries.",
          capacity: 500,
        },
        {
          time: "12:30 PM",
          title: "Lunch Break",
          speaker: "Catering Team",
          location: "Fellowship Hall",
          type: "break",
          description:
            "Final opportunity to connect with fellow attendees over a meal.",
          capacity: 300,
        },
        {
          time: "2:00 PM",
          title: "Commissioning Service",
          speaker: "Conference Leadership Team",
          location: "Main Auditorium",
          type: "worship",
          description:
            "A special time of prayer, worship, and commissioning as we send participants back to their communities equipped and inspired.",
          capacity: 500,
        },
      ],
    },
  ];

  const scheduleDays = days.length > 0 ? days : defaultDays;

  return <></>;
};

export default ScheduleSection;
