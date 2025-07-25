interface Success<T> {
  data: T;
  err: null;
}

interface Failure<E> {
  data: null;
  err: E;
}

type Result<T, E = Error> = Success<T> | Failure<E>;

/**
 * Why am I using this tryCatch pattern?
 *
 * This utility function provides a cleaner way to handle async operations and their potential errors.
 * Benefits:
 * 1. Avoids "try-catch hell" and excessive code nesting
 * 2. Makes error handling more consistent across the codebase
 * 3. Improves code readability with a structured pattern for handling success/failure
 * 4. Returns a typed Result object that forces handling both success and error cases
 * 5. Reduces boilerplate when working with promises
 *
 * Example usage:
 * ```
 * const { data, err } = await tryCatch(someAsyncOperation());
 *
 * if (err) {
 *   // Handle error case
 *   handleError(err);
 * }
 *
 * // Safely use data, knowing it's not null in this branch
 * processData(data);
 * ```
 */
export async function tryCatch<T, E = Error>(
  promise: Promise<T>,
): Promise<Result<T, E>> {
  try {
    const data = await promise;
    return { data, err: null };
  } catch (error) {
    return { data: null, err: error as E };
  }
}
