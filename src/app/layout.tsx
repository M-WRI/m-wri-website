import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Footer, Header } from "@/components";
import { createClient } from "@/prismicio";
import "./global.css";

const inter = Raleway({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return {
    title: settings.data.site_title,
    description: settings.data.meta_description,
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} grid grid-cols-[1fr_250px]`}
      >
        <section className="bg-blue-100 flex flex-col border-r-2 border-black relative">
          <Header />
          {children}
          <Footer />
        </section>
        <section className="bg-green-100">
          <nav className="sticky top-0">
            <ul>
              <li>blog article 1</li>
              <li>blog article 2</li>
              <li>blog article 3</li>
            </ul>
          </nav>
        </section>
      </body>
    </html>
  );
}
