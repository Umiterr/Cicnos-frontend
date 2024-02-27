import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
const company = [
  { name: "Quienes somos", href: "#" },
  { name: "Contacto", href: "#" },
  { name: "Preguntas frecuentes", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white flex bg-opacity-0 relative z-20">
      <div className="flex lg:flex-1- max-w-[300px]">
        <a href="#" className="max-w-300 -m-1.5 p-1.5">
          <span className="sr-only">Cicnos</span>
          <img
            className="p-4 "
            src="../public/logocicnos.png"
            alt="Cicnos impresion en telas"
          />
        </a>
      </div>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between pr-8"
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 bg-white p-1 pl-8 rounded-lg border border-orange-300 border-solid border-2">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 self-center"
          >
            Inicio
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 self-center"
          >
            Decoración
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 self-center"
          >
            Moda
          </a>

          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 self-center"
          >
            Publicidad
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 self-center"
          >
            Imprime tu diseño
          </a>

          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 self-center"
          >
            Tienda
          </a>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Información
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5">
                {company.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>
        </Popover.Group>
      </nav>
    </header>
  );
}
