import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter component', () => {

    let wrapper = shallowMount( Counter )

    beforeEach(() => {
        wrapper = shallowMount( Counter )
    })



    // test('Debe de hacer match con el snapshot', () => {

    //     expect( wrapper.html() ).toMatchSnapshot()
    // })
    
    test('H2 debe tener el valor por defecto "Counter"', () => {

        expect( wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('Counter')

    })

    test('el valor por defecto debe ser 100 en el p', () => {

        // const pTags = wrapper.findAll('p')
        const value = wrapper.find('[data-testid="counter"]').text()
        // expect( pTags.length ).toEqual(2)

        // expect(pTags[1].text()).toBe('100')

        expect( value ).toBe('100')
    })

    test('debe de incrementar y decrementar el contador', async() => {
        //Incrementar
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button');

        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');

        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        let value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101');


    })
    

    test('debe establecer el valor por defecto', () => {
        const { start } = wrapper.props()
        // const start = wrapper.props('start')
        
        const value = wrapper.find('[data-testid="counter"]').text()

        expect( value ).toBe( start.toString())


    })

    test('debe de mostrar la prop title', () => {
        
        const title = 'Hola mundo'
        const wrapper = shallowMount( Counter, {
            props: {
                title, 
                start: 5
            }
        } )

        expect(wrapper.find('h2').text()).toBe(title)
    })
    
    
    


    
})
