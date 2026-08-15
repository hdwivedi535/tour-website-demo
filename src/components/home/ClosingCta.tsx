import { ButtonLink } from "@/components/ui/ButtonLink";

export function ClosingCta() {
  return (
    <section className="bg-night text-ivory">
      <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <p className="t-label text-earth">Begin</p>
        <h2 className="t-h1 mt-5">Find an experience worth remembering.</h2>
        <p className="t-body mx-auto mt-6 max-w-lg text-ivory/70">
          Explore a considered collection of journeys — then travel with
          people who know the ground beneath them.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="/experiences"
            className="border-ivory bg-ivory text-charcoal hover:bg-ivory-deep"
          >
            Explore Experiences
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
