'use client'

import AskQuestion from '@/src/components/profile/AskQuestion';
import LanguageSelect from '@/src/components/profile/LanguageSelect';
import LeaveReview from '@/src/components/profile/LeaveReview';
import PersonalDetailsForm from '@/src/components/profile/PersonalDetailsForm';
import SecuritySettings from '@/src/components/profile/SecuritySettings';
import CommonAction from '@/src/components/shared/CommonAction';
import ActionLink from '@/src/components/shared/FaceBookLink';
import Modal from '@/src/components/shared/Modal';
import ModalButton from '@/src/components/shared/ModalButton';
import { Facebook, HelpCircle, Star, ChevronRight, User, Languages, Lock } from 'lucide-react';
import React, { useState } from 'react'

export default function ProfilePage() {

    const [modalType, setModalType] = useState(null);

    console.log(modalType);

    return (
        <div
            className='max-w-xl mx-auto p-4'
        >

            <div className=" space-y-4">

                <ModalButton
                    icon={User}
                    title="Personal Information"
                    iconColor="text-green-500"
                    modalType="personal"
                    setModalType={setModalType}
                />

                <ModalButton
                    icon={Languages}
                    title="App Language"
                    iconColor="text-purple-500"
                    modalType="language"
                    setModalType={setModalType}
                />

                <ModalButton
                    icon={Lock}
                    title="Account Security"
                    iconColor="text-red-500"
                    modalType="security"
                    setModalType={setModalType}
                />


                <p className='font-bold text-[14px] text-gray-700 px-8 mt-9'>Connect & Share</p>

                {/* review, ask a question, faceBook link */}
                <CommonAction />


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
                    {/* {modalType === "review" && <LeaveReview />}
                    {modalType === "askQuestion" && <AskQuestion />} */}
                </Modal>

            </div>

        </div>
    )
}
