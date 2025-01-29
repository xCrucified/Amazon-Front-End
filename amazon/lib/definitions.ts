import { z } from "zod";

export const otpSchema = z.object({
  otp: z.string().regex(/^\d{4}$/, {
    message: "OTP must be a 4-digit numeric string.",
  }),
});

export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter" })
      .regex(/[0-9]/, { message: "Contain at least one number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character",
      })
      .trim(),
    rPassword: z.string(),
  })
  .refine((data) => data.password === data.rPassword, {
    message: "Passwords do not match",
    path: ["RPassword"],
  });

export const birthDatePhoneNumberSchema = z.object({
  birthDate: z.date().refine(
    (date) => {
      const age = new Date().getFullYear() - date.getFullYear();
      return age >= 14;
    },
    { message: "You must be at least 14 years old" }
  ),
  countryCode: z.string().nonempty("Please select country"),
  phoneNumber: z
    .string()
    .regex(/^\d{9}$/, {
      message: "Please enter a valid phone number (9 digits)",
    })
    .nonempty("Please enter phone number"),
});

export const accountNeccesarySchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email" }).trim(),
    username: z
      .string()
      .min(3, "Username must be 3 letters min")
      .max(20, "Username must be 20 letters max"),
    password: z
      .string()
      .min(8, { message: "Be at least 8 characters long" })
      .regex(/[a-zA-Z]/, { message: "Contain at least one letter" })
      .regex(/[0-9]/, { message: "Contain at least one number" })
      .regex(/[^a-zA-Z0-9]/, {
        message: "Contain at least one special character",
      })
      .trim(),
    rPassword: z.string(),
  })
  .refine((data) => data.password === data.rPassword, {
    message: "Passwords do not match",
    path: ["rPassword"],
  });

export const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }).trim(),
  password: z.string().nonempty("Please enter password").trim(),
});

export async function getFromLocalStorage() {
  const username = localStorage.getItem("username") || "";
  const email = localStorage.getItem("email") || "";
  const password = localStorage.getItem("password") || "";
  const reenterPassword = localStorage.getItem("reenterPassword") || "";
  const birthDateString = localStorage.getItem("birthDate") || "";
  const birthDate = birthDateString ? new Date(birthDateString) : new Date();
  const countryCode = localStorage.getItem("countryCode") || "";
  const countryCodeLabel = localStorage.getItem("countryCodeLabel") || "";
  const phoneNumber = localStorage.getItem("phoneNumber") || "";
  const imagePath = localStorage.getItem("imagePath") || "";
  const avatarPicture = localStorage.getItem("avatarPicture") || "";
  return {
    username,
    email,
    password,
    reenterPassword,
    birthDate,
    countryCode,
    countryCodeLabel,
    phoneNumber,
    imagePath,
    avatarPicture,
  };
}

export const CountryCodes = [
  { id: 1, value: "1", label: "United States +1" },
  { id: 2, value: "93", label: "Afghanistan +93" },
  { id: 3, value: "355", label: "Albania +355" },
  { id: 4, value: "213", label: "Algeria +213" },
  { id: 5, value: "376", label: "Andorra +376" },
  { id: 6, value: "244", label: "Angola +244" },
  { id: 7, value: "1264", label: "Anguilla +1264" },
  { id: 8, value: "672", label: "Antarctica +672" },
  { id: 9, value: "1268", label: "Antigua and Barbuda +1268" },
  { id: 10, value: "54", label: "Argentina +54" },
  { id: 11, value: "374", label: "Armenia +374" },
  { id: 12, value: "297", label: "Aruba +297" },
  { id: 13, value: "61", label: "Australia +61" },
  { id: 14, value: "43", label: "Austria +43" },
  { id: 15, value: "994", label: "Azerbaijan +994" },
  { id: 16, value: "1242", label: "Bahamas +1242" },
  { id: 17, value: "973", label: "Bahrain +973" },
  { id: 18, value: "880", label: "Bangladesh +880" },
  { id: 19, value: "1246", label: "Barbados +1246" },
  { id: 20, value: "375", label: "Belarus +375" },
  { id: 21, value: "32", label: "Belgium +32" },
  { id: 22, value: "501", label: "Belize +501" },
  { id: 23, value: "229", label: "Benin +229" },
  { id: 24, value: "1441", label: "Bermuda +1441" },
  { id: 25, value: "975", label: "Bhutan +975" },
  { id: 26, value: "591", label: "Bolivia +591" },
  { id: 27, value: "387", label: "Bosnia and Herzegovina +387" },
  { id: 28, value: "267", label: "Botswana +267" },
  { id: 29, value: "55", label: "Brazil +55" },
  { id: 30, value: "246", label: "British Indian Ocean Territory +246" },
  { id: 31, value: "673", label: "Brunei +673" },
  { id: 32, value: "359", label: "Bulgaria +359" },
  { id: 33, value: "226", label: "Burkina Faso +226" },
  { id: 34, value: "257", label: "Burundi +257" },
  { id: 35, value: "855", label: "Cambodia +855" },
  { id: 36, value: "237", label: "Cameroon +237" },
  { id: 37, value: "1", label: "Canada +1" },
  { id: 38, value: "238", label: "Cape Verde +238" },
  { id: 39, value: "1345", label: "Cayman Islands +1345" },
  { id: 40, value: "236", label: "Central African Republic +236" },
  { id: 41, value: "235", label: "Chad +235" },
  { id: 42, value: "56", label: "Chile +56" },
  { id: 43, value: "86", label: "China +86" },
  { id: 44, value: "61", label: "Christmas Island +61" },
  { id: 45, value: "61", label: "Cocos (Keeling) Islands +61" },
  { id: 46, value: "57", label: "Colombia +57" },
  { id: 47, value: "269", label: "Comoros +269" },
  { id: 48, value: "242", label: "Congo +242" },
  { id: 49, value: "243", label: "Congo (Democratic Republic) +243" },
  { id: 50, value: "682", label: "Cook Islands +682" },
  { id: 51, value: "506", label: "Costa Rica +506" },
  { id: 52, value: "385", label: "Croatia +385" },
  { id: 53, value: "53", label: "Cuba +53" },
  { id: 54, value: "599", label: "Curaçao +599" },
  { id: 55, value: "357", label: "Cyprus +357" },
  { id: 56, value: "420", label: "Czech Republic +420" },
  { id: 57, value: "45", label: "Denmark +45" },
  { id: 58, value: "253", label: "Djibouti +253" },
  { id: 59, value: "1767", label: "Dominica +1767" },
  { id: 60, value: "1", label: "Dominican Republic +1" },
  { id: 61, value: "593", label: "Ecuador +593" },
  { id: 62, value: "20", label: "Egypt +20" },
  { id: 63, value: "503", label: "El Salvador +503" },
  { id: 64, value: "240", label: "Equatorial Guinea +240" },
  { id: 65, value: "291", label: "Eritrea +291" },
  { id: 66, value: "372", label: "Estonia +372" },
  { id: 67, value: "251", label: "Ethiopia +251" },
  { id: 68, value: "500", label: "Falkland Islands +500" },
  { id: 69, value: "298", label: "Faroe Islands +298" },
  { id: 70, value: "679", label: "Fiji +679" },
  { id: 71, value: "358", label: "Finland +358" },
  { id: 72, value: "33", label: "France +33" },
  { id: 73, value: "594", label: "French Guiana +594" },
  { id: 74, value: "689", label: "French Polynesia +689" },
  { id: 75, value: "241", label: "Gabon +241" },
  { id: 76, value: "220", label: "Gambia +220" },
  { id: 77, value: "995", label: "Georgia +995" },
  { id: 78, value: "49", label: "Germany +49" },
  { id: 79, value: "233", label: "Ghana +233" },
  { id: 80, value: "350", label: "Gibraltar +350" },
  { id: 81, value: "30", label: "Greece +30" },
  { id: 82, value: "299", label: "Greenland +299" },
  { id: 83, value: "1473", label: "Grenada +1473" },
  { id: 84, value: "590", label: "Guadeloupe +590" },
  { id: 85, value: "1671", label: "Guam +1671" },
  { id: 86, value: "502", label: "Guatemala +502" },
  { id: 87, value: "44", label: "Guernsey +44" },
  { id: 88, value: "224", label: "Guinea +224" },
  { id: 89, value: "245", label: "Guinea-Bissau +245" },
  { id: 90, value: "592", label: "Guyana +592" },
  { id: 91, value: "509", label: "Haiti +509" },
  { id: 92, value: "504", label: "Honduras +504" },
  { id: 93, value: "852", label: "Hong Kong +852" },
  { id: 94, value: "36", label: "Hungary +36" },
  { id: 95, value: "354", label: "Iceland +354" },
  { id: 96, value: "91", label: "India +91" },
  { id: 97, value: "62", label: "Indonesia +62" },
  { id: 98, value: "98", label: "Iran +98" },
  { id: 99, value: "964", label: "Iraq +964" },
  { id: 100, value: "353", label: "Ireland +353" },
  { id: 101, value: "44", label: "Isle of Man +44" },
  { id: 102, value: "972", label: "Israel +972" },
  { id: 103, value: "39", label: "Italy +39" },
  { id: 104, value: "1876", label: "Jamaica +1876" },
  { id: 105, value: "81", label: "Japan +81" },
  { id: 106, value: "44", label: "Jersey +44" },
  { id: 107, value: "962", label: "Jordan +962" },
  { id: 108, value: "7", label: "Kazakhstan +7" },
  { id: 109, value: "254", label: "Kenya +254" },
  { id: 110, value: "686", label: "Kiribati +686" },
  { id: 111, value: "850", label: "Korea (North) +850" },
  { id: 112, value: "82", label: "Korea (South) +82" },
  { id: 113, value: "965", label: "Kuwait +965" },
  { id: 114, value: "996", label: "Kyrgyzstan +996" },
  { id: 115, value: "856", label: "Laos +856" },
  { id: 116, value: "371", label: "Latvia +371" },
  { id: 117, value: "961", label: "Lebanon +961" },
  { id: 118, value: "266", label: "Lesotho +266" },
  { id: 119, value: "231", label: "Liberia +231" },
  { id: 120, value: "218", label: "Libya +218" },
  { id: 121, value: "423", label: "Liechtenstein +423" },
  { id: 122, value: "370", label: "Lithuania +370" },
  { id: 123, value: "352", label: "Luxembourg +352" },
  { id: 124, value: "853", label: "Macau +853" },
  { id: 125, value: "389", label: "Macedonia +389" },
  { id: 126, value: "261", label: "Madagascar +261" },
  { id: 127, value: "265", label: "Malawi +265" },
  { id: 128, value: "60", label: "Malaysia +60" },
  { id: 129, value: "960", label: "Maldives +960" },
  { id: 130, value: "223", label: "Mali +223" },
  { id: 131, value: "356", label: "Malta +356" },
  { id: 132, value: "692", label: "Marshall Islands +692" },
  { id: 133, value: "596", label: "Martinique +596" },
  { id: 134, value: "222", label: "Mauritania +222" },
  { id: 135, value: "230", label: "Mauritius +230" },
  { id: 136, value: "262", label: "Mayotte +262" },
  { id: 137, value: "52", label: "Mexico +52" },
  { id: 138, value: "691", label: "Micronesia +691" },
  { id: 139, value: "373", label: "Moldova +373" },
  { id: 140, value: "377", label: "Monaco +377" },
  { id: 141, value: "976", label: "Mongolia +976" },
  { id: 142, value: "382", label: "Montenegro +382" },
  { id: 143, value: "1664", label: "Montserrat +1664" },
  { id: 144, value: "212", label: "Morocco +212" },
  { id: 145, value: "258", label: "Mozambique +258" },
  { id: 146, value: "95", label: "Myanmar +95" },
  { id: 147, value: "264", label: "Namibia +264" },
  { id: 148, value: "674", label: "Nauru +674" },
  { id: 149, value: "977", label: "Nepal +977" },
  { id: 150, value: "31", label: "Netherlands +31" },
  { id: 151, value: "687", label: "New Caledonia +687" },
  { id: 152, value: "64", label: "New Zealand +64" },
  { id: 153, value: "505", label: "Nicaragua +505" },
  { id: 154, value: "227", label: "Niger +227" },
  { id: 155, value: "234", label: "Nigeria +234" },
  { id: 156, value: "683", label: "Niue +683" },
  { id: 157, value: "672", label: "Norfolk Island +672" },
  { id: 158, value: "1670", label: "Northern Mariana Islands +1670" },
  { id: 159, value: "47", label: "Norway +47" },
  { id: 160, value: "968", label: "Oman +968" },
  { id: 161, value: "92", label: "Pakistan +92" },
  { id: 162, value: "680", label: "Palau +680" },
  { id: 163, value: "970", label: "Palestine +970" },
  { id: 164, value: "507", label: "Panama +507" },
  { id: 165, value: "675", label: "Papua New Guinea +675" },
  { id: 166, value: "595", label: "Paraguay +595" },
  { id: 167, value: "51", label: "Peru +51" },
  { id: 168, value: "63", label: "Philippines +63" },
  { id: 169, value: "48", label: "Poland +48" },
  { id: 170, value: "351", label: "Portugal +351" },
  { id: 171, value: "1", label: "Puerto Rico +1" },
  { id: 172, value: "974", label: "Qatar +974" },
  { id: 173, value: "262", label: "Réunion +262" },
  { id: 174, value: "40", label: "Romania +40" },
  { id: 175, value: "263", label: "Zimbabwe +263" },
  { id: 176, value: "250", label: "Rwanda +250" },
  { id: 177, value: "590", label: "Saint Barthélemy +590" },
  { id: 178, value: "290", label: "Saint Helena +290" },
  { id: 179, value: "1869", label: "Saint Kitts and Nevis +1869" },
  { id: 180, value: "1758", label: "Saint Lucia +1758" },
  { id: 181, value: "590", label: "Saint Martin +590" },
  { id: 182, value: "508", label: "Saint Pierre and Miquelon +508" },
  { id: 183, value: "1784", label: "Saint Vincent and the Grenadines +1784" },
  { id: 184, value: "685", label: "Samoa +685" },
  { id: 185, value: "378", label: "San Marino +378" },
  { id: 186, value: "239", label: "São Tomé and Príncipe +239" },
  { id: 187, value: "966", label: "Saudi Arabia +966" },
  { id: 188, value: "221", label: "Senegal +221" },
  { id: 189, value: "381", label: "Serbia +381" },
  { id: 190, value: "248", label: "Seychelles +248" },
  { id: 191, value: "232", label: "Sierra Leone +232" },
  { id: 192, value: "65", label: "Singapore +65" },
  { id: 193, value: "421", label: "Slovakia +421" },
  { id: 194, value: "386", label: "Slovenia +386" },
  { id: 195, value: "677", label: "Solomon Islands +677" },
  { id: 196, value: "252", label: "Somalia +252" },
  { id: 197, value: "27", label: "South Africa +27" },
  { id: 198, value: "82", label: "South Korea +82" },
  { id: 199, value: "211", label: "South Sudan +211" },
  { id: 200, value: "34", label: "Spain +34" },
  { id: 201, value: "94", label: "Sri Lanka +94" },
  { id: 202, value: "249", label: "Sudan +249" },
  { id: 203, value: "597", label: "Suriname +597" },
  { id: 204, value: "47", label: "Svalbard and Jan Mayen +47" },
  { id: 205, value: "268", label: "Swaziland +268" },
  { id: 206, value: "46", label: "Sweden +46" },
  { id: 207, value: "41", label: "Switzerland +41" },
  { id: 208, value: "963", label: "Syria +963" },
  { id: 209, value: "886", label: "Taiwan +886" },
  { id: 210, value: "992", label: "Tajikistan +992" },
  { id: 211, value: "255", label: "Tanzania +255" },
  { id: 212, value: "66", label: "Thailand +66" },
  { id: 213, value: "670", label: "Timor-Leste +670" },
  { id: 214, value: "228", label: "Togo +228" },
  { id: 215, value: "690", label: "Tokelau +690" },
  { id: 216, value: "676", label: "Tonga +676" },
  { id: 217, value: "1868", label: "Trinidad and Tobago +1868" },
  { id: 218, value: "216", label: "Tunisia +216" },
  { id: 219, value: "90", label: "Turkey +90" },
  { id: 220, value: "993", label: "Turkmenistan +993" },
  { id: 221, value: "1649", label: "Turks and Caicos Islands +1649" },
  { id: 222, value: "688", label: "Tuvalu +688" },
  { id: 223, value: "256", label: "Uganda +256" },
  { id: 224, value: "380", label: "Ukraine +380" },
  { id: 225, value: "971", label: "United Arab Emirates +971" },
  { id: 226, value: "44", label: "United Kingdom +44" },
  { id: 227, value: "1", label: "United States +1" },
  { id: 228, value: "598", label: "Uruguay +598" },
  { id: 229, value: "998", label: "Uzbekistan +998" },
  { id: 230, value: "678", label: "Vanuatu +678" },
  { id: 231, value: "58", label: "Venezuela +58" },
  { id: 232, value: "84", label: "Vietnam +84" },
  { id: 233, value: "681", label: "Wallis and Futuna +681" },
  { id: 234, value: "212", label: "Western Sahara +212" },
  { id: 235, value: "967", label: "Yemen +967" },
  { id: 236, value: "260", label: "Zambia +260" },
];
