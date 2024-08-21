import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Footer, Header } from "@/components";
import "./global.css";
import { createClient } from "@/prismicio";
import { PrismicImage, PrismicText } from "@prismicio/react";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createClient();
  const posts = await client.getAllByType("blog_posts", {
    fetch: ["blog_posts.title", "blog_posts.feature_image"],
    orderings: {
      field: "my.blog_posts.date",
      direction: "desc",
    },
  });

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={`${inter.className} `}>
        <Header />
        <div className="grid grid-cols-2">
          <section
            className="bg-blue-100 flex flex-col relative overflow-y-scroll pt-11"
            style={{ width: "calc(100vw - 360px)" }}
          >
            <div className="flex-1">{children}</div>
            <Footer />
          </section>
          <section className="fixed right-0 h-screen bg-green-100 px-4 py-2 overflow-y-scroll w-[360px] border-l-2 border-black">
            <nav>
              <ul className="grid gap-4">
                {posts?.map((post: any) => (
                  <li
                    key={post.id}
                    className="group flex gap-2 hover:bg-black cursor-pointer"
                  >
                    <div className="w-40 h-40 bg-white overflow-hidden relative">
                      <PrismicImage
                        field={post.data.feature_image}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-black group-hover:text-white text-center flex-1">
                      {post.data.title}
                    </h3>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </div>
      </body>
    </html>
  );
}
