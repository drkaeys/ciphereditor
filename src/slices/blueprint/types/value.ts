
/**
 * Typed value object
 */
 export type TypedValue = {
  /**
   * Raw value
   */
  value: any

  /**
   * Value type
   */
  type: string
}

/**
 * Values the type can implicitly be referred from.
 */
export type ImplicitTypedValue =
  TypedValue | boolean | number | string | Uint8Array