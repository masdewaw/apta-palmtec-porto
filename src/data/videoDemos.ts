export interface VideoDemo {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  deviceType: 'laptop' | 'tablet' | 'smartphone';
}

export const videoDemos: VideoDemo[] = [
  {
    id: "scaling",
    title: "Apta Scaling",
    description: "Integrasi otomatis jembatan timbang untuk akurasi data penimbangan Tandan Buah Segar (TBS) secara real-time.",
    videoUrl: "/src/assets/video/Apta Scalling.mp4",
    deviceType: "laptop"
  },
  {
    id: "grading",
    title: "Apta Grading",
    description: "Digitalisasi proses sortasi buah dengan standar mutu yang konsisten, memastikan transparansi kualitas TBS yang masuk.",
    videoUrl: "/src/assets/video/Apta Grading.mp4",
    deviceType: "smartphone"
  },
  {
    id: "lab",
    title: "Apta Lab",
    description: "Monitoring parameter mutu dan losses laboratorium secara digital untuk optimasi efisiensi ekstraksi minyak sawit.",
    videoUrl: "/src/assets/video/Apta Lab.mp4",
    deviceType: "tablet"
  },
  {
    id: "mill",
    title: "Apta Mill",
    description: "Pusat kendali manajemen data terintegrasi yang menyatukan seluruh laporan operasional pabrik dalam satu dashboard.",
    videoUrl: "/src/assets/video/Apta Mill.mp4",
    deviceType: "laptop"
  },
  {
    id: "sounding",
    title: "Apta Sounding",
    description: "Sistem pengukuran stok tangki (CPO & Kernel) otomatis yang presisi, menghilangkan risiko kesalahan manual.",
    videoUrl: "/src/assets/video/Apta Sounding.mp4",
    deviceType: "smartphone"
  }
];
