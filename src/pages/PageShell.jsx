import { SectionHeader } from "../components/SectionHeader";

export function PageShell({ eyebrow, title, children, intro }) {
  return (
    <section className="mx-auto min-h-[76vh] w-full max-w-7xl px-4 pb-20 pt-40 sm:px-6 md:pt-32 lg:px-8">
      <SectionHeader eyebrow={eyebrow} title={title}>
        {intro}
      </SectionHeader>
      {children}
    </section>
  );
}
