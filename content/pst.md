---
title: PST Notes
pdfFileName: pst-notes.pdf
---

## Unit 1: Topic name

All PST Notes ( Below )

## You can access every topic below..

 # Problem Solving Technique (PST), C Programming Notes

> Typed from handwritten notes. Obvious code bugs are fixed in the code blocks; see **Corrections Made** at the end.

---

## 1. Problem Solving Technique

**Writing Code vs Planning**: don't jump straight into code. Plan first.

**Planning flow**

1. Understand the problem (sum, formula, etc.)
2. Algorithm design (step-by-step)
3. Flowchart
4. Code implementation
5. Testing & debugging

**Analysis** (before coding): Understand, Decompose, Consider alternatives, Analyze efficiency.

### Flowchart symbols

| Shape | Use |
|---|---|
| Oval | Start / End |
| Parallelogram | Input / Output (Print) |
| Rectangle | Processing (e.g. Sum) |
| Diamond | Decision |

Basic flow: `Start → Input → Sum → Print → End`

### Example flowchart: larger of two numbers

```
Start → Input A, B → [A > B ?]
                      Yes → Print A → End
                      No  → Print B → End
```

### Algorithm vs Flowchart (15 marks)

| Algorithm | Flowchart |
|---|---|
| Step-by-step process written in words | Pictorial representation using symbols |
| Easier to write | Easier to visualize flow |
| Text-based | Diagram-based |

---

## 2. Problem Solving and Algorithm Development

**Agenda**: Problem & Instances, Generalization & Special Cases, Types of Computational Problems, Problem Classification, Analysis of Problem.

### Problem vs Problem Instance

| Problem | Problem Instance |
|---|---|
| General question to be answered, with input parameters | Specific case of the problem with all inputs given |
| Not tied to specific data | Concrete data to work with |
| Sorting a list of numbers (increasing/decreasing) | Sorting the list `[5, 2, 8, 1, 9]` |
| Finding a shortest path in a city | Shortest path between Delhi and Mumbai |
| Searching for an item in a list | Searching for `25` in `[10, 20, 200, 25]` |

General statement = *what to solve*. Specific case = *with actual data*.

### Generalization & Special Case

| Generalization | Special Case |
|---|---|
| Solutions that work for a broad range of inputs | Specific conditions/inputs needing unique handling |
| Sorting `[1,2,3]` → sorting any list | Empty list, already sorted list |
| More flexible code | Optimize for performance / correctness |

### Types of Computational Problems

1. **Decision problems**: answer is Yes/No (True/False). E.g. Is a number prime? Can a path be found?
2. **Search problems**: find a specific element/solution. E.g. find the largest number in an array, find a specific record.
3. **Optimization problems**: find the best possible solution. E.g. shortest path between two points, maximize profit.
4. **Construction problems**: build a specific structure/object. E.g. construct a minimum spanning tree, generate a sequence.

### Analysis of Problems: understand the challenge

1. **Input/Output specifications**: what data goes in, what result comes out, data types, ranges, formats.
2. **Constraints**: limits on inputs or resources (memory, time, size). Important for algorithm design.
3. **Example cases**: simple examples and edge cases (min/max values, empty inputs). They help clarify understanding.

### Step-by-step problem analysis

`Understand the problem → Decompose the problem → Consider alternatives → Analyze efficiency`

### Why this matters for C programming

- **Efficient code**: knowing problem types helps choose the best algorithms.
- **Bug prevention**: understanding edge cases prevents errors.
- **Scalability**: generalization leads to adaptable programs.
- **Interview skills**: demonstrates strong problem solving.

### Top-Down vs Bottom-Up approach

| Point | Top-Down | Bottom-Up |
|---|---|---|
| Starts with | Main problem | Small modules |
| Method | Problem divided into sub-problems | Small modules combined |
| Focus | Overall system design | Detailed implementation |
| Development order | Main module first | Sub-module first |
| Testing | Done after breaking into modules | Done at module level |
| Debugging | Easier to locate errors | Difficult during integration |
| Planning | More initial planning | Less planning at start |
| Reusability | Limited | High (modules can be reused) |
| Best suited for | Large & complex programs | Small programs |
| Idea | Design whole system first | Build from first |

---

## 3. Our First Program

```c
#include <stdio.h>

int main()
{
    printf("Hello, world!\n");
    return 0;
}
```

### Turbo C basics

```c
#include <stdio.h>
#include <conio.h>      // console input/output

void main()
{
    clrscr();           // erase previous output
    printf("Hello C");
    getch();            // hold output screen on main screen (get char)
}
```

- **Turbo C app**: `Ctrl + Alt + Enter` to maximize/minimize.
- **F2** = File save (give a name).

---

## 4. Structure of a C Program

1. **Documentation section**: `/* comments */`
2. **Link section**: includes header files
3. **Definition section**: `#define PI 3.14` (defines constant)
4. **Global declaration**: global variables & function prototypes
5. **main()**: execution of the program starts here
6. **User-defined functions**: functions written by the programmer

```c
/* to find area of circle */          // Documentation section
#include <stdio.h>                    // Link section
#include <conio.h>
#define PI 3.14                       // Definition
float radius, area;                   // Global variables

void main()                           // main()
{
    printf("Enter radius: ");
    scanf("%f", &radius);
    area = PI * radius * radius;
    printf("%f", area);               // %f for float
}
```

**Header file**: a file in C/C++ that contains function declarations, macros, constants. Included with `#include`. Examples: `string.h`, `conio.h`, `stdio.h`, `math.h`, `dos.h` (delay).

---

## 5. Tokens

Smallest unit / building blocks of a program.

- **Keywords**: pre-defined, built-in words. There are **32** in C.
- **Identifiers**: user-defined names (variables).
- **Literals** (constants):
  - Integer
  - Floating-point
  - Character: `'A'`, `'6'`, `'7'`
  - String: `"Hello"`, `"WHY"`. Last character is NULL (`'\0'`). A string is a group of characters.
- **Punctuators**: `#`, `@`, `&` etc.
- **Operators**: symbols that perform operations.

### Operators

| Type | Symbols |
|---|---|
| Arithmetic | `+ - * / %` |
| Relational | `== > < >= <= !=` |
| Logical | `&& \|\| !` |
| Assignment | `= += -= *= /= %=` |
| Bitwise | `& \| ^ ~ << >>` |
| Increment/Decrement | `++ --` |

**Arithmetic operators**

| Symbol | Description | Example |
|---|---|---|
| `+` | Addition | `c = a + b` (a, b are operands) |
| `-` | Subtraction | |
| `*` | Multiplication | |
| `/` | Division | |
| `%` | Modulus / remainder | |

**Relational operators**: used for comparison. `<`, `>`, `<=`, `>=`, `==` (equal), `!=` (not equal). Example: `if (a < b)`.

**Logical operators** (True = 1, False = 0)

| Symbol | Description | Example |
|---|---|---|
| `&&` | AND | `if (a > b && a != b)` |
| `\|\|` | OR | `if (a > b \|\| a < b)` |

**Assignment operators**

| Symbol | Description | Example |
|---|---|---|
| `=` | Assign a value | `a = 5` |
| `+=` | Addition with assignment | `a += b` (same as `a = a + b`) |
| `-=` | Subtraction with assignment | `a -= b` |
| `*=` | Multiplication with assignment | `a *= b` |
| `/=` | Division with assignment | `a /= b` |
| `%=` | Modulus with assignment | `a %= b` |

---

## 6. Statements in C

An instruction given to the computer to perform a specific operation. Most statements end with a semicolon `;`.

1. **Declaration**: `int a; float b; char ch;`
2. **Assignment**: `a = 10; b = 5.5;`
3. **Input/Output**: `scanf("%d", &a); printf("%d", a);`
4. **Control** (controls flow of execution)
   - Decision-making: `if`, `if-else`, `else-if` (nested), `switch`
   - Looping: `for`, `while`, `do-while`
   - Jump: `break`, `continue`, `goto`, `return`
5. **Compound (block)**: group of statements within `{ }`
6. **Expression**: statements containing expressions, e.g. `a = b + c;`, `x++;`
7. **Empty**: does nothing, only `;`

---

## 7. Data Types

A data type tells what type of data a variable can hold.

- **Variable (char)**: holds a single value. **Array**: holds multiple values.
- Each type has: definition, size, range, syntax, rules.

| Category | Types |
|---|---|
| Basic / Built-in (pre-defined) | `int`, `float`, `char`, `void` (+ `long`, `double`) |
| User-defined | Array, Pointer |
| Derived | Structure, Union |

| Type | Size (Turbo C) | Format | Range | Stores |
|---|---|---|---|---|
| `int` | 2 bytes | `%d` | -32768 to 32767 | Integer values (whole numbers) |
| `float` | 4 bytes | `%f` | about 3.4e-38 to 3.4e38 | Decimal numbers (floating point) |
| `char` | 1 byte | `%c` | -128 to 127 | Characters (ASCII value) |
| `void` | none | | | No data (void / NULL) |

`long` extends `int`. `double` extends `float`.

**Data Structure**: a way to store and organize data in memory so it can be used efficiently by a program. (Array, Pointer, Structure, Union)

---

## 8. Arrays

### Definition

1. Similar type of data elements
2. Continuous (contiguous) memory allocation
3. Stores multiple values in a single variable
4. Each element is accessed through its index, which starts from **0**

An array is a collection of elements of the same data type stored in continuous memory locations.

### Declaration & initialization

```c
// <data type> <array name>[size];
int a[5];                       // size = no. of elements
int a[5] = {1, 2, 3, 4, 5};
```

**Memory allocation** (assume start address 2000, int = 2 bytes)

| Value | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Address | 2000 | 2002 | 2004 | 2006 | 2008 |
| Index | a[0] | a[1] | a[2] | a[3] | a[4] |

### Access a single element

```c
void main()
{
    int a[5] = {1, 2, 3, 4, 5};
    printf("%d", a[1]);          // Output: 2
}
```

### Access all elements

```c
void main()
{
    int a[5] = {1, 2, 3, 4, 5}, i;
    for (i = 0; i < 5; i++)
    {
        printf("%d", a[i]);
    }
}
```

### Access with a condition

```c
void main()
{
    int a[5] = {2, 4, 8, 3, 4};
    int i;
    for (i = 0; i < 5; i++)
    {
        if (a[i] == 4)
        {
            printf("%d", a[i]);
        }
    }
}
// Output: 44
```

### Types of arrays

**1. One-dimensional (1-D)**: simplest form, stores data in a single row/list. Used for marks, prices, ages.

```c
int marks[5] = {80, 75, 90, 85, 88};    // marks[0], marks[1], ...
```

**2. Two-dimensional (2-D)**: rows and columns, a matrix or table.

```c
// <data type> <array name>[row][column];
int a[2][2] = { {1, 2}, {3, 4} };
int a[2][3] = { {1, 2, 3}, {4, 5, 6} };   // Row 1, Row 2; 3 columns each
// accessed with two indexes, e.g. matrix[1][2]
```

**3. Multi-dimensional**: more than two dimensions (3D, 4D). Used for complex data like 3D graphics, scientific computing, simulations. A multidimensional array is an array of arrays.

```c
int cube[2][2][2] = {
    { {1, 2}, {3, 4} },
    { {5, 6}, {7, 8} }
};
```

**3-D array** `int a[2][2][3]`: 2 matrices, each with 2 rows and 3 columns.

```c
int a[2][2][3] = {
    { {1, 2, 3}, {4, 5, 6} },        // 1st matrix
    { {7, 8, 9}, {10, 11, 12} }      // 2nd matrix
};
```

**4. Character array (string)**: stores a sequence of characters, ends with the null character `'\0'`.

```c
char name[10] = "Rajit";    // takes 6 spaces in memory (5 chars + '\0')
```

### Advantages of arrays

- Easy to store and access multiple values
- Efficient memory usage
- Useful for loops and algorithms
- Simplifies code management

### Limitations of arrays

- Fixed size (cannot be changed at runtime)
- Only stores elements of the same data type
- Insertion and deletion are complex compared to linked lists

---

## 9. Strings

A string is a collection of `char`. **String = Char + Array**.

- Last value of a string is NULL = `'\0'`
- Format specifier `%s`
- Strings use double quotes `" "`, chars use single quotes `' '`. Example: `"ABC"` or `"123"` is a string; `'A'` is a char.

```c
char a[50] = "Hello";
// same as
char a[50] = {'H', 'E', 'L', 'L', 'O'};
```

### Library string functions (`<string.h>`)

| Function | Purpose |
|---|---|
| `strlen()` | String length (excluding `'\0'`) |
| `strrev()` | Reverse a string. HELLO → OLLEH |
| `strcpy()` | Copy one string into another |
| `strcat()` | Join (concatenate) two strings |
| `strcmp()` | Compare two strings |
| `strncat()` | Join a specific number of characters |
| `strncmp()` | Compare only a specific number of characters |
| `strncpy()` | Copy a specific number of characters |
| `strupr()` / `strlwr()` | Uppercase / lowercase. Hello → HELLO |

`strcmp("Apple", "Banana")` returns: negative if first is smaller, `0` if equal, positive if first is greater.

```c
// strlen
void main()
{
    int len;
    char a[50];
    printf("Enter a string");
    gets(a);
    len = strlen(a);
    printf("%d", len);
}

// strrev
void main()
{
    char a[50];
    printf("Enter a string");
    gets(a);
    strrev(a);
    printf("Reverse string is %s", a);     // or puts(a)
}

// strcpy(destination, source)
#include <string.h>
void main()
{
    char a[50], b[50];
    printf("Enter a string");
    gets(a);
    strcpy(b, a);
    puts(b);
}

// strncpy(destination, source, no_of_elements)
// '\0' is NOT copied, so add it manually to make it a string.
// It takes only from the start; to take from the middle, use a loop.
void main()
{
    char a[50], b[50];
    printf("Enter a string");
    gets(a);
    strncpy(b, a, 2);
    b[2] = '\0';                 // add null
    puts(b);
}
```

**Count vowels in a string**

```c
int count = 0;
int i;
for (i = 0; a[i] != '\0'; i++)
{
    if (a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u')
    {
        count++;
    }
}
```

**To do:** practice all these programs with string library functions.

---

## 10. Input / Output Functions

| Function | Header | Notes |
|---|---|---|
| `printf()` | `stdio.h` | Displays text, numbers, results on screen. `printf("format string", variables);` |
| `scanf()` | `stdio.h` | Reads values from keyboard. `scanf("format specifier", &variable);` |
| `getch()` | `conio.h` | Reads a single char, does **not** display it, no Enter needed. Also holds the screen output |
| `getche()` | `conio.h` | Non-standard. Reads a single char and **displays** it, no Enter needed |
| `clrscr()` | `conio.h` | "Clear Screen". Removes old output (Turbo C/C++) |
| `gets()` | `stdio.h` | Reads a string including spaces until Enter. `char name[50]; gets(name);` |
| `puts()` | `stdio.h` | Prints a string and automatically adds a newline |

- `printf` → no `&` needed. `scanf` → `&` is used (address of variable).
- Use `puts()` / `gets()` for strings, `printf()` / `scanf()` for the rest.

---

## 11. Decision-Making Statements

Used to control the flow of the program based on conditions. A block runs only if a condition is true.

### 1. `if` (one condition check)

```c
if (condition)
{
    // true block
}

if (marks >= 35)
{
    printf("PASS");
}
```

### 2. `if-else` (two-way check)

```c
if (condition)
{
    // true block
}
else
{
    // false block
}

if (age >= 18)
{
    printf("eligible to vote");
}
else
{
    printf("not eligible");
}
```

### 3. `else-if` ladder (nested)

Used to check multiple conditions one after another.

```c
if (marks >= 90)
{
    printf("Grade A");
}
else if (marks >= 75)
{
    printf("Grade B");
}
else if (marks >= 50)
{
    printf("Grade C");
}
else
{
    printf("Fail");
}
```

### 4. `switch` case

Used when you have multiple fixed choices.

```c
switch (expression)
{
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // default case
}

switch (day)
{
    case 1: printf("Monday");    break;
    case 2: printf("Tuesday");   break;
    case 3: printf("Wednesday"); break;
    default: printf("Invalid day");
}
```

---

## 12. Loops

Looping = repeating a block of code multiple times until a condition is met. It avoids rewriting the same code, and makes programs short, efficient and easy to understand.

### 1. `for` loop

Easiest loop. Use when you know how many times the loop should run.

```c
for (initialization; condition; increment/decrement)
{
    // statements
}

for (int i = 1; i <= 5; i++)
{
    printf("%d ", i);
}
// Output: 1 2 3 4 5
```

### 2. `while` loop

Use when the number of repetitions is not known beforehand. It checks the condition **before** executing the body (entry-controlled).

```c
int i = 1;
while (i <= 5)
{
    printf("%d ", i);
    i++;
}
```

### 3. `do-while` loop

Executes the body **at least once**, even if the condition is false. Condition is checked after the body (exit-controlled).

```c
int i = 1;
do
{
    printf("%d ", i);
    i++;
} while (i <= 5);
```

### Jump statements

| `break` | `continue` |
|---|---|
| Terminates a loop / switch immediately and transfers control outside it | Skips the current iteration of a loop and moves to the next |
| Used in: `for`, `while`, `do-while`, `switch` | Used in: `for`, `while`, `do-while` |

```c
// break
for (i = 1; i <= 5; i++)
{
    if (i == 3)
        break;
    printf("%d", i);
}
// Output: 12

// continue
for (i = 1; i <= 5; i++)
{
    if (i == 3)
        continue;
    printf("%d", i);
}
// Output: 1245
```

**`goto`**: jumps to a labeled statement.

```c
int i = 1;
start:
    printf("%d ", i);
    i++;
    if (i <= 5)
        goto start;
// Output: 1 2 3 4 5
```

**`exit()`**: library function (`#include <stdlib.h>`), terminates the entire program.

---

## 13. Functions

A function in C is a block of code that performs a specific task. Benefits: code reuse, readability, easy debugging, reduced code length, easy testing.

```c
return_type function_name(parameters)      // parameters = arguments
{
    // body of function
}
```

### Two types

1. **Library / predefined function**: `printf()`, `scanf()`, `clrscr()`, `main()`, `getch()`, `gets()`, `puts()`
2. **User-defined function**: created by the programmer, e.g. `sum()`

### Types of user-defined functions (based on parameters & return type)

```c
// 1. Without parameter & without return type
void sum()
{
    int a = 10, b = 20, result;
    result = a + b;
    printf("%d", result);
}

// 2. With parameters but without return type
void sum(int a, int b)
{
    int result;
    result = a + b;
    printf("%d", result);
}

// 3. Without parameter but with return type (must initialize inside)
int sum()
{
    int a = 5, b = 10;
    return a + b;
}

// 4. With parameters & with return type
int sum(int a, int b)
{
    int result;
    result = a + b;
    return result;
}
```

### Function building blocks

1. **Declaration / prototype**: tells the compiler the function name, return type and parameters. Written before `main()`.
   `return_type function_name(parameter_list);`  e.g. `int add(int a, int b);`
2. **Calling** (inside `main()`): executes the function. Control transfers from `main()` to the called function.
   `sum = add(5, 3);`
3. **Definition** (outside `main()`): contains the actual code of the function.

```c
#include <stdio.h>

int add(int, int);              // Function declaration

int main()
{
    int sum;
    sum = add(5, 3);            // Function calling
    printf("Sum = %d", sum);
    return 0;
}

int add(int a, int b)           // Function definition
{
    return a + b;
}
```

### Actual vs Formal parameters

- **Actual parameters**: the parameters passed to a function (in the call, e.g. `add(m, n)`).
- **Formal parameters**: the parameters received by a function (in the definition, e.g. `int add(int a, int b)`).

### Call by Value

Values of actual parameters are **copied** to formal parameters. They are stored in different memory locations, so changes inside the function do not affect the originals.

### Call by Reference

Instead of values, we pass **addresses** (pointers). Actual and formal parameters refer to the same memory location, so changes inside the function are reflected in the originals ("changed forever").

```c
#include <stdio.h>

void value(int n)
{
    n = n + 5;
}

void reference(int *y)
{
    *y = *y + 5;
}

int main()
{
    int a = 10, b = 10;
    value(a);            // call by value
    reference(&b);       // call by reference
    printf("a = %d", a); // 10
    printf("b = %d", b); // 15
    return 0;
}
```

### Mini Calculator (using functions + switch)

```c
#include <stdio.h>
#include <conio.h>

void add();                       // Function declarations (prototypes)
void subtract(int, int);
int  mult();
int  div(int, int);

int main()
{
    int choice, m, d, a, b;
    clrscr();
    printf("Press 1 for addition\n");
    printf("Press 2 for subtraction\n");
    printf("Press 3 for multiplication\n");
    printf("Press 4 for division\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);

    switch (choice)
    {
        case 1:
            printf("Addition\n");
            add();
            break;
        case 2:
            printf("Subtraction\n");
            printf("Enter two numbers: ");
            scanf("%d %d", &a, &b);
            subtract(a, b);
            break;
        case 3:
            printf("Multiplication\n");
            m = mult();
            printf("%d", m);
            break;
        case 4:
            printf("Division\n");
            printf("Enter two numbers: ");
            scanf("%d %d", &a, &b);
            if (b != 0)
            {
                d = div(a, b);
                printf("%d", d);
            }
            else
            {
                printf("Not possible");
            }
            break;
        default:
            printf("Invalid choice");
    }
    getch();
    return 0;
}

void add()                         // Function definitions
{
    int sum, num1, num2;
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);
    sum = num1 + num2;
    printf("%d", sum);
}

void subtract(int a, int b)
{
    int sub;
    sub = a - b;
    printf("%d", sub);
}

int mult()
{
    int num1, num2, product;
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);
    product = num1 * num2;
    return product;
}

int div(int a, int b)
{
    int divide;
    divide = a / b;
    return divide;
}
```

---

## 14. Recursion

A programming technique in which a function **calls itself** to solve a problem by breaking it into smaller sub-problems. It repeats until a specific condition (**base condition**) is satisfied.

### Factorial using recursion

```c
#include <stdio.h>

int factorial(int n)
{
    if (n == 0)                       // Base condition
        return 1;
    else
        return n * factorial(n - 1);  // Recursive call
}

void main()
{
    int num;
    printf("Enter a no.: ");
    scanf("%d", &num);
    printf("Factorial of %d is: %d\n", num, factorial(num));
}
```

### Types of recursion

1. **Direct**: a function calls itself directly. `void fun() { fun(); }`
2. **Indirect**: two or more functions call each other. `fun1() → fun2() → fun1()`
3. **Tail**: the recursive call is the **last statement** in the function.

```c
int fun(int n)
{
    if (n == 0)
        return 1;
    return fun(n - 1);
}
```

| Advantages | Disadvantages |
|---|---|
| Code is shorter and simpler | Uses more memory |
| Easy to solve mathematical problems | Slower than loops |
| Useful in tree traversal, factorial, Fibonacci | Risk of stack overflow |

### Fibonacci using recursion

```c
#include <stdio.h>
#include <conio.h>

int fib(int n)
{
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else
        return fib(n - 1) + fib(n - 2);
}

int main()
{
    int n, i;
    printf("Enter the no. of terms: ");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("%d ", fib(i));
    }
    return 0;
}
```

---

## 15. Pointers

A pointer holds the **address** of a normal variable.

```c
int a = 5;
int *p = &a;            // p stores address of a (say 2000)
printf("%d", a);        // 5
printf("%d", *p);       // 5   (*p = *(&a))
```

**Advantages**

- Efficient memory management
- Allows modification of variables inside functions

### Value-of / indirection / dereference operator (`*`)

Used to **access** the value stored at the location pointed to by the pointer.

```c
int n = 5;
int *p;
p = &n;
printf("%d", *p);       // Output: 5
```

**Change the value of the object pointed by the pointer**

```c
int n = 10;
int *p = &n;            // initialization is important
*p = 4;
printf("%d", *p);       // Output: 4
```

### Segmentation fault

Usually caused by a program trying to read or write an illegal memory location. Happens when a pointer is used **without initializing** it:

```c
int *p;
*p = 1;                 // p not initialized -> segmentation fault
```

### Pointer assignment

Assigning the address of a variable (or another pointer) to a pointer variable.

```c
int i = 10;
int *p, *q;
p = &i;                 // pointer assignment
q = p;                  // pointer to pointer assignment
printf("%d %d", *p, *q);    // Output: 10 10
```

**Note:** `p = q` is **not** the same as `*q = *p`.

```c
int i = 10, j = 20;
int *p, *q;
p = &i;
q = &j;
*q = *p;                // value 20 becomes 10 (j = 10); p and q still point to i and j
```

### Pointer arithmetic

**1. Addition**: if `p` points to `a[0]`, then `p = p + 3` means `p = &a[0+3]`.
Moves by `n * sizeof(type)` bytes. Example (int = 4 bytes, base 1000): `p = p + 1` → `1000 + (1 × 4) = 1004`.

**2. Subtraction**: if `p` points to `a[i]`, then `p = p - j` means `p = &a[i-j]`.
Example: `int *p = &a[3]; p = p - 3;` → `p = &a[0]` (address `1012 - (3 × 4) = 1000`).

**3. Subtracting one pointer from another**: result is the **distance between the pointers** (in elements).
If `p` points to `a[2]` (address 1008) and `q` points to `a[6]` (address 1024): `q - p = 4`, `p - q = -4`.

### Post & pre increment/decrement with pointers

```c
// Post increment
int a[] = {5, 16, 7, 89, 45, 32};
int *p = &a[0];
printf("%d ", *(p++));      // prints 5, then p = p + 1
printf("%d", *p);           // prints 16
// Output: 5 16

// Pre increment
int *p = &a[0];
printf("%d", *(++p));       // first p = p + 1, then print
// Output: 16

// Pre and post decrement
int *p = &a[2];
printf("%d ", *(--p));      // first p = p - 1, then print -> 16
printf("%d", *(p--));       // print 16, then p = p - 1 (now points to a[0] = 5)
// Output: 16 16
```

### Array / pointer declarations

- `int a[];` → array
- `int *a;` → pointer (stores the address / index of an integer value)

---

## 16. Structure and Union (Derived Data Types)

Hold **multiple different types** of data.

### Structure

A collection of different types of data elements. The `struct` keyword is used to define a structure.

```c
struct Student
{
    int roll;
    char name[20];
    float marks;
};

// Initialization
struct Student s1 = {101, "Raj", 85.5};

// Accessing members with dot (.) operator
printf("Roll No: %d", s1.roll);
printf("Name: %s", s1.name);
printf("Marks: %.2f", s1.marks);

// Array of structures
struct Student s[2] = { {101, "Raj", 85.5}, {102, "Amitabh", 90.0} };
```

`Student` is the structure name; `s1` / `kunal` etc. are variables (objects). Access with `kunal.Roll_no`, `kunal.Name`.

```c
#include <stdio.h>

struct Student
{
    int roll;
    char name[20];
    float marks;
};

int main()
{
    int i;
    struct Student s[2] = { {101, "Raj", 85.5}, {102, "Amit", 90.0} };

    printf("Student details:\n");
    for (i = 0; i < 2; i++)
    {
        printf("Roll no: %d\nName: %s\nMarks: %.2f\n\n",
               s[i].roll, s[i].name, s[i].marks);
    }
    return 0;
}
```

### Structure vs Union

| | Structure | Union |
|---|---|---|
| Memory allocation | Sum of all data type sizes | Size of the largest (max) data type |
| Keyword | `struct` | `union` |
| Values at one time | All details are available at once | Only one value at a time (overlapping) |

---

## 17. Storage Classes in C

Define the **scope**, **lifetime** and **visibility** of variables and functions.

| Class | Details |
|---|---|
| `auto` | Default for local variables. Scope: within the block. Lifetime: during function execution |
| `register` | Stores variable in a CPU register. Faster access. Address (`&`) can't be used |
| `static` | Retains value between function calls. Lifetime: entire program. Scope: depends on location |
| `extern` | Used to access a global variable defined in another file. Lifetime: entire program |

---

## 18. Debugging

Process of identifying, analyzing and fixing errors (bugs) in a program so that it runs correctly.

**Error (bug)**: a mistake in a program that causes wrong output, a crash, or unexpected behaviour.

**Steps in debugging**: Identify the error → Analyse the error → Fix the error → Test the program (confirm output).

### Types of errors

1. **Syntax error**: wrong grammar of the language. E.g. missing `;`, wrong brackets `()`, misspelled keywords. **Detected by the compiler.**
2. **Runtime error**: occurs during program execution. E.g. division by zero, array index out of range, file not found. **Detected while running.**
3. **Logical error**: program runs but gives wrong output. E.g. wrong formula, incorrect condition (`if (a > b)` where it should be `a < b`).

**Advantages of debugging**: improves program correctness, enhances code quality, reduces system failure.

---

## 19. Programs

### Temperature conversion

- Celsius to Fahrenheit: **F = (9/5) × C + 32**
- Fahrenheit to Celsius: **C = (5/9) × (F - 32)**

```c
#include <stdio.h>
#include <conio.h>

void main()
{
    float c, f;
    clrscr();
    printf("Enter the Celsius: ");
    scanf("%f", &c);
    f = 9.0 / 5 * c + 32;       // use 9.0, not 9, to avoid integer division
    printf("%f", f);
    getch();
}
```

```c
#include <stdio.h>
#include <conio.h>

void main()
{
    float c, f;
    clrscr();
    printf("Enter the Fahrenheit temperature: ");
    scanf("%f", &f);
    c = 5.0 / 9 * (f - 32);
    printf("%f", c);
    getch();
}
```

### Sum of two numbers

```c
#include <stdio.h>
#include <conio.h>

void main()
{
    int a, b, sum;
    clrscr();
    printf("Enter first no.: ");
    scanf("%d", &a);
    printf("Enter second no.: ");
    scanf("%d", &b);
    sum = a + b;
    printf("%d", sum);
}
```

Note: in `printf` we don't use `&`; in `scanf` we do.

### Fibonacci series (loop)

Series: 0, 1, 1, 2, 3, 5, ...

```c
void main()
{
    int n, a = 0, b = 1, c, i;
    printf("No. of times: ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        printf("%d ", a);
        c = a + b;
        a = b;
        b = c;
    }
}
```

### Perfect number

A number whose sum of all proper divisors equals the number itself (e.g. 6 = 1 + 2 + 3).

### Amicable numbers

Two numbers where the sum of all proper divisors of each equals the other. Example: **220 and 284**.

```c
#include <stdio.h>
#include <conio.h>

void main()
{
    int i, num1, num2, sum1 = 0, sum2 = 0;
    clrscr();
    printf("Enter two numbers: ");
    scanf("%d %d", &num1, &num2);

    for (i = 1; i < num1; i++)
    {
        if (num1 % i == 0)
            sum1 = sum1 + i;
    }
    for (i = 1; i < num2; i++)
    {
        if (num2 % i == 0)
            sum2 = sum2 + i;
    }

    if (sum1 == num2 && sum2 == num1)
        printf("Amicable");
    else
        printf("Not amicable");
    getch();
}
```

### Armstrong number

Sum of each digit raised to the power of the number of digits equals the number. E.g. `153 = 1³ + 5³ + 3³`.

```c
#include <stdio.h>
#include <conio.h>
#include <math.h>

void main()
{
    int result = 0;
    int num, rem, original, count = 0;
    clrscr();
    printf("Enter a number: ");
    scanf("%d", &num);

    original = num;                       // support variable
    while (original != 0)                 // count the digits
    {
        original = original / 10;
        count++;
    }

    original = num;
    while (original != 0)                 // calculate
    {
        rem = original % 10;
        result = result + pow(rem, count);
        original = original / 10;
    }

    if (result == num)                    // check
        printf("Armstrong");
    else
        printf("Not Armstrong");
    getch();
}
```

### Palindrome number

Reads the same reversed. E.g. 121, 242.

```c
#include <stdio.h>
#include <conio.h>

void main()
{
    int num, rev = 0, rem, original;
    clrscr();
    printf("Enter a number: ");
    scanf("%d", &num);
    original = num;

    while (num != 0)
    {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = num / 10;
    }

    if (rev == original)
        printf("Palindrome");
    else
        printf("Not palindrome");
    getch();
}
```

### Matrix transpose (2×2)

Two loops are used for a matrix.

```c
void main()
{
    int a[2][2], t[2][2], i, j;
    clrscr();
    printf("Enter the elements of a matrix\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            printf("Enter %d %d element: ", i, j);
            scanf("%d", &a[i][j]);
        }
    }

    printf("The entered matrix is:\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
            printf("%d\t", a[i][j]);
        printf("\n");
    }

    for (i = 0; i < 2; i++)
        for (j = 0; j < 2; j++)
            t[i][j] = a[j][i];

    printf("The transpose of the given matrix is:\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
            printf("%d\t", t[i][j]);
        printf("\n");
    }
    getch();
}
```

### Matrix addition (2×2)

```c
void main()
{
    int sum[2][2], a[2][2], b[2][2], i, j;
    clrscr();

    printf("Enter the elements of 1st matrix\n");
    for (i = 0; i < 2; i++)
        for (j = 0; j < 2; j++)
        {
            printf("Enter %d %d element: ", i, j);
            scanf("%d", &a[i][j]);
        }

    printf("Enter the elements of 2nd matrix\n");
    for (i = 0; i < 2; i++)
        for (j = 0; j < 2; j++)
        {
            printf("Enter %d %d element: ", i, j);
            scanf("%d", &b[i][j]);
        }

    for (i = 0; i < 2; i++)
        for (j = 0; j < 2; j++)
            sum[i][j] = a[i][j] + b[i][j];

    printf("The sum of these two matrices is:\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
            printf("%d\t", sum[i][j]);
        printf("\n");
    }
    getch();
}
```

### Matrix multiplication (2×2)

```c
void main()
{
    int a[2][2], b[2][2], c[2][2];
    int i, j, k;
    clrscr();

    printf("Enter the elements for matrix A\n");
    for (i = 0; i < 2; i++)
        for (j = 0; j < 2; j++)
        {
            printf("Enter the %d %d element: ", i, j);
            scanf("%d", &a[i][j]);
        }

    printf("Enter the elements for matrix B\n");
    for (i = 0; i < 2; i++)
        for (j = 0; j < 2; j++)
        {
            printf("Enter the %d %d element: ", i, j);
            scanf("%d", &b[i][j]);
        }

    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            c[i][j] = 0;
            for (k = 0; k < 2; k++)
            {
                c[i][j] = c[i][j] + a[i][k] * b[k][j];
            }
        }
    }

    printf("Result Matrix:\n");
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
            printf("%d ", c[i][j]);
        printf("\n");
    }
    getch();
}
```

### Star patterns

**Pattern 1: increasing right triangle**

```
*
* *
* * *
* * * *
* * * * *
```

```c
void main()
{
    int i, j;
    clrscr();
    printf("The star pattern\n");
    for (i = 1; i <= 5; i++)
    {
        for (j = 1; j <= i; j++)
            printf("* ");
        printf("\n");
    }
    getch();
}
```

**Pattern 2: decreasing triangle**

```
* * * * *
* * * *
* * *
* *
*
```

```c
void main()
{
    int i, j;
    clrscr();
    printf("Star pattern\n");
    for (i = 5; i >= 1; i--)
    {
        for (j = 1; j <= i; j++)
            printf("* ");
        printf("\n");
    }
    getch();
}
```

**Pattern 3: right-aligned pyramid**

```
        *
      * *
    * * *
  * * * *
* * * * *
```

```c
for (i = 1; i <= 5; i++)
{
    for (j = 4; j >= i; j--)       // spaces
        printf("  ");
    for (j = 1; j <= i; j++)       // stars
        printf("* ");
    printf("\n");
}
```

---

## 20. Expected Exam Questions (from the notes)

- What is an algorithm? Understanding flowchart: representation, definition, symbols and examples (15 marks)
- Difference between Algorithm & Flowchart
- What is "Problem Solving Technique"?
- Differentiate between Struct & Union
- Short notes: `printf()`, `scanf()`, `getch()`, `clrscr()`, `gets()`, `puts()`, `getche()`
- Define Array and its types
- Decision-making statements and their types
- What is Looping and the types of loops?
- Difference between Top-Down and Bottom-Up approach
- Five common string library functions (`<string.h>`)
- Programs: Armstrong, Palindrome, Fibonacci, Amicable, matrix operations, calculator, star patterns

---

## Corrections Made (vs. the handwritten notes)

| Where | Note says | Fixed to |
|---|---|---|
| `float` range | `-34e308 to 34e307` | about `3.4e-38 to 3.4e38` |
| `while` / `do-while` | `while` = "post-execution", `do-while` = "pre-execution" | `while` checks **before** the body (entry-controlled); `do-while` checks **after** (exit-controlled, runs at least once) |
| Pointer declaration | `*p = &a;` | `int *p = &a;` (declare `p`, then `*p` gives the value) |
| Pointer subtraction | `q - p = 1016` shown next to `q - p = 4` | `q - p = 4` elements (1024 - 1008 = 16 bytes ÷ 4) |
| `scanf` | some examples missing `&` | `scanf("%d", &a[i][j]);` |
| `printf("%d", &a)` in I/O statement | `&&a` | `scanf("%d", &a);` |
| Fibonacci loop | `i <= n` with `int i` declared in `for` | declared `i` up front (works in Turbo C) |
| Amicable loops | `i < num` (as written) | kept: loops to `num - 1` give proper divisors |
| Temperature | `9/5 * C + 32` | `9.0/5 * C + 32` (integer division makes `9/5 = 1`) |
| `gets()` | used throughout | works in Turbo C; `gets()` is removed in modern C, use `fgets()` |
| `strrev`, `strupr`, `strlwr`, `clrscr`, `getch`, `getche` | | non-standard (Turbo C / `conio.h` only) |