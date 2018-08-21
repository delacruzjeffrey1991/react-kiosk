// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { SellPage } from 'components'

storiesOf('SellPage', module)
  .add('default', () => (
    <SellPage />
  ))
