import * as Ariakit from '@ariakit/react';
import clsx from 'clsx';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import * as React from 'react';

export const Menu = React.forwardRef(function Menu(
  {
    open,
    setOpen,
    label,
    children,
    animate,
    transition,
    variants,
    initial,
    exit,
    ...props
  },
  ref,
) {
  const menu = Ariakit.useMenuStore({ open, setOpen });
  const currentPlacement = Ariakit.useStoreState(menu, 'currentPlacement');
  const mounted = Ariakit.useStoreState(menu, 'mounted');

  return (
    <MotionConfig reducedMotion="user">
      <Ariakit.MenuButton
        store={menu}
        ref={ref}
        {...props}
        className={clsx(
          'button py-[12px] px-[18px] flex items-center gap-[8px] border border-1 border-slate-gray rounded-[8px] text-black bg-black text-white hover:text-white hover:border-black shadow-drop dark:bg-black dark:text-white dark:border-black dark:hover:border-white dark:hover:text-white duration-300',
          props.className,
        )}
      >
        {label}
        <Ariakit.MenuButtonArrow />
      </Ariakit.MenuButton>
      <AnimatePresence>
        {mounted && (
          <Ariakit.Menu
            store={menu}
            alwaysVisible
            className="menu p-2 z-[9999]"
            data-placement={currentPlacement}
            render={
              <motion.div
                initial={initial}
                exit={exit}
                animate={animate}
                variants={variants}
                transition={transition}
              />
            }
          >
            <Ariakit.MenuArrow className="menu-arrow" />
            {children}
          </Ariakit.Menu>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
});

// Create a motion-enhanced MenuItem component using motion.create()
const MotionMenuItem = motion.create(Ariakit.MenuItem);

export const MenuItem = React.forwardRef(function MenuItem(props, ref) {
  return (
    <MotionMenuItem
      ref={ref}
      {...props}
      className={clsx('menu-item', props.className)}
    />
  );
});
