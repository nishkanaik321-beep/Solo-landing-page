import React from "react";
import "./ResumeTemplateTwo.css";

/* ---------------- Types (same shape as the reference data) ---------------- */
interface Relation {
  title?: string;
  issuerName?: string;
  description?: string;
  startDate?: string;
  endDate?: string;
  verified?: string;
}
interface ResumeEntry {
  id?: string | number;
  credId?: string;
  clrId?: string;
  verifiedStatus?: string;
  relation?: Relation;
  enrollHackathon?: {
    hackathon?: {
      hackathonName?: string;
      venue?: string;
      category?: string;
      description?: string;
      award?: string;
    };
  };
}
export interface ResumeData {
  userInfo: {
    mobile?: string;
    email?: string;
    designation?: string;
    profileImage?: { md?: string };
    userprofile?: Record<string, string | undefined>;
  };
  savedResumeDetails: {
    socialsData?: { key: string; label?: string }[];
    skills?: { name: string }[];
    educations?: ResumeEntry[];
    workexperiences?: ResumeEntry[];
    enrollinternships?: ResumeEntry[];
    trainings?: ResumeEntry[];
    enrollcourses?: ResumeEntry[];
    enrollliveprojects?: ResumeEntry[];
    enrollHackthons?: ResumeEntry[];
    otherCredentials?: ResumeEntry[];
  };
}

// Escapes user text and keeps line breaks
const safeHtml = (s?: string) => ({
  __html: String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>")
});

/* ---------------- Helpers ---------------- */
const formatDate = (v?: string) => {
  if (!v) return "";
  const d = new Date(v);
  return isNaN(d.getTime()) ? v : d.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
};
const dateRange = (s?: string, e?: string) => {
  const a = formatDate(s);
  const b = formatDate(e);
  if (!a) return "";
  return b && b !== a ? `${a} - ${b}` : a;
};
const sanitizeUrl = (url?: string) => {
  if (!url) return "#";
  try {
    return new URL(url.startsWith("http") ? url : `https://${url}`).href;
  } catch {
    return "#";
  }
};
const credentialHref = (item: ResumeEntry) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  return item.clrId ? `${origin}/clr-credentials/${item.clrId}` : `${origin}/credentials/${item.credId}`;
};

/* ---------------- Icons ---------------- */
const Svg = ({ children }: { children: React.ReactNode }) => (
  <svg className="rt2-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);
const Icons: Record<string, React.ReactNode> = {
  phone: <Svg><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></Svg>,
  mail: <Svg><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></Svg>,
  globe: <Svg><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></Svg>,
  pin: <Svg><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></Svg>,
  linkedin: <Svg><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /></Svg>,
  github: <Svg><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></Svg>,
  twitter: <Svg><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></Svg>,
  instagram: <Svg><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" /></Svg>,
  dribbble: <Svg><circle cx="12" cy="12" r="10" /><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" /></Svg>,
  behance: <Svg><path d="M3 6h7a3 3 0 0 1 0 6H3zM3 12h8a3 3 0 0 1 0 6H3zM15 8h6M15 15a3 3 0 0 0 6 0 3 3 0 0 0-6 0h6" /></Svg>
};
const socialIconMap: Record<string, string> = {
  linkedin: "linkedin", github: "github", behanceLink: "behance",
  dribbblelink: "dribbble", twitter: "twitter", instagram: "instagram"
};

/* ---------------- Pieces ---------------- */
const CredentialLink = ({ item }: { item: ResumeEntry }) =>
  item.credId || item.clrId ? (
    <a className="rt2-link" href={credentialHref(item)}>View credential</a>
  ) : null;

const SideBar = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="rt2-side-section">
    <h2 className="rt2-bar">{title}</h2>
    <div className="rt2-side-body">{children}</div>
  </section>
);

const SideEntry = ({ item, showDate }: { item: ResumeEntry; showDate?: boolean }) => {
  const r = item.relation || {};
  if (!r.title) return null;
  return (
    <div className="rt2-side-entry">
      <h3>{r.title}</h3>
      {r.issuerName && <p>{r.issuerName}</p>}
      {r.description && <p dangerouslySetInnerHTML={safeHtml(r.description)} />}
      {showDate && dateRange(r.startDate, r.endDate) && (
        <p className="rt2-muted">{dateRange(r.startDate, r.endDate)}</p>
      )}
      <CredentialLink item={item} />
    </div>
  );
};

const MainHeading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="rt2-main-title">
    <span>{children}</span>
    <i />
  </h2>
);

const MainEntry = ({ item }: { item: ResumeEntry }) => {
  const r = item.relation || {};
  const hack = item.enrollHackathon?.hackathon;
  const title = hack?.hackathonName || r.title;
  if (!title) return null;
  const sub = hack ? [hack.venue, hack.category].filter(Boolean).join(" • ") : r.issuerName;
  const desc = hack?.description || r.description;
  const dates = dateRange(r.startDate, r.endDate);
  return (
    <article className="rt2-entry">
      {dates && <p className="rt2-entry__date">{dates}</p>}
      <h3 className="rt2-entry__title">{title}</h3>
      {sub && <p className="rt2-entry__sub">{sub}</p>}
      {desc && <div className="rt2-entry__desc" dangerouslySetInnerHTML={safeHtml(desc)} />}
      {hack?.award && (
        <p className="rt2-entry__desc"><strong>Award:</strong>{" "}
          <span dangerouslySetInnerHTML={safeHtml(hack.award)} /></p>
      )}
      <CredentialLink item={item} />
    </article>
  );
};

const MainSection = ({ title, items }: { title: string; items?: ResumeEntry[] }) =>
  items && items.length ? (
    <section className="rt2-main-section">
      <MainHeading>{title}</MainHeading>
      {items.map((it, i) => <MainEntry key={it.id ?? i} item={it} />)}
    </section>
  ) : null;

/* ---------------- Template ---------------- */
const ResumeTemplateTwo = ({ data }: { data?: ResumeData }) => {
  const { userInfo, savedResumeDetails: d } = data;
  const { userprofile = {}, mobile, email, designation, profileImage } = userInfo;
  const {
    socialsData = [], skills = [], educations = [], workexperiences = [], enrollinternships = [],
    trainings = [], enrollcourses = [], enrollliveprojects = [], enrollHackthons, otherCredentials
  } = d;

  const initials = `${userprofile.firstname?.[0] || ""}${userprofile.lastname?.[0] || ""}`.toUpperCase();
  const location = [userprofile.city, userprofile.state, userprofile.country].filter(Boolean).join(", ");

  const contacts = [
    mobile && { key: "phone", icon: "phone", text: mobile, href: `tel:${mobile}` },
    email && { key: "email", icon: "mail", text: email, href: `mailto:${email}` },
    userprofile.website && { key: "web", icon: "globe", text: userprofile.website, href: sanitizeUrl(userprofile.website) },
    ...socialsData.filter(({ key }) => userprofile[key]).map(({ key }) => ({
      key, icon: socialIconMap[key] || "globe", text: userprofile[key] as string, href: sanitizeUrl(userprofile[key])
    })),
    location && { key: "loc", icon: "pin", text: location, href: "" }
  ].filter(Boolean) as { key: string; icon: string; text: string; href: string }[];

  const certs = [...trainings, ...enrollcourses];

  return (
    <div className="rt2-root">
      <div className="rt2-page">
        <aside className="rt2-side">
          <div className="rt2-avatar">
            {profileImage?.md ? <img src={profileImage.md} alt="Profile" /> : <span>{initials}</span>}
          </div>

          {contacts.length > 0 && (
            <SideBar title="Contact">
              <ul className="rt2-contact">
                {contacts.map(c => (
                  <li key={c.key}>
                    {Icons[c.icon]}
                    {c.href ? <a href={c.href}>{c.text}</a> : <span>{c.text}</span>}
                  </li>
                ))}
              </ul>
            </SideBar>
          )}

          {(educations.length > 0 || certs.length > 0) && (
            <SideBar title="Education">
              {educations.map((e, i) => <SideEntry key={e.id ?? i} item={e} showDate />)}
            </SideBar>
          )}

          {skills.length > 0 && (
            <SideBar title="Skills">
              <ul className="rt2-bullets">
                {skills.map((s, i) => <li key={i}>{s.name}</li>)}
              </ul>
            </SideBar>
          )}

          {certs.length > 0 && (
            <SideBar title="Training &amp; Courses">
              <div className="rt2-certs">
                {certs.map((c, i) => <SideEntry key={c.id ?? i} item={c} />)}
              </div>
            </SideBar>
          )}

          {otherCredentials && otherCredentials.length > 0 && (
            <SideBar title="Achievements">
              <div className="rt2-certs">
                {otherCredentials.map((a, i) => <SideEntry key={a.id ?? i} item={a} showDate />)}
              </div>
            </SideBar>
          )}
        </aside>

        <main className="rt2-main">
          <header className="rt2-head">
            <h1>{userprofile.firstname} {userprofile.lastname}</h1>
            {designation && <p>{designation}</p>}
          </header>

          {userprofile.about && (
            <section className="rt2-main-section">
              <MainHeading>About Me</MainHeading>
              <p className="rt2-about">{userprofile.about}</p>
            </section>
          )}

          <MainSection title="Experience" items={[...workexperiences, ...enrollinternships]} />

          {enrollliveprojects.length > 0 && (
            <section className="rt2-main-section">
              <MainHeading>Projects</MainHeading>
              <div className="rt2-projects">
                {enrollliveprojects.map((p, i) => p.relation?.title && (
                  <div className="rt2-project" key={p.id ?? i}>
                    <div className="rt2-project-head">
                      <h3>{p.relation.title}</h3>
                      {p.relation.startDate && (
                        <span className="rt2-project-date">{dateRange(p.relation.startDate, p.relation.endDate)}</span>
                      )}
                    </div>
                    {p.relation.issuerName && <p className="rt2-entry__sub">{p.relation.issuerName}</p>}
                    {p.relation.description && (
                      <div dangerouslySetInnerHTML={safeHtml(p.relation.description)} />
                    )}
                    <CredentialLink item={p} />
                  </div>
                ))}
              </div>
            </section>
          )}

          <MainSection title="Hackathons" items={enrollHackthons} />
        </main>
      </div>
    </div>
  );
};

export default ResumeTemplateTwo;
