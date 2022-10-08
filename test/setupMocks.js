jest.mock('../lib/dump')
jest.mock('../lib/dal')

const { getSessions } = require('../lib/dal')

getSessions.mockReturnValue([]);