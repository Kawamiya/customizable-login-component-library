import { mount  } from '@vue/test-utils'
import GithubCentral from '@/packages/Github.vue'

describe('HelloWorld.vue', () => {
  it('renders test', () => {
    const wrapper = mount (GithubCentral)

    // expect( wrapper.text()).toMatch("Sign in")
  })
})
