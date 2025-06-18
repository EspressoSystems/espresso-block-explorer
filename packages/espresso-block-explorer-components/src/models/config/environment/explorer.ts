// Explorer configuration for Espresso environments lists the URLs for the
// Hotshot Query Service and Node Validator Service.
//
// Different environments ultimately have different URLs, so this configuration
// marks the difference between the environments, and codifies what their
// differences actually translate to as far as a the Block Explorer is
// concerned.
export interface ExplorerConfig {
  hotshotQueryServiceURL: null | string;
  nodeValidatorServiceURL: null | string;
}
