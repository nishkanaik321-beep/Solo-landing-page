import React from "react";
import "./ResumeAurum.css";

/* ------------------------------------------------------------------ */
/* Types – same shape as the reference (userInfo + savedResumeDetails) */
/* ------------------------------------------------------------------ */

type Relation = {
  title?: string;
  issuerName?: string; // stands in for the output of getIssuerName()
  description?: string;
  startDate?: string;
  endDate?: string;
  verified?: string;
};

type Hackathon = {
  hackathonName?: string;
  venue?: string;
  category?: string;
  description?: string;
  award?: string;
};

type ResumeItem = {
  id?: string | number;
  relation?: Relation;
  verifiedStatus?: string;
  enrollHackathon?: { hackathon?: Hackathon };
};

type ResumeData = {
  userInfo: {
    userprofile: Record<string, string | undefined>;
    mobile?: string;
    email?: string;
    designation?: string;
    profileImage?: { md?: string };
  };
  savedResumeDetails: {
    socialsData?: { key: string; label: string }[];
    skills?: { name: string }[];
    educations?: ResumeItem[];
    workexperiences?: ResumeItem[];
    enrollinternships?: ResumeItem[];
    trainings?: ResumeItem[];
    enrollcourses?: ResumeItem[];
    enrollliveprojects?: ResumeItem[];
    enrollHackthons?: ResumeItem[];
    otherCredentials?: ResumeItem[];
  };
};

export interface ResumeAurumProps {
  data?: ResumeData;
}

/* ------------------------------------------------------------------ */
/* Small helpers (local replacements for the unshared utilities)       */
/* ------------------------------------------------------------------ */

const formatDate = (value?: string) => {
  if (!value) return "";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric", timeZone: "UTC" });
};

const dateRange = (start?: string, end?: string) =>
  [formatDate(start), formatDate(end)].filter(Boolean).join(" – ");

const toHref = (url: string) => {
  try {
    return new URL(url.startsWith("http") ? url : `https://${url}`).href;
  } catch {
    return "#";
  }
};

/** Normalises one item (regular entry or hackathon) into display fields. */
const readEntry = (item: ResumeItem) => {
  const data: Relation = item.relation ?? {};
  const hack = item.enrollHackathon?.hackathon;

  const title = hack?.hackathonName ?? data.title ?? "";
  const issuer = hack
    ? [hack.venue, hack.category].filter(Boolean).join(" • ")
    : data.issuerName ?? "";
  const description = hack?.description ?? data.description ?? "";
  const verified = (data.verified ?? item.verifiedStatus) === "verified" || item.verifiedStatus === "verified";

  return {
    id: item.id,
    title,
    issuer,
    description,
    award: hack?.award ?? "",
    dates: dateRange(data.startDate, data.endDate),
    startOnly: formatDate(data.startDate),
    verified
  };
};

/* ------------------------------------------------------------------ */
/* Icons (inline SVG – no icon library needed)                         */
/* ------------------------------------------------------------------ */

const Svg = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
    {children}
  </svg>
);

const PhoneIcon = () => (
  <Svg>
    <path
      fill="currentColor"
      d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"
    />
  </Svg>
);
const MailIcon = () => (
  <Svg>
    <path
      fill="currentColor"
      d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5z"
    />
  </Svg>
);
const PinIcon = () => (
  <Svg>
    <path
      fill="currentColor"
      d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
    />
  </Svg>
);
const GlobeIcon = () => (
  <Svg>
    <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </g>
  </Svg>
);
const CheckIcon = () => (
  <svg className="au-verified" viewBox="0 0 24 24" width="15" height="15" role="img" aria-label="Verified">
    <circle cx="12" cy="12" r="11" fill="currentColor" />
    <path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Text glyphs stand in for brand icons, keeping the file dependency-free. */
const SOCIAL_GLYPH: Record<string, string> = {
  linkedin: "in",
  github: "gh",
  behanceLink: "Bē",
  dribbblelink: "Dr",
  twitter: "X",
  instagram: "Ig"
};

/* ------------------------------------------------------------------ */
/* Building blocks                                                     */
/* ------------------------------------------------------------------ */

const ContactRow = ({
  icon,
  text,
  href
}: {
  icon: React.ReactNode;
  text: string;
  href?: string;
}) => (
  <li className="au-contact-row">
    <span className="au-contact-icon">{icon}</span>
    {href ? <a href={href}>{text}</a> : <span>{text}</span>}
  </li>
);

const Heading = ({ children }: { children: React.ReactNode }) => (
  <h2 className="au-heading">{children}</h2>
);

const Divider = ({ diamond = false }: { diamond?: boolean }) => (
  <div className={`au-divider${diamond ? " au-divider--diamond" : ""}`} role="separator">
    {diamond && <span className="au-diamond" />}
  </div>
);

const TimelineSection = ({
  title,
  items
}: {
  title: string;
  items: ResumeItem[];
}) => {
  const entries = items.map(readEntry).filter(e => e.title);
  if (!entries.length) return null;
  return (
    <section className="au-section">
      <Heading>{title}</Heading>
      <ol className="au-timeline">
        {entries.map((e, idx) => (
          <li className="au-tl-item" key={e.id ?? idx}>
            <span className="au-tl-date">{e.dates}</span>
            <div className="au-tl-body">
              <h3 className="au-tl-title">
                {e.title}
                {e.verified && <CheckIcon />}
              </h3>
              {e.issuer && <p className="au-tl-issuer">{e.issuer}</p>}
              {e.description && <p className="au-text">{e.description}</p>}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

const ListSection = ({
  title,
  items,
  variant,
  showDate = false,
  showDescription = false
}: {
  title: string;
  items: ResumeItem[];
  variant: "plain" | "bullet";
  showDate?: boolean;
  showDescription?: boolean;
}) => {
  const entries = items.map(readEntry).filter(e => e.title);
  if (!entries.length) return null;
  return (
    <section className="au-section">
      <Heading>{title}</Heading>
      <ul className={`au-list au-list--${variant}`}>
        {entries.map((e, idx) => (
          <li key={e.id ?? idx}>
            <span>
              {e.title}
              {e.issuer && ` — ${e.issuer}`}
              {showDate && e.startOnly && `, ${e.startOnly}`}
            </span>
            {showDescription && e.description && <p className="au-text">{e.description}</p>}
            {e.verified && <CheckIcon />}
            {e.award && <span className="au-list-note">Award: {e.award}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

const ResumeAurum: React.FC<ResumeAurumProps> = ({
  data
}) => {
  const { userInfo, savedResumeDetails } = data;
  const { userprofile = {}, mobile, email, designation, profileImage } = userInfo;
  const {
    socialsData = [],
    skills = [],
    educations = [],
    workexperiences = [],
    enrollinternships = [],
    trainings = [],
    enrollcourses = [],
    enrollliveprojects = [],
    enrollHackthons = [],
    otherCredentials = []
  } = savedResumeDetails;

  const fullName = [userprofile.firstname, userprofile.lastname].filter(Boolean).join(" ");
  const initials = [userprofile.firstname, userprofile.lastname]
    .map(n => n?.charAt(0) ?? "")
    .join("")
    .toUpperCase();
  const location = [userprofile.city, userprofile.state, userprofile.country].filter(Boolean).join(", ");

  const educationEntries = educations
    .map(readEntry)
    .filter(e => e.title);

  return (
    <div className="au-page">
      {/* ---------------------------- Sidebar ---------------------------- */}
      <aside className="au-side">
        <div className="au-photo">
          <div className="au-ring">
            {profileImage?.md ? (
              <img src={profileImage.md} alt={fullName} />
            ) : (
              <span className="au-initials" aria-hidden="true">
                {initials}
              </span>
            )}
          </div>
        </div>

        <div className="au-side-body">
          <section className="au-section">
            <Heading>Contact</Heading>
            <ul className="au-contact">
              {location && <ContactRow icon={<PinIcon />} text={location} />}
              {mobile && <ContactRow icon={<PhoneIcon />} text={mobile} href={`tel:${mobile}`} />}
              {email && <ContactRow icon={<MailIcon />} text={email} href={`mailto:${email}`} />}
              {userprofile.website && (
                <ContactRow icon={<GlobeIcon />} text={userprofile.website} href={toHref(userprofile.website)} />
              )}
              {socialsData.map(({ key, label }) => {
                const value = userprofile[key];
                if (!value) return null;
                return (
                  <ContactRow
                    key={key}
                    icon={<span className="au-glyph">{SOCIAL_GLYPH[key] ?? label.charAt(0)}</span>}
                    text={value}
                    href={toHref(value)}
                  />
                );
              })}
            </ul>
          </section>

          {educationEntries.length > 0 && (
            <section className="au-section">
              <Heading>Education</Heading>
              {educationEntries.map((e, idx) => (
                <div className="au-edu" key={e.id ?? idx}>
                  <h3 className="au-edu-title">
                    {e.title}
                    {e.verified && <CheckIcon />}
                  </h3>
                  {e.issuer && <p className="au-edu-issuer">{e.issuer}</p>}
                  {e.description && <p className="au-edu-desc">{e.description}</p>}
                  {e.dates && <p className="au-edu-dates">{e.dates}</p>}
                </div>
              ))}
            </section>
          )}

          {skills.length > 0 && (
            <section className="au-section">
              <Heading>Skills</Heading>
              <ul className="au-skills">
                {skills.map((s, i) => (
                  <li key={`${s.name}-${i}`}>{s.name}</li>
                ))}
              </ul>
            </section>
          )}

          <ListSection
            title="Trainings & Courses"
            items={[...trainings, ...enrollcourses]}
            variant="plain"
            showDate
          />

          <ListSection
            title="Other Achievements"
            items={otherCredentials}
            variant="bullet"
          />
        </div>
      </aside>

      {/* ----------------------------- Main ------------------------------ */}
      <main className="au-main">
        <div className="au-topline" />

        <header className="au-header">
          <h1 className="au-name">{fullName}</h1>
          {designation && <p className="au-role">{designation}</p>}
        </header>

        <Divider diamond />

        {userprofile.about && (
          <>
            <section className="au-section">
              <Heading>Professional Summary</Heading>
              <p className="au-text au-summary">{userprofile.about}</p>
            </section>
            <Divider />
          </>
        )}

        <TimelineSection
          title="Professional Experience"
          items={[...workexperiences, ...enrollinternships]}
        />

        <ListSection
          title="Live Projects"
          items={enrollliveprojects}
          variant="bullet"
          showDescription
        />

        <ListSection
          title="Hackathons"
          items={enrollHackthons}
          variant="bullet"
        />

      </main>
    </div>
  );
};

export default ResumeAurum;
