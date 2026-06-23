import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { lat, lng } = await req.json();
  if (!lat || !lng) return NextResponse.json({ success: false, error: "Invalid coords" }, { status: 400 });

  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
  const resp = await fetch(url, { headers: { "User-Agent": "ZoikoMeds/1.0" } });
  const data = await resp.json();

  let name = "";
  if (data?.address) {
    const a = data.address;
    name = a.neighbourhood ?? a.suburb ?? a.city_district ?? a.town ?? a.city ?? a.county ?? "";
    if (name && (a.state || a.country)) name += ", " + (a.state ?? a.country);
  }
  if (!name && data?.display_name) {
    const parts = data.display_name.split(",");
    name = parts[0].trim() + (parts[1] ? ", " + parts[1].trim() : "");
  }
  if (!name) name = `${parseFloat(lat).toFixed(4)}, ${parseFloat(lng).toFixed(4)}`;

  return NextResponse.json({ success: true, data: { name } });
}
