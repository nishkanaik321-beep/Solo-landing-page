import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowLeft, ArrowRight, Check, Download, PencilLine, Plus, Sparkles, Trash2, X, Upload, MousePointerClick } from 'lucide-react'
import './ResumeBuilder.css'

import ResumeAurum from './templates/Aurum/ResumeAurum'
import ResumeEmerald from './templates/Emerald/ResumeTemplateTwo'
import ResumeClassic from './templates/Classic/ResumeTemplate'
import demoData from './demoData.json'
import {
  PROFILE_FIELDS, LINK_FIELDS, LIST_SECTIONS,
  emptyEntry, emptyForm, buildResumeData,
} from './resumeConfig'

const TEMPLATES = [
  { id: 'aurum', name: 'Aurum', tag: 'Sand & navy · timeline', Component: ResumeAurum },
  { id: 'emerald', name: 'Emerald', tag: 'Deep green · bold bars', Component: ResumeEmerald },
  { id: 'classic', name: 'Classic Navy', tag: 'Navy header · clean', Component: ResumeClassic },
]

const STEP_LABELS = { mode: 'Start', form: 'Your details', template: 'Template', result: 'Your resume' }

/* A live, scaled-down render of the real template so the picker is WYSIWYG. */
function TemplateThumb({ Component, data }) {
  const box = useRef(null)
  const [scale, setScale] = useState(0.3)
  useLayoutEffect(() => {
    const el = box.current
    if (!el) return
    const update = () => setScale(el.clientWidth / 1000)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])
  return (
    <div className="rb-thumb" ref={box} style={{ height: `${1414 * scale}px` }} aria-hidden="true">
      <div className="rb-thumb__inner" style={{ width: 1000, transform: `scale(${scale})` }}>
        <Component data={data} />
      </div>
    </div>
  )
}

function Field({ label, wide, children }) {
  return (
    <label className={`rb-field ${wide ? 'rb-field--wide' : ''}`}>
      <span>{label}</span>
      {children}
    </label>
  )
}

function EntryEditor({ section, entry, onChange, onRemove, index }) {
  const set = (k) => (e) => onChange({ ...entry, [k]: e.target.value })
  return (
    <div className="rb-entry">
      <div className="rb-entry__head">
        <span>{section.label} #{index + 1}</span>
        <button type="button" className="rb-icon-btn" onClick={onRemove} aria-label="Remove entry">
          <Trash2 size={15} />
        </button>
      </div>
      <div className="rb-grid">
        {section.hackathon ? (
          <>
            <Field label="Hackathon name"><input value={entry.hackathonName} onChange={set('hackathonName')} placeholder="Goa Design Jam 2024" /></Field>
            <Field label="Venue / city"><input value={entry.venue} onChange={set('venue')} placeholder="Panaji" /></Field>
            <Field label="Category"><input value={entry.category} onChange={set('category')} placeholder="Civic Tech" /></Field>
            <Field label="Award (optional)"><input value={entry.award} onChange={set('award')} placeholder="Winner – Best UX" /></Field>
            <Field label="Date"><input type="month" value={entry.startDate} onChange={set('startDate')} /></Field>
            <Field label="What you built" wide><textarea rows={2} value={entry.description} onChange={set('description')} /></Field>
          </>
        ) : (
          <>
            <Field label={section.title}><input value={entry.title} onChange={set('title')} /></Field>
            <Field label={section.org}><input value={entry.issuerName} onChange={set('issuerName')} /></Field>
            <Field label="Start"><input type="month" value={entry.startDate} onChange={set('startDate')} /></Field>
            <Field label="End (leave empty if ongoing)"><input type="month" value={entry.endDate} onChange={set('endDate')} /></Field>
            <Field label={section.desc} wide><textarea rows={2} value={entry.description} onChange={set('description')} /></Field>
          </>
        )}
      </div>
    </div>
  )
}

function DetailsForm({ form, setForm }) {
  const setProfile = (k) => (e) => setForm((f) => ({ ...f, profile: { ...f.profile, [k]: e.target.value } }))
  const setLink = (k) => (e) => setForm((f) => ({ ...f, links: { ...f.links, [k]: e.target.value } }))
  const setList = (key, fn) => setForm((f) => ({ ...f, lists: { ...f.lists, [key]: fn(f.lists[key]) } }))

  const onPhoto = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 2 * 1024 * 1024) { alert('Please choose an image under 2 MB.'); return }
    const reader = new FileReader()
    reader.onload = () => setForm((f) => ({ ...f, profile: { ...f.profile, photo: reader.result } }))
    reader.readAsDataURL(file)
  }

  return (
    <div className="rb-form">
      <section className="rb-card">
        <h3>About you</h3>
        <div className="rb-grid">
          {PROFILE_FIELDS.map((f) => (
            <Field key={f.key} label={f.label + (f.required ? ' *' : '')} wide={f.wide}>
              <input type={f.type || 'text'} value={form.profile[f.key]} onChange={setProfile(f.key)} placeholder={f.placeholder} />
            </Field>
          ))}
          <Field label="Professional summary" wide>
            <textarea rows={4} value={form.profile.about} onChange={setProfile('about')} placeholder="2–3 lines about who you are and what you do best." />
          </Field>
          <div className="rb-field rb-field--wide">
            <span>Photo (optional)</span>
            <div className="rb-photo">
              {form.profile.photo && <img src={form.profile.photo} alt="" />}
              <label className="rb-btn rb-btn--ghost rb-btn--sm">
                <Upload size={14} /> {form.profile.photo ? 'Change' : 'Upload'}
                <input type="file" accept="image/*" hidden onChange={onPhoto} />
              </label>
              {form.profile.photo && (
                <button type="button" className="rb-btn rb-btn--ghost rb-btn--sm" onClick={() => setForm((f) => ({ ...f, profile: { ...f.profile, photo: '' } }))}>Remove</button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="rb-card">
        <h3>Links <small>all optional</small></h3>
        <div className="rb-grid">
          {LINK_FIELDS.map((f) => (
            <Field key={f.key} label={f.label}>
              <input value={form.links[f.key]} onChange={setLink(f.key)} placeholder={f.placeholder} />
            </Field>
          ))}
        </div>
      </section>

      <section className="rb-card">
        <h3>Skills</h3>
        <Field label="Separate skills with commas" wide>
          <textarea rows={2} value={form.skills} onChange={(e) => setForm((f) => ({ ...f, skills: e.target.value }))} placeholder="Figma, User Research, HTML / CSS" />
        </Field>
      </section>

      {LIST_SECTIONS.map((section) => (
        <section className="rb-card" key={section.key}>
          <h3>{section.label} <small>optional</small></h3>
          {form.lists[section.key].map((entry, i) => (
            <EntryEditor
              key={i}
              index={i}
              section={section}
              entry={entry}
              onChange={(next) => setList(section.key, (arr) => arr.map((x, j) => (j === i ? next : x)))}
              onRemove={() => setList(section.key, (arr) => arr.filter((_, j) => j !== i))}
            />
          ))}
          <button type="button" className="rb-btn rb-btn--ghost rb-btn--sm" onClick={() => setList(section.key, (arr) => [...arr, emptyEntry(section.hackathon)])}>
            <Plus size={14} /> {section.add}
          </button>
        </section>
      ))}
    </div>
  )
}

export default function ResumeBuilder({ open, onClose }) {
  const [step, setStep] = useState('mode')
  const [mode, setMode] = useState(null) // 'manual' | 'demo'
  const [form, setForm] = useState(emptyForm)
  const [templateId, setTemplateId] = useState('aurum')
  const [edited, setEdited] = useState(false)
  const [error, setError] = useState('')
  const stageRef = useRef(null)

  const data = useMemo(() => (mode === 'demo' ? demoData : buildResumeData(form)), [mode, form])
  const tpl = TEMPLATES.find((t) => t.id === templateId)
  const thumbData = mode === 'manual' && form.profile.firstname.trim() ? data : demoData

  // lock page scroll + Esc to close
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && close()
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; window.removeEventListener('keydown', onKey) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, step, edited])

  if (!open) return null

  const close = () => {
    if (step === 'result' && edited && !window.confirm('Close without downloading? Your on-page edits will be lost.')) return
    onClose()
    setStep('mode'); setMode(null); setEdited(false); setError('')
  }

  const pickMode = (m) => {
    setMode(m); setError('')
    setStep(m === 'manual' ? 'form' : 'template')
  }

  const next = () => {
    setError('')
    if (step === 'form') {
      if (!form.profile.firstname.trim()) { setError('Please enter at least your first name.'); return }
      setStep('template')
    } else if (step === 'template') {
      setEdited(false)
      setStep('result')
    }
  }

  const back = () => {
    setError('')
    if (step === 'form') setStep('mode')
    else if (step === 'template') setStep(mode === 'manual' ? 'form' : 'mode')
    else if (step === 'result') {
      if (edited && !window.confirm('Going back will discard your on-page edits. Continue?')) return
      setStep('template')
    }
  }

  const download = () => {
    const prevTitle = document.title
    const name = [data.userInfo.userprofile.firstname, data.userInfo.userprofile.lastname].filter(Boolean).join('_')
    document.title = `${name || 'Resume'}_Resume`
    document.body.classList.add('rb-printing')
    // Export one page sized to the resume itself (1000px wide, at least A4 proportions)
    // so the sidebar/timeline layouts are never split across page breaks.
    const paper = stageRef.current?.querySelector('.rb-paper')
    const prevW = paper?.style.width
    if (paper) paper.style.width = '1000px'
    const h = Math.max(1414, Math.ceil(paper ? paper.getBoundingClientRect().height : 1414)) + 1
    const pageStyle = document.createElement('style')
    pageStyle.textContent = `@page { size: 1000px ${h}px; margin: 0; }`
    document.head.appendChild(pageStyle)
    const done = () => {
      document.body.classList.remove('rb-printing')
      if (paper) paper.style.width = prevW || ''
      pageStyle.remove()
      document.title = prevTitle
      window.removeEventListener('afterprint', done)
    }
    window.addEventListener('afterprint', done)
    window.print()
  }

  const steps = mode === 'demo' ? ['mode', 'template', 'result'] : ['mode', 'form', 'template', 'result']

  return createPortal(
    <div className="rb-overlay" role="dialog" aria-modal="true" aria-label="Generate your resume">
      <div className="rb-modal">
        <header className="rb-top">
          <ol className="rb-steps">
            {steps.map((s, i) => {
              const idx = steps.indexOf(step)
              return (
                <li key={s} className={i === idx ? 'is-active' : i < idx ? 'is-done' : ''}>
                  <span>{i < idx ? <Check size={12} /> : i + 1}</span>{STEP_LABELS[s]}
                </li>
              )
            })}
          </ol>
          <button type="button" className="rb-icon-btn" onClick={close} aria-label="Close"><X size={18} /></button>
        </header>

        <div className="rb-body">
          {step === 'mode' && (
            <div className="rb-center">
              <h2>How would you like to start?</h2>
              <p className="rb-sub">Build from your own details, or try a ready-made example to see how it works.</p>
              <div className="rb-modes">
                <button type="button" className="rb-mode" onClick={() => pickMode('manual')}>
                  <PencilLine size={26} />
                  <strong>Add my details</strong>
                  <span>Fill in your profile, experience, projects and skills yourself.</span>
                  <em>Start from scratch <ArrowRight size={14} /></em>
                </button>
                <button type="button" className="rb-mode rb-mode--demo" onClick={() => pickMode('demo')}>
                  <Sparkles size={26} />
                  <strong>Try the demo</strong>
                  <span>We'll use sample details so you can see the templates and editor in action.</span>
                  <em>See an example <ArrowRight size={14} /></em>
                </button>
              </div>
            </div>
          )}

          {step === 'form' && (
            <>
              <div className="rb-head"><h2>Your details</h2><p className="rb-sub">Empty sections are simply left out of the resume.</p></div>
              <DetailsForm form={form} setForm={setForm} />
            </>
          )}

          {step === 'template' && (
            <>
              <div className="rb-head">
                <h2>Choose a template</h2>
                <p className="rb-sub">
                  {mode === 'demo' ? 'Previews use sample details.' : 'Pick the look you like — you can edit any text on the final resume.'}
                </p>
              </div>
              <div className="rb-templates">
                {TEMPLATES.map((t) => (
                  <button
                    type="button" key={t.id}
                    className={`rb-tpl ${templateId === t.id ? 'is-selected' : ''}`}
                    onClick={() => setTemplateId(t.id)}
                    aria-pressed={templateId === t.id}
                  >
                    <TemplateThumb Component={t.Component} data={thumbData} />
                    <span className="rb-tpl__meta">
                      <strong>{t.name}</strong><small>{t.tag}</small>
                    </span>
                    {templateId === t.id && <span className="rb-tpl__check"><Check size={14} /></span>}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 'result' && (
            <div className="rb-result">
              <div className="rb-toolbar">
                <span className="rb-hint"><MousePointerClick size={15} /> Click any text on the resume to edit it.</span>
                {mode === 'demo' && (
                  <button type="button" className="rb-btn rb-btn--ghost rb-btn--sm" onClick={() => { if (edited && !window.confirm('Discard your edits?')) return; setMode('manual'); setEdited(false); setStep('form') }}>
                    Use my own details
                  </button>
                )}
              </div>
              <div className="rb-stage" ref={stageRef}>
                <div
                  className="rb-paper"
                  contentEditable
                  suppressContentEditableWarning
                  spellCheck={false}
                  onInput={() => setEdited(true)}
                >
                  <tpl.Component data={data} />
                </div>
              </div>
            </div>
          )}
        </div>

        {step !== 'mode' && (
          <footer className="rb-foot">
            <button type="button" className="rb-btn rb-btn--ghost" onClick={back}><ArrowLeft size={15} /> Back</button>
            {error && <span className="rb-error" role="alert">{error}</span>}
            {step === 'result' ? (
              <button type="button" className="rb-btn rb-btn--primary" onClick={download}>
                <Download size={15} /> Download PDF
              </button>
            ) : (
              <button type="button" className="rb-btn rb-btn--primary" onClick={next}>
                {step === 'template' ? 'Generate resume' : 'Continue'} <ArrowRight size={15} />
              </button>
            )}
          </footer>
        )}
      </div>
    </div>,
    document.body
  )
}
