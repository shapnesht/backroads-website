import { pageLinks } from '../data'
import PageLink from './PageLink'

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map((link) => {
        const { id } = link
        return <PageLink key={id} {...link} itemClass={itemClass} />
      })}
    </ul>
  )
}
export default PageLinks
