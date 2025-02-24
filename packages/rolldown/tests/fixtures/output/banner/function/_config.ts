import type { OutputChunk as RolldownOutputChunk } from 'rolldown'
import { defineTest } from 'rolldown-tests'
import { expect } from 'vitest'

const bannerTxt = '// banner test\n'
const banner = () => bannerTxt

export default defineTest({
  config: {
    output: {
      banner,
    },
  },
  afterTest: (output) => {
    expect(
      output.output
        .filter(({ type }) => type === 'chunk')
        .every((chunk) =>
          (chunk as RolldownOutputChunk).code.startsWith(bannerTxt),
        ),
    ).toBe(true)
  },
})
