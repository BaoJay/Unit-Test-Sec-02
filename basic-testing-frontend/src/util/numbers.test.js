import { expect, it } from 'vitest';
import { transformToNumber } from './numbers';

it("should return a number type if a number string is provided", () => {
    // Arrange
    const input = '1';

    // Act
    const result = transformToNumber(input);

    // Assert
    const expectedResult = 1;
    expect(result).toBe(expectedResult);
})

it("should return NaN if a string is provided", () => {
    // Arrange
    const input = 'hello';

    // Act
    const result = transformToNumber(input);

    // Assert
    expect(result).toBeNaN();
})

it('should not to throw if no argument is provided', () => {
    // Arrange
    // const input = undefined;

    // Act
    const resultFn = () => {
        transformToNumber();
    }

    // Assert
    expect(resultFn).not.toThrow();
})

it('should not undefined if undefined is provided', () => {
    // Arrange
    const input = undefined;

    // Act
    // const resultFn = () => {
    const result = transformToNumber(input);
    // }

    // Assert
    expect(result).toBeNaN();
})