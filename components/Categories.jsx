import '@fortawesome/fontawesome-svg-core/styles.css'
import styles from '@/styles/categories.module.scss'
import { memo } from 'react'
import Link from 'next/link'

export const CategoriesMemo = ({
  allCategories,
  closeMenu,
  ariaExpanded,
  lastCategoryFocus,
}) => {
  return (
    <>
      <div className="flex flex-col gap-7">
        {allCategories.map(({ catApiName, catName, catSlugs }) => (
          <div key={catApiName}>
            <div className="border-b pb-3 mb-2">{catName}</div>
            <ul className={styles.categoryList}>
              {catSlugs.map(({ name, slug }) => (
                <li key={slug}>
                  <Link
                    href={`/category/${catApiName}/${slug}`}
                    onClick={closeMenu}
                    onKeyDown={(event) => {
                      event.code === 'Space' ||
                      event.code === 'Enter' ||
                      event.code === 'Escape'
                        ? ariaExpanded
                        : null
                    }}
                    className={'text-xs'}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

export const Categories = memo(CategoriesMemo)
