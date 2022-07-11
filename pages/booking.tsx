import type { NextPage } from "next";
import Header from "../components/Header";
import { Fragment, useState } from "react";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/solid";
import { Menu, Transition } from "@headlessui/react";
import { trpc } from "../utils/trpc";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/solid";

const days: Day[] = [
  //   { date: "2021-12-27", events: [] },
  //   { date: "2021-12-28", events: [] },
  //   { date: "2021-12-29", events: [] },
  //   { date: "2021-12-30", events: [] },
  //   { date: "2021-12-31", events: [] },
  //   { date: "2022-01-01", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-02", isCurrentMonth: true, events: [] },
  //   {
  //     date: "2022-01-03",
  //     isCurrentMonth: true,
  //     events: [
  //       {
  //         id: 1,
  //         name: "Design review",
  //         time: "10AM",
  //         datetime: "2022-01-03T10:00",
  //         href: "#",
  //       },
  //       {
  //         id: 2,
  //         name: "Sales meeting",
  //         time: "2PM",
  //         datetime: "2022-01-03T14:00",
  //         href: "#",
  //       },
  //     ],
  //   },
  //   { date: "2022-01-04", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-05", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-06", isCurrentMonth: true, events: [] },
  //   {
  //     date: "2022-01-07",
  //     isCurrentMonth: true,
  //     events: [
  //       {
  //         id: 3,
  //         name: "Date night",
  //         time: "6PM",
  //         datetime: "2022-01-08T18:00",
  //         href: "#",
  //       },
  //     ],
  //   },
  //   { date: "2022-01-08", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-09", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-10", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-11", isCurrentMonth: true, events: [] },
  //   {
  //     date: "2022-01-12",
  //     isCurrentMonth: true,
  //     isToday: true,
  //     events: [
  //       {
  //         id: 6,
  //         name: "Sam's birthday party",
  //         time: "2PM",
  //         datetime: "2022-01-25T14:00",
  //         href: "#",
  //       },
  //     ],
  //   },
  //   { date: "2022-01-13", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-14", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-15", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-16", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-17", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-18", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-19", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-20", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-21", isCurrentMonth: true, events: [] },
  {
    date: "2022-01-22",
    isCurrentMonth: true,
    isSelected: true,
    isToday: true,
    events: [
      {
        id: 4,
        name: "Maple syrup museum",
        time: "3PM",
        datetime: "2022-01-22T15:00",
        href: "#",
      },
      {
        id: 5,
        name: "Hockey game",
        time: "7PM",
        datetime: "2022-01-22T19:00",
        href: "#",
      },
    ],
  },
  //   { date: "2022-01-23", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-24", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-25", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-26", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-27", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-28", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-29", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-30", isCurrentMonth: true, events: [] },
  //   { date: "2022-01-31", isCurrentMonth: true, events: [] },
  //   { date: "2022-02-01", events: [] },
  //   { date: "2022-02-02", events: [] },
  //   {
  //     date: "2022-02-03",
  //     events: [
  //       {
  //         id: 7,
  //         name: "Cinema with friends",
  //         time: "9PM",
  //         datetime: "2022-02-04T21:00",
  //         href: "#",
  //       },
  //     ],
  //   },
  //   { date: "2022-02-04", events: [] },
  //   { date: "2022-02-05", events: [] },
  //   { date: "2022-02-06", events: [] },
];

type Events = {
  id: number;
  name: string;
  time: string;
  datetime: string;
  href: string;
};

type Day = {
  date: string;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
  events: Events[];
};
const selectedDay = days.find((day) => day.isSelected);

type PackageType = {
  id: number;
  title: string;
  description: string;
  days: string;
};

const mailingLists = [
  {
    id: 1,
    title: "Por Clase",
    description: "Elige de Lunes a Viarnes",
    days: "1 día",
  },
  {
    id: 2,
    title: "Bronce",
    description: "Elige de Lunes a Viarnes",
    days: "2 días por semana",
  },
  {
    id: 3,
    title: "Plata",
    description: "Elige de Lunes a Viarnes",
    days: "3 días por semana",
  },
  {
    id: 4,
    title: "Oro",
    description: "Elige de Lunes a Viarnes",
    days: "4 días por semana",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
const BookingPage: NextPage = () => {
  const { isLoading, data } = trpc.useQuery(["hello", { text: "client" }]);
  const [selectedMailingLists, setSelectedMailingLists] =
    useState<PackageType | null>(null);

  const handlePackageSelected = (value: PackageType) => {
    console.log(value, selectedMailingLists);
    if (value.id === selectedMailingLists?.id) {
      return setSelectedMailingLists(null);
    }
    return setSelectedMailingLists(value);
  };

  return (
    <>
      <Header />
      <div
        className="lg:flex lg:h-full lg:flex-col"
        style={{ backgroundColor: "white" }}
      >
        <div className="container mx-auto flex gap-4">
          <div className="w-3/5 mt-4">
            <header className="relative z-20 flex items-center justify-between border-b border-gray-200 py-4  lg:flex-none">
              <h1 className="text-lg font-semibold text-gray-900">
                <time dateTime="2022-01">January 2022</time>
              </h1>
            </header>
            <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
              <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
                <div className="bg-white py-2">
                  M<span className="sr-only sm:not-sr-only">on</span>
                </div>
                <div className="bg-white py-2">
                  T<span className="sr-only sm:not-sr-only">ue</span>
                </div>
                <div className="bg-white py-2">
                  W<span className="sr-only sm:not-sr-only">ed</span>
                </div>
                <div className="bg-white py-2">
                  T<span className="sr-only sm:not-sr-only">hu</span>
                </div>
                <div className="bg-white py-2">
                  F<span className="sr-only sm:not-sr-only">ri</span>
                </div>
                <div className="bg-white py-2">
                  S<span className="sr-only sm:not-sr-only">at</span>
                </div>
                <div className="bg-white py-2">
                  S<span className="sr-only sm:not-sr-only">un</span>
                </div>
              </div>
              <div className="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto">
                <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
                  {days.length &&
                    days.map((day) => (
                      <div
                        key={day.date}
                        className={classNames(
                          day.isCurrentMonth
                            ? "bg-white"
                            : "bg-gray-50 text-gray-500",
                          "relative py-2 px-3"
                        )}
                      >
                        <time
                          dateTime={day.date}
                          className={
                            day.isToday
                              ? "flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
                              : undefined
                          }
                        >
                          {day.date.split("-").pop()?.replace(/^0/, "")}
                        </time>
                        {isLoading && (
                          <ol className="mt-2">
                            <div className="animate-pulse flex space-x-4">
                              <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-700 rounded"></div>
                              </div>
                            </div>
                          </ol>
                        )}
                        {day.events.length > 0 && (
                          <ol className="mt-2">
                            {day.events.slice(0, 2).map((event) => (
                              <li key={event.id}>
                                <a href={event.href} className="group flex">
                                  <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                                    {event.name}
                                  </p>
                                  <time
                                    dateTime={event.datetime}
                                    className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                                  >
                                    {event.time}
                                  </time>
                                </a>
                              </li>
                            ))}
                            {day.events.length > 2 && (
                              <li className="text-gray-500">
                                + {day.events.length - 2} more
                              </li>
                            )}
                          </ol>
                        )}
                      </div>
                    ))}
                </div>
                <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden">
                  {days.map((day) => (
                    <button
                      key={day.date}
                      type="button"
                      className={classNames(
                        day.isCurrentMonth ? "bg-white" : "bg-gray-50",
                        day.isSelected || day.isToday ? "font-semibold" : "",
                        day.isSelected ? "text-white" : "",
                        !day.isSelected && day.isToday ? "text-indigo-600" : "",
                        !day.isSelected && day.isCurrentMonth && !day.isToday
                          ? "text-gray-900"
                          : "",
                        !day.isSelected && !day.isCurrentMonth && !day.isToday
                          ? "text-gray-500"
                          : "",
                        "flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10"
                      )}
                    >
                      <time
                        dateTime={day.date}
                        className={classNames(
                          day.isSelected
                            ? "flex h-6 w-6 items-center justify-center rounded-full"
                            : "",
                          day.isSelected && day.isToday ? "bg-indigo-600" : "",
                          day.isSelected && !day.isToday ? "bg-gray-900" : "",
                          "ml-auto"
                        )}
                      >
                        {day.date.split("-").pop()?.replace(/^0/, "")}
                      </time>
                      <span className="sr-only">
                        {day.events.length} events
                      </span>
                      {day.events.length > 0 && (
                        <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                          {day.events.map((event) => (
                            <span
                              key={event.id}
                              className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                            />
                          ))}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {selectedDay && selectedDay?.events.length > 0 && (
              <div className="py-10 px-4 sm:px-6 lg:hidden">
                <ol className="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5">
                  {selectedDay.events.map((event) => (
                    <li
                      key={event.id}
                      className="group flex p-4 pr-6 focus-within:bg-gray-50 hover:bg-gray-50"
                    >
                      <div className="flex-auto">
                        <p className="font-semibold text-gray-900">
                          {event.name}
                        </p>
                        <time
                          dateTime={event.datetime}
                          className="mt-2 flex items-center text-gray-700"
                        >
                          <ClockIcon
                            className="mr-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          {event.time}
                        </time>
                      </div>
                      <a
                        href={event.href}
                        className="ml-6 flex-none self-center rounded-md border border-gray-300 bg-white py-2 px-3 font-semibold text-gray-700 opacity-0 shadow-sm hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
                      >
                        Edit<span className="sr-only">, {event.name}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
          <div className="w-2/5 mt-20">
            <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
              <div className="px-4 py-5 sm:px-6">
                <h2 className="text-base font-medium text-gray-900">
                  Selecciona un plan
                </h2>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <RadioGroup
                  value={selectedMailingLists}
                  onChange={setSelectedMailingLists}
                  name="packages"
                >
                  <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
                    {mailingLists.map((mailingList) => (
                      <RadioGroup.Option
                        key={mailingList.id}
                        value={mailingList}
                        className={({ checked, active }) =>
                          classNames(
                            checked ? "border-transparent" : "border-gray-300",
                            active
                              ? "border-indigo-500 ring-2 ring-indigo-500"
                              : "",
                            "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
                          )
                        }
                      >
                        {({ checked, active }) => (
                          <>
                            <span className="flex-1 flex">
                              <span className="flex flex-col">
                                <RadioGroup.Label
                                  as="span"
                                  className="block text-sm font-medium text-gray-900"
                                >
                                  {mailingList.title}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="span"
                                  className="mt-1 flex items-center text-sm text-gray-500"
                                >
                                  {mailingList.description}
                                </RadioGroup.Description>
                                <RadioGroup.Description
                                  as="span"
                                  className="mt-6 text-sm font-medium text-gray-900"
                                >
                                  {mailingList.days}
                                </RadioGroup.Description>
                              </span>
                            </span>
                            <CheckCircleIcon
                              className={classNames(
                                !checked ? "invisible" : "",
                                "h-5 w-5 text-indigo-600"
                              )}
                              aria-hidden="true"
                            />
                            <span
                              className={classNames(
                                active ? "border" : "border-2",
                                checked
                                  ? "border-indigo-500"
                                  : "border-transparent",
                                "absolute -inset-px rounded-lg pointer-events-none"
                              )}
                              aria-hidden="true"
                            />
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingPage;
