import { values } from "@/lib/site";

const marks = ["I", "II", "III", "IV"];

export function WhyTravel() {
  return (
    <section className="border-y border-border bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="t-label">Why travel with us</p>
          <h2 className="t-h2 mt-4">Presence over spectacle</h2>
        </div>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2">
          {values.map((value, index) => (
            <article key={value.title} className="bg-paper px-8 py-10">
              <span className="t-label">{marks[index]}</span>
              <h3 className="t-h3 mt-5">{value.title}</h3>
              <p className="t-body mt-4 text-muted">{value.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
