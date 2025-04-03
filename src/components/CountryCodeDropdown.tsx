import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import {
  countryCodes,
  CountryCode,
  getDefaultCountry,
} from "@/data/countryCodes";

interface CountryCodeDropdownProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const CountryCodeDropdown: React.FC<CountryCodeDropdownProps> = ({
  value,
  onChange,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countryCodes);
  const [selectedCountry, setSelectedCountry] =
    useState<CountryCode>(getDefaultCountry());
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial value if not already set
    if (!value) {
      onChange(selectedCountry.dial_code);
    } else {
      // Find country by dial code
      const country = countryCodes.find((c) => c.dial_code === value);
      if (country) {
        setSelectedCountry(country);
      }
    }
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = countryCodes.filter(
        (country) =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          country.dial_code.includes(searchTerm),
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countryCodes);
    }
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    onChange(country.dial_code);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      <div
        className="flex items-center h-9 px-3 border border-input rounded-md bg-transparent cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-1">{selectedCountry.flag}</span>
        <span className="text-sm">{selectedCountry.dial_code}</span>
        <span className="ml-1">
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </span>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
          <div className="sticky top-0 bg-white p-2 border-b">
            <div className="relative">
              <input
                type="text"
                placeholder="Search countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border rounded-md pr-8 text-sm"
              />
              <Search className="absolute right-2 top-2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div>
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <div
                  key={country.code}
                  className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center ${selectedCountry.code === country.code ? "bg-gray-100" : ""}`}
                  onClick={() => handleCountrySelect(country)}
                >
                  <span className="mr-2 text-lg">{country.flag}</span>
                  <span className="text-sm">{country.name}</span>
                  <span className="ml-auto text-sm text-gray-500">
                    {country.dial_code}
                  </span>
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500 text-center">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryCodeDropdown;
