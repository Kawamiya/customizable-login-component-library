import { mount  } from '@vue/test-utils'
import GoogleCentral from '@/views/GoogleCentral.vue'

describe('HelloWorld.vue', () => {
    it('renders test', () => {
        const wrapper = mount (GoogleCentral).find('.signinWord')

        expect( wrapper.text()).toMatch("Sign in")
    })
})
