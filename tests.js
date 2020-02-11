// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function () {
    it('should  be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(sayHello()).not.toBe(undefined);
    });

});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isFive()).toBe(typeof true);
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true when passed "5"', function () {
        expect(isFive("5")).toBe(true);
    });
});

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isEven()).toBe(typeof true);
    });
    it('should return true when executed with isEven(2)', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return true when passed 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed 8', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return true when passed Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed a boolean input like true or false', function () {
        expect(isEven(Boolean)).toBe(false);
    });
    it('should return false when called without and argument like isEven()', function () {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', function () {
        expect(typeof isVowel()).toBe(typeof true);
    });
    it('isVowel("a") returns true', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('isVowel("A") returns true', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('isVowel("y") returns false', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('isVowel(4) returns false', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('isVowel(true) or isVowel(false) return false', function () {
        expect(isVowel(Boolean)).toBe(false);
    });
    it('isVowel("banana") returns false', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('isEven() returns false', function () {
        expect(isEven()).toBe(false);
    });
    it('isVowel("e") returns true', function () {
        expect(isVowel("e")).toBe(true);
    });
});

describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('add(2, 3) returns 5', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('add(-3, -9) returns -12', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('add("5", 6) returns 11', function () {
        expect(add("5", 6)).toBe((11));
    });
    it('add("banana", "split") returns NaN', function () {
            expect(add("banana", "split")).toBeNaN(NaN);
        });
    it('add(2, "apple") returns NaN', function () {
        expect(add(2, "apple")).toBeNaN(NaN);
    });
    it('add() returns NaN', function () {
        expect(add()).toBeNaN(NaN);
    });

});
