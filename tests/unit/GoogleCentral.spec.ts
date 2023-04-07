import { mount  } from '@vue/test-utils'
import GoogleCentral from '@/packages/Google.vue'

describe('HelloWorld.vue', () => {
    it('renders test', () => {
        const wrapper = mount (GoogleCentral).find('.signinWord')

        expect( wrapper.text()).toMatch("Sign in")
    })
})
