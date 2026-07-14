/**
 * The name and the URL of the referenced resource
 */
export interface NamedAPIResource {
  /** The name of the referenced resource */
  name: string;
  /** The URL of the referenced resource */
  url: string;
}

/** An URL for another resource in the API */
export interface APIResource {
  /** The URL of the referenced resource */
  url: string;
}

/**
 * The localized name for an API resource in a specific language
 */
export interface Name {
  /** The localized name for an API resource in a specific language */
  name: string;
  /** The language this name is in */
  language: NamedAPIResource;
}

/**
 * The localized description for an API resource in a specific language
 */
export interface Description {
  /** The localized description for an API resource in a specific language. */
  description: string;
  /** The language this name is in */
  language: NamedAPIResource;
}