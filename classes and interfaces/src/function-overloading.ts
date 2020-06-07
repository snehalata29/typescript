

type Combinables = string | number;
function addition(a: number, b: number): number;
function addition(a: string, b: string): string;
function addition(a: string, b: number): string;
function addition(a: number, b: string): string;
function addition(a: Combinables, b: Combinables) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addition('Max', ' Schwarz');
result.split(' ');