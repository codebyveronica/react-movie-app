import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../contants/navigation";

const MobileNavigation = () => {
  return (
    <section className="lg:hidden h-14 bg-neutral-600 bg-opacity-40 fixed bottom-0 w-full">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {
          mobileNavigation.map((nav) => {
            return (
              <NavLink 
                key={nav.label+"mobilenavigation"}
                to={nav.href}
                className={({isActive}) => `px-3 flex h-full items-center flex-col justify-center ${isActive && "text-white"}`}
              >
                <div className="text-2xl">
                  {nav.icon}
                </div>
                <p className="text-sm">{nav.label}</p>
              </NavLink>
            )
          })
        }
      </div>
    </section>
  )
}

export default MobileNavigation
