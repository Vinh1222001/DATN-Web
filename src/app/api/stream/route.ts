// app/api/stream/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const esp32StreamUrl = `${process.env.NEXT_PUBLIC_ESP32_CAM_URL}/stream`;

  const response = await fetch(esp32StreamUrl);
  const stream = response.body;

  return new NextResponse(stream, {
    headers: {
      'Content-Type': 'multipart/x-mixed-replace; boundary=frame'
    }
  });
}
