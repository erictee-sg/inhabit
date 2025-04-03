import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Search } from "lucide-react";
import CountryCodeDropdown from "@/components/CountryCodeDropdown";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { locations } from "@/data/locations";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  countryCode: z.string().default("+61"),
  phone: z.string().optional(),
  location: z.string().min(2, { message: "City/Country is required" }),
  church: z.string().optional(),
  ministry: z.string().min(2, { message: "Ministry involvement is required" }),
});

interface RegistrationFormProps {
  onSubmit?: (values: z.infer<typeof formSchema>) => void;
  isOpen?: boolean;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  onSubmit = (values) => console.log(values),
  isOpen = true,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+61",
      phone: "",
      location: "",
      church: "",
      ministry: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    // Combine country code and phone number if phone is provided
    const formattedValues = {
      ...values,
      fullPhoneNumber: values.phone
        ? `${values.countryCode}${values.phone}`
        : undefined,
    };
    onSubmit(formattedValues);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-[#bbc3c2] p-6 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#bbc3c2] rounded-lg">
        {/* First column (1/3) */}
        <div className="p-6 flex flex-col space-y-6 text-gray-800">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Register Your Interest for inHabit Conference
            </h2>
            <p className="text-gray-700">
              Help us create an extraordinary experience by letting us know
              you're planning to attend. We'll notify you as soon as ticketing
              opens so you can secure your place.
            </p>
          </div>
          <div className="mt-4">
            <img
              src="https://inhabit-dev.neliatiga.com/images/brisbane-unsplash.jpg"
              alt="Brisbane, Australia"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Second column (2/3) */}
        <div className="md:col-span-2 p-6 bg-[#bbc3c2] rounded-lg">
          <div className="w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John"
                              {...field}
                              className="bg-white border border-gray-300 rounded-md"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Doe"
                              {...field}
                              className="bg-white border border-gray-300 rounded-md"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john.doe@example.com"
                            {...field}
                            className="bg-white border border-gray-300 rounded-md"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col space-y-2">
                    <FormLabel>Phone Number (Optional)</FormLabel>
                    <div className="flex">
                      <FormField
                        control={form.control}
                        name="countryCode"
                        render={({ field }) => (
                          <FormItem className="w-[120px] flex-shrink-0">
                            <FormControl>
                              <CountryCodeDropdown
                                value={field.value}
                                onChange={field.onChange}
                                className="bg-white border border-gray-300 rounded-md"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="412 345 678"
                                {...field}
                                className="bg-white border border-gray-300 rounded-md"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="church"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Church/Organization (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your church or organization"
                            {...field}
                            className="bg-white border border-gray-300 rounded-md"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => {
                      const [searchTerm, setSearchTerm] = useState("");
                      const [filteredLocations, setFilteredLocations] =
                        useState(locations);

                      useEffect(() => {
                        if (searchTerm) {
                          const filtered = locations.filter((location) =>
                            location
                              .toLowerCase()
                              .includes(searchTerm.toLowerCase()),
                          );
                          setFilteredLocations(filtered);
                        } else {
                          setFilteredLocations(locations);
                        }
                      }, [searchTerm]);

                      return (
                        <FormItem className="relative">
                          <FormLabel>
                            What city/country do you reside in?
                          </FormLabel>
                          <div className="relative">
                            <FormControl>
                              <div className="flex items-center relative">
                                <Input
                                  placeholder="Search for your location"
                                  value={field.value || searchTerm}
                                  onChange={(e) => {
                                    if (field.value) {
                                      field.onChange("");
                                    }
                                    setSearchTerm(e.target.value);
                                  }}
                                  className="pr-10 bg-white border border-gray-300 rounded-md"
                                />
                                {field.value ? (
                                  <button
                                    type="button"
                                    className="absolute right-3 text-gray-500 hover:text-gray-700"
                                    onClick={() => {
                                      field.onChange("");
                                      setSearchTerm("");
                                    }}
                                  >
                                    ×
                                  </button>
                                ) : (
                                  <Search className="absolute right-3 h-4 w-4 text-gray-400" />
                                )}
                              </div>
                            </FormControl>
                            {searchTerm && !field.value && (
                              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
                                {filteredLocations.length > 0 ? (
                                  filteredLocations.map((location, index) => (
                                    <div
                                      key={index}
                                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                      onClick={() => {
                                        field.onChange(location);
                                        setSearchTerm("");
                                      }}
                                    >
                                      {location}
                                    </div>
                                  ))
                                ) : (
                                  <div className="px-4 py-2 text-gray-500">
                                    No locations found. You can still enter your
                                    own.
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />

                  <FormField
                    control={form.control}
                    name="ministry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          What is your ministry involvement in church?
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. pastor, worship leader, youth leader"
                            {...field}
                            className="bg-white border border-gray-300 rounded-md"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-center mt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-7 text-xl rounded-full transition-all duration-300 transform hover:scale-105 font-bold"
                    >
                      Register Interest
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-700">
                By registering your interest, you agree to receive updates about
                the inHabit Conference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
