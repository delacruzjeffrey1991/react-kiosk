// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { CashDispensePage } from 'components'

storiesOf('CashDispensePage', module)
  .add('default', () => (
    <CashDispensePage />
  ))
