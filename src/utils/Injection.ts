import ColorBlindData from "@/types/ColorBlindData";
import { inject, InjectionKey, Ref } from "vue";

// inspired on https://logaretm.com/blog/type-safe-provide-inject/

export const ColorBlindDataKey: InjectionKey<Ref<ColorBlindData>> = Symbol('ColorBlindData');

export function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
    const resolved = inject(key, fallback);
    if (!resolved) {
      throw new Error(`Could not resolve ${key.description}`);
    }
    return resolved;
  }