import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
	render(<App />)
	const helloWorldElem = screen.getByText(/hello world/i)
	const btn = screen.getByRole('button')
	const input = screen.getByPlaceholderText(/input value/i)
	expect(helloWorldElem).toBeInTheDocument()
	expect(btn).toBeInTheDocument()
	expect(input).toMatchSnapshot()
	
})
