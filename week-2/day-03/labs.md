# Day 3 — Lab Exercises

## Lab — Level 1: Functions

1. Write a function that accepts any number of numbers and returns their sum using rest parameters.
2. Write a function that accepts any number of numbers and returns the largest value.
3. Convert one normal function into an arrow function.
4. Write an anonymous function and use it in a variable.
5. Write two functions that use the same variable name locally. Observe that they do not interfere with each other.
6. Create one global variable and one local variable. Observe where each one can be accessed.

## Lab — Level 2: Function design

7. Take one of your Week 1 solutions and split it into smaller functions.

For example, instead of one large block:

```text
read data
calculate subtotal
calculate discount
format result
print result
```

create separate functions for the responsibilities you think should be separate.

8. Write a function that accepts an array and any number of additional values, then determine how those values should be combined.

9. Create an arrow function that calculates the final price of a medicine purchase.

10. Create a function that returns another function. Do not worry about advanced closures yet; just understand the relationship between the outer and inner functions.

## Lab — Level 3: Git

From your project directory:

1. Create a Git repository.
2. Check its status.
3. Add your Week 2 files.
4. Create your first commit.
5. Change one file.
6. Check the difference with `git diff`.
7. Commit the change.
8. Inspect the history with `git log`.

You should understand the purpose of every command you run.

### Minimum commands for today

```bash
git init
git status
git add
git commit
git diff
git log
```

Do not copy a long command sequence from a tutorial and execute it blindly. You should know what state the repository is in before and after each command.

## End-of-day self-test

Without notes, explain:

- Why would a function accept rest parameters?
- Difference between a function declaration and an arrow function at a basic level.
- What is scope?
- Why can't every variable be accessed everywhere?
- What problem does Git solve?
- Difference between your local Git repository and GitHub.
- What does a commit represent?
- What does `git status` tell you?
