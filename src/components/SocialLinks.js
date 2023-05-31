import { socialLinks } from '../data'

const SocialLink = ({ parentClass, linkClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return (
          <li key={link.id}>
            <a
              href={link.href}
              rel="noreferrer"
              target="_blank"
              className={linkClass}
            >
              <i className={link.icon}></i>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default SocialLink
