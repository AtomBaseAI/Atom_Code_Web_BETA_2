/**
 * Atom Code course catalog — the single, fully static source of truth.
 *
 * NO DATABASE: this file is compiled into the app bundle, so every page that
 * reads it (course catalog, course detail pages, sitemap) can be statically
 * generated at build time.
 *
 * Data transcribed from the official Atom Code curriculum PDFs
 * (5 groups · 13 courses · 255 modules).
 * To update the catalog, edit this file — all pages pick up changes on the
 * next build/dev reload.
 */

export const CATALOG_UPDATED = "2026-10-27";

export interface CourseModuleData {
  /** Zero-based module order within the course. */
  order: number;
  title: string;
  /** Guided practical exercise, if the module has one. */
  practical: string | null;
}

export interface CourseData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  /**
   * Total hands-on training hours for the whole course (not days).
   * Foundations run 40–50 hrs; full stack, AI/ML and testing run 80–100 hrs;
   * cloud tracks are sized per their certification scope. The total is split
   * across modules by weight — see allocateModuleHours in lib/courses.ts.
   */
  hours: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  projects: string;
  tools: string[];
  modules: CourseModuleData[];
}

export interface CourseGroupData {
  name: string;
  slug: string;
  tagline: string;
  /** Hex accent color used across the UI for this group. */
  accent: string;
  courses: CourseData[];
}

export const COURSE_GROUPS: CourseGroupData[] = [
  {
    "name": "Foundations",
    "slug": "foundations",
    "tagline": "Programming and problem-solving fundamentals — delivered on the Atom Code learning portal with an AI-integrated practice IDE.",
    "accent": "#7600FF",
    "courses": [
      {
        "hours": 45,
        "slug": "c-programming",
        "title": "C Programming",
        "subtitle": "Systems programming foundations",
        "description": "Master C from first principles — syntax, operators, arrays, strings, pointers, structures, dynamic memory and file handling — with structured practice on the Atom Code portal.",
        "level": "Beginner",
        "projects": "2 projects (1 common + 1 group)",
        "tools": [
          "GCC",
          "VS Code",
          "GDB",
          "Make"
        ],
        "modules": [
          {
            "order": 0,
            "title": "Introduction to C Programming",
            "practical": "History, features and applications of C, role of C in system programming, compiling and running C programs."
          },
          {
            "order": 1,
            "title": "Basic Syntax and Structure",
            "practical": "Main function, header files, printf/scanf, comments and code formatting guidelines."
          },
          {
            "order": 2,
            "title": "Data Types, Variables, and Constants",
            "practical": "int, float, char, bool, constants, variables, scope and lifetime of variables."
          },
          {
            "order": 3,
            "title": "Operators",
            "practical": "Arithmetic, relational, logical, bitwise, assignment, increment/decrement, ternary, sizeof, pointer and special operators, precedence and associativity."
          },
          {
            "order": 4,
            "title": "Control Flow (if-else, switch)",
            "practical": "if-else statements, switch-case, continue, break and nested control structures."
          },
          {
            "order": 5,
            "title": "Looping Statements",
            "practical": "for, while and do-while loops with nested control structures."
          },
          {
            "order": 6,
            "title": "Functions and Modular Programming",
            "practical": "Function declaration and definition, passing parameters, modular program design."
          },
          {
            "order": 7,
            "title": "Recursion and Inline Functions",
            "practical": "Implement recursion and inline functions with classic patterns."
          },
          {
            "order": 8,
            "title": "1D Arrays",
            "practical": "Declare and define arrays, handling arrays and traversal."
          },
          {
            "order": 9,
            "title": "2D Arrays",
            "practical": "Declare and define 2D arrays, matrix manipulation."
          },
          {
            "order": 10,
            "title": "Strings",
            "practical": "String functions and string manipulation."
          },
          {
            "order": 11,
            "title": "Array Pattern",
            "practical": "Pattern manipulation using arrays."
          },
          {
            "order": 12,
            "title": "String Manipulation",
            "practical": "Pattern manipulation using strings."
          },
          {
            "order": 13,
            "title": "Pointers and Memory Management",
            "practical": "Pointer basics, pointer arithmetic, arrays with pointers, null pointers."
          },
          {
            "order": 14,
            "title": "Structures and Unions",
            "practical": "Defining structures and unions, nested structures, passing structures to functions."
          },
          {
            "order": 15,
            "title": "Preprocessor Directives",
            "practical": "Macros, #define, #include, conditional compilation (#ifdef, #ifndef)."
          },
          {
            "order": 16,
            "title": "Dynamic Memory Allocation",
            "practical": "malloc, calloc, realloc, free, memory leaks, handling large data structures."
          },
          {
            "order": 17,
            "title": "Bitwise Operations",
            "practical": "Bit manipulation, bitwise AND/OR/XOR and shifting operations."
          },
          {
            "order": 18,
            "title": "Command-Line Arguments",
            "practical": "Using argc and argv, parsing command-line arguments, real-world use cases."
          },
          {
            "order": 19,
            "title": "Error Handling",
            "practical": "Understanding errors, handling standard I/O errors, exit codes and debugging."
          },
          {
            "order": 20,
            "title": "Advanced Topics (Enumerations, Typedef)",
            "practical": "Enums and typedefs, best practices for large-scale programs."
          },
          {
            "order": 21,
            "title": "File Handling in C",
            "practical": "Reading from and writing to files, modes (r, w, a), error handling in file operations."
          }
        ]
      },
      {
        "hours": 50,
        "slug": "data-structures-and-algorithms",
        "title": "Data Structures and Algorithms",
        "subtitle": "Interview-ready DSA mastery",
        "description": "Build unshakeable problem-solving skills — complexity analysis, linked lists, stacks, queues, recursion, hashing, trees, heaps and graphs — tuned for placement interviews.",
        "level": "Intermediate",
        "projects": "2 projects (1 common + 1 group)",
        "tools": [
          "C++",
          "Java",
          "Python",
          "LeetCode-style practice"
        ],
        "modules": [
          {
            "order": 0,
            "title": "Introduction to DSA",
            "practical": "Understanding time and space complexity, Big O notation."
          },
          {
            "order": 1,
            "title": "Mathematics for DSA",
            "practical": "GCD, prime numbers, modular arithmetic, bitwise operations."
          },
          {
            "order": 2,
            "title": "Sorting Algorithms",
            "practical": "Implementing bubble sort, selection sort, insertion sort, merge sort, quick sort."
          },
          {
            "order": 3,
            "title": "Arrays and Strings",
            "practical": "Understanding 1D & 2D arrays, string manipulation techniques."
          },
          {
            "order": 4,
            "title": "Singly Linked List",
            "practical": "Implementing singly linked list and its operations."
          },
          {
            "order": 5,
            "title": "Doubly Linked List",
            "practical": "Implementing doubly linked list and its operations."
          },
          {
            "order": 6,
            "title": "Circular Linked List",
            "practical": "Implementing circular linked list and its operations."
          },
          {
            "order": 7,
            "title": "Stacks 1",
            "practical": "Implementation of stacks, applications in real scenarios."
          },
          {
            "order": 8,
            "title": "Stacks 2",
            "practical": "Advanced stack problems and applications in real scenarios."
          },
          {
            "order": 9,
            "title": "Queues 1",
            "practical": "Implementation of queues, applications in real scenarios."
          },
          {
            "order": 10,
            "title": "Queues 2",
            "practical": "Advanced queue problems and applications in real scenarios."
          },
          {
            "order": 11,
            "title": "Recursion 1",
            "practical": "Revisiting basic recursion."
          },
          {
            "order": 12,
            "title": "Recursion 2",
            "practical": "Implementing permutations."
          },
          {
            "order": 13,
            "title": "Hashing",
            "practical": "Hash tables, hash functions, collision handling, problems using hashing."
          },
          {
            "order": 14,
            "title": "Binary Trees",
            "practical": "Tree traversals, binary tree operations, depth-first and breadth-first traversal."
          },
          {
            "order": 15,
            "title": "Binary Search Tree (BST)",
            "practical": "BST properties, insertion, deletion, searching in BST, balanced trees."
          },
          {
            "order": 16,
            "title": "Ordering",
            "practical": "Compare inorder, postorder, preorder in tree traversal."
          },
          {
            "order": 17,
            "title": "Heap and Priority Queue",
            "practical": "Overview of max-heap, min-heap, heap sort, priority queue operations."
          },
          {
            "order": 18,
            "title": "Graphs 1",
            "practical": "Understanding graph representations (adjacency matrix, list)."
          },
          {
            "order": 19,
            "title": "Graphs 2",
            "practical": "Compare BFS and DFS in graphs."
          }
        ]
      },
      {
        "hours": 45,
        "slug": "oops-using-cpp",
        "title": "OOPS using C++",
        "subtitle": "Object-oriented design in C++",
        "description": "Learn object-oriented programming the right way — classes, constructors, inheritance, polymorphism, templates, STL, exception handling and multithreading in modern C++.",
        "level": "Beginner",
        "projects": "2 projects (1 common + 1 group)",
        "tools": [
          "C++17",
          "GCC",
          "VS Code",
          "STL"
        ],
        "modules": [
          {
            "order": 0,
            "title": "Introduction to C++",
            "practical": "History, features and applications of C++, differences between C and C++, structure of C++, compiling and running C++ programs."
          },
          {
            "order": 1,
            "title": "Basic Syntax and Data Types",
            "practical": "Variables, constants, data types (int, float, char), input/output (cin/cout), comments."
          },
          {
            "order": 2,
            "title": "Operators",
            "practical": "Arithmetic, relational, logical, bitwise, assignment, increment/decrement, ternary, sizeof, type casting, special operators, operator overloading, precedence and associativity."
          },
          {
            "order": 3,
            "title": "Control Statements",
            "practical": "Conditional statements (if-else, switch), continue, break."
          },
          {
            "order": 4,
            "title": "Looping Statements",
            "practical": "Implementing for, while and do-while loops."
          },
          {
            "order": 5,
            "title": "Functions and Modular Programming",
            "practical": "Function declaration/definition, parameter passing, call by value/reference/address, return values from functions."
          },
          {
            "order": 6,
            "title": "Recursion",
            "practical": "Understanding and implementing recursion, inline functions."
          },
          {
            "order": 7,
            "title": "1D Arrays",
            "practical": "Declare and define arrays, handling arrays and traversal."
          },
          {
            "order": 8,
            "title": "2D Arrays",
            "practical": "Declare and define 2D arrays, matrix manipulation, patterns using arrays."
          },
          {
            "order": 9,
            "title": "Strings",
            "practical": "Handling string functions and string manipulation."
          },
          {
            "order": 10,
            "title": "Pattern Manipulation",
            "practical": "Pattern manipulation using arrays and strings."
          },
          {
            "order": 11,
            "title": "Pointers and Dynamic Memory",
            "practical": "Pointer basics, pointer arithmetic, dynamic memory (new/delete), null pointers."
          },
          {
            "order": 12,
            "title": "Introduction to Object-Oriented Programming (OOP)",
            "practical": "Classes/objects, access modifiers (public/private), member functions, class design."
          },
          {
            "order": 13,
            "title": "Constructors and Destructors",
            "practical": "Default, parameterized and copy constructors, destructor use and purpose."
          },
          {
            "order": 14,
            "title": "Inheritance",
            "practical": "Types of inheritance (single, multiple, hierarchical), virtual base classes."
          },
          {
            "order": 15,
            "title": "Polymorphism",
            "practical": "Compile-time and run-time polymorphism, virtual functions, function overriding."
          },
          {
            "order": 16,
            "title": "Templates and STL",
            "practical": "Introduction to STL, using vectors, sets, maps, function/class templates."
          },
          {
            "order": 17,
            "title": "Exception Handling and Multithreading",
            "practical": "Try-catch blocks, throwing exceptions, custom exceptions, creating threads in C++11, thread synchronization."
          },
          {
            "order": 18,
            "title": "Advanced OOP (Abstract Classes, Virtual Functions)",
            "practical": "Abstract classes, virtual destructors, pure virtual functions, interfaces."
          },
          {
            "order": 19,
            "title": "Operator Overloading",
            "practical": "Overloading operators (+, -, *, <<, >>), rules for operator overloading."
          },
          {
            "order": 20,
            "title": "File Handling",
            "practical": "Reading from and writing to files, modes (r, w, a), error handling in file operations."
          }
        ]
      },
      {
        "hours": 45,
        "slug": "oops-using-java",
        "title": "OOPS using JAVA",
        "subtitle": "Object-oriented design in Java",
        "description": "Think in objects — encapsulation, inheritance, polymorphism, collections, multithreading, generics and lambda expressions, taught with hands-on Java practice.",
        "level": "Beginner",
        "projects": "2 projects (1 common + 1 group)",
        "tools": [
          "Java 17",
          "IntelliJ IDEA",
          "JDK",
          "Maven"
        ],
        "modules": [
          {
            "order": 0,
            "title": "Introduction to Java",
            "practical": "History, features and uses of Java, JVM, JDK and JRE, running Java programs."
          },
          {
            "order": 1,
            "title": "Data Types and Variables",
            "practical": "Compiler features, main method, class structure, packages, data types, variables."
          },
          {
            "order": 2,
            "title": "Operators",
            "practical": "Arithmetic, relational, logical, bitwise, assignment, increment/decrement, ternary, instanceof, type casting, special operators, precedence and associativity."
          },
          {
            "order": 3,
            "title": "Control Statements",
            "practical": "Overview of conditional statements (if-else, switch), continue, break."
          },
          {
            "order": 4,
            "title": "Looping Statements",
            "practical": "Implementing for, while, do-while and enhanced for loops."
          },
          {
            "order": 5,
            "title": "Functions and Modular Programming",
            "practical": "Function declaration/definition, parameter passing, call by value/reference/address, return values from functions."
          },
          {
            "order": 6,
            "title": "Recursion",
            "practical": "Handling recursion programs."
          },
          {
            "order": 7,
            "title": "1D Arrays",
            "practical": "Declare and define arrays, handling arrays and traversal."
          },
          {
            "order": 8,
            "title": "2D Arrays",
            "practical": "Declare and define 2D arrays, matrix manipulation, patterns using arrays."
          },
          {
            "order": 9,
            "title": "Strings",
            "practical": "Built-in String class methods and StringBuilder."
          },
          {
            "order": 10,
            "title": "Introduction to Object-Oriented Programming (OOP)",
            "practical": "Overview of core OOP concepts: encapsulation, abstraction, inheritance and polymorphism."
          },
          {
            "order": 11,
            "title": "Classes and Objects",
            "practical": "Creating classes, access modifiers (public/private), object instantiation."
          },
          {
            "order": 12,
            "title": "Constructors and Overloading",
            "practical": "Discovering types of constructors, constructor overloading, this keyword."
          },
          {
            "order": 13,
            "title": "Inheritance and Interfaces",
            "practical": "Analysing types of inheritance, abstract classes, interfaces, multiple inheritance using interfaces, super keyword."
          },
          {
            "order": 14,
            "title": "Polymorphism (Compile-time and Runtime)",
            "practical": "Function overloading, method overriding, virtual methods, dynamic binding."
          },
          {
            "order": 15,
            "title": "Exception Handling",
            "practical": "Handling try-catch-finally, throw/throws, creating custom exceptions."
          },
          {
            "order": 16,
            "title": "Collections Framework (List, Set) 1",
            "practical": "Overview of collections: ArrayList, HashSet, iterators."
          },
          {
            "order": 17,
            "title": "Collections Framework (Queue, Map) 2",
            "practical": "Overview of collections: PriorityQueue, HashMap."
          },
          {
            "order": 18,
            "title": "Multithreading and Concurrency",
            "practical": "Creating threads, synchronization."
          },
          {
            "order": 19,
            "title": "Generics and Lambda Expressions",
            "practical": "Using generics for type safety, functional interfaces."
          },
          {
            "order": 20,
            "title": "File Handling in Java",
            "practical": "Reading from and writing to files, serialization and deserialization."
          }
        ]
      },
      {
        "hours": 40,
        "slug": "python-programming",
        "title": "PYTHON Programming",
        "subtitle": "Modern Python from zero",
        "description": "From syntax to OOP and beyond — control flow, data structures, comprehensions, decorators, generators, regex and concurrency, all through hands-on Python practice.",
        "level": "Beginner",
        "projects": "2 projects (1 common + 1 group)",
        "tools": [
          "Python 3",
          "PyCharm",
          "Jupyter",
          "pip"
        ],
        "modules": [
          {
            "order": 0,
            "title": "Introduction to Python",
            "practical": "History and use cases of Python, versions, Python 2 vs Python 3."
          },
          {
            "order": 1,
            "title": "Python Syntax, Basic Structure, Variables, Data Types",
            "practical": "Writing and running Python scripts, indentation rules, comments, int/float/str/bool, type casting."
          },
          {
            "order": 2,
            "title": "Operators",
            "practical": "Arithmetic, relational, logical, bitwise, assignment, membership (in, not in), identity (is, is not), ternary, special operators, precedence and associativity."
          },
          {
            "order": 3,
            "title": "Control Flow (if-else)",
            "practical": "Interpreting if-else statements, nested control structures."
          },
          {
            "order": 4,
            "title": "Loops",
            "practical": "Understanding for and while loops."
          },
          {
            "order": 5,
            "title": "Functions and Lambda Expressions",
            "practical": "Defining functions, default/keyword arguments, anonymous functions (lambda)."
          },
          {
            "order": 6,
            "title": "Lists and Tuples",
            "practical": "Creating and manipulating lists, list methods, tuples and immutability."
          },
          {
            "order": 7,
            "title": "Dictionaries and Sets",
            "practical": "Creating dictionaries, working with key-value pairs, set operations."
          },
          {
            "order": 8,
            "title": "String Manipulation",
            "practical": "String formatting (f-strings, format), string methods and slicing."
          },
          {
            "order": 9,
            "title": "Error Handling and Exceptions",
            "practical": "Implementing try-except blocks, finally clause, raising exceptions, custom exceptions."
          },
          {
            "order": 10,
            "title": "Modules and Packages",
            "practical": "Creating and importing modules, understanding __name__ == '__main__'."
          },
          {
            "order": 11,
            "title": "Comprehensions (List, Set, Dictionary)",
            "practical": "Implementing list, set and dictionary comprehensions."
          },
          {
            "order": 12,
            "title": "Object-Oriented Programming (OOP)",
            "practical": "Understanding classes, objects, constructors, encapsulation, access modifiers."
          },
          {
            "order": 13,
            "title": "Inheritance",
            "practical": "Implementing inheritance types."
          },
          {
            "order": 14,
            "title": "Polymorphism",
            "practical": "Implementing method overriding, using the super() function."
          },
          {
            "order": 15,
            "title": "Decorators and Generators",
            "practical": "Creating and using decorators, understanding and implementing generators."
          },
          {
            "order": 16,
            "title": "Working with Dates and Times",
            "practical": "Working with the datetime module, formatting dates and times."
          },
          {
            "order": 17,
            "title": "Regular Expressions",
            "practical": "Using the re module for pattern matching, extracting data with regex."
          },
          {
            "order": 18,
            "title": "Multithreading and Concurrency",
            "practical": "Creating threads, synchronizing threads, using async/await."
          },
          {
            "order": 19,
            "title": "File Handling",
            "practical": "Reading/writing files, handling file modes and errors."
          }
        ]
      }
    ]
  },
  {
    "name": "Full Stack",
    "slug": "full-stack",
    "tagline": "Become an industry-ready web developer — build and deploy complete applications with React, Angular, Spring Boot and Node.js.",
    "accent": "#C026D3",
    "courses": [
      {
        "hours": 90,
        "slug": "mern-stack",
        "title": "MERN Stack",
        "subtitle": "MongoDB · Express · React · Node",
        "description": "Build complete web applications end-to-end with the MERN stack — React frontends, Express APIs, MongoDB persistence, JWT auth, testing and cloud deployment.",
        "level": "Intermediate",
        "projects": "2 projects (1 common + 1 group)",
        "tools": [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Redux Toolkit",
          "JWT",
          "Postman",
          "Vercel / Render"
        ],
        "modules": [
          {
            "order": 0,
            "title": "Introduction & Setup",
            "practical": "Overview of full stack development. Setup Node.js, NPM and Git."
          },
          {
            "order": 1,
            "title": "HTML & CSS Basics",
            "practical": "Refresher on HTML5, CSS3 and responsive design."
          },
          {
            "order": 2,
            "title": "JavaScript (ES6+) Fundamentals",
            "practical": "Advanced JavaScript concepts like arrow functions, promises, spread operators, async/await."
          },
          {
            "order": 3,
            "title": "React.js Setup",
            "practical": "Introduction to React. Setting up a React project using Vite."
          },
          {
            "order": 4,
            "title": "React Components & State Management",
            "practical": "Understanding component architecture, props, state and events in React."
          },
          {
            "order": 5,
            "title": "React Hooks",
            "practical": "Understanding and implementing important React hooks like useState, useEffect, useRef, useContext."
          },
          {
            "order": 6,
            "title": "Tailwind CSS",
            "practical": "Implementing beautiful React components with Tailwind CSS."
          },
          {
            "order": 7,
            "title": "React Routing",
            "practical": "Implementing routing in React using React Router."
          },
          {
            "order": 8,
            "title": "Node.js & Express.js Setup",
            "practical": "Setting up a basic Node.js and Express server. Introduction to REST APIs."
          },
          {
            "order": 9,
            "title": "MongoDB & Mongoose Integration",
            "practical": "Introduction to NoSQL databases and MongoDB. Connecting Node.js to MongoDB."
          },
          {
            "order": 10,
            "title": "Building a RESTful API",
            "practical": "Creating RESTful API endpoints in Express.js."
          },
          {
            "order": 11,
            "title": "Connecting Frontend to Backend",
            "practical": "Fetching data from the backend API using Axios / Fetch API in React."
          },
          {
            "order": 12,
            "title": "User Authentication (JWT)",
            "practical": "Implementing authentication with JSON Web Tokens (JWT)."
          },
          {
            "order": 13,
            "title": "Error Handling & Validation",
            "practical": "Handling errors in Express and input validation with middleware."
          },
          {
            "order": 14,
            "title": "React Forms & State Handling",
            "practical": "Creating and handling forms in React."
          },
          {
            "order": 15,
            "title": "Frontend Global State Management",
            "practical": "Introduction to Redux Toolkit, Context API and its integration with React."
          },
          {
            "order": 16,
            "title": "Testing REST APIs",
            "practical": "Introduction to API testing using Postman / Insomnia / Thunder Client."
          },
          {
            "order": 17,
            "title": "Project Integration & Final Testing",
            "practical": "Final integration of frontend and backend, and testing all functionalities."
          },
          {
            "order": 18,
            "title": "Project Deployment",
            "practical": "Frontend deployment with Vercel / Netlify and backend deployment with Render Cloud."
          },
          {
            "order": 19,
            "title": "Project Presentation & Wrap-up",
            "practical": "Review of key concepts. Participants present their projects."
          }
        ]
      },
      {
        "hours": 90,
        "slug": "mean-stack",
        "title": "MEAN Stack",
        "subtitle": "MongoDB · Express · Angular · Node",
        "description": "Build enterprise-grade applications with the MEAN stack — Angular frontends, Express APIs, MongoDB persistence, JWT auth, RxJS/NgRx state management and deployment.",
        "level": "Intermediate",
        "projects": "2 projects (1 common + 1 group)",
        "tools": [
          "Angular",
          "Node.js",
          "Express.js",
          "MongoDB",
          "RxJS / NgRx",
          "JWT",
          "Postman",
          "Vercel / Render"
        ],
        "modules": [
          {
            "order": 0,
            "title": "Introduction & Setup",
            "practical": "Overview of full stack development. Setup Node.js, NPM and Git."
          },
          {
            "order": 1,
            "title": "HTML & CSS Basics",
            "practical": "Refresher on HTML5, CSS3 and responsive design."
          },
          {
            "order": 2,
            "title": "JavaScript (ES6+) Fundamentals",
            "practical": "Advanced JavaScript concepts like arrow functions, promises, spread operators, async/await."
          },
          {
            "order": 3,
            "title": "Angular Setup",
            "practical": "Introduction to Angular. Setting up an Angular project using Angular CLI."
          },
          {
            "order": 4,
            "title": "Angular Components & Directives",
            "practical": "Understanding Angular component architecture, directives and data binding."
          },
          {
            "order": 5,
            "title": "Angular Services & Dependency Injection",
            "practical": "Creating services, dependency injection and sharing data between components."
          },
          {
            "order": 6,
            "title": "Tailwind CSS",
            "practical": "Implementing beautiful Angular components with Tailwind CSS."
          },
          {
            "order": 7,
            "title": "Angular Routing",
            "practical": "Implementing routing in Angular using Angular Router."
          },
          {
            "order": 8,
            "title": "Node.js & Express.js Setup",
            "practical": "Setting up a basic Node.js and Express server. Introduction to REST APIs."
          },
          {
            "order": 9,
            "title": "MongoDB & Mongoose Integration",
            "practical": "Introduction to NoSQL databases and MongoDB. Connecting Node.js to MongoDB."
          },
          {
            "order": 10,
            "title": "Building a RESTful API",
            "practical": "Creating RESTful API endpoints in Express.js."
          },
          {
            "order": 11,
            "title": "Connecting Frontend to Backend",
            "practical": "Fetching data from the backend API using Angular HTTP Client."
          },
          {
            "order": 12,
            "title": "User Authentication (JWT)",
            "practical": "Implementing authentication with JSON Web Tokens (JWT)."
          },
          {
            "order": 13,
            "title": "Error Handling & Validation",
            "practical": "Handling errors in Express and input validation with middleware."
          },
          {
            "order": 14,
            "title": "Angular Forms & State Management",
            "practical": "Creating and handling forms in Angular. Using RxJS for state management."
          },
          {
            "order": 15,
            "title": "Frontend State Management",
            "practical": "Introduction to NgRx (Redux for Angular) or Angular Services for state management."
          },
          {
            "order": 16,
            "title": "Testing REST APIs",
            "practical": "Introduction to API testing using Postman / Insomnia / Thunder Client."
          },
          {
            "order": 17,
            "title": "Project Integration & Final Testing",
            "practical": "Final integration of frontend and backend, and testing all functionalities."
          },
          {
            "order": 18,
            "title": "Project Deployment",
            "practical": "Frontend deployment with Vercel / Netlify and backend deployment with Render Cloud."
          },
          {
            "order": 19,
            "title": "Project Presentation & Wrap-up",
            "practical": "Review of key concepts. Participants present their projects."
          }
        ]
      },
      {
        "hours": 90,
        "slug": "java-full-stack",
        "title": "Java Full Stack",
        "subtitle": "React · Spring Boot 3 · PostgreSQL",
        "description": "Master enterprise Java development — React frontends on Tailwind, Spring Boot 3 REST APIs, PostgreSQL with JPA, Spring Security with JWT, and full project deployment.",
        "level": "Intermediate",
        "projects": "2 projects (1 common + 1 group)",
        "tools": [
          "React",
          "Spring Boot 3",
          "PostgreSQL",
          "Spring Security + JWT",
          "Axios",
          "Postman",
          "Vercel / Render / NEON"
        ],
        "modules": [
          {
            "order": 0,
            "title": "Introduction & Setup",
            "practical": "Overview of full stack development. Setup Node.js, NPM and Git."
          },
          {
            "order": 1,
            "title": "HTML & CSS Basics",
            "practical": "Refresher on HTML5, CSS3 and responsive design."
          },
          {
            "order": 2,
            "title": "JavaScript (ES6+) Fundamentals",
            "practical": "Advanced JavaScript concepts like arrow functions, promises, spread operators, async/await."
          },
          {
            "order": 3,
            "title": "React.js Setup",
            "practical": "Introduction to React. Setting up a React project using Vite."
          },
          {
            "order": 4,
            "title": "React Components & State Management",
            "practical": "Understanding component architecture, props, state and events in React."
          },
          {
            "order": 5,
            "title": "React Hooks",
            "practical": "Understanding and implementing important React hooks like useState, useEffect, useRef, useContext."
          },
          {
            "order": 6,
            "title": "Tailwind CSS",
            "practical": "Implementing beautiful React components with Tailwind CSS."
          },
          {
            "order": 7,
            "title": "React Routing",
            "practical": "Implementing routing in React using React Router."
          },
          {
            "order": 8,
            "title": "Spring Boot Setup",
            "practical": "Overview of Spring Framework. Setting up Spring Boot 3 with Maven."
          },
          {
            "order": 9,
            "title": "MVC & Annotations",
            "practical": "Introduction to Model, Controller, Repository and annotations."
          },
          {
            "order": 10,
            "title": "Building a RESTful API",
            "practical": "Creating RESTful APIs using Spring Boot 3."
          },
          {
            "order": 11,
            "title": "Database Integration with Spring Boot",
            "practical": "Introduction to relational databases. Setting up and connecting PostgreSQL with Spring Boot using JPA."
          },
          {
            "order": 12,
            "title": "Spring Boot Security",
            "practical": "Implementing security with Spring Security and JWT for authentication."
          },
          {
            "order": 13,
            "title": "React & API Integration",
            "practical": "Fetching data from Spring Boot APIs using Axios/Fetch API in React."
          },
          {
            "order": 14,
            "title": "React Forms & State Handling",
            "practical": "Creating and handling forms in React."
          },
          {
            "order": 15,
            "title": "Frontend Global State Management",
            "practical": "Introduction to Redux Toolkit, Context API and its integration with React."
          },
          {
            "order": 16,
            "title": "Testing REST APIs",
            "practical": "Introduction to API testing using Postman / Insomnia / Thunder Client."
          },
          {
            "order": 17,
            "title": "Project Integration & Final Testing",
            "practical": "Final integration of frontend and backend, and testing all functionalities."
          },
          {
            "order": 18,
            "title": "Project Deployment",
            "practical": "Frontend deployment with Vercel / Netlify, backend deployment with Render Cloud, DB with NEON."
          },
          {
            "order": 19,
            "title": "Project Presentation & Wrap-up",
            "practical": "Review of key concepts. Participants present their projects."
          }
        ]
      }
    ]
  },
  {
    "name": "AI & ML",
    "slug": "ai-ml",
    "tagline": "From classical machine learning to generative AI — train, evaluate and deploy real models with industry toolchains.",
    "accent": "#DB2777",
    "courses": [
      {
        "hours": 90,
        "slug": "machine-learning",
        "title": "Machine Learning",
        "subtitle": "Classical ML to deep learning",
        "description": "A complete ML journey — data preprocessing, EDA, supervised and unsupervised learning, CNNs/RNNs, NLP, time series, AutoML, explainability and model deployment.",
        "level": "Intermediate",
        "projects": "2 projects (1 common + 1 group)",
        "tools": [
          "Scikit-learn",
          "TensorFlow",
          "PyTorch",
          "Pandas",
          "NumPy",
          "Flask / FastAPI",
          "Hugging Face"
        ],
        "modules": [
          {
            "order": 0,
            "title": "Introduction to Machine Learning",
            "practical": "Hands-on with basic Python libraries (NumPy, Pandas, Matplotlib, Scikit-learn)."
          },
          {
            "order": 1,
            "title": "Data Preprocessing",
            "practical": "Implement data preprocessing using Scikit-learn."
          },
          {
            "order": 2,
            "title": "Exploratory Data Analysis (EDA)",
            "practical": "EDA on a real-world dataset using Pandas, Matplotlib and Seaborn."
          },
          {
            "order": 3,
            "title": "Supervised Learning — Regression",
            "practical": "Build and evaluate regression models."
          },
          {
            "order": 4,
            "title": "Supervised Learning — Classification",
            "practical": "Implement classification models on datasets."
          },
          {
            "order": 5,
            "title": "Model Evaluation & Optimization",
            "practical": "Evaluate models and optimize hyperparameters using GridSearchCV."
          },
          {
            "order": 6,
            "title": "Unsupervised Learning",
            "practical": "Implement clustering algorithms."
          },
          {
            "order": 7,
            "title": "Feature Engineering & Feature Selection",
            "practical": "Feature selection using SelectKBest, PCA."
          },
          {
            "order": 8,
            "title": "Deep Learning Basics",
            "practical": "Implement a simple neural network using TensorFlow/Keras."
          },
          {
            "order": 9,
            "title": "Convolutional Neural Networks (CNNs)",
            "practical": "Build a CNN model using Keras."
          },
          {
            "order": 10,
            "title": "Recurrent Neural Networks (RNNs)",
            "practical": "Implement an LSTM model."
          },
          {
            "order": 11,
            "title": "Natural Language Processing (NLP)",
            "practical": "Implement text classification using NLP models."
          },
          {
            "order": 12,
            "title": "Reinforcement Learning",
            "practical": "Implement a simple RL agent using OpenAI Gym."
          },
          {
            "order": 13,
            "title": "Time Series Forecasting",
            "practical": "Forecast stock prices using time series models."
          },
          {
            "order": 14,
            "title": "Explainable AI (XAI)",
            "practical": "Apply explainability techniques to a trained model."
          },
          {
            "order": 15,
            "title": "AutoML & Model Selection",
            "practical": "Use AutoML frameworks like TPOT, H2O AutoML."
          },
          {
            "order": 16,
            "title": "Model Deployment",
            "practical": "Deploy a trained model as an API."
          },
          {
            "order": 17,
            "title": "Edge AI & On-Device ML",
            "practical": "Deploy a TensorFlow Lite model on a mobile device."
          },
          {
            "order": 18,
            "title": "AI Ethics & Bias",
            "practical": "Analyze bias in a trained ML model."
          },
          {
            "order": 19,
            "title": "Project Presentation & Wrap-up",
            "practical": "Showcase individual and group projects."
          }
        ]
      },
      {
        "hours": 100,
        "slug": "generative-ai",
        "title": "Generative AI",
        "subtitle": "LLMs, diffusion & multimodal AI",
        "description": "Build with the generative AI stack — GANs, VAEs, transformers, prompt engineering, code and image generation, chatbots, LLM apps, ethics and cloud deployment.",
        "level": "Advanced",
        "projects": "2 projects (1 common + 1 group)",
        "tools": [
          "TensorFlow",
          "PyTorch",
          "Hugging Face",
          "OpenAI API",
          "Stable Diffusion",
          "Whisper",
          "Streamlit"
        ],
        "modules": [
          {
            "order": 0,
            "title": "Introduction to Generative AI",
            "practical": "Explore pre-trained models like GPT and Stable Diffusion."
          },
          {
            "order": 1,
            "title": "Generative Adversarial Networks (GANs)",
            "practical": "Implement a simple GAN using TensorFlow/PyTorch."
          },
          {
            "order": 2,
            "title": "Variational Autoencoders (VAEs)",
            "practical": "Build a VAE for image generation."
          },
          {
            "order": 3,
            "title": "Deepfake Technology",
            "practical": "Experiment with deepfake tools."
          },
          {
            "order": 4,
            "title": "Text Generation with RNNs",
            "practical": "Implement text generation using LSTMs."
          },
          {
            "order": 5,
            "title": "Transformer Models",
            "practical": "Fine-tune a transformer model using Hugging Face."
          },
          {
            "order": 6,
            "title": "Prompt Engineering",
            "practical": "Experiment with OpenAI's GPT models."
          },
          {
            "order": 7,
            "title": "Code Generation",
            "practical": "Build an AI-powered code assistant."
          },
          {
            "order": 8,
            "title": "Speech Synthesis & Audio AI",
            "practical": "Implement TTS using Google's Tacotron or OpenAI Whisper."
          },
          {
            "order": 9,
            "title": "AI Art & Image Generation",
            "practical": "Generate images using Stable Diffusion."
          },
          {
            "order": 10,
            "title": "Music Generation",
            "practical": "Generate music using Jukebox or Magenta."
          },
          {
            "order": 11,
            "title": "Style Transfer & Image Enhancement",
            "practical": "Implement neural style transfer."
          },
          {
            "order": 12,
            "title": "AI-powered Chatbots",
            "practical": "Develop a chatbot using GPT API."
          },
          {
            "order": 13,
            "title": "Video Generation & Editing",
            "practical": "Experiment with Runway ML or DeepDream."
          },
          {
            "order": 14,
            "title": "Multimodal AI",
            "practical": "Implement a multimodal AI project."
          },
          {
            "order": 15,
            "title": "AI in Gaming",
            "practical": "Develop AI-powered game bots."
          },
          {
            "order": 16,
            "title": "Large Language Models (LLMs)",
            "practical": "Experiment with GPT-4 API for various applications."
          },
          {
            "order": 17,
            "title": "AI Regulation & Compliance",
            "practical": "Analyze AI regulations and ethical AI frameworks."
          },
          {
            "order": 18,
            "title": "Generative AI Deployment",
            "practical": "Deploy an AI model on cloud or edge."
          },
          {
            "order": 19,
            "title": "Project Presentation & Wrap-up",
            "practical": "Showcase individual and group projects."
          }
        ]
      }
    ]
  },
  {
    "name": "Cloud & DevOps",
    "slug": "cloud-aws",
    "tagline": "Cloud careers start here — from AWS fundamentals and Solution Architect prep to hands-on DevOps with GitHub Actions, Docker and AWS deployments.",
    "accent": "#D97706",
    "courses": [
      {
        "hours": 30,
        "slug": "aws-foundations-workshop",
        "title": "AWS Foundations Workshop",
        "subtitle": "Cloud fundamentals starter",
        "description": "A fast, practical introduction to AWS — core cloud concepts, global infrastructure, billing, security, compute, storage, databases and monitoring, ending with a practice certification exam.",
        "level": "Beginner",
        "projects": "Guided hands-on labs + practice exam",
        "tools": [
          "AWS Console",
          "EC2",
          "S3",
          "RDS",
          "CloudWatch"
        ],
        "modules": [
          {
            "order": 0,
            "title": "Course Introduction",
            "practical": "Overview of course objectives and structure."
          },
          {
            "order": 1,
            "title": "Cloud Concepts Overview",
            "practical": "Explore the benefits and models of cloud computing."
          },
          {
            "order": 2,
            "title": "AWS Global Infrastructure",
            "practical": "Identify AWS Regions, Availability Zones and Edge Locations."
          },
          {
            "order": 3,
            "title": "Cloud Economics and Billing",
            "practical": "Understand AWS pricing models and billing practices."
          },
          {
            "order": 4,
            "title": "AWS Cloud Security",
            "practical": "Introduction to AWS security concepts and compliance."
          },
          {
            "order": 5,
            "title": "Networking and Content Delivery",
            "practical": "Learn about VPC, subnets and content delivery networks."
          },
          {
            "order": 6,
            "title": "Compute Services",
            "practical": "Explore EC2, Lambda and other compute services."
          },
          {
            "order": 7,
            "title": "Storage Services",
            "practical": "Understand S3, EBS and other storage options."
          },
          {
            "order": 8,
            "title": "Databases",
            "practical": "Introduction to RDS, DynamoDB and database services."
          },
          {
            "order": 9,
            "title": "Monitoring and Management",
            "practical": "Learn about CloudWatch, CloudTrail and AWS Config."
          },
          {
            "order": 10,
            "title": "Review and Practice Exam",
            "practical": "Recap of course content and practice certification exam."
          }
        ]
      },
      {
        "hours": 80,
        "slug": "aws-solution-architect-associate",
        "title": "AWS Solution Architect Associate",
        "subtitle": "SAA certification curriculum",
        "description": "Full-spectrum AWS SAA preparation — IAM, storage, compute, networking, autoscaling, serverless, databases, analytics, containers, DevOps, migration and architecting — with three portfolio projects.",
        "level": "Intermediate",
        "projects": "3 projects — static website (S3), server web app (Docker/EC2/ALB CI/CD), serverless web app (Lambda/ECR CI/CD)",
        "tools": [
          "IAM",
          "EC2",
          "S3",
          "VPC",
          "Lambda",
          "RDS",
          "EKS",
          "CloudWatch",
          "Route 53"
        ],
        "modules": [
          {
            "order": 0,
            "title": "Introduction & Setup",
            "practical": "Overview of cloud and AWS. Set up an AWS account."
          },
          {
            "order": 1,
            "title": "Identity Service & Billing",
            "practical": "IAM users, policies, roles, Cognito, Active Directory, AWS Billing Conductor, AWS Budget. Practice: IAM (users, roles, policies), managing users in AWS."
          },
          {
            "order": 2,
            "title": "Storage Layer",
            "practical": "S3, EBS, EFS, FSx. Practice: creating buckets, managing objects, static web hosting."
          },
          {
            "order": 3,
            "title": "Compute Layer",
            "practical": "EC2 (Linux, Windows), Cloud Shell, AMI. Practice: static and multiple web hosting on Linux, server image using AMI."
          },
          {
            "order": 4,
            "title": "Networking Layer",
            "practical": "VPC (subnetting, routing, internet and NAT gateway). Practice: VPC subnetting, routing, internet gateway."
          },
          {
            "order": 5,
            "title": "Connecting Layer",
            "practical": "VPC peering and transit gateway. Practice: VPC peering."
          },
          {
            "order": 6,
            "title": "Auto Scaling",
            "practical": "Auto Scaling Group, health checks. Practice: creating an Auto Scaling Group and executing auto-scaling."
          },
          {
            "order": 7,
            "title": "Load Balancing",
            "practical": "Load balancer classification and types. Practice: Elastic Load Balancer and Application Load Balancer."
          },
          {
            "order": 8,
            "title": "Content Delivery Network",
            "practical": "DNS, Route 53, latency-based routing, geography-based routing. Practice: CloudFront distribution, enabling geographic location."
          },
          {
            "order": 9,
            "title": "Serverless",
            "practical": "Lambda, Elastic Beanstalk, Fargate. Practice: Lambda."
          },
          {
            "order": 10,
            "title": "Application Integration",
            "practical": "SQS, SNS, SES, Amazon MQ."
          },
          {
            "order": 11,
            "title": "Monitoring, Management and Security",
            "practical": "CloudTrail, CloudWatch, Config, EventBridge, Global Accelerator, GuardDuty, Inspector, Secrets Manager, Certificate Manager, WAF. Practice: CloudWatch."
          },
          {
            "order": 12,
            "title": "Database",
            "practical": "RDS, DocumentDB, DynamoDB, ElastiCache, Keyspaces, Neptune, QLDB."
          },
          {
            "order": 13,
            "title": "Analytics",
            "practical": "Introduction to ELT/ETL, AWS Kinesis, EMR, AWS Glue, QuickSight, Hadoop overview and processing frameworks."
          },
          {
            "order": 14,
            "title": "Containerization",
            "practical": "Introduction to Docker, ECR Elastic Container Service, Elastic Kubernetes Service. Practice: developing and managing a container in Linux."
          },
          {
            "order": 15,
            "title": "DevOps Overview",
            "practical": "DevOps overview, SDLC, Waterfall and Agile methodology. Practice: GitHub, GitHub Actions/Runners, DockerHub."
          },
          {
            "order": 16,
            "title": "Migrations",
            "practical": "Migration strategies, AWS DMS, Storage Gateway, CAF."
          },
          {
            "order": 17,
            "title": "Disaster Planning & Cloud Architecting",
            "practical": "High availability, disaster management, comparing various cloud architecting methods."
          },
          {
            "order": 18,
            "title": "AI/ML Overview",
            "practical": "Lex, Kendra, Translate, Polly, Rekognition, SageMaker. Practice: chatbot and translating a website on Linux using managed services."
          },
          {
            "order": 19,
            "title": "Project Presentation & Wrap-Up",
            "practical": "Final project integrating all AWS services learned. Present projects and review key concepts."
          }
        ]
      },
      {
        "hours": 80,
        "slug": "devops-github-actions-docker",
        "title": "DevOps with GitHub Actions & Docker",
        "subtitle": "CI/CD, containers & AWS deployment",
        "description": "Become job-ready in modern DevOps — Git and GitHub workflows, production CI/CD with GitHub Actions (jobs, matrices, artifacts, secrets and self-hosted runners), Docker images and Compose, and secure cloud deployments to AWS with OIDC federation, monitoring and rollback strategies.",
        "level": "Intermediate",
        "projects": "3 projects — containerized microservice (Docker/Compose), CI pipeline with GitHub Actions (matrix + caching), end-to-end CD to AWS (ECR/ECS with OIDC)",
        "tools": [
          "Git",
          "GitHub",
          "GitHub Actions",
          "Docker",
          "GitHub Container Registry",
          "AWS EC2",
          "AWS ECS",
          "AWS S3",
          "AWS CloudWatch",
          "Bash"
        ],
        "modules": [
          {
            "order": 0,
            "title": "DevOps Culture & Toolchain Overview",
            "practical": "DevOps lifecycle, SDLC and Agile handoffs. Set up Git, Docker and the Atom Code lab; join the course GitHub organization."
          },
          {
            "order": 1,
            "title": "Git Essentials: Commits, Branches & Merges",
            "practical": "Stage, commit, branch and merge a feature; resolve a merge conflict and push the history to GitHub."
          },
          {
            "order": 2,
            "title": "Collaborating on GitHub: PRs, Reviews & Issues",
            "practical": "Open a pull request with required reviews, link issues and branch protection, then merge with a squash commit."
          },
          {
            "order": 3,
            "title": "GitHub Actions: Your First Workflow",
            "practical": "Write a YAML workflow that lints and tests on every push; read the Actions log and fix a failing step."
          },
          {
            "order": 4,
            "title": "Triggers, Events & Scheduled Runs",
            "practical": "Add workflow_dispatch, pull_request and cron triggers; compare event payloads and filter branches and paths."
          },
          {
            "order": 5,
            "title": "Jobs, Runners & Build Matrices",
            "practical": "Split a workflow into parallel jobs with needs, then build across Node versions and OS images in a matrix."
          },
          {
            "order": 6,
            "title": "Artifacts, Caching & Concurrency",
            "practical": "Cache dependencies, pass build artifacts between jobs and cancel superseded runs with concurrency groups."
          },
          {
            "order": 7,
            "title": "Secrets, Environments & Protected Deployments",
            "practical": "Store cloud credentials as encrypted secrets and gate a production deploy behind an environment approval."
          },
          {
            "order": 8,
            "title": "Self-Hosted Runners on AWS",
            "practical": "Provision a self-hosted runner on an EC2 instance, label it and route a Docker build job to it."
          },
          {
            "order": 9,
            "title": "Docker Fundamentals: Images & Containers",
            "practical": "Run, inspect and commit containers; containerize a Node.js API and map ports and volumes."
          },
          {
            "order": 10,
            "title": "Writing Production-Grade Dockerfiles",
            "practical": "Layer caching, .dockerignore and a multi-stage build that shrinks the image from 1 GB to about 150 MB."
          },
          {
            "order": 11,
            "title": "Docker Compose: Multi-Container Apps",
            "practical": "Compose an app + PostgreSQL + Nginx stack with networks, healthchecks and one-command teardown."
          },
          {
            "order": 12,
            "title": "Container Registries: GHCR & Amazon ECR",
            "practical": "Tag, push and pull versioned images from GHCR and ECR straight from a workflow."
          },
          {
            "order": 13,
            "title": "Continuous Integration Pipelines",
            "practical": "Assemble a full CI pipeline: lint, unit tests, Docker build and a vulnerability scan on every PR."
          },
          {
            "order": 14,
            "title": "Keyless AWS Access: IAM Roles & OIDC",
            "practical": "Federate GitHub Actions to AWS via OIDC so deployments run without long-lived access keys."
          },
          {
            "order": 15,
            "title": "Continuous Delivery to AWS EC2",
            "practical": "Deploy a containerized app to EC2 over SSH in a workflow with health checks and automatic rollback."
          },
          {
            "order": 16,
            "title": "Containers on AWS: ECR & ECS Fargate",
            "practical": "Ship an image to ECS Fargate from Actions; update the service and watch the rolling deploy."
          },
          {
            "order": 17,
            "title": "Static & Serverless Deploys: S3 + CloudFront",
            "practical": "Publish a static app to S3 behind CloudFront with cache invalidation on every merge to main."
          },
          {
            "order": 18,
            "title": "Monitoring, Logs & Rollbacks",
            "practical": "Stream container logs to CloudWatch, alarm on health failures and rehearse a rollback runbook."
          },
          {
            "order": 19,
            "title": "Capstone Project: End-to-End CI/CD Pipeline to AWS",
            "practical": "Team project from PR to AWS — full CI/CD with matrix builds, a self-hosted runner stage, OIDC deploy, dashboards and badges."
          }
        ]
      }
    ]
  },
  {
    "name": "SDET",
    "slug": "sdet",
    "tagline": "Software development engineer in testing — automation frameworks, Selenium, TestNG and modern QA practice.",
    "accent": "#059669",
    "courses": [
      {
        "hours": 90,
        "slug": "software-testing",
        "title": "Software Testing",
        "subtitle": "Selenium automation & QA frameworks",
        "description": "Become a job-ready SDET — manual testing fundamentals, Selenium WebDriver, TestNG, data-driven and hybrid frameworks, reporting with Extent, logging with Log4j, Agile and web services.",
        "level": "Intermediate",
        "projects": "2 projects (1 common + 1 group)",
        "tools": [
          "Selenium",
          "TestNG",
          "Maven",
          "Extent Reports",
          "Log4j",
          "Eclipse",
          "VS Code",
          "Postman"
        ],
        "modules": [
          {
            "order": 0,
            "title": "Java Revision 1",
            "practical": "Revisiting variables and data types, control statements, arrays, strings and functions, classes and objects, inheritance and polymorphism."
          },
          {
            "order": 1,
            "title": "Java Revision 2",
            "practical": "Revisiting exception handling and collections."
          },
          {
            "order": 2,
            "title": "Automation Testing Introduction",
            "practical": "Introduction to automation testing, advantages and disadvantages, history of Selenium, why Selenium, difference between Selenium and other tools, components."
          },
          {
            "order": 3,
            "title": "Manual Testing",
            "practical": "What is software testing, why software testing, benefits, test levels (unit, integration, system, acceptance), test types, functional and non-functional testing, change-related testing."
          },
          {
            "order": 4,
            "title": "Manual Testing — Scenario & Case Design",
            "practical": "Test scenario design (functional and non-functional scenarios, business-critical scenarios), test case design (pre-requisites, steps, expected results, positive and negative cases), prioritization, RTM and DSR."
          },
          {
            "order": 5,
            "title": "Maven",
            "practical": "Installation: Maven configuration, IDE setup."
          },
          {
            "order": 6,
            "title": "Wait Commands",
            "practical": "Introduction, generating scripts, wait commands, validation commands, store commands, limitations."
          },
          {
            "order": 7,
            "title": "Web Element Handling 1",
            "practical": "Sample program, navigation, radio buttons and checkbox, drop-down list."
          },
          {
            "order": 8,
            "title": "Web Element Handling 2",
            "practical": "File upload, drag and drop, error and alert messages, multiple windows."
          },
          {
            "order": 9,
            "title": "Web Element Handling 3",
            "practical": "Iframes, web table and calendar."
          },
          {
            "order": 10,
            "title": "TestNG Framework 1",
            "practical": "Maven configuration, executing TestNG from Maven, TestNG, annotations."
          },
          {
            "order": 11,
            "title": "TestNG Framework 2",
            "practical": "Implementing listeners, running group test cases."
          },
          {
            "order": 12,
            "title": "Data-Driven Framework",
            "practical": "Property file handling, reading data from Excel."
          },
          {
            "order": 13,
            "title": "Extent Reports",
            "practical": "HTML report generation using Extent Reports, attaching screenshots in HTML reports."
          },
          {
            "order": 14,
            "title": "Log4j",
            "practical": "Configuring Log4j property files, parameters for properties files, log levels and logging using Log4j."
          },
          {
            "order": 15,
            "title": "Hybrid Framework 1",
            "practical": "Hybrid framework concepts, creating the POM with a hybrid framework folder structure, implementing the hybrid framework in POM."
          },
          {
            "order": 16,
            "title": "Hybrid Framework 2",
            "practical": "Implementing the hybrid framework in POM end-to-end."
          },
          {
            "order": 17,
            "title": "Selenium — RWD & Cross Browser Testing",
            "practical": "Running test scripts in various browsers."
          },
          {
            "order": 18,
            "title": "Agile Concepts",
            "practical": "Agile values and principles, Agile frameworks and methodologies, key roles in Agile, ceremonies/events, Agile artifacts, Agile tools and boards."
          },
          {
            "order": 19,
            "title": "Webservices Basics",
            "practical": "Understanding webservices using Postman (Thunder Client)."
          }
        ]
      }
    ]
  }
];
