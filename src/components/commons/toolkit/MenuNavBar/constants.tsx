import { FaFolder, FaRegClock } from 'react-icons/fa'
import { IoMdTrash } from 'react-icons/io'
import { MdDevices } from 'react-icons/md'

export const PAGES = [
  { title: 'My Drive', href: '/', icon: <FaFolder /> },
  { title: 'Computers', href: '/', icon: <MdDevices /> },
  { title: 'Recents', href: '/', icon: <FaRegClock /> },
  { title: 'Deleted', href: '/', icon: <IoMdTrash /> }
]
