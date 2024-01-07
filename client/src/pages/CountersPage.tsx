import React from 'react'
import './CountersPage.css'
import { IncreaseButton } from '../components/IncreaseButton'
import { Title } from '../components/Title'
import { Paragraph } from '../components/Paragraph'
import { CountersTable } from '../components/CountersTable'

export type CountersPageProps = {
  loggedInAs: string | undefined,
  counters: Record<string, number>,
  logout: ( e: React.FormEvent<HTMLAnchorElement> ) => void,
  increaseCounter: ( e: React.FormEvent<HTMLButtonElement> ) => void
}

export function CountersPage ( countersProps: CountersPageProps ) {
  return (
    <div>
      <Title text='Counters' />
      <Paragraph text={`Logged in as ${countersProps.loggedInAs}`} logout={countersProps.logout} />
      <CountersTable counters={countersProps.counters} />
      <IncreaseButton onClickAction={countersProps.increaseCounter} text='Increase!' />
    </div>
  )

}