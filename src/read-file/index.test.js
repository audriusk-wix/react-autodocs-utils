/* global describe it expect jest */

jest.mock('fs');
const fs = require('fs');

const readFile = require('./');


describe('readFile', () => {
  describe('given existing path', () => {
    it('should resolve with file content', () => {
      const content = 'hello file content';
      fs.__setFS({
        'test.file': content
      });

      return expect(readFile('test.file')).resolves.toEqual({
        source: content,
        path: 'test.file'
      });
    });
  });

  describe('given non existing path', () => {
    it('should reject with error', () =>
      expect(readFile('you-dont-exist')).rejects.toBeDefined()
    );
  });
});