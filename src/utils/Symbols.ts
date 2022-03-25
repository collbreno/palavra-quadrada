import ColorBlindData from "@/types/ColorBlindData";
import { InjectionKey, Ref } from "vue";

export const ColorBlindDataKey: InjectionKey<Ref<ColorBlindData>> = Symbol('ColorBlindData');