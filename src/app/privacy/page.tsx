import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/ssr";

export default function PrivacyPage() {
  return (
    <div className="pt-28 md:pt-32 pb-24 md:pb-32">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium mb-8 hover:opacity-60 transition-opacity"
          style={{ color: "var(--color-text-secondary)" }}
        >
          <ArrowLeft aria-hidden="true" weight="bold" className="text-lg" />
          Kembali ke Beranda
        </Link>

        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
          Kebijakan Privasi
        </h1>

        <div className="prose-custom">
          <h2>Data yang dikumpulkan</h2>
          <p>
            Situs ini hanya mengumpulkan data yang Anda kirimkan secara sukarela
            melalui formulir kontak (nama, email, dan pesan). Data ini digunakan
            semata-mata untuk merespons pertanyaan Anda.
          </p>

          <h2>Penyimpanan data</h2>
          <p>
            Situs ini tidak mengumpulkan data pribadi secara aktif selain dari
            analitik anonim yang disediakan oleh Vercel Analytics untuk memantau
            lalu lintas pengunjung.
          </p>

          <h2>Cookie</h2>
          <p>
            Situs ini tidak menggunakan cookie pelacakan atau pelacakan pihak
            ketiga. Vercel Analytics digunakan untuk mengukur lalu lintas secara
            anonim tanpa cookie.
          </p>

          <h2>Hak Anda</h2>
          <p>
            Anda berhak meminta penghapusan data Anda kapan saja dengan
            menghubungi saya melalui email yang tercantum di halaman kontak.
          </p>

          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Terakhir diperbarui: Juni 2026
          </p>
        </div>
      </div>
    </div>
  );
}
