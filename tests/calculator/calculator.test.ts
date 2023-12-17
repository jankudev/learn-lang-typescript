import { describe, it, expect } from 'vitest';
import { Calculator } from '../../src/calculator/calculator.js';
import { mock, instance, when } from 'ts-mockito';

describe('Calculator', () => {
  it('should add two numbers', () => {
    const calculator = new Calculator();
    expect(calculator.add(2, 3)).toBe(5);
  });

  it('should mock Calculator', () => {
    const mockedCalculator = mock(Calculator);
    when(mockedCalculator.add(2, 3)).thenReturn(10);

    const calculatorInstance = instance(mockedCalculator);
    expect(calculatorInstance.add(2, 3)).toBe(10);
  });
});