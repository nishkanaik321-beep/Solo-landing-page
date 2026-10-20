// Everything the form needs to know + the converter from form state -> template data.

export const PROFILE_FIELDS = [
  { key: 'firstname', label: 'First name', required: true, placeholder: 'Riya' },
  { key: 'lastname', label: 'Last name', placeholder: 'Fernandes' },
  { key: 'designation', label: 'Headline / role', placeholder: 'Product & UX Designer', wide: true },
  { key: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
  { key: 'mobile', label: 'Phone', placeholder: '+91 98765 43210' },
  { key: 'city', label: 'City', placeholder: 'Panaji' },
  { key: 'state', label: 'State', placeholder: 'Goa' },
  { key: 'country', label: 'Country', placeholder: 'India' },
]

export const LINK_FIELDS = [
  { key: 'website', label: 'Website', placeholder: 'yoursite.com' },
  { key: 'linkedin', label: 'LinkedIn', placeholder: 'linkedin.com/in/you' },
  { key: 'github', label: 'GitHub', placeholder: 'github.com/you' },
  { key: 'behanceLink', label: 'Behance', placeholder: 'behance.net/you' },
  { key: 'dribbblelink', label: 'Dribbble', placeholder: 'dribbble.com/you' },
  { key: 'twitter', label: 'X / Twitter', placeholder: 'x.com/you' },
  { key: 'instagram', label: 'Instagram', placeholder: 'instagram.com/you' },
]

const SOCIALS = [
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'github', label: 'GitHub' },
  { key: 'behanceLink', label: 'Behance' },
  { key: 'dribbblelink', label: 'Dribbble' },
  { key: 'twitter', label: 'X' },
  { key: 'instagram', label: 'Instagram' },
]

// Repeatable sections. `hackathon: true` uses the different hackathon shape.
export const LIST_SECTIONS = [
  { key: 'educations', label: 'Education', add: 'Add education', title: 'Degree / course', org: 'Institution', desc: 'Field of study or notes' },
  { key: 'workexperiences', label: 'Work experience', add: 'Add job', title: 'Job title', org: 'Company', desc: 'What you did and achieved' },
  { key: 'enrollinternships', label: 'Internships', add: 'Add internship', title: 'Role', org: 'Company', desc: 'What you worked on' },
  { key: 'enrollliveprojects', label: 'Projects', add: 'Add project', title: 'Project name', org: 'Type / domain', desc: 'What you built' },
  { key: 'enrollHackthons', label: 'Hackathons', add: 'Add hackathon', hackathon: true },
  { key: 'trainings', label: 'Trainings', add: 'Add training', title: 'Training', org: 'Organised by', desc: 'Short note (optional)' },
  { key: 'enrollcourses', label: 'Courses & certificates', add: 'Add course', title: 'Course', org: 'Provider', desc: 'Short note (optional)' },
  { key: 'otherCredentials', label: 'Other achievements', add: 'Add achievement', title: 'Achievement', org: 'Awarded by', desc: 'Short note (optional)' },
]

export const emptyEntry = (hackathon) =>
  hackathon
    ? { hackathonName: '', venue: '', category: '', description: '', award: '', startDate: '' }
    : { title: '', issuerName: '', description: '', startDate: '', endDate: '' }

export const emptyForm = () => ({
  profile: { firstname: '', lastname: '', designation: '', email: '', mobile: '', city: '', state: '', country: '', about: '', photo: '' },
  links: Object.fromEntries(LINK_FIELDS.map((f) => [f.key, ''])),
  skills: '',
  lists: Object.fromEntries(LIST_SECTIONS.map((s) => [s.key, []])),
})

// <input type="month"> gives "2024-03" -> templates want a full date.
const toDate = (m) => (m ? `${m}-01` : '')
const clean = (v) => (v || '').trim()

export function buildResumeData(form) {
  const { profile, links, skills, lists } = form
  const { photo, ...p } = profile

  const lists_ = {}
  for (const s of LIST_SECTIONS) {
    lists_[s.key] = (lists[s.key] || [])
      .map((e, i) => {
        const id = `${s.key}-${i}`
        if (s.hackathon) {
          if (!clean(e.hackathonName)) return null
          return {
            id,
            enrollHackathon: {
              hackathon: {
                hackathonName: clean(e.hackathonName),
                venue: clean(e.venue),
                category: clean(e.category),
                description: clean(e.description),
                award: clean(e.award),
              },
            },
            relation: { startDate: toDate(e.startDate), endDate: '' },
          }
        }
        if (!clean(e.title)) return null
        return {
          id,
          relation: {
            title: clean(e.title),
            issuerName: clean(e.issuerName),
            description: clean(e.description),
            startDate: toDate(e.startDate),
            endDate: toDate(e.endDate),
            verified: '',
          },
        }
      })
      .filter(Boolean)
  }

  return {
    userInfo: {
      mobile: clean(p.mobile),
      email: clean(p.email),
      designation: clean(p.designation),
      profileImage: { md: photo || '' },
      userprofile: {
        firstname: clean(p.firstname),
        lastname: clean(p.lastname),
        city: clean(p.city),
        state: clean(p.state),
        country: clean(p.country),
        about: clean(p.about),
        ...Object.fromEntries(Object.entries(links).map(([k, v]) => [k, clean(v)])),
      },
    },
    savedResumeDetails: {
      socialsData: SOCIALS,
      skills: skills.split(',').map((s) => s.trim()).filter(Boolean).map((name) => ({ name })),
      ...lists_,
    },
  }
}
