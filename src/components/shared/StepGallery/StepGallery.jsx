import { useEffect, useRef, useState } from "react";
import "./StepGallery.css";

/**
 * A scroll-synced "scrollytelling" gallery: a sticky screenshot panel on the
 * left cross-fades to match whichever step is centered in the viewport on
 * the right. Falls back to inline images per-step on narrow screens.
 * `steps`: [{ h, p, img, cap }]
 */
export default function StepGallery({ steps = [] }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  const currentStep = steps[active] ?? steps[0] ?? null;

  useEffect(() => {
    if (!steps.length || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.i);
            if (!Number.isNaN(index)) {
              setActive(index);
            }
          }
        });
      },
      { threshold: 0.4, rootMargin: "-30% 0px -30% 0px" }
    );

    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [steps]);

  if (!steps.length) {
    return null;
  }

  return (
    <div className="gallery">
      <div className="gallery-sticky">
        <div className="gallery-frame">
          {steps.map((s, i) => (
            <img key={i} src={s.img} className={"gimg" + (i === active ? " on" : "")} loading="lazy" alt={s.cap || s.h} />
          ))}
          <div className="gallery-cap">{currentStep?.cap}</div>
        </div>
        <div className="gallery-dots">
          {steps.map((s, i) => (
            <span key={i} className={"gdot" + (i === active ? " on" : "")}></span>
          ))}
        </div>
      </div>
      <div className="gallery-steps">
        {steps.map((s, i) => (
          <div className={"gstep" + (i === active ? " on" : "")} data-i={i} ref={(el) => (refs.current[i] = el)} key={i}>
            <img className="gstep-img" src={s.img} loading="lazy" alt={s.cap || s.h} />
            <div className="gstep-num">{i + 1}</div>
            <h4>{s.h}</h4>
            <p>{s.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
