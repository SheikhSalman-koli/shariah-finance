'use client'

import React, { useState } from 'react'
import ModalButton from './ModalButton'
import FaceBookLink from './FaceBookLink'
import { HelpCircle, Star } from 'lucide-react'
import Modal from './Modal'
import LeaveReview from '../profile/LeaveReview'
import AskQuestion from '../profile/AskQuestion'

export default function CommonAction() {

  const [modalType, setModalType] = useState(null);
  return (

    <div>
      <div className="space-y-3">
        <ModalButton
          icon={Star}
          title="Leave us a Review"
          iconColor="text-yellow-500"
          modalType="review"
          setModalType={setModalType}
        />

        <ModalButton
          icon={HelpCircle}
          title="Ask a Question"
          iconColor="text-indigo-500"
          modalType="askQuestion"
          setModalType={setModalType}
        />

        <FaceBookLink />
      </div>

      <Modal
        isOpen={modalType !== null}
        onClose={() => setModalType(null)}
        title={modalType === "review"
          ? "Leave us a Review"
          : modalType === "askQuestion"
            ? "Ask a Question"
            : ""
        }
      >
        {modalType === "review" && <LeaveReview />}
        {modalType === "askQuestion" && <AskQuestion />}
      </Modal>

    </div>
  )
}
