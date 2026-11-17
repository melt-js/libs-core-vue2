import type { Component, VueConstructor } from 'vue'
import type { HelComponentOptions } from '@melt-js/libs-core'
export * from '@melt-js/libs-core'

export type HelErrorProps = { error: unknown; retry: () => void }
export type DefineHelComponentOptions = HelComponentOptions & {
  loadingComponent?: Component
  /** Receives error and retry props. */
  errorComponent?: Component
}
export const HelLoading: VueConstructor
export const HelError: VueConstructor
export function defineHelComponent(options: DefineHelComponentOptions): VueConstructor
