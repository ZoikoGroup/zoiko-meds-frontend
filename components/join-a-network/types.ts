export type VerifyMethod = "automated" | "email" | "manual";
export type InventoryMethod = "pms" | "sftp" | "file" | "manual" | "skipped";

export interface MedRow {
  name: string;
  generic: string;
  strength: string;
  form: string;
  availability: string;
}

export interface JoinNetworkFormData {
  // Step 1
  newRecord: boolean;
  searchValue: string;
  pharmacyName: string;
  licenseNumber: string;
  npiNumber: string;
  ncpdpNumber: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  pharmacyType: string;

  // Step 2
  verifyMethod: VerifyMethod;
  pharmacistFirst: string;
  pharmacistLast: string;
  pharmacistLicense: string;
  issuingBoard: string;
  pharmacistRole: string;
  corporateEmail: string;
  licenseFile: File | null;
  authorityConfirmed: boolean;

  // Step 3
  inventoryMethod: InventoryMethod;
  invSkipped: boolean;
  pmsVendor: string;
  techContactName: string;
  techContactEmail: string;
  goLiveDate: string;
  sftpEmail: string;
  sftpFrequency: string;
  invFile: File | null;
  medRows: MedRow[];

  // Step 4
  serviceRadius: string;
  confirmationHours: string;
  visPublic: boolean;
  visRequests: boolean;
  visControlledSuppressed: boolean; // always true, locked
  visAggregation: boolean;
  visPause: boolean;
  categories: string[];

  // Step 5
  finalConfirmed: boolean;
}

export const US_STATES: Record<string, string> = {
  AL: "Alabama", AK: "Alaska", AZ: "Arizona", AR: "Arkansas", CA: "California",
  CO: "Colorado", CT: "Connecticut", DE: "Delaware", FL: "Florida", GA: "Georgia",
  HI: "Hawaii", ID: "Idaho", IL: "Illinois", IN: "Indiana", IA: "Iowa", KS: "Kansas",
  KY: "Kentucky", LA: "Louisiana", ME: "Maine", MD: "Maryland", MA: "Massachusetts",
  MI: "Michigan", MN: "Minnesota", MS: "Mississippi", MO: "Missouri", MT: "Montana",
  NE: "Nebraska", NV: "Nevada", NH: "New Hampshire", NJ: "New Jersey", NM: "New Mexico",
  NY: "New York", NC: "North Carolina", ND: "North Dakota", OH: "Ohio", OK: "Oklahoma",
  OR: "Oregon", PA: "Pennsylvania", RI: "Rhode Island", SC: "South Carolina",
  SD: "South Dakota", TN: "Tennessee", TX: "Texas", UT: "Utah", VT: "Vermont",
  VA: "Virginia", WA: "Washington", WV: "West Virginia", WI: "Wisconsin", WY: "Wyoming",
};

export const MEDICINE_CATEGORIES = [
  "General medicines",
  "Antibiotics",
  "Cardiovascular",
  "Respiratory",
  "Diabetes & metabolic",
  "Paediatric",
  "Oncology (OTC/supportive)",
  "Controlled medicines",
];

export const PMS_VENDORS = [
  "QS/1", "PioneerRx", "Liberty Software", "Rx30", "Computer-Rx",
  "Datascan", "Kroll", "McKesson", "Other",
];

export const PHARMACY_TYPES = [
  "Independent", "Chain", "Hospital / Clinical", "Compounding", "Specialty", "Mail Order",
];

export const initialFormData: JoinNetworkFormData = {
  newRecord: false,
  searchValue: "",
  pharmacyName: "",
  licenseNumber: "",
  npiNumber: "",
  ncpdpNumber: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  pharmacyType: "",

  verifyMethod: "automated",
  pharmacistFirst: "",
  pharmacistLast: "",
  pharmacistLicense: "",
  issuingBoard: "",
  pharmacistRole: "",
  corporateEmail: "",
  licenseFile: null,
  authorityConfirmed: false,

  inventoryMethod: "pms",
  invSkipped: false,
  pmsVendor: "",
  techContactName: "",
  techContactEmail: "",
  goLiveDate: "",
  sftpEmail: "",
  sftpFrequency: "Daily",
  invFile: null,
  medRows: [{ name: "", generic: "", strength: "", form: "Tablet", availability: "Available" }],

  serviceRadius: "5 miles",
  confirmationHours: "During opening hours only",
  visPublic: true,
  visRequests: true,
  visControlledSuppressed: true,
  visAggregation: true,
  visPause: false,
  categories: [
    "General medicines", "Antibiotics", "Cardiovascular", "Respiratory",
    "Diabetes & metabolic", "Paediatric", "Oncology (OTC/supportive)",
  ],

  finalConfirmed: false,
};