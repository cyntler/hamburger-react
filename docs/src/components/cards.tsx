import { Cross } from '../../../src'
import { Fade } from '../../../src'
import { Pivot } from '../../../src'
import { Rotate } from '../../../src'
import { Slant } from '../../../src'
import { Sling } from '../../../src'
import { Spin } from '../../../src'
import { Spiral } from '../../../src'
import { Squash } from '../../../src'
import { Squeeze } from '../../../src'
import { Turn } from '../../../src'
import { Twirl } from '../../../src'
import Hamburger from '../../../src'
import Card from './card'
import NewCard from './new-card'
import React from 'react'

export default () => (
  <>
    <div className="w-full">
      <Card title="Tilt">
        <Hamburger size={36} direction="right" />
        <div>
          import
          <span className="text-white"> Hamburger </span>
          from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Hamburger size={36} />
      </Card>

      <Card title="Fade">
        <Fade size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Fade </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Fade size={36} />
      </Card>

      <Card title="Cross">
        <Cross size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Cross </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Cross size={36} />
      </Card>

      <Card title="Twirl">
        <Twirl size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Twirl </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Twirl size={36} />
      </Card>

      <Card title="Turn">
        <Turn size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Turn </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Turn size={36} />
      </Card>

      <Card title="Slant">
        <Slant size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Slant </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Slant size={36} />
      </Card>

      <Card title="Pivot">
        <Pivot size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Pivot </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Pivot size={36} />
      </Card>

      <Card title="Spiral">
        <Spiral size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Spiral </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Spiral size={36} />
      </Card>

      <Card title="Sling">
        <Sling size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Sling </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Sling size={36} />
      </Card>

      <Card title="Spin">
        <Spin size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Spin </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Spin size={36} />
      </Card>

      <Card title="Rotate">
        <Rotate size={36} direction="right" />
        <div>
          import {'{'}
          <span className="text-white"> Rotate </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
        <Rotate size={36} />
      </Card>

      <NewCard title="Squash">
        <Squash size={36} />
        <div>
          import {'{'}
          <span className="text-white"> Squash </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
      </NewCard>

      <NewCard title="Squeeze" last>
        <Squeeze size={36} />
        <div>
          import {'{'}
          <span className="text-white"> Squeeze </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
      </NewCard>
    </div>
  </>
)
