import { Button, Drawer } from 'antd'
import { ChevronsUp, CircleUserRound, Diamond, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu(props: Props) {
  const { isOpen, onClose } = props

  return (
    <Drawer
      closable={{ 'aria-label': 'Close Button' }}
      onClose={onClose}
      open={isOpen}
      placement="top"
      className="md:hidden"
      styles={{
        body: {
          color: 'white',
          backgroundColor: 'black',
        },
      }}
    >
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="relative flex items-center gap-2 text-nowrap py-1 text-lg text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:content-[''] hover:text-purple-300 hover:after:w-full"
        >
          <CircleUserRound />
          <span className="text-sm font-medium">Avatar</span>
        </Link>

        <Link
          href="/"
          className="relative flex items-center gap-2 text-nowrap py-1 text-lg text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:content-[''] hover:text-purple-300 hover:after:w-full"
        >
          <Diamond />
          <span className="text-sm font-medium">Arena</span>
        </Link>

        <Link
          href="/"
          className="relative flex items-center gap-2 text-nowrap py-1 text-lg text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:content-[''] hover:text-purple-300 hover:after:w-full"
        >
          <ChevronsUp />
          <span className="text-sm font-medium">Beyond</span>
        </Link>

        <Link
          href="/"
          className="relative flex items-center gap-2 text-nowrap py-1 text-lg text-white transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-purple-400 after:transition-all after:content-[''] hover:text-purple-300 hover:after:w-full"
        >
          <ShoppingCart />
          <span className="text-sm font-medium">Shop</span>
        </Link>
      </nav>

      <div className="mt-4 flex flex-col gap-2">
        <Button
          size="large"
          className="h-8 text-nowrap rounded-lg !bg-gradient-to-r !from-purple-500 !to-indigo-600 px-6 font-medium !text-white transition-all duration-300 hover:opacity-70"
        >
          Play now
        </Button>

        <Button
          size="large"
          className="h-8 text-nowrap rounded-lg !bg-gradient-to-r !from-gray-500 !to-gray-600 px-6 font-medium !text-white transition-all duration-300 hover:opacity-70"
        >
          Play now
        </Button>
      </div>
    </Drawer>
  )
}
