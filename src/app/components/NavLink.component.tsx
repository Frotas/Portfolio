import './navlink.style.css'

type props = {
  text: string,
  style?: string,
  href?: string,
}

export default function NavLink({ text, href, style }: props) {
  if (style == '' || style == undefined) {
    style = 'default'
  }
  return <>
    <li className={`${style}`}>
      <a href={`${href}`}> {text} </a>
    </li>
  </>
}
