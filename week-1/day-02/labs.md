# Day 2 — Lab Exercises

## Lab — Level 1: Direct exercises

1. Check whether a number is positive, negative, or zero.
2. Check whether a number is even or odd.
3. Check whether a person is old enough to drive based on an age variable.
4. Compare two numbers and print the larger one.
5. Check whether a username is equal to an expected username.
6. Check whether a password length is at least 8 characters.

## Lab — Level 2: Combine conditions

7. A medicine is available only when:

```text
quantity > 0
AND
isActive === true
```

Print whether it can be sold.

8. Apply a discount when the customer is:

```text
age < 12
OR
age >= 60
```

9. A prescription is accepted only when:

```text
hasPrescription === true
AND
medicineAvailable === true
```

10. Calculate shipping cost:

```text
order >= 500 → free
otherwise → 50 EGP
```

## Lab — Level 3: Business rules

### Pharmacy discount engine

Given:

```text
customerAge
orderTotal
hasInsurance
```

Rules:

```text
age < 12              → 10% discount
age >= 60             → 10% discount
hasInsurance          → additional 5% discount
orderTotal >= 1000    → additional 5% discount
```

Calculate the final price.

Do not create a complicated solution. Use the simplest conditions you understand.

### Challenge

Given a student's score from 0–100, print:

```text
90–100 → A
80–89  → B
70–79  → C
60–69  → D
< 60   → F
```

Also reject invalid values below 0 or above 100.

## End-of-day self-test

You should be able to explain:

- Difference between `=` and `===`.
- Difference between `&&` and `||`.
- What `%` does.
- Why conditions need boolean expressions.
- How `if / else if / else` works.
- One example of an accidental type-conversion problem.
