import { render, screen } from '@testing-library/react'
import App from './App'

describe('react', () => {
	test('renders learn react link', () => {
		render(<App />)
		const helloWorldElem = screen.getByText(/hello world/i)
		const btn = screen.getByRole('button')
		const input = screen.getByPlaceholderText(/input value/i)
		expect(helloWorldElem).toBeInTheDocument()
		expect(btn).toBeInTheDocument()
		expect(input).toMatchSnapshot()
		
	})
	test('renders learn react link', async () => {
		render(<App/>)

		const helloWorldElem = await screen.findByText(/data/i)
		expect(helloWorldElem).toBeInTheDocument()
		expect(helloWorldElem).toHaveStyle({color:'red'})
	})
})