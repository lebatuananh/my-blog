import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { navigation } from '@/data/nav'
import CommandPalette from './CommandPalette'
import ThemeSwitch from './ThemeSwitch'
import Typewriter from 'typewriter-effect'
import { useRouter } from 'next/router'
import DropMenu from './DropMenu.js'
import useTranslation from 'next-translate/useTranslation'
// import Logo from '@/data/logo.svg'
// import MobileNav from './MobileNav'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  const { t } = useTranslation()
  const { locale, locales, defaultLocale } = router

  const changeLanguage = (locale) => {
    router.push(router.asPath, router.asPath, { locale })
  }

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              {/* <div className="flex items-center justify-between">
                <div className="mr-1">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div> */}
              <div className="text-primary-color dark:text-primary-color-dark flex items-center justify-between text-xl font-semibold">
                {`~${router.asPath}`}{' '}
                <Typewriter
                  options={{
                    strings: [],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="link-underline rounded py-1 px-2 text-gray-900 hover:bg-gray-200 dark:text-gray-100 dark:hover:bg-gray-700 sm:py-2 sm:px-3"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex">
              {locales.map((e, index) => (
                <span key={e}>
                  <button
                    aria-label={`Change to ${e}`}
                    type="button"
                    value={locale}
                    onClick={() => changeLanguage(e)}
                    className="inline-block cursor-pointer p-2 font-medium text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 sm:py-4"
                  >
                    {e}
                  </button>
                  {index === 0 && (
                    <span className="py-1 text-gray-300 dark:text-gray-700 sm:py-4">/</span>
                  )}
                </span>
              ))}
            </div>
            <CommandPalette navigation={navigation} />
            <ThemeSwitch />
            <DropMenu />
            {/* <MobileNav /> */}
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
