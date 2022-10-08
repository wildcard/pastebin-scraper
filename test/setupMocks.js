jest.mock('../dump')
jest.mock('../dal')

const { getSessions } = require('../dal')

getSessions.mockReturnValue([]);