import { mount  } from '@vue/test-utils'
import AmazomCentral from '@/packages/Amazon.vue'

describe('HelloWorld.vue', () => {
  it('renders test', () => {
    const wrapper = mount (AmazomCentral)

    // expect( wrapper.text()).toMatch("Sign in")
  })
})
