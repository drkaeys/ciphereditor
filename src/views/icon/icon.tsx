
import './icon.scss'
import useClassName, { ViewModifiers } from 'hooks/useClassName'
import { ReactComponent as ArrowUpIcon } from 'icons/arrow-up.svg'
import { ReactComponent as ChevronDownIcon } from 'icons/chevron-down.svg'
import { ReactComponent as ChevronUpIcon } from 'icons/chevron-up.svg'
import { ReactComponent as CloseIcon } from 'icons/close.svg'
import { ReactComponent as CopyIcon } from 'icons/copy.svg'
import { ReactComponent as DoubleChevronIcon } from 'icons/chevron-double.svg'
import { ReactComponent as MinusIcon } from 'icons/minus.svg'
import { ReactComponent as OutletPullIcon } from 'icons/outlet-pull.svg'
import { ReactComponent as OutletPushIcon } from 'icons/outlet-push.svg'
import { ReactComponent as OutletUnusedIcon } from 'icons/outlet-unused.svg'
import { ReactComponent as PlusIcon } from 'icons/plus.svg'
import { ReactComponent as RedoIcon } from 'icons/redo.svg'
import { ReactComponent as SwitchIcon } from 'icons/switch.svg'
import { ReactComponent as UndoIcon } from 'icons/undo.svg'

const iconSVGMap = {
  arrowUp: ArrowUpIcon,
  chevronDown: ChevronDownIcon,
  chevronUp: ChevronUpIcon,
  close: CloseIcon,
  copy: CopyIcon,
  doubleChevron: DoubleChevronIcon,
  minus: MinusIcon,
  outletPull: OutletPullIcon,
  outletPush: OutletPushIcon,
  outletUnused: OutletUnusedIcon,
  plus: PlusIcon,
  redo: RedoIcon,
  switch: SwitchIcon,
  undo: UndoIcon,
}

export type Icon = keyof (typeof iconSVGMap)

type IconViewProps = Omit<React.ComponentPropsWithoutRef<'svg'>, 'className'> & {
  icon: Icon,
  modifiers?: ViewModifiers,
}

export default function IconView(props: IconViewProps) {
  const { icon, modifiers, ...viewProps } = props
  const IconSVG = iconSVGMap[icon]
  return <IconSVG
    className={useClassName('icon', modifiers)}
    {...viewProps}
  />
}