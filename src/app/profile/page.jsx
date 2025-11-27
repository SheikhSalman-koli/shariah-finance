'use client'

import LanguageSelect from '@/src/components/profile/LanguageSelect';
import PersonalDetailsForm from '@/src/components/profile/PersonalDetailsForm';
import SecuritySettings from '@/src/components/profile/SecuritySettings';
import ActionLink from '@/src/components/shared/ActionLink';
import Modal from '@/src/components/shared/Modal';
import { Facebook, HelpCircle, Star, User, Languages, ShieldCheck } from 'lucide-react';
import React, { useState } from 'react'

export default function ProfilePage() {

    const [modalType, setModalType] = useState(null);

    return (
        <div
            className='max-w-xl mx-auto px-4 pt-4'
        >

            <div className="p-6 space-y-4">

               <div className='flex flex-col gap-3'>
                 <button
                    onClick={() => setModalType('personal')}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Edit Personal Information
                </button>

                <button
                    onClick={() => setModalType('language')}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Edit Personal Information
                </button>

                <button
                    onClick={() => setModalType('security')}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Edit Personal Information
                </button>

               </div>
                {/* Reusable Modal */}
                <Modal
                    isOpen={modalType}
                    onClose={() => setModalType(null)}
                    title={
                        modalType === "personal"
                            ? "Update Personal Details"
                            : modalType === "language"
                                ? "Change App Language"
                                : modalType === "security"
                                    ? "Account Security Settings"
                                    : ""
                    }
                >
                    {modalType === "personal" && <PersonalDetailsForm />}
                    {modalType === "language" && <LanguageSelect />}
                    {modalType === "security" && <SecuritySettings />}
                </Modal>

            </div>

            <p className='font-bold text-[14px] text-gray-700'>Connect & Share</p>

            <div className="space-y-3">
                <ActionLink
                    icon={Star}
                    title="Leave us a Review"
                    href="/review-page"
                    iconColor="text-yellow-500"
                />
                <ActionLink
                    icon={HelpCircle}
                    title="Ask a Question"
                    href="/faq-support"
                    iconColor="text-indigo-500"
                />
                <ActionLink
                    icon={Facebook}
                    title="facebook.com/sharia.io"
                    href="https://www.facebook.com/sharia.io"
                    external={true}
                    iconColor="text-blue-600"
                />
            </div>
        </div>
    )
}
