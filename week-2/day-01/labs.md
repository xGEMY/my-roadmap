# Day 1 — Lab Exercises

## Lab — Level 1: Direct exercises

Write each solution yourself.

1. Round `12.786` to two decimal places.
2. Convert the string `"150"` into a number.
3. Convert `"19.75"` into a decimal number.
4. Check whether a given value is an integer.
5. Generate a random integer from 1 to 10.
6. Convert a medicine name to uppercase.
7. Remove extra spaces from a patient's name.
8. Check whether a string contains the word `"expired"`.
9. Extract the first 5 characters of a string.
10. Split a full name into separate words.

## Lab — Level 2: Apply the concepts

11. A medicine price is received as a string:

```text
"125.50"
```

Convert it to a number and calculate the price for 3 units.

12. Given a patient's name with accidental spaces and inconsistent capitalization, normalize it into a cleaner form.

Example input:

```text
"   ahmed mohamed   "
```

13. Given a medicine code:

```text
"MED-2026-PAN-001"
```

Extract the meaningful parts using string operations.

14. Given a sentence, count how many words it contains.

15. Given a product price and discount percentage, calculate the final price and format it to two decimal places.

## Lab — Level 3: Data-cleaning challenge

### Normalize medicine data

You receive these values:

```text
name = "   panadol extra "
price = "54.999"
quantity = "10"
```

Produce clean values:

```text
name      → "Panadol Extra"
price     → 55.00
quantity  → 10
```

Then print a readable result.

You must write the transformation yourself.

## End-of-day self-test

Without looking at your notes, explain:

- Difference between `parseInt` and `parseFloat`.
- What `toFixed(2)` does.
- One useful `Math` method and when you would use it.
- Difference between `slice` and `substring` at a basic level.
- Why `trim()` is useful when processing user input.
- What `split()` returns.

If you cannot explain these in your own words, review before Day 2.
