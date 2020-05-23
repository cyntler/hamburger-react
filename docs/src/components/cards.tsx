import React from 'react'
import Hamburger, {
  Cross,
  Fade,
  Pivot,
  Rotate,
  Slant,
  Sling,
  Spin,
  Spiral,
  Squash,
  Squeeze,
  Turn,
  Twirl,
} from 'hamburger-react'
import Card from './card'

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

      <Card title="Squash">
        <Squash size={36} />
        <div>
          import {'{'}
          <span className="text-white"> Squash </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
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

      <Card title="Squeeze">
        <Squeeze size={36} />
        <div>
          import {'{'}
          <span className="text-white"> Squeeze </span>
          as
          <span className="text-white"> Hamburger </span>
          {'}'} from '<span className="text-green-400">hamburger-react</span>'
        </div>
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

      <Card title="Rotate" last>
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
    </div>
  </>
)
