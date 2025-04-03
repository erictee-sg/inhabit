export interface CountryCode {
  code: string;
  name: string;
  dial_code: string;
  flag: string;
}

export const countryCodes: CountryCode[] = [
  {
    code: "AU",
    name: "Australia",
    dial_code: "+61",
    flag: "🇦🇺",
  },
  {
    code: "US",
    name: "United States",
    dial_code: "+1",
    flag: "🇺🇸",
  },
  {
    code: "GB",
    name: "United Kingdom",
    dial_code: "+44",
    flag: "🇬🇧",
  },
  {
    code: "CA",
    name: "Canada",
    dial_code: "+1",
    flag: "🇨🇦",
  },
  {
    code: "NZ",
    name: "New Zealand",
    dial_code: "+64",
    flag: "🇳🇿",
  },
  {
    code: "IN",
    name: "India",
    dial_code: "+91",
    flag: "🇮🇳",
  },
  {
    code: "SG",
    name: "Singapore",
    dial_code: "+65",
    flag: "🇸🇬",
  },
  {
    code: "MY",
    name: "Malaysia",
    dial_code: "+60",
    flag: "🇲🇾",
  },
  {
    code: "ID",
    name: "Indonesia",
    dial_code: "+62",
    flag: "🇮🇩",
  },
  {
    code: "PH",
    name: "Philippines",
    dial_code: "+63",
    flag: "🇵🇭",
  },
  {
    code: "TH",
    name: "Thailand",
    dial_code: "+66",
    flag: "🇹🇭",
  },
  {
    code: "JP",
    name: "Japan",
    dial_code: "+81",
    flag: "🇯🇵",
  },
  {
    code: "KR",
    name: "South Korea",
    dial_code: "+82",
    flag: "🇰🇷",
  },
  {
    code: "CN",
    name: "China",
    dial_code: "+86",
    flag: "🇨🇳",
  },
  {
    code: "HK",
    name: "Hong Kong",
    dial_code: "+852",
    flag: "🇭🇰",
  },
  {
    code: "DE",
    name: "Germany",
    dial_code: "+49",
    flag: "🇩🇪",
  },
  {
    code: "FR",
    name: "France",
    dial_code: "+33",
    flag: "🇫🇷",
  },
  {
    code: "IT",
    name: "Italy",
    dial_code: "+39",
    flag: "🇮🇹",
  },
  {
    code: "ES",
    name: "Spain",
    dial_code: "+34",
    flag: "🇪🇸",
  },
  {
    code: "NL",
    name: "Netherlands",
    dial_code: "+31",
    flag: "🇳🇱",
  },
];

export const getCountryByCode = (code: string): CountryCode | undefined => {
  return countryCodes.find((country) => country.code === code);
};

export const getDefaultCountry = (): CountryCode => {
  return getCountryByCode("AU") || countryCodes[0];
};
