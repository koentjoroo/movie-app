import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Browse All Movies' },
]

export const Navbar = () => {
  const router = useRouter()
  const asPath = (path: string) => path === router.asPath

  return (
    <nav className="text-white bg-rose-500">
      <div className="container flex items-center justify-between gap-4 p-4 mx-auto lg:p-8 lg:gap-8">
        <span className="font-black tracking-tight font-heading">
          Movie App
        </span>
        <ul className="flex items-center gap-8">
          {links.map((link) => {
            const active = asPath(link.href)
            const classes = active
              ? 'font-bold'
              : 'opacity-70 hover:opacity-100 transition-opacity'

            return (
              <li key={link.href}>
                <Link href={link.href}>
                  <a className={classes}>{link.text}</a>
                </Link>
              </li>
            )
          })}
        </ul>
        <form>
          <input
            className="px-4 py-2 transition-colors rounded-full placeholder:text-inherit bg-white/10 focus:bg-white/20"
            type="text"
            placeholder="Search..."
          />
        </form>
      </div>
    </nav>
  )
}
