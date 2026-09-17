import './EntryCard.css'
import { Clock, MapPin, Hourglass, ArrowRight } from 'lucide-react'

export default function EntryCard({
  org,
  title,
  skills,
  kind,
  posted,
  location,
  duration,
  cost,
  featured = false,
  footer,
  image,
  imageAlt = '',
}) {
  if (image) {
    return (
      <div className={`entry-card entry-card--image ${featured ? 'entry-card--featured' : ''}`}>
        <img className="entry-card__tile" src={image} alt={imageAlt || title} />
      </div>
    )
  }

  const initials = org
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className={`entry-card ${featured ? 'entry-card--featured' : ''}`}>
      <div className="entry-card__top">
        <div className="logo-placeholder" style={{ width: 52, height: 52, fontSize: 24, fontWeight: 700 }}>
          {initials}
        </div>

        <div className="entry-card__heading">
          <h4 className="entry-card__title">{title}</h4>
          <span className="entry-card__org">{org}</span>
        </div>
      </div>

      <div className="entry-card__tags">
        {skills && <span className="tag tag--muted">{skills}</span>}
        {kind && <span className="tag">{kind}</span>}
      </div>

      <div className="meta-row entry-card__meta">
        {posted && (
          <span>
            <Clock /> Posted {posted}
          </span>
        )}
        {location && (
          <span>
            <MapPin /> {location}
          </span>
        )}
        {duration && (
          <span>
            <Hourglass /> {duration}
          </span>
        )}
        {cost && <span className="entry-card__cost">{cost}</span>}
      </div>

      <div className="entry-card__footer">
        {footer || (
          <a href="#" className="entry-card__link">
            View more <ArrowRight size={14} />
          </a>
        )}
      </div>
    </div>
  )
}
