var isValid = function(s) {
    const stack = [];
    const mapping = { ")": "(", "}": "{", "]": "[" };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== mapping[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

/