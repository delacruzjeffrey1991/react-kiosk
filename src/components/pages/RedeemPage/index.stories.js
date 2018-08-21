// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { RedeemPage } from 'components'

storiesOf('RedeemPage', module)
  .add('default', () => (
    <RedeemPage />
  ))
