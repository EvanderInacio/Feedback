import { useState } from 'react'
import { CloseButton } from '../CloseButton'

import bugImage from '../../assets/bug.svg'
import ideaImage from '../../assets/idea.svg'
import thoughtImage from '../../assets/thought.svg'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImage,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImage,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImage,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback() {
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep  
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}

      <footer className="text-base text-neutral-400">
        Feito com <span className="text-purple-500">♥</span> por{' '}
        <a
          className=" text-teal-400 hover:text-teal-500 font-semibold"
          href="https://www.evanderinacio.com/"
          target="_blank"
        >
          Evander Inácio
        </a>
      </footer>
    </div>
  )
}
