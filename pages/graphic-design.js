import Head from "next/head";

export default function GraphicDesign() {
  return (
    <>
      <Head>
        <title>Graphic Design | Daniel Urbina</title>
      </Head>

      <main className="min-h-screen bg-[#f7f1e8] text-[#1f2f1f] px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <header className="mb-10 text-center">
            <p className="uppercase tracking-[0.3em] text-sm text-[#8a6f3d]">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mt-3">
              Graphic Design
            </h1>
            <p className="mt-4 text-lg text-[#4b4b3f]">
              Visual hierarchy, flyer design, and heritage stamp projects.
            </p>
          </header>

          <section className="bg-white/70 rounded-2xl shadow-lg p-6 md:p-10 mb-10">
            <h2 className="text-2xl font-bold mb-4">
              Heritage Postage Stamp
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <img
                  src="/NextJSCursor/graphic-design/heritage-stamp.png"
                  alt="Heritage postage stamp design honoring Sara Sierra de Fonseca"
                  className="rounded-xl shadow-md w-full"
                />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Reflection
                </h3>

                <p className="mb-4 leading-relaxed">
                  In my heritage stamp design, I used visual hierarchy to guide
                  the viewer’s attention to the most important elements first. I
                  made the photograph of Sara Sierra de Fonseca the largest and
                  most central element because she is the main focus of the stamp
                  and represents the heritage and values of my family. I used
                  larger typography for the country name and her name so viewers
                  could quickly identify the subject and theme of the design.
                  Smaller typography was used for supporting information such as
                  the year and stamp price to create a clear reading order.
                </p>

                <p className="leading-relaxed">
                  I also applied principles such as contrast, spacing,
                  alignment, and balance throughout the design. The dark green
                  typography contrasts with the warm vintage background, making
                  the text easy to read while maintaining a classic postage
                  stamp style. The border and decorative elements help frame the
                  composition and create unity without distracting from the main
                  image. I aligned the elements symmetrically to create balance
                  and used consistent spacing to improve readability. Through
                  this project, I learned how visual hierarchy helps organize
                  information and create a stronger emotional and visual impact
                  in graphic design.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white/70 rounded-2xl shadow-lg p-6 md:p-10">
            <h2 className="text-2xl font-bold mb-4">
              Design Process Screenshots
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <img
                src="/NextJSCursor/graphic-design/process-1.png"
                alt="Process screenshot 1"
                className="rounded-xl shadow-md w-full"
              />
              <img
                src="/NextJSCursor/graphic-design/process-2.png"
                alt="Process screenshot 2"
                className="rounded-xl shadow-md w-full"
              />
              <img
                src="/NextJSCursor/graphic-design/process-3.png"
                alt="Process screenshot 3"
                className="rounded-xl shadow-md w-full"
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}