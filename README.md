# Havel-Hakimi Online

Havel-Hakimi Online is a web application that allows you to interactively perform the Havel-Hakimi algorithm, which is a method for checking the plausibility of a given sequence of numbers being degree sequences of simple undirected graphs.

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Algorithm](#algorithm)
- [Built with](#built-with)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Havel-Hakimi algorithm is a simple and efficient way to determine if a sequence of numbers can be a valid degree sequence of a graph. This web application provides a user-friendly interface to input your sequence of numbers and visualize the step-by-step process of the algorithm.

## Usage

To use Havel-Hakimi Online, follow these steps:

1. Visit the [Havel-Hakimi Online website](https://havel-hakimi-online.tonitorrescuenca.com/).
2. Enter your sequence of numbers in the input box provided. Separate each number with a comma.
3. Click on the "Run Algorithm" button to start the Havel-Hakimi algorithm.
4. The web application will display each step of the algorithm along with a graphical representation of the corresponding graph.
5. Once the algorithm finishes, you will see the final result indicating whether the sequence is valid or not.

## Algorithm

The Havel-Hakimi algorithm follows these steps:

1. Remove any zeros from the sequence.
2. Sort the sequence in non-increasing order.
3. If the sequence is empty, return true (as an empty sequence is considered a valid degree sequence).
4. If the first element of the sequence is larger than the length of the sequence, return false (as it's not possible to have a vertex with a degree greater than the number of vertices).
5. Subtract 1 from the first element of the sequence.
6. Remove the first element from the sequence.
7. Repeat the algorithm recursively with the modified sequence.

The algorithm continues these steps until it either determines that the sequence is invalid or reaches an empty sequence, in which case the sequence is considered valid.

## Built with

Havel-Hakimi Online is built using the following technologies:

- HTML
- CSS
- JavaScript

## Contributing

Contributions to Havel-Hakimi Online are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request in the [GitHub repository](https://github.com/your-username/havel-hakimi-online). Your contributions can help make this project better for everyone.

## License

This project is licensed under the MIT License. You can find more information in the [LICENSE](https://github.com/your-username/havel-hakimi-online/blob/main/LICENSE) file.
