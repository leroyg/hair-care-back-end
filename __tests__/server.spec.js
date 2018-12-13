test('should save to localStorage', () => {
	const KEY = 'foo',
		VALUE = 'bar'
	dispatch(action.update(KEY, VALUE))
	expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE)
	expect(localStorage.__STORE__[KEY]).toBe(VALUE)
	expect(Object.keys(localStorage.__STORE__).length).toBe(1)
})
test('should not have saved to localStorage', () => {
	const KEY = 'foo',
		VALUE = 'bar'
	dispatch(action.notIdempotent(KEY, VALUE))
	expect(localStorage.setItem).not.toHaveBeenLastCalledWith(KEY, VALUE)
	expect(Object.keys(localStorage.__STORE__).length).toBe(0)
})
test('should not have saved to localStorage', () => {
	const KEY = 'foo',
		VALUE = 'bar'
	dispatch(action.notIdempotent(KEY, VALUE))
	expect(localStorage.setItem).not.toHaveBeenLastCalledWith(KEY, VALUE)
	expect(Object.keys(localStorage.__STORE__).length).toBe(0)
})

beforeEach(() => {
	// values stored in tests will also be available in other tests unless you run
	localStorage.clear()
	// or directly reset the storage
	localStorage.__STORE__ = {}
	// you could also reset all mocks, but this could impact your other mocks
	jest.resetAllMocks()
	// or individually reset a mock used
	localStorage.setItem.mockClear()
})

test('should not impact the next test', () => {
	const KEY = 'foo',
		VALUE = 'bar'
	dispatch(action.update(KEY, VALUE))
	expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE)
	expect(localStorage.__STORE__[KEY]).toBe(VALUE)
	expect(Object.keys(localStorage.__STORE__).length).toBe(1)
})

test('should not be impacted by the previous test', () => {
	const KEY = 'baz',
		VALUE = 'zab'
	dispatch(action.update(KEY, VALUE))
	expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE)
	expect(localStorage.__STORE__[KEY]).toBe(VALUE)
	expect(Object.keys(localStorage.__STORE__).length).toBe(1)
})
