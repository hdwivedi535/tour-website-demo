type PageIntroProps = {
  eyebrow: string;
  title: string;
  copy: string;
};

export function PageIntro({ eyebrow, title, copy }: PageIntroProps) {
  return (
    <section className="border-b border-border bg-ivory">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="t-label">{eyebrow}</p>
        <h1 className="t-h1 mt-5 text-charcoal">{title}</h1>
        <p className="t-body mt-6 max-w-2xl text-muted">{copy}</p>
      </div>
    </section>
  );
}
