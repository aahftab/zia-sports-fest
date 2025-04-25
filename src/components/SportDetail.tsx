"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { SportEvent } from "@/data/sportsEvents";
import Link from "next/link";

interface SportDetailProps {
  sport: SportEvent;
  onClose: () => void;
}

export default function SportDetail({ sport, onClose }: SportDetailProps) {
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                <div className="relative h-72 w-full">
                  {sport.imageBg ? (
                    <Image
                      src={sport.imageBg}
                      alt={sport.name}
                      fill
                      priority
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
                      <span className="text-8xl text-white">{sport.icon}</span>
                    </div>
                  )}
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{sport.icon}</span>
                    <Dialog.Title
                      as="h3"
                      className="text-2xl font-bold leading-6 text-gray-900"
                    >
                      {sport.name}
                    </Dialog.Title>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">{sport.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-500">Time</p>
                        <p className="font-medium">{sport.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-500">Venue</p>
                        <p className="font-medium">{sport.venue}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Description</h4>
                    <p className="text-gray-700 whitespace-pre-line">{sport.longDescription}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Team Size</h4>
                      <p className="text-gray-700">{sport.teamSize}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Eligibility</h4>
                      <p className="text-gray-700">{sport.eligibility}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Rules</h4>
                    <div className="text-gray-700 whitespace-pre-line">
                      {sport.rules}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Prizes</h4>
                    <div className="text-gray-700">
                      {sport.prizes}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Coordinators</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sport.coordinators.map((coordinator, index) => (
                        <div key={index} className="bg-gray-50 p-3 rounded-lg">
                          <p className="font-medium">{coordinator.name}</p>
                          <p className="text-gray-600">{coordinator.contact}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end">
                    {sport.formLink ? (
                      <Link 
                        href={sport.formLink} 
                        target="_blank"
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 0L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        Register Now
                      </Link>
                    ) : (
                      <p className="text-gray-500 italic">Registration opening soon</p>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
} 