import { fireEvent, render } from '@testing-library/react-native'
import Form from '../../src/Form'

describe('Component Form', () => {
    it('should call handleLogin with the username and password when button pressed', () => {
        const { getByText, getByPlaceholderText } = render(<Form />)
        const emailInput = getByPlaceholderText('Digite seu email')
        const passwordlInput = getByPlaceholderText("Digite sua senha")
        const button = getByText("Login")

        fireEvent.changeText(emailInput, 'h@t.com')
        fireEvent.changeText(passwordlInput, '123123')
        fireEvent.press(button)

        expect(getByText('Login autorizado')).toBeTruthy()

    })

    it('should check render text user', () => {
        const { getByText, getByPlaceholderText, queryByText } = render(<Form />)
        const emailInput = getByPlaceholderText('Digite seu email')
        const passwordlInput = getByPlaceholderText("Digite sua senha")
        const button = getByText("Login")

        fireEvent.changeText(emailInput, 'hjr@t.com')
        fireEvent.changeText(passwordlInput, '123123')
        fireEvent.press(button)

        const textUser = queryByText('Login autorizado')
        expect(textUser).toBeFalsy()
        expect(textUser).toBeNull()
    })
})