'use client';
import JSZip from 'jszip';
import { memo, useCallback, useRef, useState } from 'react';
import { saveAs } from 'file-saver';

const Page = () => {
  const videoRef = useRef<HTMLImageElement>(null);
  const [capturedImages, setCapturedImages] = useState<string[]>([]);

  // Capture current frame from stream
  const handleCapture = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement('canvas');
    canvas.width = video.width;
    canvas.height = video.height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataURL = canvas.toDataURL('image/jpeg');

    setCapturedImages(prev => [dataURL, ...prev]);
  }, []);

  // Download all images in one click
  const handleDownloadAll = useCallback(async () => {
    const zip = new JSZip();

    capturedImages.forEach((dataURL, i) => {
      const base64 = dataURL.replace(/^data:image\/(png|jpeg);base64,/, '');
      zip.file(`image_${i + 1}.jpg`, base64, { base64: true });
    });

    const blob = await zip.generateAsync({ type: 'blob' });
    saveAs(blob, 'esp32-captures.zip');
  }, [capturedImages]);

  const handleClearAll = useCallback(() => {
    if (confirm('Are you sure you want to delete all captured images?')) {
      setCapturedImages([]);
    }
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">ESP32-CAM Live Stream</h1>

      <img
        ref={videoRef}
        src="/api/stream"
        alt="ESP32-CAM Stream"
        width={800}
        height={800}
        className="rounded-lg border shadow mb-4"
      />

      <div className="flex gap-4 mb-6">
        <button
          onClick={handleCapture}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          📸 Capture Frame
        </button>
        <button
          onClick={handleDownloadAll}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          ⬇️ Download All
        </button>
        <button
          onClick={handleClearAll}
          disabled={capturedImages.length === 0}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
        >
          🗑️ Clear All
        </button>
      </div>

      {capturedImages.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold mb-2">Captured Images:</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {capturedImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Capture ${index + 1}`}
                className="w-full rounded border shadow"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Page);
